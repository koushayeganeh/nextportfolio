// components/Hero.tsx
"use client";

import { useRef, useLayoutEffect, useEffect } from "react";
import { gsap, Power3 } from "gsap";
import Image from "next/image";
import ButtonWrappedWidth from "@/components/ButtonWrappedWidth";
import CTA from "@/components/CTA";
import Container from "../ui/container";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const desktopImgRef = useRef<HTMLDivElement>(null);
  const mobileAvatarRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const animationRun = useRef(false);

  useLayoutEffect(() => {
    if (animationRun.current || !heroRef.current || !contentRef.current) return;
    animationRun.current = true;

    gsap.set(heroRef.current, { visibility: "visible" });
    const tl = gsap.timeline({
      defaults: { ease: Power3.easeOut },
      delay: 0.2,
    });

    // Collect image(s): desktop U-shape or mobile avatar
    const imgEls: HTMLElement[] = [];
    if (desktopImgRef.current?.firstElementChild) {
      imgEls.push(desktopImgRef.current.firstElementChild as HTMLElement);
    }
    if (mobileAvatarRef.current) {
      imgEls.push(mobileAvatarRef.current);
    }

    // Collect heading lines; if none (mobile), fallback to the single h1
    let headingEls: HTMLElement[] = Array.from(
      contentRef.current.querySelectorAll("h1 .line-inner")
    ) as HTMLElement[];
    if (headingEls.length === 0) {
      const single = contentRef.current.querySelector("h1");
      if (single) headingEls = [single as HTMLElement];
    }

    const para = contentRef.current.querySelector("p") as HTMLElement;
    const btns = contentRef.current.querySelector(".btn-group") as HTMLElement;

    tl
      // 1) animate whichever image(s) are present
      .from(imgEls, { duration: 1.2, y: 1280, stagger: 0.2 }, "start")
      // 2) scale desktop image only
      .from(
        desktopImgRef.current?.firstElementChild ?? {},
        { duration: 2, scale: 1.6 },
        "start+=0.2"
      )
      // 3) animate heading elements
      .from(
        headingEls,
        { duration: 1, y: 44, opacity: 0, stagger: 0.15 },
        "start+=0.6"
      )
      // 4) paragraph
      .from(para, { duration: 1, y: 20, opacity: 0 }, "start+=1.2")
      // 5) buttons
      .from(btns, { duration: 1, y: 20, opacity: 0 }, "start+=1.4");
  }, []);

  // Sync U-shape height to content (desktop only)
  useEffect(() => {
    function resize() {
      if (contentRef.current && imageWrapperRef.current) {
        imageWrapperRef.current.style.height =
          contentRef.current.getBoundingClientRect().height + "px";
      }
    }
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <Container>
      <section
        ref={heroRef}
        className="invisible bg-background text-white flex items-center justify-center min-h-[calc(100vh-4rem)]"
      >
        <div className="w-full max-w-[1200px] px-6 mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-20">
            {/* 1) Mobile avatar + single-line heading */}
            <div
              ref={mobileAvatarRef}
              className="flex items-center gap-4 mb-4 md:hidden"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/data/images/profile.webp"
                  alt="Avatar"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <h1 className="text-2xl font-bold leading-tight whitespace-normal break-words">
                I’m Kousha, and here’s My Creative Corner
              </h1>
            </div>

            {/* 2) Desktop U-shape image */}
            <div
              ref={desktopImgRef}
              className="hidden md:block flex-none md:w-1/3 overflow-hidden rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[400px] rounded-br-[400px]"
            >
              <div ref={imageWrapperRef} className="relative w-full h-full">
                <Image
                  src="/data/images/profile.webp"
                  alt="Kousha portrait"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* 3) Content column */}
            <div ref={contentRef} className="flex-1 min-w-0">
              {/* Desktop two-line heading */}
              <h1 className="hidden md:block text-4xl font-semibold leading-tight mb-8 whitespace-normal break-words">
                <div className="overflow-hidden">
                  <div className="line-inner inline-block">
                    I’m Kousha, and here’s
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="line-inner inline-block">
                    My Creative Corner
                  </div>
                </div>
              </h1>

              {/* Paragraph */}
              <p className="text-gray-400 max-w-prose leading-relaxed mb-12 whitespace-normal break-words">
                With 6+ years of journey in Digital Design and a foundation in
                Architecture, I bring a blend of skills and passion to create
                impactful communication solutions across diverse platforms.
                Guided by five core principles—Functionality, Stability,
                Facilitation, Efficiency, and Aesthetics—my designs are crafted
                to not only be visually appealing but also serve their intended
                purpose effectively.
              </p>

              {/* Buttons */}
              <div className="btn-group flex flex-col items-start gap-6 w-full">
                <ButtonWrappedWidth
                  buttonText="Go To Projects"
                  linkTo="/projects"
                />
                <CTA />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
