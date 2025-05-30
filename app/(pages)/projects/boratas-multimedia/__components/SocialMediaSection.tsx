// app/projects/boratas-multimedia/_components/SocialMediaSection.tsx
"use client";

import React from "react";
import Gallery from "@/components/Gallery";
import { boratasSocials } from "@/data/boratasSocials";

export default function SocialMediaSection() {
  return (
    <div id="social-media">
      <h3 className="text-2xl font-semibold text-primary mb-4">
        Social Media Strategy
      </h3>

      <p className="mb-6 text-white">
        Before my takeover, Boratas’s channels were handled piecemeal by
        rotating sales staff—resulting in wildly inconsistent styles, uneven
        post quality, and a fragmented brand voice.
      </p>

      <p className="mb-6 text-white">
        I centralized ownership of our social presence, collaborating with Sales
        and Marketing to define clear objectives, audience personas, and core
        content pillars. Every post—whether a 30-second machine demo, an on-site
        photo, or an event highlight—now follows our updated visual treatments,
        caption templates, and hashtag strategy.
      </p>

      <p className="mb-8 text-white">
        In six months this approach doubled engagement, grew our follower base
        by over 40%, and drove more than 80% of our website referrals via social
        channels.
      </p>

      <Gallery photos={boratasSocials} />
    </div>
  );
}
