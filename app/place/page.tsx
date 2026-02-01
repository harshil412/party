"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

const jokes = [
  "Good choice 😏",
  "We knew you'd say yes 😎",
  "Legend behavior 🔥",
  "Party unlocked 🥳",
];

export default function PlacePage() {
  const [place, setPlace] = useState("");
  const [joke, setJoke] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    inputRef.current?.focus();
    setJoke(jokes[Math.floor(Math.random() * jokes.length)]);
  }, []);

  const handleSubmit = () => {
    localStorage.setItem("partyPlace", place);

    confetti({ particleCount: 120, spread: 80 });

    router.push(`/done?place=${encodeURIComponent(place)}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 to-fuchsia-700 px-4"
    >
      <div className="w-full max-w-lg rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 text-white shadow-2xl">
        <h1 className="text-3xl font-extrabold mb-2">📍 Party Location</h1>
        <p className="text-white/70 mb-6">{joke}</p>

        <input
          ref={inputRef}
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          placeholder="House, cafe, rooftop..."
          className="w-full rounded-xl bg-white/90 text-gray-900 px-5 py-4 text-lg"
        />

        {place && (
          <p className="mt-4 text-sm">
            📍 Party at: <strong>{place}</strong>
          </p>
        )}

        <motion.button
          whileTap={{ scale: 0.95 }}
          disabled={!place}
          onClick={handleSubmit}
          className="mt-8 w-full rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 py-4 text-lg font-bold disabled:opacity-40"
        >
          Lock it 🚀
        </motion.button>
      </div>
    </motion.div>
  );
}
