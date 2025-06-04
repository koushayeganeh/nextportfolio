"use client";

import Link from "next/link";

export default function ProjectContext() {
  return (
    <div>
      {/* ——— Goals ——— */}
      <div id="goals" className="space-y-6 mb-16 scroll-mt-24">
        <h3 className="text-xl font-semibold text-primary">Project Goals</h3>

        <p>
          Boratas' old website no longer reflected their technical leadership or
          supported the complex needs of engineers, dealers, and global buyers.
          These high-level goals guided every design and development decision:
        </p>

        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Elevate Brand Perception.</strong> Boratas competes with
            heavy hitters like Sandvik and Metso. The new site needed a polished
            look and consistent visual language—colors, typography, and
            layouts—that conveyed engineering excellence while staying
            approachable to international audiences.
          </li>
          <li>
            <strong>Surface Complex Data Clearly.</strong> Each machine model
            has dozens of technical specs, multiple images, and downloadable PDF
            brochures. We had to present this data in intuitive tables and cards
            so engineers can compare parameters at a glance, and marketing can
            emphasize key benefits without overwhelming end users.
          </li>
          <li>
            <strong>Empower the In-House Team.</strong> Marketing and sales
            needed a self-serve admin panel—not a generic off-the-shelf CMS—to
            quickly add new machines, update specs, upload PDFs, and manage
            inquiries and marketing libraries. Reducing the turnaround from a
            week to mere hours was critical.
          </li>
        </ul>
      </div>

      {/* ——— My Role ——— */}
      <div id="role" className="space-y-6 mb-16 scroll-mt-24">
        <h3 className="text-xl font-semibold text-primary">My Role</h3>

        <p>
          As the sole designer-developer on this engagement, I managed the
          project from initial discovery through to post-launch monitoring. That
          included everything from stakeholder interviews to design, coding,
          testing, and deployment—all within a three-month window.
        </p>

        <p>
          <strong>Why me, and not a full agency?</strong> Boratas had worked
          with external vendors in the past, but those projects often dragged on
          and resulted in disjointed handoffs. I was selected because:
        </p>

        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Deep Domain Familiarity.</strong> Having collaborated with
            Boratas’s sales and engineering teams on previous collateral, I
            already understood the nuances of crusher and screening
            terminology—and how engineers evaluate specs.
          </li>
          <li>
            <strong>Full-Stack Expertise.</strong> Building a data-intensive
            industrial catalog requires tight integration between front-end
            components and a performant back end. My ability to own both sides
            eliminated the need for cross-team coordination.
          </li>
          <li>
            <strong>Agile & Cost-Effective.</strong> With budget constraints and
            a short timeline, a single point of contact ensured rapid iterations
            and zero wasted hours on vendor onboarding. Boratas favored a lean
            approach over a large team with higher overhead.
          </li>
        </ul>

        <p>
          <strong>Core Responsibilities:</strong>
        </p>

        <ul className="list-disc pl-5 space-y-2">
          <li>
            Conducted user and competitive research, plus analytics audit.
          </li>
          <li>
            Defined sitemap, information architecture, and wireframes in Figma.
          </li>
          <li>
            Built a design system (grid, typography, tokens) and UI components.
          </li>
          <li>
            Developed front-end with Next.js 14, React 18, Tailwind CSS, and
            ShadCN UI.
          </li>
          <li>
            Implemented back-end using Prisma ORM, PostgreSQL, and Cloudflare
            R2.
          </li>
          <li>
            Engineered a custom admin panel with role-based access for marketing
            and sales.
          </li>
          <li>
            Optimized SEO, Core Web Vitals, and configured analytics/event
            batching.
          </li>
          <li>
            Coordinated stakeholder demos, performed QA, and launched on Vercel.
          </li>
        </ul>
      </div>

      {/* ——— The Constraints ——— */}
      <div id="constraints" className="space-y-6 mb-16 scroll-mt-24">
        <h3 className="text-xl font-semibold text-primary">Key Constraints</h3>

        <p>
          From day one, we faced tight deadlines, technical complexities, and
          budgetary limits. Staying mindful of these constraints shaped every
          architectural decision and UI pattern:
        </p>

        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Solo Build, Limited Timeline.</strong> With only 90 days to
            completion and no additional developers, every feature sprint had to
            deliver maximum value with minimal code duplication.
          </li>
          <li>
            <strong>Industry Complexity.</strong> The crushing and screening
            sector has dozens of product families, each with unique parameters
            (e.g., feed size, capacity, power rating). Modeling this in a
            relational database—and rendering it in a clean, filterable UI—was
            nontrivial.
          </li>
          <li>
            <strong>Performance Budget.</strong> Boratas uses Neon’s Launch plan
            (300 compute hours/month) and Vercel’s Pro transform quota. To avoid
            overages, we had to batch page-view analytics, minimize real-time
            queries, and selectively disable Next.js image transformations when
            possible.
          </li>
          <li>
            <strong>SEO & Domain Migration.</strong> Migrating from an old
            subdomain to <code>www.boratasglobal.com</code> risked ranking
            drops. We needed dynamic sitemaps, proper canonical tags, and zero
            broken URLs during the switchover.
          </li>
          <li>
            <strong>Privacy & Compliance.</strong> Storing customer emails and
            hashed IPs for PDF downloads required KVKK/GDPR compliance. All
            forms needed ReCAPTCHA, and any logged IPs had to be anonymized
            before insertion.
          </li>
        </ul>
      </div>
    </div>
  );
}
