// app/projects/boratas-multimedia/__components/Renders.tsx
"use client";

import React from "react";
import Image from "next/image";
import Gallery from "@/components/Gallery";
import { boratasRendersExamples } from "@/data/boratasRendersExamples";
import rendersCompare from "/public/data/projects/boratas/images/boratas-renders/renders-compare-webp.webp";

export default function Renders() {
  return (
    <>
      <h3 className="text-2xl font-semibold text-primary">3D Renders</h3>

      <p className="mb-6 text-white">
        While SolidWorks exports guaranteed engineering accuracy, they lacked
        the photorealism and creative polish our brand demanded—and engineers
        had little bandwidth for high-end visuals. To bridge that gap, I turned
        to Blender, a free and powerful 3D suite.
      </p>
      <p className="mb-8 text-white">
        Working closely with the engineering team, I imported their CAD models
        into Blender, then refined materials, lighting, and camera setups to
        produce studio-grade renders—at zero additional cost. The transformation
        was immediate and dramatic.
      </p>

      <div className="mb-8">
        <Image
          src={rendersCompare}
          alt="Comparison of SolidWorks vs. Blender renders"
          width={1200}
          height={800}
          className="w-full h-auto rounded-lg object-cover shadow-md"
          priority
        />
      </div>

      <p className="mb-6 text-white">
        From there, I composited each render onto custom backgrounds and applied
        finishing touches to build a versatile asset library for print, digital,
        and social channels. Below are some highlight renders:
      </p>

      <Gallery photos={boratasRendersExamples} />
    </>
  );
}
