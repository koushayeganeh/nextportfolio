// components/Nav.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RiMenuLine, RiMenuSearchLine } from "react-icons/ri";
import Container from "@/components/ui/container";

const navData = [
  { id: 2, link: "/projects", title: "Projects" },
  { id: 3, link: "/fun", title: "Fun" },
  { id: 4, link: "/about", title: "About" },
  { id: 5, link: "/contact", title: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuActive, setMenuActive] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuActive(false);
  }, [pathname]);

  return (
    <>
      {/* ---------- NAVBAR ---------- */}
      <nav className="sticky top-0 z-50 bg-black/50 backdrop-blur-md">
        <Container>
          <div className="relative z-10 flex items-center justify-between h-16">
            {/* Logo / Welcome */}
            <div>
              {pathname === "/" ? (
                <span className="text-xl font-semibold text-white">
                  Welcome
                </span>
              ) : (
                <Link href="/">
                  <Image
                    src="/data/images/logo.png"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </Link>
              )}
            </div>

            {/* Desktop links */}
            <ul className="hidden md:flex space-x-6 text-white">
              {navData.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    className={
                      pathname === item.link
                        ? "text-primary"
                        : "hover:text-primary transition-colors"
                    }
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Hamburger */}
            <button
              className="relative z-20 md:hidden text-white text-2xl"
              onClick={() => setMenuActive((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuActive ? <RiMenuSearchLine /> : <RiMenuLine />}
            </button>
          </div>
        </Container>
      </nav>

      {/* ---------- MOBILE MENU OVERLAY ---------- */}
      <div
        className={`
          fixed inset-x-0 top-16 bottom-0 z-40
          bg-black/50 backdrop-blur-md
          flex flex-col items-end pt-8 space-y-6 px-16 text-xl

          transform transition-all duration-300 ease-out
          ${
            menuActive
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }
        `}
        style={{ WebkitBackdropFilter: "blur(16px)" }}
      >
        <div className="mt-16 flex flex-col gap-6">
          {navData.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className={`
              block w-full text-end py-3 font-medium text-xl
              ${
                pathname === item.link
                  ? "text-primary"
                  : "text-white hover:text-primary"
              }
              transition-colors
            `}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
