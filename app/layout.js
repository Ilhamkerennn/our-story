"use client";

import "./globals.css";

import { Poppins, Great_Vibes } from "next/font/google";

import { useEffect, useRef, useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-greatvibes",
});

export default function RootLayout({ children }) {

  // ================= MUSIC =================
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {

    const playMusic = async () => {

      if (audioRef.current) {

        audioRef.current.volume = 0.4;

        try {

          await audioRef.current.play();

          setIsPlaying(true);

        } catch (error) {

          console.log("Autoplay dicegah browser");

        }

      }

    };

    playMusic();

  }, []);

  const toggleMusic = () => {

    if (!audioRef.current) return;

    if (audioRef.current.paused) {

      audioRef.current.play();
      setIsPlaying(true);

    } else {

      audioRef.current.pause();
      setIsPlaying(false);

    }

  };

  return (
    <html lang="en">

      <body
        className={`${poppins.variable} ${greatVibes.variable} font-sans`}
      >

        {/* ================= AUDIO ================= */}
        <audio
          ref={audioRef}
          loop
          src="/music/romantic.mp3"
        />

        {/* ================= MUSIC BUTTON ================= */}
        <button
          onClick={toggleMusic}
          className="
            fixed
            bottom-5
            right-5
            z-[99999]
            bg-white/20
            backdrop-blur-xl
            border
            border-white/20
            px-5
            py-3
            rounded-full
            text-white
            shadow-2xl
            hover:scale-110
            transition
            duration-300
          "
        >
          {isPlaying ? "🎵 Music On" : "🔇 Music Off"}
        </button>

        {children}

      </body>

    </html>
  );
}