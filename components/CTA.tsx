"use client";

import { useState } from "react";
import { MdOutlineEmail, MdOutlineMarkEmailRead } from "react-icons/md";

export default function CTA() {
  const email = "koushayeganeh@gmail.com";
  const [copyText, setCopyText] = useState("Click to Copy");
  const [Icon, setIcon] = useState(() => MdOutlineEmail);

  const handleClick = () =>
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopyText("Copied!");
        setIcon(() => MdOutlineMarkEmailRead);
      })
      .catch(() => setCopyText("Error copying"));

  const reset = () => {
    setCopyText("Click to Copy");
    setIcon(() => MdOutlineEmail);
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      <button
        onClick={handleClick}
        onMouseLeave={reset}
        className="
          relative group
          w-full h-16
          overflow-hidden
          rounded-[4.8px]
          bg-[rgb(61,76,83)]
          shadow-[0_1px_2px_rgba(0,0,0,0.2)]
          transition-[box-shadow] duration-200
          active:shadow-[0_5px_6px_rgba(0,0,0,0.3)]
        "
      >
        {/* Sliding panel */}
        <div
          className="
            absolute inset-y-0 
            left-[-31%]          /* hide off-screen */
            w-[30%]
            bg-primary
            flex items-center justify-center
            transition-all duration-300 ease-out
            group-hover:left-[-10px]
          "
        >
          <span className="text-white font-medium">{copyText}</span>
        </div>

        {/* Main text */}
        <div
          className="
            relative 
            w-full h-full
            left-[-0%]
            flex items-center justify-center
            text-white font-medium text-[19.2px]
            gap-4
            transition-all duration-300 ease-out
            group-hover:left-[60px]
          "
        >
          <Icon className="inline-block text-[24px]" />
          <span>{email}</span>
        </div>
      </button>
    </div>
  );
}
