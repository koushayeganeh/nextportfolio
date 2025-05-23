"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";

interface Props {
  tags: string[];
  videoSrc: string;
  path?: string;
  isClickable?: boolean;
}

export default function FeaturedBlock({
  tags,
  videoSrc,
  path,
  isClickable = false,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);

  // Intersection Observer to auto-play/pause
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      el.pause();
    };
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (visible) el.play().catch(() => {});
    else el.pause();
  }, [visible]);

  const card = (
    <div className="break-inside-avoid bg-white rounded-2xl overflow-hidden shadow-md">
      {/* video wraps to its natural aspect ratio */}
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        loop
        playsInline
        className="w-full h-auto object-cover block"
      />

      <div className="p-4">
        <ul className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <li
              key={t}
              className="bg-black text-white text-xs px-2 py-1 rounded-full"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return isClickable && path ? <Link href={`/${path}`}>{card}</Link> : card;
}
