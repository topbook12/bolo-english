"use client";

import { useSyncExternalStore } from "react";

const subscribeNoop = () => () => undefined;

/**
 * True only AFTER hydration has committed.
 *
 * Hydration armor: during SSR *and* the hydration pass it returns the server
 * snapshot (false), so anything gated behind it renders byte-identical HTML
 * on both sides; React swaps in `true` immediately after hydration. Use it
 * to keep Radix primitives (which consume React.useId) out of the first
 * paint entirely — a useId mismatch between server and client can then never
 * happen, regardless of extensions, stale chunks or restored state.
 */
export function useMounted(): boolean {
  return useSyncExternalStore(subscribeNoop, () => true, () => false);
}
