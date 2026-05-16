"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {

  const [open, setOpen] = useState(false);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  const quotes = [
    "Every love story is beautiful ❤️",
    "You are my favorite notification ✨",
    "Forever starts with you 💕",
    "With you, everything feels better 🥺",
    "You are my happiest place 🌸"
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  // Mouse Move
  useEffect(() => {

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };

  }, []);

  // Auto Quotes
  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentQuote((prev) =>
        prev === quotes.length - 1 ? 0 : prev + 1
      );

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  // Relationship Counter
  const startDate = new Date("2025-03-25");
  const today = new Date();

  const difference = today - startDate;

  const days = Math.floor(
    difference / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-pink-300 via-pink-400 to-pink-500 flex justify-center items-center p-5 cursor-none">

      {/* ================= NAVBAR ================= */}
      <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 backdrop-blur-3xl bg-white/10 border border-white/20 px-8 py-4 rounded-full shadow-2xl">

        <div className="flex items-center gap-8 text-white font-semibold">

          <Link href="/">
            <p className="hover:text-pink-200 transition cursor-pointer">
              Home
            </p>
          </Link>

          <Link href="/timeline">
            <p className="hover:text-pink-200 transition cursor-pointer">
              Timeline
            </p>
          </Link>

          <Link href="/gallery">
            <p className="hover:text-pink-200 transition cursor-pointer">
              Gallery
            </p>
          </Link>

          <Link href="/letter">
            <p className="hover:text-pink-200 transition cursor-pointer">
              Letter
            </p>
          </Link>

        </div>

      </div>

      {/* ================= CUSTOM CURSOR ================= */}
      <motion.div
        animate={{
          x: mousePosition.x - 15,
          y: mousePosition.y - 15
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
        className="fixed w-8 h-8 rounded-full bg-white/40 backdrop-blur-md border border-white z-[9999] pointer-events-none"
      />

      {/* ================= SPOTLIGHT ================= */}
      <div
        className="pointer-events-none fixed w-[400px] h-[400px] rounded-full bg-white/10 blur-3xl z-0"
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200
        }}
      />

      {/* ================= AURORA GLOW ================= */}
      <div className="absolute w-[700px] h-[700px] bg-pink-200 rounded-full blur-3xl opacity-30 animate-pulse top-[-250px] left-[-250px]" />

      <div className="absolute w-[600px] h-[600px] bg-white rounded-full blur-3xl opacity-20 animate-pulse bottom-[-250px] right-[-250px]" />

      {/* ================= FLOATING HEARTS ================= */}
      <div className="absolute inset-0 overflow-hidden">

        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
            }}
            className="absolute text-white text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            ❤️
          </motion.div>
        ))}

      </div>

      {/* ================= MAIN CARD ================= */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        whileHover={{
          rotateX: 5,
          rotateY: -5,
          scale: 1.02
        }}
        className="relative overflow-hidden z-10 flex flex-col items-center backdrop-blur-3xl bg-white/10 border border-white/20 p-10 rounded-[40px] shadow-2xl max-w-xl w-full"
      >

        {/* Glass Reflection */}
        <div className="absolute top-0 left-[-75%] w-[50%] h-full bg-white/20 rotate-12 blur-2xl" />

        {/* Animated Border */}
        <div className="absolute inset-0 rounded-[40px] border border-pink-200/30 animate-pulse" />

        {/* ================= IMAGE ================= */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative z-10"
        >

          <Image
            src="/images/foto1.jpg"
            width={250}
            height={250}
            loading="eager"
            alt="foto"
            onClick={() => setOpen(true)}
            className="
              rounded-full
              border-4
              border-white
              shadow-2xl
              shadow-[0_0_80px_rgba(255,255,255,0.5)]
              hover:scale-110
              transition
              duration-300
              cursor-pointer
              w-auto
              h-auto
            "
          />

        </motion.div>

        {/* ================= TITLE ================= */}
        <h1
          className="
            relative z-10
            text-7xl md:text-8xl
            mt-6
            text-center
            bg-gradient-to-r
            from-white
            via-pink-100
            to-pink-300
            bg-clip-text
            text-transparent
            drop-shadow-2xl
          "
          style={{
            fontFamily: "var(--font-greatvibes)"
          }}
        >
          Our Story ❤️
        </h1>

        {/* ================= QUOTES ================= */}
        <motion.p
          key={currentQuote}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mt-4 text-lg md:text-xl text-white font-medium text-center"
        >
          {quotes[currentQuote]}
        </motion.p>

        {/* ================= COUNTER ================= */}
        <div className="relative z-10 mt-5 bg-white/20 px-6 py-3 rounded-full border border-white/20 shadow-lg backdrop-blur-xl">

          <p className="text-white text-xl md:text-2xl font-bold text-center">
            Bersama selama {days} hari 💕
          </p>

        </div>

        {/* ================= BUTTONS ================= */}
        <div className="relative z-10 flex gap-4 mt-8 flex-wrap justify-center">

          <Link href="/timeline">
            <button className="bg-white text-pink-500 px-8 py-3 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:bg-pink-100 transition duration-300">
              Enter Our Story
            </button>
          </Link>

          <Link href="/gallery">
            <button className="bg-pink-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:bg-pink-600 transition duration-300 border border-white">
              Gallery 📸
            </button>
          </Link>

          <Link href="/letter">
            <button className="bg-white/20 text-white px-8 py-3 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:bg-white/30 transition duration-300 border border-white">
              Love Letter 💌
            </button>
          </Link>

        </div>

      </motion.div>

      {/* ================= MODAL ================= */}
      {open && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex justify-center items-center z-50">

          <div className="relative">

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-14 right-0 text-white text-5xl hover:scale-125 transition"
            >
              ✕
            </button>

            {/* Fullscreen Image */}
            <Image
              src="/images/foto1.jpg"
              width={800}
              height={800}
              alt="fullscreen"
              className="rounded-3xl shadow-2xl max-h-[90vh] w-auto h-auto"
            />

          </div>

        </div>
      )}

    </div>
  );
}