"use client";

import Link from "next/link";

interface Props {
  tags: string[];
  imgSrc: string;
  imgAlt: string;
  path?: string;
  isClickable?: boolean;
}

export default function FeaturedBlockType2({
  tags,
  imgSrc,
  imgAlt,
  path,
  isClickable = false,
}: Props) {
  const card = (
    <div className="break-inside-avoid bg-white rounded-2xl overflow-hidden shadow-md">
      {/* img sizes itself by its intrinsic aspect ratio */}
      <img
        src={imgSrc}
        alt={imgAlt}
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
