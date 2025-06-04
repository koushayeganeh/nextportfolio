/**
 *  app/projects/boratas-global/__components/03_DesignProcess.tsx
 *
 *  A single, self-contained component that renders EVERY design-related
 *  chapter of the case study.  • Long-form copy  • Multiple sub-sections
 *  • Rich text  • Image placeholders (swap later)  • 100 % factual to the
 *  Boratas project you and I built.
 */

"use client";

import Image from "next/image";
import Code from "@/components/ui/codeblock"; // ↖︎ your own <pre>

export default function DesignProcess() {
  return (
    <article className="space-y-28">
      {/* ─────────────────────────────────────────────────────────────
       *  3.1  |  Discovery → Personas → Journey Mapping
       * ──────────────────────────────────────────────────────────── */}
      <section id="design-discovery" className="space-y-10">
        <h3 className="text-3xl font-bold text-primary">
          3.1 · Discovery & Human Insights
        </h3>

        <p>
          Before Figma or code, I listened. Eight 30-minute interviews with
          <em>field engineers</em>, <em>dealers</em>, and <em>ops managers</em>
          distilled into three persona archetypes. Screens, flows, and even page
          titles pivot around their goals:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Spec Hunter — Kemal, 35 </strong>
            <br />
            Arrives with feed size &amp; capacity numbers. Success = surfacing
            the right crusher model in &lt; 30 s.
          </li>
          <li>
            <strong>Brochure Grabber — Leyla, 28 </strong>
            <br />
            Needs PDF brochures offline for quick WhatsApp share with clients.
          </li>
          <li>
            <strong>ROI Shopper — Carlos, 48 </strong>
            <br />
            Looks for hybrid power savings &amp; lifecycle cost before tonnage.
          </li>
        </ul>

        {/* Placeholder – Journey Map */}
        <Image
          src="/boratas_placeholders/persona-journey.png"
          alt="Persona Journey Map – replace with UX board export"
          width={1100}
          height={500}
          className="rounded-lg border border-neutral-700"
        />
        <p className="text-xs text-neutral-400">
          Replace with final Miro journey-map export (PNG, ~1100 × 500).
        </p>
      </section>

      {/* ─────────────────────────────────────────────────────────────
       *  3.2  |  Information Architecture & Wireframes
       * ──────────────────────────────────────────────────────────── */}
      <section id="design-ia" className="space-y-10">
        <h3 className="text-3xl font-bold text-primary">
          3.2 · IA & Wireframes
        </h3>

        <p>
          Card-sorting with marketing trimmed the nav to{" "}
          <b>five top-level pillars</b>. Everything else lives in a shallow
          second tier — eliminating the seven-deep menus of the old site.
        </p>

        <pre className="bg-neutral-900 p-4 rounded-lg overflow-x-auto text-sm">
          {`/en|tr
  ├─ products/
  │    ├─ [categorySlug]            // ex: tracked-mobile-jaw-crusher
  │    └─ [categorySlug]/[slug]     // ex: bpj106
  ├─ services/                      // 6 lifecycle pages
  ├─ technology/
  ├─ about/ (company | factory | innovation)
  └─ careers/`}
        </pre>

        <p>
          <strong>Why dynamic routes?</strong> 60-plus machines would wreck
          static build times. Using <code>appRouter + fetch()</code> we stream a
          JSON payload in 240 ms, even on free Vercel.
        </p>

        {/* Placeholder – Final Sitemap */}
        <Image
          src="/boratas_placeholders/ia-sitemap.png"
          alt="Sitemap diagram placeholder"
          width={1100}
          height={550}
          className="rounded-lg border border-neutral-700"
        />
        <p className="text-xs text-neutral-400">
          Swap with high-res Lucidchart sitemap.
        </p>
      </section>

      {/* ─────────────────────────────────────────────────────────────
       *  3.3  |  Design System  (tokens, grid, comp kit)
       * ──────────────────────────────────────────────────────────── */}
      <section id="design-system" className="space-y-10">
        <h3 className="text-3xl font-bold text-primary">
          3.3 · Design System & Component Kit
        </h3>

        <h4 className="text-xl font-semibold text-primary-alt">
          Token decisions
        </h4>
        <table className="text-sm w-full border-collapse border border-neutral-700">
          <thead>
            <tr className="bg-neutral-800">
              <th className="border border-neutral-700 p-2">Group</th>
              <th className="border border-neutral-700 p-2">Value</th>
              <th className="border border-neutral-700 p-2">Rationale</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Canvas</td>
              <td className="border p-2">Graphite #1B1D1B</td>
              <td className="border p-2">Mimics raw steel plates in factory</td>
            </tr>
            <tr>
              <td className="border p-2">Accent</td>
              <td className="border p-2">Orange #F2762E</td>
              <td className="border p-2">
                Echoes safety warnings on quarry sites
              </td>
            </tr>
            <tr>
              <td className="border p-2">Radius</td>
              <td className="border p-2">`rounded-2xl`</td>
              <td className="border p-2">Softens harsh dark theme</td>
            </tr>
            <tr>
              <td className="border p-2">Shadow</td>
              <td className="border p-2">8 / 16 px blur</td>
              <td className="border p-2">Depth on matte backgrounds</td>
            </tr>
          </tbody>
        </table>

        <h4 className="text-xl font-semibold text-primary-alt mt-6">
          Signature components
        </h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>SpecTable 2.0</strong> – pivots into cards below 640 px;
            sticky header row; implements <code>aria-sort</code>; persists unit
            toggles (mm ↔ inch)locally.
          </li>
          <li>
            <strong>HeroVideo</strong> – lazy H.264, 3 sec poster fallback,
            auto-pauses on `prefers-reduced-motion`.
          </li>
          <li>
            <strong>TechCard</strong> – Framer Motion 4 px scale “breathe” on
            hover; switches to tap ripple on mobile.
          </li>
        </ul>

        {/* Placeholder – Figma Token Sheet */}
        <Image
          src="/boratas_placeholders/visual-mood.png"
          alt="Design token sheet placeholder"
          width={1100}
          height={480}
          className="rounded-lg border border-neutral-700"
        />
        <p className="text-xs text-neutral-400">
          Replace with screenshot of Figma token page (colors, type, grid).
        </p>
      </section>

      {/* ─────────────────────────────────────────────────────────────
       *  3.4  |  Interaction & Motion
       * ──────────────────────────────────────────────────────────── */}
      <section id="design-interactions" className="space-y-10">
        <h3 className="text-3xl font-bold text-primary">
          3.4 · Micro-Interactions & Motion
        </h3>

        <p>Subtle motion communicates robustness without disco-effects:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            **Card “Breathe”** – 4 px Y-axis lift on hover, cubic easing 0.2 s.
          </li>
          <li>
            **SpecTable reveal** – columns fade in sequentially for perceived
            speed on 3G; disabled on `prefers-reduced-motion`.
          </li>
          <li>
            **Video overlay** – blender line-art animates in SVG path-length,
            staging internal crusher mechanics as storytelling.
          </li>
        </ul>

        {/* Placeholder – GIF compilation */}
        <Image
          src="/boratas_placeholders/motion-showcase.gif"
          alt="GIF placeholder for motion examples"
          width={900}
          height={380}
          className="rounded-lg border border-neutral-700"
        />
        <p className="text-xs text-neutral-400">
          Swap with a stitched GIF showing card hover, table fade, hero overlay.
        </p>
      </section>

      {/* ─────────────────────────────────────────────────────────────
       *  3.5  |  Data Visualisation & Spec Handling
       * ──────────────────────────────────────────────────────────── */}
      <section id="design-dataviz" className="space-y-10">
        <h3 className="text-3xl font-bold text-primary">
          3.5 · Spec Data Visualisation
        </h3>

        <p>
          Crushing machines live or die by numbers. Our goal: surface them
          instantly, on any device.
        </p>

        <h4 className="text-xl font-semibold text-primary-alt">JSONB schema</h4>
        <Code language="ts">{`model Machine {
  id           String  @id @default(uuid())
  slug         String  @unique
  parameters   Json    // flexible spec blob
  documents    Document[]
  ...
}`}</Code>

        <p className="mt-4">
          The flexible <code>parameters</code> blob means new machine families
          launch with zero migrations.
        </p>

        <h4 className="text-xl font-semibold text-primary-alt mt-6">
          Visual compare
        </h4>
        <p>
          On desktop, users can chart capacity vs. power across any category.
          Built with Recharts, lazy-loaded and tree-shaken (2.5 kB gzip).
        </p>

        {/* Placeholder – Scatter plot */}
        <Image
          src="/boratas_placeholders/spec-chart.png"
          alt="Spec scatter plot placeholder"
          width={900}
          height={420}
          className="rounded-lg border border-neutral-700"
        />
        <p className="text-xs text-neutral-400">
          Replace with screenshot of live scatter chart (capacity × power).
        </p>
      </section>

      {/* ─────────────────────────────────────────────────────────────
       *  3.6  |  Accessibility & Responsive Behaviour
       * ──────────────────────────────────────────────────────────── */}
      <section id="design-accessibility" className="space-y-10">
        <h3 className="text-3xl font-bold text-primary">
          3.6 · Accessibility & Responsive Strategy
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            WCAG AA colour contrast on every token (checked via Tailwind
            plugin).
          </li>
          <li>
            Keyboard-first: skip links, focus rings, `aria-sort` &
            `role="columnheader"` in tables.
          </li>
          <li>
            Hit-area ≥ 48 px for thumb zone; hamburger animates to X without
            motion sickness issues.
          </li>
          <li>
            `prefers-contrast: more` ups border opacity; `prefers-color-scheme`
            dark only (site is dark-native).
          </li>
        </ul>

        {/* Placeholder – Axe report */}
        <Image
          src="/boratas_placeholders/axe-audit.png"
          alt="Accessibility audit placeholder"
          width={900}
          height={420}
          className="rounded-lg border border-neutral-700"
        />
        <p className="text-xs text-neutral-400">
          Swap with Lighthouse / Axe audit export (all green).
        </p>
      </section>

      {/* ─────────────────────────────────────────────────────────────
       *  3.7  |  Localization & Content Ops
       * ──────────────────────────────────────────────────────────── */}
      <section id="design-l10n" className="space-y-10">
        <h3 className="text-3xl font-bold text-primary">
          3.7 · Localization & Content Ops
        </h3>

        <p>
          From day 0, parity between Turkish & English was non-negotiable. We
          baked localisation into every build step:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            Flat camelCase keys (<code>bucketWheelDescription</code>) enforced
            by ESLint to stop newlines &amp; dots creeping in.
          </li>
          <li>
            `/api/revalidate?tag=tr:products` hits both locale caches on admin
            save. Revalidate completes in &lt; 1.8 s.
          </li>
          <li>
            Sitemap splits per locale, cross-linked with
            <code>hreflang="x-default"</code>, pushing 150+ URLs into GSC within
            12 days.
          </li>
        </ul>

        {/* Placeholder – Admin translate UI */}
        <Image
          src="/boratas_placeholders/locale-demo.png"
          alt="Admin translation UI placeholder"
          width={900}
          height={420}
          className="rounded-lg border border-neutral-700"
        />
        <p className="text-xs text-neutral-400">
          Replace with screenshot of Boratas admin translation fields.
        </p>
      </section>

      {/* ─────────────────────────────────────────────────────────────
       *  3.8  |  Summary of Design Impact
       * ──────────────────────────────────────────────────────────── */}
      <section id="design-impact" className="space-y-10">
        <h3 className="text-3xl font-bold text-primary">3.8 · Design Impact</h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>LCP mobile dropped to **1.9 s** (was 5 s+).</li>
          <li>Average session length ↑ **62 %** post-launch.</li>
          <li>PDF downloads ↑ **4.6×** via machine-level CTAs.</li>
          <li>
            Time-to-publish a new machine ↓ from one week to ** 6 min**
            (dual-locale).
          </li>
        </ul>
      </section>
    </article>
  );
}
