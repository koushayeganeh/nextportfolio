// components/featured/FeaturedCard.tsx
"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { FiLink } from "react-icons/fi";

export type CardProps = {
  type: "video" | "image";
  src: string;
  alt?: string; // only for images
  tags: string[];
  path?: string; // presence = clickable
};

export default function FeaturedCard({
  type,
  src,
  alt,
  tags,
  path,
}: CardProps) {
  const isClickable = Boolean(path);

  // ▶ video autoplay logic
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (type !== "video" || !videoRef.current) return;
    const obs = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold: 0.5 }
    );
    obs.observe(videoRef.current);
    return () => obs.disconnect();
  }, [type]);
  useEffect(() => {
    if (type !== "video" || !videoRef.current) return;
    visible
      ? videoRef.current.play().catch(() => {})
      : videoRef.current.pause();
  }, [visible, type]);

  // the inner card UI
  const card = (
    <div className="break-inside-avoid bg-white rounded-md md:rounded-lg overflow-hidden shadow-md">
      {type === "image" ? (
        <img src={src} alt={alt} className="w-full h-auto object-cover block" />
      ) : (
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          className="w-full h-auto object-cover block"
        />
      )}

      <div className="p-2 md:p-4">
        <ul className="flex flex-wrap gap-2">
          {isClickable && (
            <li className="bg-black text-white text-xs px-2 py-1 rounded-full">
              🔗
            </li>
          )}
          {tags.map((t) => (
            <li
              key={t}
              className="bg-black text-white text-[8px] md:text-xs px-2 py-1 rounded-full"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  // wrap in <Link> if clickable
  return isClickable && path ? <Link href={`/${path}`}>{card}</Link> : card;
}
