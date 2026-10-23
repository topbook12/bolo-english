import "server-only";
import { db } from "@/lib/db";
import { sanitizeProps, type TrackEventName } from "@/lib/analytics";

/**
 * Fire-safe analytics insert for server-derived events (quiz_complete,
 * speaking_session, ai_call). NEVER throws — a failed analytics write must
 * not fail the user's actual request.
 */
export async function logAnalyticsEvent(
  name: TrackEventName,
  deviceId: string,
  userId: string | null,
  props?: Record<string, unknown>
): Promise<void> {
  try {
    await db.analyticsEvent.create({
      data: {
        name,
        deviceId: deviceId.slice(0, 64) || "anon",
        userId: userId || null,
        props: JSON.stringify(sanitizeProps(props) ?? {}),
      },
    });
  } catch (e) {
    console.error("analytics insert failed", e);
  }
}
