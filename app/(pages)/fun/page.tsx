// app/fun/page.tsx
"use client";

import { useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import SectionWithProfessionalSkills from "@/components/SectionWithProfessionalSkills";

// Dynamically load Featured only on the client to avoid SSR/layout mismatches
const Featured = dynamic(() => import("@/components/featured/Featured"), {
  ssr: false,
});

export default function FunPage() {
  const anchorRef = useRef<HTMLDivElement>(null);

  const scrollToAnchor = useCallback(() => {
    anchorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="relative bg-dark-background text-white overflow-hidden">
      <SectionWithProfessionalSkills
        titleText="Small Projects, Big Fun"
        subtitleText="The joy of creation with tiny fun-filled adventures"
        videoSrc="/data/videos/13.mp4"
        onArrowClick={scrollToAnchor}
      />

      <div
        ref={anchorRef}
        className="flex flex-col items-center justify-center py-8 md:py-16"
      >
        <Featured />
      </div>
    </div>
  );
}
