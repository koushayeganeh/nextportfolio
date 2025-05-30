// components/BoratasPhotoManipulation.tsx
"use client";

import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const sliders = [
  {
    before: "/data/projects/boratas/images/boratas-slider/before-webp.webp",
    after: "/data/projects/boratas/images/boratas-slider/after-webp.webp",
    altBefore: "Raw machinery photo #1",
    altAfter: "Manipulated composite #1",
  },
  {
    before: "/data/projects/boratas/images/boratas-slider/w-before-webp.webp",
    after: "/data/projects/boratas/images/boratas-slider/w-after-webp.webp",
    altBefore: "Raw machinery photo #2",
    altAfter: "Manipulated composite #2",
  },
  {
    before: "/data/projects/boratas/images/boratas-slider/v-before-webp.webp",
    after: "/data/projects/boratas/images/boratas-slider/v-after-webp.webp",
    altBefore: "Raw machinery photo #3",
    altAfter: "Manipulated composite #3",
  },
  {
    before: "/data/projects/boratas/images/boratas-slider/j-before-webp.webp",
    after: "/data/projects/boratas/images/boratas-slider/j-after-webp.webp",
    altBefore: "Raw machinery photo #4",
    altAfter: "Manipulated composite #4",
  },
];

export default function BoratasPhotoManipulation() {
  return (
    <>
      <h3 className="text-2xl font-semibold text-primary">
        Photo Manipulation
      </h3>
      <p>
        To bring Boratas’s machinery to life, I created a series of
        sci-fi–inspired composites that emphasize each product’s cutting-edge
        technology and rugged durability.
      </p>
      <p>
        Starting with raw photo and video captures, I color-graded and then
        composited dynamic backgrounds and graphical accents to reflect the
        brand’s innovation and strength.
      </p>
      <p>
        Below are four “before &amp; after” sliders showcasing key examples of
        these transformations.
      </p>

      <div className="grid gap-4 lg:grid-cols-2 mt-8">
        {sliders.map((s, i) => (
          <div key={i} className="overflow-hidden rounded-lg shadow-lg">
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage src={s.before} alt={s.altBefore} />
              }
              itemTwo={
                <ReactCompareSliderImage src={s.after} alt={s.altAfter} />
              }
              handleSize={32}
              handleStyle={{
                border: "2px solid var(--primary)",
                background: "white",
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
