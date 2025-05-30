// components/About.tsx
"use client";

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
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";
import AboutMusicSection from "./AboutMusicSection";
import AboutFlySection from "./AboutFlySection";
import AboutFunnySection from "./AboutFunnySection";

export default function About() {
  const skillBlocks = [
    {
      title: "Visual",
      tags: [
        "Digital & Print Design",
        "Graphic",
        "Illustration",
        "Motion",
        "Video Editing",
        "3D",
        "Drone/Camera Operating",
      ],
    },
    {
      title: "Web",
      tags: [
        "UI/UX",
        "Frontend",
        "Full-Stack",
        "HTML, CSS, JS",
        "ReactJS",
        "NextJS",
        "Interaction Design",
        "Creative Coding",
        "SEO Optimization",
      ],
    },
    {
      title: "Audio",
      tags: [
        "Sound Design",
        "Recording",
        "Mix & Master",
        "Digital & Analog",
        "AI Voice-over",
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
    [<SiNextdotjs />, "NextJs"],
    [<SiPostgresql />, "Postgresql"],
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
          md:min-h-[0px]                   /* 👈 avoids zero-height row */
          items-center md:items-stretch py-4 md:py-16
          gap-8  md:gap-24
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
          <div className="space-y-6 max-w-2xl">
            <p>
              During my time as an architecture student I landed a position at a
              studio where my role involved creating visual designs that aided
              communication between the architects and clients. That spark
              ignited a passion for multimedia design and my career snow-balled
              from there.
            </p>
            <p>
              Over the past six years I’ve added coding &amp; web design to the
              toolbox. Right now I’m sharpening my 3D animation skills — pushing
              creative boundaries is the mission.
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
                className="bg-[#1b1d1b] p-6 rounded-lg flex flex-col gap-4"
              >
                <h3 className="text-xl font-semibold text-primary">
                  {blk.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {blk.tags.map((t) => (
                    <li
                      key={t}
                      className="bg-[#313631] text-white text-base px-2 py-1 rounded"
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
                <span className="text-5xl md:text-7xl text-primary">
                  {icon}
                </span>
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="flex justify-center mt-8 py-8 md:py-16">
          <span className="text-3xl md:text-5xl font-semibold">
            wanna know me more?
          </span>
        </div>

        {/* MUSIC SECTION */}
        <AboutMusicSection />

        {/* DRONE SECTION */}
        <AboutFlySection />

        {/* CLOSE-EYES GAG */}
        <AboutFunnySection />

        {/* TAG CLOUD */}
        <section className="py-16">
          <h3 className="text-2xl font-bold text-white mb-6">
            Last but not least
          </h3>
          <ul className="flex flex-wrap gap-2">
            {[
              "Good Food",
              "Good Friends",
              "Evening Breeze",
              "Smell of Grass in Summer",
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
              "...",
              "Life",
            ].map((t) => (
              <li
                key={t}
                className="bg-[#292c29] text-primary-alt text-base px-3 py-1 rounded-full"
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
