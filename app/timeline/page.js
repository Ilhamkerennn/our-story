"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Timeline() {

  const memories = [
    {
      title: "Pertama Kali Kenal ❤️",
      date: "25-03-2026",
      desc: "Hari pertama kita mulai ngobrol dan semuanya dimulai."
    },
    {
      title: "First Call ☎️",
      date: "02-04-2026",
      desc: "Call pertama sampai lupa waktu."
    },
    {
      title: "First 'I Miss You' 🥺",
      date: "2026",
      desc: "Hari pertama bilang kangen."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-300 via-pink-400 to-pink-500 p-10">

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl font-extrabold text-center text-white mb-14 drop-shadow-lg"
      >
        Timeline Kita ❤️
      </motion.h1>

      <div className="space-y-8 max-w-4xl mx-auto">

        {memories.map((memory, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl hover:scale-105 transition"
          >

            <h2 className="text-3xl font-bold text-white">
              {memory.title}
            </h2>

            <p className="text-pink-100 mt-2">
              {memory.date}
            </p>

            <p className="mt-4 text-white text-lg">
              {memory.desc}
            </p>

          </motion.div>
        ))}

      </div>

      <div className="flex justify-center mt-12">
        <Link href="/gallery">
          <button className="bg-white text-pink-500 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 transition">
            Lihat Gallery 📸
          </button>
        </Link>
      </div>

    </div>
  )
}