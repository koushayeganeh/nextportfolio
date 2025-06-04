// app/projects/boratas-multimedia/__components/Renders.tsx
"use client";

import React from "react";

export default function AnalyticsAudit() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-primary">Analytics Audit</h3>

      <p>
        The legacy Boratas site was a semi-static portfolio with minimal
        tracking and no sitemap or robots configuration. I dug into Google
        Analytics, Search Console, and dev logs to quantify user frustration and
        SEO weaknesses.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <h5 className="font-semibold text-primary-alt mb-2">Key Findings</h5>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Zero sitemap.xml</strong> meant search bots rarely crawled
              new or updated pages—Boratas’s products seldom appeared in
              results.
            </li>
            <li>
              <strong>No form analytics</strong>—marketing relied on anecdotal
              feedback to know if leads converted, making campaign optimization
              guesswork.
            </li>
            <li>
              <strong>High bounce on mobile</strong>—users landing via ads often
              left within seconds because pages loaded slowly and lacked clear
              navigation.
            </li>
            <li>
              <strong>No clear content paths</strong>—visitors couldn’t filter
              or search for machinery specs, so even paid traffic returned
              empty-handed.
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-primary-alt mb-2">
            Opportunities & KPIs
          </h5>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Implement a dynamic XML sitemap → target{" "}
              <strong>400+ URLs indexed</strong> within days post-launch.
            </li>
            <li>
              Add form-event tracking (GA4) → measure inquiries per product to
              reduce bounce <strong>below 50%</strong>.
            </li>
            <li>
              Optimize mobile LCP (images + SSR) → achieve{" "}
              <strong>&lt;2 s</strong>
              on key pages, cutting bounce rates in half.
            </li>
            <li>
              Deploy structured data for products → aim for rich snippets in
              search results within three months.
            </li>
          </ul>
        </div>
      </div>

      <p>
        These metrics became my north-star—driving decisions around SEO,
        performance tuning, and how machine data was structured and displayed.
      </p>
    </div>
  );
}
