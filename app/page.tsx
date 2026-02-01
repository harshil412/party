"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();
  const [pos, setPos] = useState({ x: 50, y: 65 });
  const [shake, setShake] = useState(false);

  const moveNo = () => {

    setPos({
      x: Math.random() * 80,
      y: Math.random() * 70,
    });

    setShake(true);
    setTimeout(() => setShake(false), 300);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-700 to-fuchsia-700 px-4">
      <motion.div
        animate={shake ? { x: [-5, 5, -5, 5, 0] } : {}}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8 text-center"
      >
        <h1 className="text-3xl font-extrabold text-white mb-10">
          Hello Apeksha <br/>
          Will you give us a party today? 🎉
        </h1>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            router.push("/place?from=party");
          }}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-green-400 to-emerald-500 text-white font-bold text-lg"
        >
          YES 🥳
        </motion.button>

        <motion.button
          onMouseEnter={moveNo}
          onClick={moveNo}
          animate={{ left: `${pos.x}%`, top: `${pos.y}%` }}
          transition={{ type: "spring", stiffness: 300 }}
          className="absolute px-5 py-2 rounded-lg bg-red-500 text-white font-semibold"
        >
          NO 😤
        </motion.button>
      </motion.div>
    </div>
  );
}
