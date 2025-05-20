import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact - Ven. Khen Rinpoche Dr. Sonam Gyurme Tamang",
  description: "Get in touch with Ven. Khen Rinpoche Dr. Sonam Gyurme Tamang and his organizations",
}

export default function ContactPage() {
  return <ContactPageClient />
}
