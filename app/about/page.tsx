import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "About - Ven. Khen Rinpoche Dr. Sonam Gyurme Tamang",
  description: "Learn about the life, education, and spiritual journey of Ven. Khen Rinpoche Dr. Sonam Gyurme Tamang",
}

export default function AboutPage() {
  return <AboutPageClient />
}
