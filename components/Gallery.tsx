// components/Gallery.tsx
"use client";

import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import "react-photo-album/styles.css"; // ✅ correct path
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"; // ✅ light-box UI

export interface Photo {
  src: string;
  width: number;
  height: number;
  title?: string;
}

export default function Gallery({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <PhotoAlbum
        layout="rows"
        targetRowHeight={240}
        spacing={4}
        photos={photos}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        open={index >= 0}
        index={index}
        slides={photos.map(({ src, title }) => ({ src, title }))}
        close={() => setIndex(-1)}
      />
    </>
  );
}
