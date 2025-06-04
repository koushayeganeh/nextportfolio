// app/projects/boratas-multimedia/__components/Renders.tsx
"use client";

import React from "react";

export default function Competitive() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-primary">Competitive Audit</h3>

      <p>
        To understand where Boratas stood, I reviewed the broader heavy-
        machinery landscape—examining how leading manufacturers present product
        data, guide inquiries, and optimize user flows. Although no single site
        perfectly matched Boratas’s needs, these common patterns emerged:
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <h5 className="font-semibold text-primary-alt mb-2">
            Industry Best Practices
          </h5>
          <ul className="list-disc pl-5 space-y-2">
            <li>Clean, filterable spec tables with inline unit conversions</li>
            <li>Clear “Request a Quote” CTAs on each product page</li>
            <li>Downloadable PDF brochures accessible without extra steps</li>
            <li>Responsive, mobile-first layouts that work on shop floors</li>
            <li>Multi-language support centered on local and global buyers</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-primary-alt mb-2">
            Boratas’s Site Gaps
          </h5>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              No dedicated product pages—equipment details buried in static HTML
            </li>
            <li>Opaque “Contact Us” form with no machine-specific context</li>
            <li>PDFs scattered and not easily discoverable or searchable</li>
            <li>
              Poor mobile usability: navigation menus and tables not optimized
            </li>
          </ul>
        </div>
      </div>

      <p>
        Identifying these industry patterns and Boratas’s gaps guided our
        decision to build a site that combined clear spec presentation,
        intuitive inquiries, and robust bilingual content—raising Boratas to the
        same level (or beyond) of its peers.
      </p>
    </div>
  );
}
