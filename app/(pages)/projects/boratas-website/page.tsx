"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/container";

/* ——— stub blocks (replace with real content) ——— */
import Hero from "./__components/Hero";

import Competitive from "./__components/CompetitiveAudit";
import AnalyticsAudit from "./__components/AnalyticsAudit";

import IAProcess from "./__components/IAProcess";
import VisualLanguage from "./__components/VisualLanguage";
import Localization from "./__components/Localization";

import StackDiagram from "./__components/TechStack";
import DataArch from "./__components/DataArchitecture";
import AdminShowcase from "./__components/AdminPanel";
import FileWorkflow from "./__components/FileWorkflow";

import CWVResults from "./__components/CWV";
import SEOWins from "./__components/SEOWins";

import ImpactMetrics from "./__components/Impact";
import Learnings from "./__components/Learnings";
import ProjectContext from "./__components/ProjectContext";
import DesignProcess from "./__components/03_DesignProcess";
/* ———————————————————————————————— */

type NavItem = {
  id: string;
  label: string;
  children?: { id: string; label: string }[];
};

/** ----- NAVIGATION MAP ----- */
const NAV: NavItem[] = [
  {
    id: "context",
    label: "1. Context",
    children: [
      { id: "goals", label: "Goals" },
      { id: "role", label: "My Role" },
      { id: "constraints", label: "Constraints" },
    ],
  },
  {
    id: "discovery",
    label: "2. Discovery",
    children: [
      { id: "competitive", label: "Competitive Audit" },
      { id: "analytics", label: "Analytics Review" },
    ],
  },
  {
    id: "design",
    label: "3. Design",
    children: [
      { id: "ia", label: "IA & Flows" },
      { id: "visual", label: "Visual System" },
      { id: "locale", label: "Localization" },
    ],
  },
  {
    id: "engineering",
    label: "4. Engineering",
    children: [
      { id: "stack", label: "Stack Overview" },
      { id: "data", label: "Data Architecture" },
      { id: "admin", label: "Admin Panel" },
      { id: "files", label: "File Workflow" },
    ],
  },
  {
    id: "performance",
    label: "5. Performance",
    children: [
      { id: "cwv", label: "Core-Web-Vitals" },
      { id: "seo", label: "SEO Strategy" },
    ],
  },
  {
    id: "outcomes",
    label: "6. Outcomes",
    children: [
      { id: "impact", label: "Impact Metrics" },
      { id: "lessons", label: "Key Learnings" },
    ],
  },
  { id: "next", label: "7. Next Steps" },
];

/** ----- section shell ----- */
function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-20 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-10">{title}</h2>
      <div className="prose prose-invert max-w-none">{children}</div>
    </section>
  );
}

export default function BoratasGlobalCaseStudy() {
  const [active, setActive] = useState(NAV[0].id);

  /* ——— scroll-spy ——— */
  useEffect(() => {
    const ids = NAV.flatMap((s) =>
      s.children ? [s.id, ...s.children.map((c) => c.id)] : [s.id]
    );
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-50% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <article className="bg-background text-foreground">
      {/* ——— HERO ——— */}
      <section id="overview" className="bg-foreground text-background mb-12">
        <Hero />
      </section>

      <Container>
        <div className="mx-auto px-4 flex flex-col lg:flex-row gap-16">
          {/* side-nav */}
          <nav className="hidden lg:block w-56 shrink-0 sticky top-24 self-start">
            <ul className="space-y-4">
              {NAV.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={`block transition ${
                      active === s.id
                        ? "text-white font-semibold"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {s.label}
                  </a>
                  {s.children && (
                    <ul className="mt-2 space-y-2 pl-4">
                      {s.children.map((c) => (
                        <li key={c.id}>
                          <a
                            href={`#${c.id}`}
                            className={`block text-sm transition ${
                              active === c.id
                                ? "text-white font-medium"
                                : "text-gray-500 hover:text-white"
                            }`}
                          >
                            {c.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* content */}
          <div className="flex-1 space-y-8">
            {/* AT-A-GLANCE CARD */}
            <section className="bg-[#1b1d1b] rounded-lg p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                ["Role", "Full-Stack Designer-Developer"],
                ["Timeline", "Feb ’25 → May ’25"],
                [
                  "Highlights",
                  "Secure role-based admin panel • Hybrid SSR/ISR • Optimized Core Web Vitals • Dynamic multilingual content • Industry-specific UI & data schema",
                ],
              ].map(([k, v]) => (
                <div key={k}>
                  <h4 className="text-sm uppercase text-primary-alt mb-1">
                    {k}
                  </h4>
                  <p className="font-medium">{v}</p>
                </div>
              ))}
            </section>

            {/* ——— Tech Stack ——— */}
            <section className="bg-[#1b1d1b] rounded-lg p-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Figma",
                  "Adobe Photoshop",
                  "Adobe Illustrator",
                  "Next.js 14",
                  "React 18",
                  "TypeScript",
                  "Tailwind CSS",
                  "ShadCN UI",
                  "Prisma ORM",
                  "PostgreSQL",
                  "Cloudflare",
                  "NextAuth.js",
                  "Vercel",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="bg-[#292c29] text-primary-alt px-3 py-1 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </section>

            {/* Project Context (single section with 3 sub-headings) */}
            <Section id="context" title="Project Context">
              <div className="scroll-mt-24 py-8">
                <ProjectContext />
              </div>
            </Section>

            {/* 2. DISCOVERY */}
            <Section id="discovery" title="2 · Discovery & Research">
              <div id="competitive" className="mb-16 scroll-mt-24">
                <Competitive />
              </div>
              <div id="analytics" className="mb-16 scroll-mt-24">
                <AnalyticsAudit />
              </div>
            </Section>

            {/* 3. DESIGN */}
            <Section id="design" title="3 · Design Process">
              <div id="design">
                <DesignProcess />
              </div>
            </Section>

            {/* 4. ENGINEERING */}
            <Section id="engineering" title="4 · Engineering Highlights">
              <div id="stack">
                <StackDiagram />
              </div>
              <div id="data">
                <DataArch />
              </div>
              <div id="admin">
                <AdminShowcase />
              </div>
              <div id="files">
                <FileWorkflow />
              </div>
            </Section>

            {/* 5. PERFORMANCE */}
            <Section id="performance" title="5 · Performance & SEO">
              <div id="cwv">
                <CWVResults />
              </div>
              <div id="seo">
                <SEOWins />
              </div>
            </Section>

            {/* 6. OUTCOMES */}
            <Section id="outcomes" title="6 · Outcomes">
              <div id="impact">
                <ImpactMetrics />
              </div>
              <div id="lessons">
                <Learnings />
              </div>
            </Section>

            {/* 7. NEXT STEPS */}
            <Section id="next" title="7 · Next Steps">
              <ul>
                <li>Migrate image delivery to Cloudflare Images.</li>
                <li>Add edge-cached on-site search.</li>
                <li>Auto-generate multilingual PDF spec sheets.</li>
              </ul>
            </Section>

            {/* back-link */}
            <footer className="py-24 text-center">
              <Link
                href="/projects"
                className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primary-alt transition"
              >
                ← Back to All Projects
              </Link>
            </footer>
          </div>
        </div>
      </Container>
    </article>
  );
}
