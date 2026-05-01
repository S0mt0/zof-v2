import type { Metadata } from "next";

import { GalleryShowcase } from "./_components/gallery-showcase";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "Explore photo and video moments from Zita-Onyeka Foundation outreach, education support, women empowerment, and community programs.",
};

export default function GalleryPage() {
  return <GalleryShowcase />;
}
