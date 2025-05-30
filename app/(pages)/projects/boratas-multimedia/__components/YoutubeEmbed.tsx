// app/projects/boratas-multimedia/_components/YoutubeEmbed.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function YoutubeEmbed({ embedId }: { embedId: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  // highest-res thumbnail YouTube provides
  const thumbnail = `https://i.ytimg.com/vi/${embedId}/maxresdefault.jpg`;

  return (
    <div
      className="relative w-full aspect-video overflow-hidden rounded-lg shadow-lg cursor-pointer bg-black"
      onClick={() => setIsPlaying(true)}
    >
      {!isPlaying && (
        <>
          <Image
            src={thumbnail}
            alt="Video thumbnail"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 flex items-center justify-center">
            {/* simple play icon */}
            <svg
              className="w-16 h-16 text-white opacity-75"
              viewBox="0 0 84 84"
            >
              <circle cx="42" cy="42" r="42" fill="currentColor" />
              <polygon points="33,27 58,42 33,57" fill="black" />
            </svg>
          </div>
        </>
      )}
      {isPlaying && (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
          title="Boratas case study video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}
