// components/BoratasSlider.tsx
"use client";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export default function BoratasSlider() {
  return (
    <ReactCompareSlider
      handleSize={35}
      handlePosition="50%"
      handleStyle={{ backgroundColor: "var(--primary)" }}
      itemOne={
        <ReactCompareSliderImage
          src="/media/boratas-slider/before-webp.webp"
          alt="Before"
        />
      }
      itemTwo={
        <ReactCompareSliderImage
          src="/media/boratas-slider/after-webp.webp"
          alt="After"
        />
      }
    />
  );
}
