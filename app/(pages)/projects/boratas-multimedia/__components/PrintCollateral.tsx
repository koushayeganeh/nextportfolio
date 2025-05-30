// app/projects/boratas-multimedia/_components/PrintCollateral.tsx
"use client";

import Gallery from "@/components/Gallery";
import { boratasPrintExamples } from "@/data/boratasPrintExamples";

export default function PrintCollateral() {
  return (
    <div id="collateral">
      <h3 className="text-2xl font-semibold text-primary">
        Print &amp; Digital Collateral
      </h3>

      <p className="mb-6 text-white">
        With refreshed renders and a complete visual asset library in hand, I
        designed a suite of professional brochures, catalogs, and operation
        manuals. Each piece balances clear, concise technical information with
        bold imagery—making complex machinery easy to understand at a glance.
      </p>

      <p className="mb-8 text-white">
        These on-brand materials support both sales presentations and customer
        reference, ensuring consistency across all touchpoints.
      </p>

      <Gallery photos={boratasPrintExamples} />
    </div>
  );
}
