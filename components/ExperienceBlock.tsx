// components/ExperienceBlock.tsx
"use client";

import React, { useRef, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

interface ExperienceBlockProps {
  title: string;
  slug: string;
  position: string;
  date: string;
  tags: string[];
  videoSrc: string;
  onExplore: () => void;
}

export default function ExperienceBlock({
  title,
  slug,
  position,
  date,
  tags,
  videoSrc,
  onExplore,
}: ExperienceBlockProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to auto-play/pause
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
          setIsVisible(true);
        } else {
          el.pause();
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    obs.observe(el);
    return () => {
      obs.disconnect();
      el.pause();
    };
  }, []);

  return (
    <div className="max-w-[90rem] w-full bg-white rounded-lg md:rounded-2xl overflow-hidden flex flex-col md:flex-row items-start md:items-stretch p-3 md:p-8">
      {/* Info */}
      <div className="flex-1 flex flex-col justify-center gap-0 md:gap-4">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-primary">
            {title}
          </h3>
          <p className="mt-1 text-gray-600">{position}</p>
          <p className="mt-1 text-primary-alt">{date}</p>
        </div>
        <ul className="mt-4 mr-4 hidden md:flex flex-wrap gap-2 md:gap-2 ">
          {tags.map((tag) => (
            <li
              key={tag}
              className="bg-black text-white text-base px-3 py-1 rounded-lg"
            >
              {tag}
            </li>
          ))}
        </ul>
        <button
          onClick={onExplore}
          className="mt-4 md:mt-6 inline-flex items-center text-primary hover:underline transition text-sm md:text-base font-semibold"
        >
          Explore Case Study
          <FaArrowRight className="ml-2 md:ml-4 text-base md:text-xl" />
        </button>
      </div>

      {/* Video */}
      <div
        onClick={onExplore}
        className="flex-1 w-full md:w-1/2 h-64 md:h-auto mt-6 md:mt-0 hover:cursor-pointer"
      >
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          loop
          playsInline
          className="w-full h-full object-cover rounded-lg md:rounded-xl"
        />
      </div>
    </div>
  );
}
