"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BsLinkedin, BsInstagram, BsGithub, BsBehance } from "react-icons/bs";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  // if we're on "/" jump to the hero section; otherwise go back to home
  const logoHref = isHome ? "/#portfolio" : "/";

  return (
    <footer className="w-full text-center mt-16 sm:mt-0 py-12 bg-background text-[14.4px]">
      {/* Logo / profile */}
      <Link href={logoHref} className="inline-block mb-10 mx-auto">
        <div className="relative w-28 h-28 rounded-full overflow-hidden">
          <Image
            src="/data/images/profile.webp"
            alt="Kousha Yeganeh"
            fill
            className="object-cover"
            priority
          />
        </div>
      </Link>

      {/* Social icons */}
      <div className="flex justify-center items-center gap-4 mb-16 text-3xl text-primary-alt">
        <a
          href="https://www.linkedin.com/in/kousha-yeganeh/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-full hover:text-primary transition-colors"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://www.instagram.com/k_ush_y_gan_h/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-full hover:text-primary transition-colors"
        >
          <BsInstagram />
        </a>
        <a
          href="https://github.com/koushayeganeh"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-full hover:text-primary transition-colors"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.behance.net/koushayeganeh"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-full hover:text-primary transition-colors"
        >
          <BsBehance />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-primary">
        <small>&copy; Kousha Yeganeh. All rights reserved.</small>
      </div>
    </footer>
  );
}
