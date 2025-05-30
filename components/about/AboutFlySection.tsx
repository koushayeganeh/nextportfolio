// components/AboutFlySection.tsx
"use client";

import Image from "next/image";
import ButtonWrappedWidth from "@/components/ButtonWrappedWidth";

export default function AboutFlySection() {
  return (
    <section className="py-16 bg-background text-foreground">
      <div
        className="mx-auto max-w-[90rem] 
                      flex flex-col-reverse lg:flex-row 
                      lg:justify-between lg:items-stretch 
                      gap-[80px] lg:gap-6"
      >
        {/* ——— Photo ——— */}
        <div className="hidden lg:block w-full lg:w-[300px] h-full bg-[#313631] rounded-2xl min-h-0">
          {/* two equal rows; height matches left pane because of lg:items-stretch */}
          <div className="flex lg:flex-col h-full gap-8 place-items-center min-h-0">
            {/* Top square */}
            <div
              className="w-full aspect-square overflow-hidden rounded-2xl
                            rotate-12 hover:rotate-0 transition-transform duration-300 ease-out z-10"
            >
              <Image
                src="/data/about/images/about-2.jpg"
                alt="Me playing music"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* ——— Copy & CTA ——— */}
        <div className="w-full max-w-[800px] space-y-6">
          <h3 className="text-2xl font-bold text-white">
            When Boredom Takes Off, I Fly!
          </h3>
          <p className="text-white">
            My DJI Drone is the epitome of coolness! Taking it for a spin and
            exploring new locations, it's just so cool!
          </p>
          <p className="text-white">
            While the thrill of flying is undeniably captivating, what truly
            fascinates me is the world of aerial photography & videography. It
            adds an intriguing dimension to my drone flying hobby as I harness
            the breathtaking aerial visuals as a source of inspiration for my
            design work. For me, flying is not just a pastime; it's a practical
            pursuit that complements my career aspirations. I've curated a
            collection of my non-professional photographs, which I invite you to
            explore through the link provided below.
          </p>
          <ButtonWrappedWidth
            buttonText="Check Out My Photograph Collection"
            linkTo="/photo-collection"
          />
        </div>
      </div>
    </section>
  );
}
