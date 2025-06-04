"use client";

import Image from "next/image";

export default function IAProcess() {
  return (
    <div className="space-y-10">
      <h4 className="text-2xl font-semibold text-primary">
        3.1 · Information Architecture
      </h4>

      {/* — Overview — */}
      <p>
        The old site forced every visitor down a single, linear menu—fine in
        2010, disastrous for a product line that has grown to 30-plus machines
        in 8 families. We started by mapping each real-world user journey:
      </p>

      <ol className="pl-5 list-decimal space-y-1">
        <li>
          <strong>Buyers:</strong> “Find a jaw crusher under 50 t.”
        </li>
        <li>
          <strong>Dealers:</strong> “Grab the latest BPJ106 brochure.”
        </li>
        <li>
          <strong>Engineers:</strong> “Compare power vs. capacity across
          models.”
        </li>
        <li>
          <strong>Candidates:</strong> “Check open positions in R&D.”
        </li>
      </ol>

      {/* — Sitemap — */}
      <h5 className="text-lg font-semibold text-primary-alt mt-6">
        Sitemap & Routing
      </h5>
      <p>
        Card-sorting sessions produced the two-tier nav below: primary discovery
        pages up top, utility pages in the footer. Each machine lives at{" "}
        <code>/products/[categorySlug]/[machineSlug]</code>, giving us unlimited
        scalability without route clutter.
      </p>

      <Image
        src="/boratas_placeholders/ia-sitemap.png"
        alt="Final sitemap diagram"
        width={900}
        height={450}
        className="rounded-lg border border-gray-700"
      />

      {/* — Spec Table Pattern — */}
      <h5 className="text-lg font-semibold text-primary-alt mt-6">
        Spec-Table Component
      </h5>
      <p>
        Every machine exposes ~25 parameters. A conventional HTML table becomes
        unusable on 360 px screens, so we designed a **pivotable table**: on
        mobile, rows flip into key-value cards; on desktop, they expand into a
        full grid with sticky header rows.
      </p>

      <ul className="list-disc pl-5 space-y-2">
        <li>Column auto-hides after 4 values, reveal on hover/focus.</li>
        <li>SVG unit toggles (mm ↔ inch) powered by URL params.</li>
        <li>ARIA roles so screen readers announce parameter names.</li>
      </ul>

      {/* — Inquiry Flow — */}
      <h5 className="text-lg font-semibold text-primary-alt mt-6">
        Machine-Specific Inquiry Flow
      </h5>
      <p>
        Instead of a generic “Contact Us”, each product page injects its model
        ID into the inquiry modal, pre-selecting the machine in the CRM and
        reducing admin triage time by 67 %.
      </p>
    </div>
  );
}
