// components/ScrollIndicator.tsx
"use client";

import { useState, useEffect } from "react";

interface ScrollIndicatorProps {
  /** CSS color string for the progress bar (e.g. "var(--primary)" or "#26a69a") */
  color?: string;
  /** Whether to show the numeric percentage above the bar */
  showText?: boolean;
}

export default function ScrollIndicator({
  color = "var(--primary)",
  showText = false,
}: ScrollIndicatorProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-[4rem] left-0 w-full h-1 pointer-events-none z-50">
      <div
        className="h-full transition-all duration-150 ease-out relative"
        style={{ width: `${progress}%`, backgroundColor: color }}
      >
        {showText && (
          <span className="absolute right-0 -top-6 text-xs text-white font-medium">
            {Math.round(progress)}%
          </span>
        )}
      </div>
    </div>
  );
}
