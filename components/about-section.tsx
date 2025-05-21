"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100]);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-amber/5 dark:bg-gray-900"
    >
      <motion.div style={{ opacity, y }} className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl text-maroon dark:text-gold mb-4">
            About Venerable Khen Rinpoche
          </h2>
          <div className="w-24 h-1 bg-orange mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
            A visionary spiritual master dedicated to preserving and sharing
            Buddhist wisdom while fostering global peace and harmony.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-playfair text-2xl text-crimson dark:text-orange mb-4">
              Spiritual Journey
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ordained at the age of nine, Ven. Khen Rinpoche Dr. Sonam Gyurme
              Tamang has dedicated his life to Buddhist studies and practice. He
              received his monastic education under esteemed masters and
              achieved academic excellence, culminating in a master's degree
              from Taktse Nyingma Institute.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Fluent in multiple languages, he has received key initiations and
              teachings from notable figures in Tibetan Buddhism, including H.E.
              Dinchhen Rinpoche, H.H. Penor Rinpoche, and H.E. Kyabje Rigzin
              Dorje Rinpoche.
            </p>
            <Button asChild className="bg-maroon hover:bg-maroon/90 text-white">
              <Link href="/about">Read Full Biography</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/k4.png?height=600&width=800"
                alt="Ven. Khen Rinpoche teaching"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 bg-orange p-4 rounded-lg shadow-lg text-white">
              <p className="font-playfair text-lg">
                40+ years of spiritual practice
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Spiritual Master",
              description:
                "Dedicated to preserving and sharing the timeless wisdom of Buddhism through teachings and initiations.",
              color: "bg-maroon/10",
            },
            {
              title: "Educator & Mentor",
              description:
                "Empowering seekers worldwide through education, guidance, and transformative knowledge.",
              color: "bg-crimson/10",
            },
            {
              title: "Visionary Leader",
              description:
                "Pioneering spiritual wellness tourism and harnessing media to illuminate Buddhist values globally.",
              color: "bg-orange/10",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`${item.color} p-6 rounded-lg shadow-md`}
            >
              <h3 className="font-playfair text-xl mb-3 text-maroon dark:text-gold">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
