"use client";

import { useSearchParams } from "next/navigation";

export default function DonePage() {
  const params = useSearchParams();
  const place = params.get("place");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-emerald-600 px-4">
      <div className="text-center text-white">
        <h1 className="text-5xl font-extrabold mb-4">
          🎉 Meet You Soon!
        </h1>

        {place && (
          <p className="text-lg mb-2">
            📍 Location: <strong>{place}</strong>
          </p>
        )}

        <p className="opacity-90">
          Send this link to your friends 😈
        </p>
      </div>
    </div>
  );
}
