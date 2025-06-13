import Gallery from "@/components/Gallery";
import { boratasResponsiveDesign } from "@/data/boratasResponsiveDesign";
import React from "react";

export default function Responsive() {
  return (
    <>
      <div id="design-responsive" className="space-y-8 scroll-mt-40">
        <h3 className="text-xl font-bold text-primary">
          3.5 · Responsive Design
        </h3>

        <p className="text-base">
          I adopted a mobile-first workflow with Tailwind CSS, applying base
          styles for the smallest viewports and layering on responsive variants
          at <code>sm</code> (640px), <code>md</code> (768px), <code>lg</code>{" "}
          (1024px), and <code>xl</code> (1280px). This ensures that
          components—cards, tables, banners—gracefully stack on phones and
          reflow into multi-column layouts on tablets and desktops.
        </p>

        <p className="text-base">
          Core layouts use CSS Grid and Flexbox: on mobile, product cards and
          spec lists stack vertically; on larger screens they split into two or
          three columns. Images are constrained with <code>max-w-full</code> and{" "}
          <code>object-cover</code> for consistent aspect ratios. Touch targets
          (buttons, hotspots) meet accessibility guidelines (44×44px minimum)
          for comfortable interaction on handheld devices.
        </p>

        <p className="text-base">
          Navigation shifts from a slide-out drawer on narrow screens to a
          horizontal header menu on desktop. Hero sections and video loops scale
          fluidly across breakpoints. Machine detail pages seamlessly transition
          from side-by-side panels to stacked sections—tested on Chrome DevTools
          and real devices to validate performance and usability.
        </p>

        {/* Screenshot gallery */}
        <Gallery photos={boratasResponsiveDesign} />
      </div>
    </>
  );
}
