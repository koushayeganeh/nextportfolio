"use client";

import Link from "next/link";
import { MdOutlineArrowForward } from "react-icons/md";

interface ButtonWrappedWidthProps {
  buttonText: string;
  linkTo: string;
}

export default function ButtonWrappedWidth({
  buttonText,
  linkTo,
}: ButtonWrappedWidthProps) {
  return (
    <Link
      href={linkTo}
      className="
        inline-flex items-center justify-center 
        h-14 px-6
        bg-[var(--primary)] text-white
        text-base font-medium
        rounded-lg
        transition-opacity duration-200
        hover:opacity-90
      "
    >
      <span>{buttonText}</span>
      <MdOutlineArrowForward className="ml-2 text-xl" />
    </Link>
  );
}
