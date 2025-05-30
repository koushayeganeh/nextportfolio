"use client";

import React from "react";
import Gallery from "@/components/Gallery";
import { guidelinePages } from "@/data/boratasGuideExamples";

export default function BrandGuidelines() {
  return (
    <div id="guidelines">
      {/* Section header */}
      <h3 className="text-2xl font-semibold text-primary mb-4">
        Brand Guidelines
      </h3>

      {/* Intro copy */}
      <p className="mb-4 text-white">
        A brand guideline is the single source of truth for how every visual
        asset should look and behave—across print, web, social, and more. After
        we locked down our typography, color palette, and imagery style, I
        distilled those decisions into a living document.
      </p>

      <p className="mb-4 text-white">It covers:</p>
      <ul className="list-disc list-inside mb-8 text-white space-y-2">
        <li>
          <strong>Color palette</strong>—primary, secondary, and accent swatches
        </li>
        <li>
          <strong>Typography</strong>—fonts, hierarchies, and scale
        </li>
        <li>
          <strong>Logo usage</strong>—clear space, size, and do’s & don’ts
        </li>
        <li>
          <strong>Imagery</strong>—photography style, mood, and treatments
        </li>
        <li>
          <strong>Graphic elements</strong>—shapes, patterns, and iconography
        </li>
      </ul>

      <p className="mb-8 text-white">
        Anyone creating Boratas assets—whether in Figma, Photoshop, or code—
        refers to this guide first. It ensures every touchpoint remains
        consistent, professional, and unmistakably “on brand.”
      </p>

      {/* Gallery of actual guideline pages */}
      <div>
        <h4 className="text-lg font-semibold text-white mb-4">
          Preview of Guideline Pages
        </h4>
        <Gallery photos={guidelinePages} />
      </div>
    </div>
  );
}
