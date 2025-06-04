"use client";

import Image from "next/image";

export default function VisualLanguage() {
  return (
    <div className="space-y-10">
      <h4 className="text-2xl font-semibold text-primary">
        3.2 · Visual Language & Design System
      </h4>

      {/* — Mood & Palette — */}
      <h5 className="text-lg font-semibold text-primary-alt">
        Moodboard · “Industrial Precision”
      </h5>
      <p>The palette borrows from heavy-steel finishes and safety accents:</p>

      <ul className="list-disc pl-5 space-y-2">
        <li>
          <span className="inline-block w-4 h-4 align-middle rounded bg-[#1b1d1b]" />{" "}
          Graphite #1b1d1b — base canvas
        </li>
        <li>
          <span className="inline-block w-4 h-4 align-middle rounded bg-[#292c29]" />{" "}
          Iron #292c29 — card & table chrome
        </li>
        <li>
          <span className="inline-block w-4 h-4 align-middle rounded bg-[#f2762e]" />{" "}
          Accent #f2762e — CTAs & link states
        </li>
      </ul>

      <Image
        src="/boratas_placeholders/visual-mood.png"
        alt="Color & typography moodboard"
        width={900}
        height={450}
        className="rounded-lg border border-gray-700"
      />

      {/* — Typography — */}
      <h5 className="text-lg font-semibold text-primary-alt mt-6">
        Typography & Scale
      </h5>
      <p>
        <strong>Inter</strong> handles UI copy; <strong>Space Grotesk</strong>
        numeric variant renders specs (1&nbsp;→ 3 digits align vertically),
        eliminating wobbly table columns.
      </p>

      <p className="text-sm text-gray-400">
        8-pt modular scale: 14 → 16 → 20 → 24 → 32 → 40.
      </p>

      {/* — Component Library — */}
      <h5 className="text-lg font-semibold text-primary-alt mt-6">
        Component Library
      </h5>
      <p>Built on ShadCN UI primitives, extended in Radix:</p>

      <ul className="list-disc pl-5 space-y-2">
        <li>
          DataTable (spec-heavy) with column drag & persistence (localStorage)
        </li>
        <li>Tabs → converted to &lt;Switch&gt; on mobile for one-hand use</li>
        <li>Hero video wrapper: auto-mutes, lazy-loads, fails → static JPG</li>
        <li>
          Interactive technology cards animate on scroll via Framer Motion
        </li>
      </ul>

      {/* — Iconography & Imagery — */}
      <h5 className="text-lg font-semibold text-primary-alt mt-6">
        Iconography & Imagery
      </h5>
      <p>
        Lucide-React icons, weight 1.5 px, plus custom SVG line art for
        “crushing action” diagrams exported from Blender viewport renders.
      </p>
    </div>
  );
}
