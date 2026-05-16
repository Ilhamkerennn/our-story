"use client";

import { motion } from "framer-motion";

export default function Letter() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-300 via-pink-400 to-pink-500 flex justify-center items-center p-10">

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="backdrop-blur-lg bg-white/10 border border-white/20 p-10 rounded-[40px] shadow-2xl max-w-3xl"
      >

        <h1 className="text-6xl font-extrabold text-white text-center mb-8">
          For You ❤️
        </h1>

        <p className="text-white text-xl leading-10">

          Hai sayang,
          <br /><br />

          Aku cuma mau bilang terima kasih karena sudah hadir di hidup aku.
          Semua momen kecil kita selalu berarti buat aku.

          <br /><br />

          Website ini mungkin sederhana,
          tapi semua yang ada di sini dibuat khusus buat kamu ❤️

          <br /><br />

          I love you so much 💕

        </p>

      </motion.div>

    </div>
  )
}