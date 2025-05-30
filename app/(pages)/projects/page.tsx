// app/projects/page.tsx
"use client";

import { useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import SectionWithProfessionalSkills from "@/components/SectionWithProfessionalSkills";
import ExperienceBlock from "@/components/ExperienceBlock";
// import ScrollIndicator from "@/helpers/ScrollIndicator";

export default function ProjectsPage() {
  const router = useRouter();
  const anchorRef = useRef<HTMLDivElement>(null);

  const scrollToAnchor = useCallback(() => {
    anchorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const goToCaseStudy = useCallback(
    (slug: string) => {
      router.push(`/projects/${slug}`);
    },
    [router]
  );

  return (
    <div className="relative bg-dark-background text-white overflow-hidden">
      {/* <ScrollIndicator color="var(--primary)" /> */}

      <SectionWithProfessionalSkills
        titleText="Creativity & Strategy"
        subtitleText="Multimedia designs, innovative marketing solutions, and captivating digital content"
        videoSrc="/data/videos/12.mp4"
        onArrowClick={scrollToAnchor}
      />

      <div
        ref={anchorRef}
        className="flex flex-col items-center gap-10 py-16 px-4 md:px-8"
      >
        <ExperienceBlock
          title="Boratas +"
          slug="boratas-website"
          position="Full-Stack Designer & Developer"
          date="Jan 2025 – May 2025"
          tags={[
            "Next.js",
            "PostgreSQL",
            "TypeScript",
            "Tailwind CSS",
            "ShadCN UI",
            "Prisma",
            "Cloudflare",
            "Custom CMS",
            "Vercel",
          ]}
          videoSrc="/data/projects/boratas/cover-video.mp4"
          onExplore={() => goToCaseStudy("boratas-website")}
        />

        <ExperienceBlock
          title="Boratas"
          slug="boratas-multimedia"
          position="Multimedia Design"
          date="2020 – Present"
          tags={[
            "direction",
            "brand identity",
            "digital design",
            "print design",
            "graphic",
            "video",
            "3D",
            "animation",
            "web design",
            "social media",
          ]}
          videoSrc="/data/projects/boratas/cover-video.mp4"
          onExplore={() => goToCaseStudy("boratas-multimedia")}
        />

        <ExperienceBlock
          title="Rends"
          slug="rends"
          position="Full-Stack Design"
          date="2023 – In Progress"
          tags={[
            "ui/ux design",
            "web design",
            "graphic assets",
            "iconography",
            "front-end development",
          ]}
          videoSrc="/data/projects/rends/cover-video.mp4"
          onExplore={() => goToCaseStudy("rends")}
        />

        <ExperienceBlock
          title="Rezcult"
          slug="rezcult"
          position="Digital Design"
          date="2023"
          tags={[
            "brand design",
            "logo design",
            "graphic design",
            "video",
            "motion graphic",
            "social media content",
          ]}
          videoSrc="/data/projects/rezcult/cover-video.mp4"
          onExplore={() => goToCaseStudy("rezcult")}
        />

        <ExperienceBlock
          title="Baris Tayfun"
          slug="tayfun"
          position="Identity & Web Design"
          date="2022"
          tags={[
            "identity design",
            "web design",
            "web development",
            "interactive design",
          ]}
          videoSrc="/data/projects/tayfun/cover-video.mp4"
          onExplore={() => goToCaseStudy("tayfun")}
        />
      </div>
    </div>
  );
}
