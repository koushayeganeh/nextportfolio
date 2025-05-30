// components/about/SoundCloudEmbed.tsx
"use client";

import React from "react";

interface SoundCloudEmbedProps {
  /** The SoundCloud track URL, e.g. "https://api.soundcloud.com/tracks/892255795" */
  trackUrl: string;
  /** Optional: height of the iframe in px (default: 166) */
  height?: number;
  /** Optional extra params (e.g. hide_related, show_comments, etc.) */
  params?: Record<string, string | boolean>;
}

export default function SoundCloudEmbed({
  trackUrl,
  height = 166,
  params = {},
}: SoundCloudEmbedProps) {
  // build the query string
  const defaultParams = {
    color: "#ff5500",
    auto_play: false,
    hide_related: false,
    show_comments: true,
    show_user: true,
    show_reposts: false,
    show_teaser: true,
  };

  const allParams = { ...defaultParams, ...params };
  const qs = Object.entries(allParams)
    .map(
      ([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`
    )
    .join("&");

  const src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(
    trackUrl
  )}&${qs}`;

  return (
    <iframe
      title={`soundcloud-${trackUrl}`}
      className="w-full"
      style={{ height }}
      scrolling="no"
      frameBorder={0}
      allow="autoplay"
      src={src}
    />
  );
}
