// components/CaseStudyTemplate.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/container";
import BoratasPhotoManipulation from "./__components/BoratasPhotoManipulation";
import PhotographyAndEditing from "./__components/PhotographyAndEditing";
import Renders from "./__components/Renders";
import GraphicsSection from "./__components/GraphicsSection";
import VideosSection from "./__components/VideosSection";
import ProjectContext from "./__components/ProjectContext";
import Hero from "./__components/Hero";
import PrintCollateral from "./__components/PrintCollateral";
import BrandGuidelines from "./__components/BrandGuidelines";
import SocialMediaSection from "./__components/SocialMediaSection";
import PromotionalMaterialsSection from "./__components/Advertising";
type NavItem = {
  id: string;
  label: string;
  children?: { id: string; label: string }[];
};

const SECTIONS: NavItem[] = [
  {
    id: "context",
    label: "Project Context",
    children: [
      { id: "my-role", label: "My Role" },
      { id: "problem", label: "The Problem" },
      { id: "approach", label: "My Approach" },
    ],
  },
  {
    id: "phase-1",
    label: "Phase 1: Asset Creation",
    children: [
      { id: "photography", label: "Photography & Editing" },
      { id: "photo-manipulation", label: "Photo Manipulation" },
      { id: "3d-renders", label: "3D Renders" },
      { id: "graphics", label: "Graphics" },
      { id: "videos", label: "Videography & Edit" },
    ],
  },
  {
    id: "phase-2",
    label: "Phase 2: Brand & Distribution",
    children: [
      { id: "collateral", label: "Print & Digital Collateral" },
      { id: "guidelines", label: "Brand Guidelines" },
      { id: "social-media", label: "Social Media" },
      { id: "promotional", label: "Strategic Promotional Material" },
    ],
  },
  {
    id: "phase-3",
    label: "Phase 3: New Website",
    children: [{ id: "website-overview", label: "Overview & Link →" }],
  },
  {
    id: "impact",
    label: "Results & Impact",
  },
];

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

export default function BoratasMultiMedia() {
  const [active, setActive] = useState(SECTIONS[0].id);

  // scroll-spy: observe all section + child anchors
  useEffect(() => {
    const ids = SECTIONS.flatMap((s) =>
      s.children ? [s.id, ...s.children.map((c) => c.id)] : [s.id]
    );
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
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
      {/* HERO / Banner */}
      <section id="overview" className="bg-foreground text-background mb-12">
        <Hero />
      </section>

      {/* top-level layout */}
      <Container>
        <div className="mx-auto px-4 flex flex-col lg:flex-row gap-16">
          {/* Desktop nav */}
          <nav className="hidden lg:block w-56 shrink-0 sticky top-24 self-start">
            <ul className="space-y-4">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={`block text-gray-400 hover:text-white transition-colors ${
                      active === s.id ? "text-white font-semibold" : ""
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
                            className={`block text-gray-500 hover:text-white transition-colors ${
                              active === c.id ? "text-white font-medium" : ""
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

          <div className="flex-1 space-y-8">
            {/* ——— At a Glance ——— */}
            <section className="bg-[#1b1d1b] rounded-lg p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                ["Role", "Lead Multimedia Designer"],
                ["Timeline", "2020 – Present"],
                ["Media Channels", "Print • Digital • Web"],
                ["Team", "Collaborated with Sales & Engineering teams"],
              ].map(([label, value]) => (
                <div key={label}>
                  <h4 className="text-sm text-primary-alt uppercase mb-1">
                    {label}
                  </h4>
                  <p className="text-white font-medium">{value}</p>
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
                  "Adobe Photoshop",
                  "Adobe Illustrator",
                  "Adobe Indesign",
                  "Premiere Pro",
                  "After Effects",
                  "Figma",
                  "Blender",
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

            {/* Mobile nav */}
            <nav className="lg:hidden sticky top-16 bg-background py-2 z-20">
              <ul className="flex overflow-x-auto gap-4 text-sm">
                {SECTIONS.flatMap((s) => [
                  <li key={s.id} className="flex-shrink-0">
                    <a
                      href={`#${s.id}`}
                      className={`block px-2 whitespace-nowrap text-gray-400 hover:text-white transition ${
                        active === s.id ? "text-white font-semibold" : ""
                      }`}
                    >
                      {s.label}
                    </a>
                  </li>,
                  ...(s.children || []).map((c) => (
                    <li key={c.id} className="flex-shrink-0 pl-4">
                      <a
                        href={`#${c.id}`}
                        className={`block px-2 whitespace-nowrap text-gray-500 hover:text-white transition ${
                          active === c.id ? "text-white font-medium" : ""
                        }`}
                      >
                        {c.label}
                      </a>
                    </li>
                  )),
                ])}
              </ul>
            </nav>

            {/* Project Context (single section with 3 sub-headings) */}
            <Section id="context" title="Project Context">
              <div className="scroll-mt-24 py-8">
                <ProjectContext />
              </div>
            </Section>

            {/* Phase 1 */}
            <Section id="phase-1" title="Phase 1: Asset Creation">
              <div id="photography" className="scroll-mt-24 py-8">
                <PhotographyAndEditing />
              </div>

              <div id="photo-manipulation" className="scroll-mt-24 py-8">
                <BoratasPhotoManipulation />
              </div>

              <div id="3d-renders" className="scroll-mt-24 py-8">
                <Renders />
              </div>

              <div id="graphics" className="scroll-mt-24 py-8">
                <GraphicsSection />
              </div>

              <div id="videos" className="scroll-mt-24 py-8">
                <VideosSection />
              </div>
            </Section>

            {/* Step 2 */}
            <Section id="phase-2" title="Phase 2: Brand & Distribution">
              <div id="collateral" className="scroll-mt-24 py-8">
                <PrintCollateral />
              </div>

              <div id="guidelines" className="scroll-mt-24 py-8">
                <BrandGuidelines />
              </div>

              <div id="social-media" className="scroll-mt-24 py-8">
                <SocialMediaSection />
              </div>

              <div id="promotional" className="scroll-mt-24 py-8">
                <PromotionalMaterialsSection />
              </div>
            </Section>

            {/* ——— Phase 3: New Website & Full-Stack Case Study ——— */}
            <Section id="phase-3" title="Phase 3: New Website">
              <p className="mb-4">
                As Boratas’s Lead Multimedia Designer, I knew our vibrant new
                visual identity deserved more than a templated site—it needed a
                bespoke platform built from the ground up. So I wore my
                designer-developer hat and led the full Next.js rebuild:
                translating pixel-perfect Figma screens into responsive React
                components, architecting server-side data fetching for
                lightning-fast loads, and even spinning up a custom headless CMS
                and admin panel so the marketing team could publish rich photo,
                video, and 3D assets without asking me for code.
              </p>
              <p className="mb-4">
                On the front end, I crafted interactive galleries, embedded our
                signature 3D renders, and ensured accessibility and SEO best
                practices were baked in. Behind the scenes, I implemented
                serverless API routes for dynamic content, optimized every image
                and script for Core Web Vitals, and set up analytics dashboards
                to track engagement and conversions.
              </p>
              <p className="mb-6">
                This overview keeps the focus on the multimedia journey—if you’d
                like a deep dive into the architecture, performance benchmarks,
                and admin workflows, head over to the dedicated Website Case
                Study.
              </p>
              <Link
                href="/projects/boratas-website"
                className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg shadow hover:bg-primary-alt transition"
              >
                View the Website Case Study
              </Link>
            </Section>

            {/* Results & Impact */}
            <Section id="impact" title="Results &amp; Impact">
              {/* Intro narrative */}
              <p className="mb-4">
                What started as a scattered collection of photos, renders, and
                ad-hoc posts has become a cohesive, polished visual ecosystem.
                This transformation not only unlocked efficiencies but truly
                elevated Boratas’s presence—projecting the confident,
                market-leading international brand it always aspired to be.
              </p>

              {/* Key metrics */}
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>
                  <strong>Faster campaign launches</strong> — A curated,
                  on-brand asset library and templated collateral slashed
                  marketing’s time-to-market by nearly one-third.
                </li>
                <li>
                  <strong>Boost in engagement</strong> — Consistent color
                  grading and a unified design language drove social
                  interactions higher, reinforcing brand recall across global
                  markets.
                </li>
                <li>
                  <strong>Fewer ad-hoc design requests</strong> — Self-service
                  digital brochures and ready-made templates empowered Sales to
                  work independently, freeing up design bandwidth for strategic
                  initiatives.
                </li>
                <li>
                  <strong>Shorter review cycles</strong> — Cross-functional
                  alignment workshops with Engineering, Sales, and Development
                  streamlined approvals and kept hand-offs on track.
                </li>
              </ul>

              {/* Brand elevation narrative */}
              <p className="mb-6">
                Beyond efficiency, the new visual identity gave Boratas the
                professional, high-caliber look it deserved—elevating it from a
                strong regional player to a truly international brand.
              </p>

              {/* Link out to website case study */}
              <p>
                To see how this visual momentum carried over into a
                lightning-fast, SEO-optimized Next.js platform—and how I led
                that full-stack rebuild—check out the{" "}
                <Link
                  href="/projects/boratas-website"
                  className="text-primary hover:underline transition"
                >
                  Boratas Website Case Study
                </Link>
                .
              </p>
            </Section>
          </div>
        </div>
      </Container>
    </article>
  );
}
