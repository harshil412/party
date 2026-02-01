"use client";

import { ReactNode } from "react";

export default function GlassLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-black">
      <div
        className="relative w-full max-w-xl rounded-3xl
        bg-white/5 backdrop-blur-xl border border-white/10
        shadow-[0_0_40px_rgba(168,85,247,0.25)] p-8 sm:p-10"
      >
        {/* Accent */}
        <div
          className="absolute inset-x-0 top-0 h-1 rounded-t-3xl"
          style={{
            background: `linear-gradient(to right, var(--accent-from), var(--accent-via), var(--accent-to))`,
          }}
        />

        {children}
      </div>
    </div>
  );
}
