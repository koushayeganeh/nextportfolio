// components/featured/Featured.tsx
"use client";

import { featuredItems } from "@/public/data/featuredItems/featuredItems";
import FeaturedCard from "./FeaturedCard";
import Container from "../ui/container";

export default function Featured() {
  return (
    <Container>
      <div className="w-full">
        <p className="text-white mb-4">
          🔗 Cards are clickable—tap to explore more.
        </p>

        <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 column-gap-4 space-y-4">
          {featuredItems.map((item, idx) => (
            <div key={idx} className="break-inside-avoid">
              <FeaturedCard
                type={item.type}
                src={item.src}
                alt={item.alt}
                tags={item.tags}
                path={item.path}
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
