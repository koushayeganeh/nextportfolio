// components/SectionWithProfessionalSkills.tsx
"use client";

import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { IoMdArrowRoundDown } from "react-icons/io";

interface SectionProps {
  titleText: string;
  subtitleText: string;
  videoSrc: string;
  onArrowClick: () => void;
}

export default function SectionWithProfessionalSkills({
  titleText,
  subtitleText,
  videoSrc,
  onArrowClick,
}: SectionProps) {
  return (
    <div className="relative w-full h-[464px] md:h-[460px] overflow-hidden flex flex-col items-center justify-center">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover filter blur-lg"
        autoPlay
        muted
        loop
        playsInline
        src={videoSrc}
      />

      {/* Overlay Text */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h2 className="text-3xl md:text-5xl font-medium text-white">
          {titleText}
        </h2>
        <p className="mt-2 text-lg md:text-xl text-primary">{subtitleText}</p>
      </div>

      {/* Arrow Button */}
      <button
        onClick={onArrowClick}
        className="absolute bottom-8 md:bottom-16 flex items-center justify-center w-16 h-16 bg-primary rounded-full shadow-lg hover:scale-105 transition"
        aria-label="Scroll down"
      >
        <IoMdArrowRoundDown className="text-4xl" />
      </button>
    </div>
  );
}
