// app/projects/boratas-multimedia/_components/GraphicsSection.tsx
"use client";

import React from "react";
import Gallery from "@/components/Gallery";
import { boratasGraphicsExamples } from "@/data/boratasGraphicsExamples";

export default function GraphicsSection() {
  return (
    <>
      <h3 className="text-2xl font-semibold text-primary">Graphics</h3>

      <p className="mb-6 text-white">
        With our visual assets in place, I turned to crafting the brand’s
        printed and digital collateral. Every week, I partnered with the sales
        team to prioritize deliverables—catalogs, flyers, user manuals—ensuring
        each piece reinforced Boratas’s professional image.
      </p>
      <p className="mb-8 text-white">
        To validate and refine our designs, I joined customer meetings and
        gathered real-time feedback on how the visuals supported presentations.
        This direct insight let me iterate rapidly, improving both clarity and
        engagement across all formats.
      </p>

      <Gallery photos={boratasGraphicsExamples} />
    </>
  );
}
