import type { Metadata } from "next";
import GalleryPageClient from "./GalleryPageClient";

export const metadata: Metadata = {
  title: "Gallery - Ven. Khen Rinpoche Dr. Sonam Gyurme Tamang",
  description:
    "Photo gallery showcasing Ven. Khen Rinpoche's teachings, travels, and humanitarian work",
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}
