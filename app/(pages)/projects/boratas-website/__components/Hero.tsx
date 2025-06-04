"use client";

import Container from "@/components/ui/container";
import Image from "next/image";

export default function Hero() {
  return (
    <Container>
      <div className="mx-auto px-4 py-12 flex flex-col lg:flex-row items-center gap-12">
        {/* ─── Text Column ───────────────────────────── */}
        <div className="flex-1">
          <h1 className="text-2xl md:text-5xl lg:text-4xl font-semibold leading-tight">
            Redefining Boratas on net:
            <br />A Next-Gen B2B Platform
            <span className="block text-primary text-lg md:text-xl mt-2">
              Full-Stack Design & Development Case Study
            </span>
          </h1>

          <h3 className="text-xl text-primary font-semibold mt-10 md:mt-16">
            Project Overview
          </h3>
          <p className="text-primary-alt max-w-prose mt-4">
            Boratas needed more than a website refresh. The idea was to create a
            fast, user-friendly platform with a custom CMS tailored to the
            company's workflow. This case study explores how I combined design
            thinking, data-driven architecture, and hands-on development to
            build a site that empowers both Boratas’ teams and their global
            customers.
          </p>
        </div>

        {/* ─── Visual Column ─────────────────────────── */}
        <div className="w-full max-w-md lg:max-w-lg">
          <Image
            src="/data/projects/boratas+/images/boratas-intro-webp.webp"
            alt="Preview of Boratas Global homepage"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg object-cover shadow-lg"
            priority
          />
        </div>
      </div>
    </Container>
  );
}
