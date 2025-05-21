"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Globe, Map } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-maroon/90 via-burgundy/70 to-transparent" />
      </motion.div>

      <div className="container mx-auto px-4 z-10 relative pt-24 pb-16 min-h-screen flex flex-col justify-between">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white lg:col-span-7"
          >
            <div className="inline-block mb-3 bg-gold/20 backdrop-blur-sm px-4 py-1 rounded-full">
              <span className="text-gold font-medium">
                Spiritual Leader & Visionary
              </span>
            </div>

            <h1 className="font-lora text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Ven. Khen Rinpoche
              <span className="block mt-2 text-gold">
                Dr. Sonam Gyurme Tamang
              </span>
            </h1>

            <div className="w-16 h-1 bg-gold mb-6"></div>

            <p className="text-xl md:text-2xl mb-8 max-w-xl leading-relaxed text-white/90">
              A visionary spiritual master, educator, mentor, and entrepreneur
              devoted to preserving and sharing the timeless wisdom of Buddhism.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-orange hover:bg-orange/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="/about">Learn More</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-slate-800 hover:bg-white/10 hover:text-white px-8 py-6 text-lg rounded-full transition-all"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:block lg:col-span-5"
          >
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <Image
                src="/k3.png?height=800&width=600"
                alt="Ven. Khen Rinpoche Dr. Sonam Gyurme Tamang"
                fill
                className="object-cover"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -bottom-8 -left-8 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl max-w-xs backdrop-blur-sm"
            >
              <div className="w-8 h-1 bg-gold mb-3"></div>
              <p className="font-lora text-xl text-crimson italic">
                "Cultivating inner peace for global harmony"
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Core Initiatives - Floating Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 md:mt-24"
        >
          <h2 className="font-lora text-2xl md:text-3xl text-white mb-8 text-center">
            <span className="border-b-2 border-gold pb-2">
              Core Initiatives
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Dharma Television HD",
                description: "Broadcasting Buddhist teachings globally",
                color: "bg-gradient-to-br from-orange to-orange/80",
                link: "/projects",
                icon: <Globe className="h-8 w-8 mb-4 text-white/80" />,
              },
              {
                title: "B.T.M.C. Foundation",
                description: "Promoting global peace through compassion",
                color: "bg-gradient-to-br from-crimson to-crimson/80",
                link: "/projects",
                icon: <BookOpen className="h-8 w-8 mb-4 text-white/80" />,
              },
              {
                title: "Pure Land Tours & Travels",
                description: "Transformative spiritual journeys",
                color: "bg-gradient-to-br from-maroon to-maroon/80",
                link: "/projects",
                icon: <Map className="h-8 w-8 mb-4 text-white/80" />,
              },
            ].map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
              >
                <Link
                  href={initiative.link}
                  className={`${initiative.color} p-6 rounded-xl text-white hover:shadow-xl transition-all group flex flex-col h-full backdrop-blur-sm border border-white/10`}
                >
                  {initiative.icon}
                  <h3 className="font-lora text-2xl mb-2">
                    {initiative.title}
                  </h3>
                  <p className="mb-4 text-white/90">{initiative.description}</p>
                  <div className="flex items-center justify-end mt-auto">
                    <span className="text-sm font-medium mr-2 group-hover:mr-1 transition-all">
                      Explore
                    </span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
