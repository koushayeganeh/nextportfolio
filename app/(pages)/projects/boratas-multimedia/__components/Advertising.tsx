// app/projects/boratas-multimedia/_components/PromotionalMaterials.tsx
"use client";

import Gallery from "@/components/Gallery";
import {
  magazineAdsPhotos,
  merchPhotos,
  boothPhotos,
} from "@/data/promotionalPhotos";

export default function PromotionalMaterialsSection() {
  return (
    <>
      <h3 className="text-2xl font-semibold text-primary mb-4">
        Strategic Promotional Materials
      </h3>
      {/* Magazine Ads */}
      <div className="mb-12">
        <p className="mb-6">
          Once our new visual identity had proven itself online and in print
          collateral, I turned to industry publications to broadcast Boratas’s
          transformed brand. Working side-by-side with art directors at Forum
          Makina and Makina Market, I fused our high-contrast 3D renders with
          bold visual style and diagonal graphic cues inspired by our
          machinery’s angular forms. Each ad was engineered to spec for perfect
          print bleed. Within weeks of launch, we saw a 25% lift in qualified
          inbound leads traced to those magazine placements.
        </p>
        <Gallery photos={magazineAdsPhotos} />
      </div>

      {/* Merchandise & Giveaways */}
      <div className="mb-12">
        <p className="mb-6">
          To bring the Boratas brand into hands-on experiences, I designed a
          suite of event giveaways—embroidered caps, tote bags, key-holders, and
          desktop calendars—each echoing our brand. These items rolled out at
          trade shows and client visits, reinforcing our new identity in a
          tactile way. Feedback from the field was immediate: prospects kept and
          used these items, sharing unprompted social posts that extended our
          reach well beyond the booth.
        </p>
        <Gallery photos={merchPhotos} />
      </div>

      {/* Booth Deisgn */}
      <div>
        <p className="mb-6">
          Finally, I translated our refreshed identity into immersive trade-show
          environments. I designed Boratas’s booth graphics—large-format machine
          imagery with layered diagonal accents and stencil headers—plus
          coordinated signage and demo stations. By creating a cohesive,
          eye-catching space, we consistently drew larger crowds at every expo,
          and the booth became a destination for media interviews and live
          demos.
        </p>
        <Gallery photos={boothPhotos} />
      </div>
    </>
  );
}
