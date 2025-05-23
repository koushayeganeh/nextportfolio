// app/about/page.tsx
"use client";

import About from "@/components/about/About";
import Container from "@/components/ui/container";

export default function AboutPage() {
  return (
    <div className="relative bg-background text-foreground">
      <Container>
        <div className="py-16">
          <About />
        </div>
      </Container>
    </div>
  );
}
