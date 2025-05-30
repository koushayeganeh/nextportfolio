// components/AboutMusicSection.tsx
"use client";

import Image from "next/image";
import SoundCloudEmbed from "./SoundCloudEmbed";

export default function AboutMusicSection() {
  return (
    <section className="py-16 bg-background text-foreground">
      <div
        className="mx-auto max-w-[90rem] 
                      flex flex-col lg:flex-row 
                      lg:justify-between lg:items-stretch 
                      gap-[44px] lg:gap-6"
      >
        {/* 24px min gap */}
        {/* ——— Left: text + embeds ——— */}
        <div className="w-full max-w-[800px] space-y-6">
          <h3 className="text-2xl font-bold text-white">
            Grooving through life with music
          </h3>
          <p className="text-white">
            It’s not just something I enjoy listening to, but a creative outlet
            that brings me immense joy. I play a few instruments and love
            composing songs in my free time.
          </p>
          <p className="text-white">
            I also have a passion for performing music at events and venues.
            There's something incredibly special about connecting with a crowd
            through music. These experiences have also had a profound impact on
            my career as a multimedia designer, as I often work with sound and
            music elements in the projects. It's a beautiful intersection of my
            creative pursuits.
          </p>

          <div className="space-y-6">
            <SoundCloudEmbed
              trackUrl="https://api.soundcloud.com/tracks/892255795"
              height={166}
            />
            <SoundCloudEmbed
              trackUrl="https://api.soundcloud.com/tracks/866798212"
              height={166}
            />
          </div>
        </div>
        {/* ——— Right: fixed-300px plate with two squares ——— */}
        <div className="hidden lg:block w-full lg:w-[300px] h-full bg-[#313631] rounded-2xl min-h-0">
          {/* two equal rows; height matches left pane because of lg:items-stretch */}
          <div className="flex lg:flex-col h-full gap-8 place-items-center min-h-0">
            {/* Top square */}
            <div
              className="w-full aspect-square overflow-hidden rounded-2xl
                            rotate-12 hover:rotate-0 transition-transform duration-300 ease-out z-10"
            >
              <Image
                src="/data/about/images/about-3.jpg"
                alt="Me playing music"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Bottom square */}
            <div
              className="w-full aspect-square overflow-hidden rounded-2xl
                            rotate-12 hover:rotate-0 transition-transform duration-300 ease-out"
            >
              <Image
                src="/data/about/images/about-7.jpg"
                alt="Me performing"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
