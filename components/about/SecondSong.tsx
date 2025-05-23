// components/about/SecondSong.tsx
"use client";

export default function SecondSong() {
  return (
    <iframe
      title="second-song"
      className="w-full h-44 rounded"
      scrolling="no"
      frameBorder={0}
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/892255795&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    />
  );
}
