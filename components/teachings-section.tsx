"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Video, FileText, Calendar } from "lucide-react";

export default function TeachingsSection() {
  const teachings = [
    {
      title: "Buddhist Philosophy",
      description:
        "Explore the profound teachings of the Buddha and the path to enlightenment.",
      icon: <BookOpen className="h-6 w-6 text-[#F68F30]" />,
      color: "bg-[#F68F30]/10",
    },
    {
      title: "Meditation Practices",
      description:
        "Learn various meditation techniques from the Nyingma tradition.",
      icon: <Calendar className="h-6 w-6 text-[#9C282A]" />,
      color: "bg-[#9C282A]/10",
    },
    {
      title: "Dharma Talks",
      description:
        "Recorded teachings on various aspects of Buddhist practice and philosophy.",
      icon: <Video className="h-6 w-6 text-[#1E3A5F]" />,
      color: "bg-[#1E3A5F]/10",
    },
    {
      title: "Publications",
      description:
        "Books, articles, and practice guides authored by Ven. Khen Rinpoche.",
      icon: <FileText className="h-6 w-6 text-[#4B4C3A]" />,
      color: "bg-[#4B4C3A]/10",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl text-[#1E3A5F] dark:text-[#EBE175] mb-4">
            Spiritual Lineage & Teachings
          </h2>
          <div className="w-24 h-1 bg-[#F68F30] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
            Ven. Khen Rinpoche has received key initiations and teachings from
            notable figures in Tibetan Buddhism and continues to share this
            wisdom with practitioners worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {teachings.map((teaching, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`h-full ${teaching.color} border-none shadow-md hover:shadow-lg transition-shadow`}
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">{teaching.icon}</div>
                    <h3 className="font-playfair text-xl mb-2 text-[#1E3A5F] dark:text-[#EBE175]">
                      {teaching.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {teaching.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-playfair text-2xl md:text-3xl text-[#9C282A] dark:text-[#F68F30] mb-6">
              Nyungné Practice
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ven. Khen Rinpoche is a leading proponent of Nyungné (fasting
              ritual) practice, a powerful method for cultivating compassion and
              purifying negative karma.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Through his Nyungné Campaigns, he has organized meditation and
              teaching tours across countries including Japan, Korea, Taiwan,
              Canada, and the USA, promoting Buddhist practice and dialogue.
            </p>
            <Button
              asChild
              className="bg-[#9C282A] hover:bg-[#9C282A]/90 text-white"
            >
              <a
                href="https://nyungne.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn About Nyungné
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/k7.jpg"
                alt="Nyungné Practice"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#9C282A]/20 mix-blend-multiply"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
