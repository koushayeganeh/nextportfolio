"use client";

import Image from "next/image";

export default function Localization() {
  return (
    <div className="space-y-10">
      <h4 className="text-2xl font-semibold text-primary">
        3.3 · Localization & Content Ops
      </h4>

      {/* — Strategy — */}
      <h5 className="text-lg font-semibold text-primary-alt">
        Strategy at a Glance
      </h5>

      <ul className="list-disc pl-5 space-y-2">
        <li>
          **Routing:** <code>/en</code> & <code>/tr</code> prefixes, Next.js
          middleware auto-detects browser locale.
        </li>
        <li>
          **Translation Keys:** camelCase (<code>factoryCardTitle</code>) —
          enforced via ESLint rule to avoid stray dots/underscores.
        </li>
        <li>
          **Admin Workflow:** marketing sees EN & TR fields side-by-side; saving
          updates triggers on-demand revalidate for both locales.
        </li>
        <li>
          **Sitemap & SEO:** each locale emits its own XML with
          <code>hreflang</code> pairs and canonical self-refs.
        </li>
      </ul>

      {/* — Workflow Screenshot — */}
      <Image
        src="/boratas_placeholders/locale-demo.png"
        alt="Admin translation workflow"
        width={900}
        height={450}
        className="rounded-lg border border-gray-700"
      />

      {/* — Edge Cases — */}
      <h5 className="text-lg font-semibold text-primary-alt mt-6">
        Edge-Case Handling
      </h5>

      <ul className="list-disc pl-5 space-y-2">
        <li>
          **Slug Collisions:** machine slugs unique per locale; TR diacritics
          normalized to ASCII for URL safety.
        </li>
        <li>
          **PDF Metadata:** when a new TR brochure uploads, system auto-creates
          “download-tr” event tag so GA4 reports by language.
        </li>
        <li>
          **Fallback Copy:** if a translation key is missing, Next-Intl logs to
          Sentry in non-prod, never in prod (avoids user-visible warnings).
        </li>
      </ul>
    </div>
  );
}
