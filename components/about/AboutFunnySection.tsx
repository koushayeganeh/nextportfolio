// components/AboutFunnySection.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

const OPEN_EYE = "/data/about/open-01.svg";
const CLOSE_EYE = "/data/about/close-01.svg";

export default function AboutFunnySection() {
  const [eyeSrc, setEyeSrc] = useState(OPEN_EYE);

  return (
    <section className="py-16 bg-background text-foreground">
      <div
        className="mx-auto max-w-[90rem] 
                      flex flex-col lg:flex-row 
                      lg:justify-between lg:items-stretch 
                      gap-[80px] lg:gap-6"
      >
        {/* ——— Text ——— */}
        <div className="w-full max-w-[800px] space-y-6">
          <h3 className="text-2xl font-bold text-white">
            Sometimes I Just Close My Eyes!
          </h3>
          <p className="text-white">
            If you see me sitting still with my eyes closed, it doesn’t mean I’m
            sleeping.
          </p>
          <p className="text-white">
            In moments when my mind feels overwhelmed and needs a reset, I turn
            to a simple yet powerful technique. Taking just 4–7 minutes, this
            method significantly enhances my mental clarity and concentration. I
            fondly call it my “performance‐boosting system.”
          </p>
        </div>

        {/* ——— Avatar ——— */}
        <div
          className="w-full px-16 lg:px-0 lg:w-[360px] h-full rounded-2xl min-h-0"
          onMouseEnter={() => setEyeSrc(CLOSE_EYE)}
          onMouseLeave={() => setEyeSrc(OPEN_EYE)}
        >
          <Image
            src={eyeSrc}
            alt="Kousha eyes"
            width={192}
            height={192}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
