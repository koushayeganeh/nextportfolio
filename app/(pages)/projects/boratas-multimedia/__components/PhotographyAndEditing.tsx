// app/projects/boratas-multimedia/__components/PhotographyAndEditing.tsx
"use client";

import React from "react";
import Gallery from "@/components/Gallery";
import { boratasPhotoExamples } from "@/data/boratasPhotoExamples";

export default function PhotographyAndEditing() {
  return (
    <>
      <h3 className="text-2xl font-semibold text-primary">
        Photography &amp; Editing
      </h3>
      <p className="mb-6 text-white">
        I organized and led on-site shoots across Boratas’s production
        facilities, quarries, and construction sites—capturing both detailed
        product imagery and broader operational context. Each raw asset was then
        carefully color-graded, retouched, and optimized to meet our new brand
        standards.
      </p>
      <p className="mb-8 text-white">
        Shooting in live production environments posed the challenge of minimal
        downtime. By conducting pre-shoot walkthroughs and coordinating with
        operators, I was able to anticipate key moments and adapt on the
        fly—delivering authentic, high-impact imagery without disrupting
        workflows.
      </p>
      <Gallery photos={boratasPhotoExamples} />
    </>
  );
}
