"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/k6.png?height=1080&width=1920"
          alt="Buddhist Temple"
          fill
          priority
        />
      </div>

      <div className="container mx-auto px-4 z-10 py-16 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="font-lora text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Ven. Khen Rinpoche
              <br />
              <span className="text-sage">Dr. Sonam Gyurme Tamang</span>
            </h1>

            <p className="text-lg md:text-xl mb-8 max-w-xl">
              A visionary spiritual master, educator, mentor, and entrepreneur
              devoted to preserving and sharing the timeless wisdom of Buddhism.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-amber hover:bg-amber/90 text-white"
              >
                <Link href="/about">Learn More</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Ven. Khen Rinpoche Dr. Sonam Gyurme Tamang"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg">
              <p className="font-lora text-lg text-maroon">
                "Cultivating inner peace for global harmony"
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 md:mt-32 text-center"
        >
          <h2 className="font-lora text-2xl md:text-3xl text-white mb-12">
            Core Initiatives
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Dharma Television HD",
                description: "Broadcasting Buddhist teachings globally",
                color: "bg-amber",
                link: "/projects",
              },
              {
                title: "B.T.M.C. Foundation",
                description: "Promoting global peace through compassion",
                color: "bg-maroon",
                link: "/projects",
              },
              {
                title: "Pure Land Tours & Travels",
                description: "Transformative spiritual journeys",
                color: "bg-teal",
                link: "/projects",
              },
            ].map((initiative, index) => (
              <Link
                key={index}
                href={initiative.link}
                className={`${initiative.color} p-6 rounded-lg text-white hover:shadow-lg transition-shadow group`}
              >
                <h3 className="font-lora text-xl mb-2">{initiative.title}</h3>
                <p className="mb-4">{initiative.description}</p>
                <div className="flex items-center justify-end">
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
