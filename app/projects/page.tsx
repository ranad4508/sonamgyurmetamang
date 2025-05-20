import type { Metadata } from "next"
import ProjectsPageClient from "./ProjectsPageClient"

export const metadata: Metadata = {
  title: "Projects - Ven. Khen Rinpoche Dr. Sonam Gyurme Tamang",
  description: "Explore the various initiatives and projects founded by Ven. Khen Rinpoche Dr. Sonam Gyurme Tamang",
}

export default function ProjectsPage() {
  return <ProjectsPageClient />
}
