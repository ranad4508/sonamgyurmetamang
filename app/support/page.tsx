import type { Metadata } from "next"
import SupportPageClient from "./SupportPageClient"

export const metadata: Metadata = {
  title: "Support - Ven. Khen Rinpoche Dr. Sonam Gyurme Tamang",
  description: "Support the initiatives and projects of Ven. Khen Rinpoche Dr. Sonam Gyurme Tamang",
}

export default function SupportPage() {
  return <SupportPageClient />
}
