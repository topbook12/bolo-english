import sharp from "sharp";
import fs from "fs";
import path from "path";

const DIR = "/home/z/my-project/public/illustrations";

async function optimize(file: string, width: number) {
  const src = path.join(DIR, file + ".png");
  const out = path.join(DIR, file + ".webp");
  await sharp(src).resize({ width }).webp({ quality: 82 }).toFile(out);
  const kb = Math.round(fs.statSync(out).size / 1024);
  console.log(`${file}.webp ok (${kb} KB)`);
}

async function main() {
  await optimize("hero-speaking", 960);
  await optimize("ill-speaking", 512);
  await optimize("ill-grammar", 512);
  await optimize("ill-vocab", 512);
  await optimize("ill-listening", 512);
  await optimize("ill-progress", 512);
  // remove source PNGs to keep repo light
  for (const f of fs.readdirSync(DIR)) {
    if (f.endsWith(".png")) fs.unlinkSync(path.join(DIR, f));
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
