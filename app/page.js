"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {

  // ================= OPENING SCREEN =================
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);

  }, []);

  // ================= MODAL =================
  const [open, setOpen] = useState(false);

  // ================= CURSOR =================
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  // ================= QUOTES =================
  const quotes = [
    "Every love story is beautiful ❤️",
    "You are my favorite notification ✨",
    "Forever starts with you 💕",
    "With you, everything feels better 🥺",
    "You are my happiest place 🌸"
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  // ================= MOUSE MOVE =================
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

  // ================= AUTO QUOTES =================
  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentQuote((prev) =>
        prev === quotes.length - 1 ? 0 : prev + 1
      );

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  // ================= RELATIONSHIP COUNTER =================
  const startDate = new Date("2025-03-25");
  const today = new Date();

  const difference = today - startDate;

  const days = Math.floor(
    difference / (1000 * 60 * 60 * 24)
  );

  return (

    <>
      {/* ================================================= */}
      {/* ================= OPENING SCREEN ================= */}
      {/* ================================================= */}

      <AnimatePresence>

        {loading && (

          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-[99999] flex flex-col justify-center items-center bg-black overflow-hidden"
          >

            {/* Glow Background */}
            <div className="absolute w-[600px] h-[600px] bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse" />

            {/* Floating Hearts */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.4, 1, 0.4]
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity
                }}
                className="absolute text-white text-2xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
              >
                ❤️
              </motion.div>
            ))}

            {/* Main Text */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-white text-5xl md:text-7xl text-center z-10"
              style={{
                fontFamily: "var(--font-greatvibes)"
              }}
            >
              For Someone Special ❤️
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1,
                duration: 1
              }}
              className="text-white/80 text-lg mt-6 z-10 tracking-[5px]"
            >
              Loading Our Memories...
            </motion.p>

            {/* Loading Bar */}
            <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden mt-10">

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 3.5
                }}
                className="h-full bg-pink-400 rounded-full"
              />

            </div>

          </motion.div>

        )}

      </AnimatePresence>

      {/* ================================================= */}
      {/* ================= MAIN WEBSITE ================== */}
      {/* ================================================= */}

      {!loading && (

        <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-pink-300 via-pink-400 to-pink-500 flex justify-center items-center p-5 cursor-none">

          {/* ================= NAVBAR ================= */}
          <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 backdrop-blur-xl bg-white/10 border border-white/20 px-8 py-4 rounded-full shadow-2xl">

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
          <div className="absolute w-[700px] h-[700px] bg-pink-200 rounded-full blur-3xl opacity-20 animate-pulse top-[-250px] left-[-250px]" />

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
            className="relative overflow-hidden z-10 flex flex-col items-center backdrop-blur-xl bg-white/10 border border-white/20 p-10 rounded-[40px] shadow-2xl max-w-xl w-full"
          >

            {/* Glass Reflection */}
            <div className="absolute top-0 left-[-75%] w-[50%] h-full bg-white/20 rotate-12 blur-2xl" />

            {/* Animated Border */}
            <div className="absolute inset-0 rounded-[40px] border border-pink-200/30 animate-pulse" />

            {/* IMAGE */}
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
                className="rounded-full border-4 border-white shadow-2xl cursor-pointer w-auto h-auto"
              />

            </motion.div>

            {/* TITLE */}
            <h1
              className="relative z-10 text-6xl md:text-7xl text-white mt-6 drop-shadow-lg text-center"
              style={{ fontFamily: "var(--font-greatvibes)" }}
            >
              Our Story ❤️
            </h1>

            {/* QUOTES */}
            <motion.p
              key={currentQuote}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 mt-4 text-lg md:text-xl text-white font-medium text-center"
            >
              {quotes[currentQuote]}
            </motion.p>

            {/* COUNTER */}
            <div className="relative z-10 mt-5 bg-white/20 px-6 py-3 rounded-full border border-white/20 shadow-lg">

              <p className="text-white text-xl md:text-2xl font-bold text-center">
                Bersama selama {days} hari 💕
              </p>

            </div>

            {/* BUTTONS */}
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

                <button
                  onClick={() => setOpen(false)}
                  className="absolute -top-14 right-0 text-white text-5xl hover:scale-125 transition"
                >
                  ✕
                </button>

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

      )}

    </>
  );
}