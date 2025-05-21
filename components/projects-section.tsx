"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Tv, Building, Mountain } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Dharma Television HD",
      description:
        "A pioneering satellite TV channel established in 2009, dedicated to broadcasting Buddhist teachings, meditation sessions, and cultural programs in multiple languages worldwide.",
      icon: <Tv className="h-10 w-10 text-orange" />,
      image: "/dharmatv.png?height=400&width=600",
      color: "bg-orange",
      link: "https://dharmatelevision.tv",
    },
    {
      title: "B.T.M.C. Foundation",
      description:
        "Founded in 2024, the foundation promotes global peace and prevents conflict through compassion-based dialogues and Buddhist practices like Nyungné fasting rituals.",
      icon: <Building className="h-10 w-10 text-crimson" />,
      image: "/btmcfoundation.png?height=400&width=600",
      color: "bg-crimson",
      link: "https://btmcfoundation.org",
    },
    {
      title: "Pure Land Tours & Travels",
      description:
        "Formally established in 2024, expanding on two decades of guiding pilgrim tourism across Asia, serving thousands with transformative spiritual journeys.",
      icon: <Mountain className="h-10 w-10 text-maroon" />,
      image: "/pureland.png?height=400&width=600",
      color: "bg-maroon",
      link: "https://purelandtours.com",
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl text-maroon dark:text-gold mb-4">
            Core Dharma Projects
          </h2>
          <div className="w-24 h-1 bg-orange mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
            Venerable Khen Rinpoche has established numerous institutions and
            initiatives dedicated to preserving and sharing Buddhist wisdom,
            education, and cultural heritage.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`order-2 ${
                  index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div
                    className={`absolute inset-0 ${project.color}/20 mix-blend-multiply`}
                  ></div>
                </div>
              </div>

              <div
                className={`order-1 ${
                  index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`${project.color} p-3 rounded-lg text-white`}>
                    {project.icon}
                  </div>
                  <h3 className="font-playfair text-2xl md:text-3xl text-maroon dark:text-gold">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {project.description}
                </p>
                <Button
                  asChild
                  className={`${project.color} hover:${project.color}/90 text-white`}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Visit Website
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-maroon hover:bg-maroon/90 text-white"
          >
            <Link href="/projects">View All Projects</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
