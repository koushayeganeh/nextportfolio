// app/projects/boratas-multimedia/_components/VideosSection.tsx
"use client";

import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";

export default function VideosSection() {
  const vids = [
    "0VUUr2Jc59o",
    "WugFhLzubBA",
    "Petv-w7ccPo",
    "eH45tpSkJZw",
    "Ezrwo7MhieM",
    "IxLIRE22t6o",
  ];

  return (
    <>
      <h3 className="text-2xl font-semibold text-primary">
        Videography & Editing
      </h3>

      <p className="mb-6 text-white">
        Blending drone footage, 3D animation, and tight post-production, I
        crafted a series of engaging 1–2 minute videos—whether product intros or
        quick tutorials. In some cuts, I experimented with AI voiceovers to keep
        them fresh and accessible.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {vids.map((id) => (
          <YoutubeEmbed key={id} embedId={id} />
        ))}
      </div>
    </>
  );
}
