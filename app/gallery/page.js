"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Gallery() {

  const photos = [
    "/images/foto1.jpg",
    "/images/foto2.jpg",
    "/images/foto3.jpg",
    "/images/foto4.jpg",
    "/images/foto5.jpg",
    "/images/foto6.jpg"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-300 via-pink-400 to-pink-500 p-10">

      <h1 className="text-6xl font-extrabold text-center text-white mb-14 drop-shadow-lg">
        Gallery Kita 📸
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {photos.map((photo, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-3xl shadow-2xl"
          >

            <Image
              src={photo}
              width={400}
              height={400}
              alt="memory"
              className="w-full h-auto"
            />

          </motion.div>
        ))}

      </div>

      <div className="flex justify-center mt-12">
        <Link href="/letter">
          <button className="bg-white text-pink-500 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 transition">
            Read My Letter ❤️
          </button>
        </Link>
      </div>

    </div>
  )
}