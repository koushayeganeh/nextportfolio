// components/CaseStudyTemplate.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export type SectionDef = {
  id: string;
  label: string;
  children?: SectionDef[];
};

interface CaseStudyTemplateProps {
  title: string; // for the hero H1
  hero: React.ReactNode; // banner markup
  sections: SectionDef[]; // the nav tree
  atAGlance: [string, string][]; // key/value pairs
  techStack: string[];
  children: React.ReactNode; // your <Section id=…> blocks
}

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
    <section id={id} className="py-16 scroll-mt-24">
      <h2 className="text-3xl font-bold text-white mb-6">{title}</h2>
      <div className="prose prose-invert max-w-none">{children}</div>
    </section>
  );
}

export default function CaseStudyTemplate({
  title,
  hero,
  sections,
  atAGlance,
  techStack,
  children,
}: CaseStudyTemplateProps) {
  const [active, setActive] = useState(sections[0].id);

  // scroll-spy
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) obs.observe(el);
      if (sec.children) {
        sec.children.forEach((sub) => {
          const el2 = document.getElementById(sub.id);
          if (el2) obs.observe(el2);
        });
      }
    });
    return () => obs.disconnect();
  }, [sections]);

  function renderNav(items: SectionDef[], depth = 0) {
    return (
      <ul className={`${depth > 0 ? "pl-4" : ""} space-y-2`}>
        {items.map((s) => (
          <li key={s.id}>
            <a
              href={"#" + s.id}
              className={`block hover:text-white transition-colors ${
                active === s.id ? "text-white font-semibold" : "text-gray-400"
              } ${depth > 0 ? "text-sm" : ""}`}
            >
              {s.label}
            </a>
            {s.children && renderNav(s.children, depth + 1)}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <article className="bg-background text-foreground">
      {/* HERO */}
      {hero}

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12">
        {/* Side nav */}
        <nav className="hidden lg:block w-48 shrink-0 sticky top-24 self-start">
          {renderNav(sections)}
        </nav>

        <div className="flex-1 space-y-16">
          {/* At-a-glance */}
          <section className="bg-gray-900 rounded-lg p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {atAGlance.map(([label, val]) => (
              <div key={label}>
                <h4 className="text-sm text-gray-400 uppercase mb-1">
                  {label}
                </h4>
                <p className="text-white font-medium">{val}</p>
              </div>
            ))}
          </section>

          {/* Tech Stack */}
          <section className="bg-gray-900 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tool) => (
                <span
                  key={tool}
                  className="bg-primary-alt/80 text-white px-3 py-1 rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>

          {/* Mobile nav */}
          <nav className="lg:hidden sticky top-16 bg-background py-2 z-20">
            <ul className="flex overflow-x-auto gap-4 text-sm">
              {sections.map((s) => (
                <li key={s.id} className="flex-shrink-0">
                  <a
                    href={"#" + s.id}
                    className={`block px-2 whitespace-nowrap hover:text-white transition-colors ${
                      active === s.id
                        ? "text-white font-semibold"
                        : "text-gray-400"
                    }`}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Your passed sections */}
          {children}

          {/* Back CTA */}
          <footer className="py-16 text-center">
            <Link
              href="/projects"
              className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primary-alt transition"
            >
              ← Back to All Projects
            </Link>
          </footer>
        </div>
      </div>
    </article>
  );
}
