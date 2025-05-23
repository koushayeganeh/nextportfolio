// components/About.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";
import ButtonWrappedWidth from "@/components/ButtonWrappedWidth";

/* ——— Icon imports ——— */
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobelightroom,
  SiAdobeindesign,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiAdobeaudition,
  SiBlender,
  SiAutodesk,
  SiFigma,
  SiGit,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
} from "react-icons/si";
import { BiCamera } from "react-icons/bi";
import { TbDrone } from "react-icons/tb";

/* ——— Music iframes ——— */
import FirstSong from "./FirstSong";
import SecondSong from "./SecondSong";

export default function About() {
  const [eyeSrc, setEyeSrc] = useState("/about/images/open-01.svg");

  const skillBlocks = [
    {
      title: "Visual",
      tags: [
        "Graphic",
        "Illustration",
        "Motion",
        "Video Editing",
        "Digital & Print Design",
        "3D",
        "Drone/Camera Operating",
      ],
    },
    {
      title: "Web",
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "ReactJS",
        "UI Design",
        "Interaction Design",
        "Frontend",
        "Creative Coding",
        "SEO",
      ],
    },
    {
      title: "Audio",
      tags: [
        "Sound Design",
        "Recording",
        "Mix & Master",
        "AI Voice-over",
        "Digital & Analog",
      ],
    },
  ];

  const toolIcons: [React.ReactNode, string][] = [
    [<SiAdobephotoshop />, "Photoshop"],
    [<SiAdobeillustrator />, "Illustrator"],
    [<SiAdobelightroom />, "Lightroom"],
    [<SiAdobeindesign />, "InDesign"],
    [<SiAdobeaftereffects />, "After Effects"],
    [<SiAdobepremierepro />, "Premiere"],
    [<SiAdobeaudition />, "Audition"],
    [<SiBlender />, "Blender"],
    [<SiAutodesk />, "Autodesk"],
    [<SiFigma />, "Figma"],
    [<SiGit />, "Git"],
    [<SiHtml5 />, "HTML"],
    [<SiCss3 />, "CSS"],
    [<SiJavascript />, "JavaScript"],
    [<SiReact />, "ReactJS"],
  ];

  return (
    <section id="about" className="bg-background text-foreground">
      <Container>
        {/* ————— HERO ————— */}
        <div
          className="
          flex flex-col
          md:grid md:grid-cols-[auto,1fr]
          md:[grid-auto-rows:1fr]          /* 👈 each row is stretch-y  */
          md:min-h-[1px]                   /* 👈 avoids zero-height row */
          md:items-stretch
          gap-24 py-16
        "
        >
          {/* Avatar GIF */}
          <div
            className="
            overflow-hidden
            rounded-full w-48 h-48
            md:rounded-md md:w-auto md:h-full
          "
          >
            <img
              src="/data/about/gifs/me-gif-3.gif"
              alt="Kousha animated"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Intro text */}
          <div className="space-y-6 max-w-2xl py-12">
            <p>
              During my time as an architecture student I landed a position at
              an architecture studio where my role involved creating visual
              designs that aided communication between the architects and
              clients. That spark ignited a passion for multimedia design and my
              career snow-balled from there.
            </p>
            <p>
              Over the past six years I’ve added coding &amp; web design to the
              toolbox. Right now I’m sharpening my 3-D animation skills —
              pushing creative boundaries is the mission.
            </p>
            <ButtonWrappedWidth buttonText="Let’s Talk" linkTo="/contact" />
          </div>
        </div>

        {/* DIGITAL SKILLS */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            My Digital Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skillBlocks.map((blk) => (
              <div
                key={blk.title}
                className="bg-[#1a1c1a] p-6 rounded-lg flex flex-col gap-4"
              >
                <h3 className="text-xl font-semibold text-primary">
                  {blk.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {blk.tags.map((t) => (
                    <li
                      key={t}
                      className="bg-primary-alt/90 text-white text-xs px-2 py-1 rounded"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* FAV TOOLS */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-white mb-8">My Fav. Tools</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
            {toolIcons.map(([icon, label]) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 text-center"
              >
                <span className="text-3xl text-primary">{icon}</span>
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* MUSIC SECTION */}
        <section className="py-16 flex flex-col lg:flex-row items-center gap-8">
          <div className="space-y-6 max-w-xl">
            <h3 className="text-2xl font-bold text-white">
              Grooving through life with music
            </h3>
            <p>
              It’s not just something I enjoy listening to, but a creative
              outlet that brings me immense joy. I play a few instruments and
              love composing songs in my free time.
            </p>
            <p>
              Performing at events lets me connect with the crowd. Music often
              leaks into my multimedia work — synergy FTW.
            </p>
            <FirstSong />
            <SecondSong />
          </div>
          <div className="flex gap-4">
            <Image
              src="/about/images/about-3.jpg"
              alt="Me playing music"
              width={240}
              height={320}
              className="object-cover rounded-lg"
            />
            <Image
              src="/about/images/about-6.jpg"
              alt="Me playing music 2"
              width={240}
              height={320}
              className="object-cover rounded-lg"
            />
          </div>
        </section>

        {/* DRONE SECTION */}
        <section className="py-16 flex flex-col lg:flex-row items-center gap-8">
          <Image
            src="/about/images/about-2.jpg"
            alt="Me with drone"
            width={320}
            height={420}
            className="object-cover rounded-lg"
          />
          <div className="space-y-6 max-w-xl">
            <h3 className="text-2xl font-bold text-white">
              When boredom takes off, I fly!
            </h3>
            <p>
              My DJI drone is the epitome of coolness. Taking it for a spin and
              exploring new locations is pure joy.
            </p>
            <p>
              Aerial photography/videography feeds back into my design work.
              I’ve uploaded a non-professional gallery you can browse.
            </p>
            <ButtonWrappedWidth
              buttonText={
                <>
                  <BiCamera className="inline mr-2" />
                  <TbDrone className="inline mr-2" />
                  My Photograph Collection
                </>
              }
              linkTo="/photo-collection"
            />
          </div>
        </section>

        {/* CLOSE-EYES GAG */}
        <section className="py-16 flex flex-col lg:flex-row-reverse items-center gap-8">
          <div className="w-48 h-48 rounded-full overflow-hidden cursor-pointer">
            <Image
              src={eyeSrc}
              alt="Eye"
              width={192}
              height={192}
              onMouseEnter={() => setEyeSrc("/about/images/close-01.svg")}
              onMouseLeave={() => setEyeSrc("/about/images/open-01.svg")}
            />
          </div>
          <div className="space-y-6 max-w-xl">
            <h3 className="text-2xl font-bold text-white">
              Sometimes I just close my eyes!
            </h3>
            <p>
              If you see me sitting still with my eyes closed, it doesn’t mean
              I’m sleeping. It’s a 4–7 minute reset I call my
              “performance-boosting system.”
            </p>
          </div>
        </section>

        {/* TAG CLOUD */}
        <section className="py-16">
          <h3 className="text-2xl font-bold text-white mb-6">
            Last but not least
          </h3>
          <ul className="flex flex-wrap gap-2 max-w-4xl">
            {[
              "Good Food",
              "Good Friends",
              "Breeze",
              "Smell of Summer Grass",
              "Summer",
              "Outdoor-dining ambience",
              "Pesto Sauce",
              "All Cats",
              "Kind Dogs",
              "Weekend Cleaning",
              "Heavy-duty Equipment",
              "New Devices",
              "Spotify",
              "Golden Hours",
              "Early Evenings",
              "Neon Lights",
              "After-rain Fresh Air",
              "Drama-Comedy",
              "Sci-Fi",
              "Lo-Fi",
              "Life",
            ].map((t) => (
              <li
                key={t}
                className="bg-[#1a1c1a] text-primary-alt text-xs px-3 py-1 rounded-full"
              >
                {t}
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </section>
  );
}
