import crypto from "crypto";

// Minimal AWS SigV4 signer for S3-compatible object storage
// (Cloudflare R2, Backblaze B2 S3 API, Scaleway, Wasabi, IdEon…).
// Single-object PUT / GET / DELETE — enough for the storage pool.

export type S3Creds = {
  endpoint: string; // https://<accountid>.r2.cloudflarestorage.com
  region: string; // "auto" for R2
  bucket: string;
  accessKey: string;
  secretKey: string;
};

const sha256Hex = (data: crypto.BinaryLike) =>
  crypto.createHash("sha256").update(data).digest("hex");
const hmac = (key: crypto.BinaryLike | Buffer, data: string) =>
  crypto.createHmac("sha256", key).update(data).digest();
const uriEncode = (s: string, encodeSlash = true) =>
  s
    .split("")
    .map((ch) => {
      if (/[A-Za-z0-9\-._~]/.test(ch)) return ch;
      if (ch === "/") return encodeSlash ? "%2F" : "/";
      return "%" + ch.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0");
    })
    .join("");

function signRequest(
  method: "PUT" | "GET" | "DELETE",
  creds: S3Creds,
  objectKey: string,
  body?: Buffer,
  contentType?: string
): { url: string; headers: Record<string, string> } {
  const url = new URL(creds.endpoint.replace(/\/+$/, ""));
  const host = url.host;
  const path = `/${creds.bucket}/${uriEncode(objectKey, false)}`;
  const amzDate = new Date()
    .toISOString()
    .replace(/[:-]|\.\d{3}/g, "")
    .slice(0, 16)
    .concat("Z");
  const dateStamp = amzDate.slice(0, 8);
  const payloadHash = sha256Hex(body ?? Buffer.alloc(0));

  const headers: Record<string, string> = {
    host,
    "x-amz-content-sha256": payloadHash,
    "x-amz-date": amzDate,
  };
  if (contentType) headers["content-type"] = contentType;

  const signedHeaders = Object.keys(headers).sort().join(";");
  const canonicalHeaders = Object.keys(headers)
    .sort()
    .map((h) => `${h}:${headers[h].trim()}\n`)
    .join("");

  const canonicalRequest = [
    method,
    path,
    "", // query
    canonicalHeaders,
    signedHeaders,
    payloadHash,
  ].join("\n");

  const scope = `${dateStamp}/${creds.region}/s3/aws4_request`;
  const stringToSign = [
    "AWS4-HMAC-SHA256",
    amzDate,
    scope,
    sha256Hex(canonicalRequest),
  ].join("\n");

  const kDate = hmac(`AWS4${creds.secretKey}`, dateStamp);
  const kRegion = hmac(kDate, creds.region);
  const kService = hmac(kRegion, "s3");
  const kSigning = hmac(kService, "aws4_request");
  const signature = crypto
    .createHmac("sha256", kSigning)
    .update(stringToSign)
    .digest("hex");

  headers.authorization = `AWS4-HMAC-SHA256 Credential=${creds.accessKey}/${scope}, SignedHeaders=${signedHeaders}, Signature=${signature}`;

  return { url: `${url.origin}${path}`, headers };
}

export type S3Result = { ok: boolean; status: number; body?: Buffer };

async function run(
  method: "PUT" | "GET" | "DELETE",
  creds: S3Creds,
  objectKey: string,
  body?: Buffer,
  contentType?: string,
  timeoutMs = 15000
): Promise<S3Result> {
  const { url, headers } = signRequest(method, creds, objectKey, body, contentType);
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      method,
      headers,
      body: method === "PUT" && body ? new Uint8Array(body) : undefined,
      signal: ctrl.signal,
    });
    const buf = Buffer.from(await res.arrayBuffer());
    return { ok: res.ok, status: res.status, body: buf };
  } catch {
    return { ok: false, status: 0 };
  } finally {
    clearTimeout(t);
  }
}

export const s3Put = (
  creds: S3Creds,
  key: string,
  body: Buffer,
  contentType: string
) => run("PUT", creds, key, body, contentType);

export const s3Get = (creds: S3Creds, key: string) => run("GET", creds, key);

export const s3Delete = (creds: S3Creds, key: string) =>
  run("DELETE", creds, key);

export const s3PutJson = (
  creds: S3Creds,
  key: string,
  data: unknown
) =>
  s3Put(
    creds,
    key,
    Buffer.from(JSON.stringify(data), "utf8"),
    "application/json"
  );
