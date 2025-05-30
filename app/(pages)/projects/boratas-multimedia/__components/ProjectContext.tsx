"use client";

import Link from "next/link";

export default function ProjectContext() {
  return (
    <div>
      {/* ——— My Role ——— */}
      <div className="mb-8">
        <h3
          id="my-role"
          className="text-2xl font-semibold text-primary mb-4 scroll-mt-24"
        >
          My Role
        </h3>
        <p className="mb-8 text-white">
          As Lead Multimedia Designer at Boratas, I drove the end-to-end visual
          strategy: from organizing high-quality photo & video assets, through
          crafting 3D renders, motion graphics, and print collateral, all the
          way to the website handoff. My work unfolded in three strategic
          phases, each building on the last to elevate the brand’s global
          presence.
        </p>
      </div>

      {/* ——— The Problem ——— */}
      <div className="mb-8">
        <h3
          id="problem"
          className="text-2xl font-semibold text-primary mb-4 scroll-mt-24"
        >
          The Problem
        </h3>
        <p className="mb-8 text-white">
          Boratas had rapidly broken into new international markets, but with
          production and sales as the sole focus, it lacked the visual assets
          and brand strategy to sustain that momentum. Assets were scattered,
          unedited, and inconsistent; social posts were sporadic and
          low-quality; and the outdated, buggy website left many products
          without imagery. As a result, orders plateaued despite growing
          awareness.
        </p>
      </div>

      {/* ——— My Approach ——— */}
      <div>
        <h3
          id="approach"
          className="text-2xl font-semibold text-primary mb-4 scroll-mt-24"
        >
          My Approach
        </h3>
        <p className="mb-8 text-white">
          I kicked off with a full audit—cataloguing every existing asset,
          learning Boratas’s product lines, and benchmarking competitors and
          customer expectations. That discovery informed a three-phase plan,
          starting with creating the foundational visuals.
        </p>

        <div className=" max-w-[800px]">
          {/* ——— Phase 1: Asset Creation ——— */}
          <div>
            <h4 className="text-lg font-semibold text-primary-alt mt-12 mb-2">
              Phase 1: Asset Creation
            </h4>
            <p className="mb-6">
              I began by establishing a centralized asset library of
              meticulously curating high-resolution photographs, video clips,
              illustrations, and graphic elements. This organized archive
              ensured every subsequent design effort was grounded in on-brand,
              on-point visual material.
            </p>
          </div>

          {/* ——— Phase 2: Brand & Distribution ——— */}
          <div>
            <h4 className="text-lg font-semibold text-primary-alt mt-12 mb-4">
              Phase 2: Brand &amp; Distribution
            </h4>
            <p className="text-white">
              After forming an asset archive, I applied our new visual language
              to every touchpoint—designing polished print and digital
              collateral, crafting a series of social-media posts and videos,
              and formalizing it all into a concise brand guideline. This
              ensured a consistent, high-impact presence as Boratas expanded
              into global markets.
            </p>
          </div>

          {/* ——— Phase 3: New Website ——— */}
          <div>
            <h4 className="text-lg font-semibold text-primary-alt mt-12 mb-2">
              Phase 3: New Website
            </h4>
            <p className="mb-4">
              With refreshed visuals and a proven social strategy driving over
              80% of our site traffic, it was time for a full site rebuild:
              end-to-end UX/UI, front- and back-end development, and performance
              tuning to match the new brand standard.
            </p>
            <Link
              href="/projects/boratas-website"
              className="inline-block text-primary-alt hover:text-primary transition"
            >
              View Website Case Study →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
