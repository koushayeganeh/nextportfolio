// data/featuredItems.ts

export type FeaturedItem = {
  type: "video" | "image";
  tags: string[];
  src: string; // URL under public/, e.g. "/data/…"
  path?: string; // if present, makes the card clickable
  alt?: string; // required when type==="image"
};

export const featuredItems: FeaturedItem[] = [
  // motion videos
  {
    type: "video",
    tags: ["Motion", "Aftereffects"],
    src: "/data/featureditems/thumbnails/present-m-f.mp4",
  },
  {
    type: "video",
    tags: ["Motion", "Aftereffects"],
    src: "/data/featureditems/thumbnails/redCd-preview.mp4",
    path: "red-cd",
  },
  {
    type: "video",
    tags: ["Motion", "Aftereffects"],
    src: "/data/featureditems/thumbnails/TP-preview.mp4",
    path: "toilet-paper",
  },
  {
    type: "video",
    tags: ["Motion", "Aftereffects"],
    src: "/data/featureditems/thumbnails/izmir100_preview.mp4",
    path: "izmir-100music",
  },
  {
    type: "video",
    tags: ["Digital Painting", "Personal"],
    src: "/data/featureditems/thumbnails/number9-preview.mp4",
    path: "number9",
  },
  {
    type: "video",
    tags: ["Motion", "Aftereffects"],
    src: "/data/featureditems/thumbnails/Cruart-preview.mp4",
    path: "cruart",
  },
  {
    type: "video",
    tags: ["Motion", "Aftereffects"],
    src: "/data/featureditems/thumbnails/explode-m-f.mp4",
  },
  {
    type: "video",
    tags: ["Motion", "Aftereffects"],
    src: "/data/featureditems/thumbnails/rwin-preview.mp4",
  },
  {
    type: "video",
    tags: ["Motion", "Aftereffects"],
    src: "/data/featureditems/thumbnails/ball-preview.mp4",
  },

  // image cards
  {
    type: "image",
    tags: ["logo design"],
    src: "/data/featureditems/thumbnails/tak-logo.jpg",
    path: "tak-logo",
    alt: "tak logo",
  },
  {
    type: "image",
    tags: ["Illustration", "Poster"],
    src: "/data/featureditems/thumbnails/pengs-f.webp",
    alt: "Sahra Pengs",
  },
  {
    type: "image",
    tags: ["Digital Paint", "Concept Design"],
    src: "/data/featureditems/thumbnails/311-1.1.jpg",
    path: "NO311",
    alt: "311 concept design",
  },
  {
    type: "image",
    tags: ["Digital Paint", "Concept Design"],
    src: "/data/featureditems/thumbnails/sigma-preview.jpg",
    path: "NO311",
    alt: "sigma",
  },
  {
    type: "image",
    tags: ["AI Generative", "Experimental"],
    src: "/data/featureditems/thumbnails/p1-preview.jpg",
    path: "ai-oKeeffe",
    alt: "AI experiment",
  },
  {
    type: "image",
    tags: ["AI Generative", "Experimental"],
    src: "/data/featureditems/thumbnails/p7-preview.jpg",
    path: "ai-tiny-body-parts",
    alt: "AI experiment",
  },
  {
    type: "image",
    tags: ["Graphic", "Cover"],
    src: "/data/featureditems/thumbnails/bluish-lemons-f.webp",
    path: "bluish-lemons",
    alt: "bluish lemons",
  },
  {
    type: "image",
    tags: ["Graphic", "Cover"],
    src: "/data/featureditems/thumbnails/cola-ring-f.webp",
    path: "saturn-cafe",
    alt: "cola ring",
  },
  {
    type: "image",
    tags: ["Graphic", "Cover"],
    src: "/data/featureditems/thumbnails/cool-cat-f.webp",
    path: "cool-cat",
    alt: "cool cat",
  },
  {
    type: "image",
    tags: ["Illustration", "Volunteer"],
    src: "/data/featureditems/thumbnails/differences-f.webp",
    path: "embracing-our-differences",
    alt: "differences",
  },
  {
    type: "image",
    tags: ["Rigged Character"],
    src: "/data/featureditems/thumbnails/dude-f.webp",
    path: "dude",
    alt: "dude",
  },
  {
    type: "image",
    tags: ["Graphic", "Cover"],
    src: "/data/featureditems/thumbnails/neon-f.webp",
    path: "neon-moon",
    alt: "neon moon",
  },
  {
    type: "image",
    tags: ["Rigged Character", "Adobe Animate"],
    src: "/data/featureditems/thumbnails/sarah-lynn-f.webp",
    path: "sarah-lynn",
    alt: "sarah lynn",
  },
  {
    type: "image",
    tags: ["Graphic", "Cover"],
    src: "/data/featureditems/thumbnails/sit-f.jpg",
    path: "equipoise",
    alt: "sit",
  },
];
