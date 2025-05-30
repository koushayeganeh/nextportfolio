"use client";

import Container from "@/components/ui/container";
import Image from "next/image";

export default function ProjectContext() {
  return (
    <Container>
      <div className="mx-auto px-4 py-12 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-2xl md:text-5xl lg:text-4xl font-semibold leading-tight">
            From a Domestic Company,
            <br />
            to an International Brand.
            <span className="block text-primary text-lg md:text-xl mt-2">
              multimedia designing case study
            </span>
          </h1>
          <h3 className="text-xl text-primary font-semibold mt-8 md:mt-16">
            Overview
          </h3>
          <p className="text-primary-alt max-w-prose">
            Boratas is a mining machinery producer based in Turkey. Having
            exported to more than 20 countries in 10 years, they were ready to
            establish themselves as a true international brand. I joined the
            team to craft their new visual voice and take every touchpoint up to
            that global standard.
          </p>
        </div>
        <div className="w-full max-w-md lg:max-w-lg">
          <Image
            src="/data/projects/boratas/images/boratas-intro-webp.webp"
            alt="Boratas banner"
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
