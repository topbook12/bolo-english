"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

// Shared premium empty state with optional illustration.

interface EmptyStateProps {
  illustration?: string; // path under /illustrations
  emoji?: string;
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export default function EmptyState({
  illustration,
  emoji,
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="animate-fade-in-up relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-dashed border-border/80 bg-card/50 px-6 py-10 text-center">
      {/* soft dotted backdrop — keeps the box from feeling flat */}
      <span className="bg-dots pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative flex flex-col items-center">
        {illustration ? (
          <Image
            src={illustration}
            alt=""
            width={140}
            height={140}
            className="animate-float mb-3 h-28 w-auto object-contain drop-shadow-sm"
          />
        ) : (
          emoji && <span className="mb-3 text-5xl leading-none">{emoji}</span>
        )}
        <p className="text-base font-semibold">{title}</p>
        {description && (
          <p className="mt-1 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
        {actionLabel && onAction && (
          <Button className="btn-shine mt-4 min-h-11 rounded-xl px-5" onClick={onAction}>
            {actionLabel}
          </Button>
        )}
      </div>
    </div>
  );
}
