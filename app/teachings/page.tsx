"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PageTransition from "@/components/page-transition";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function TeachingsPageClient() {
  const lineageMasters = [
    {
      name: "H.E. Dinchhen Rinpoche",
      role: "Root Teacher",
      teachings: "Dzogchen, Mahamudra",
      image: "/dinchenrinpoche.jpg?height=300&width=300",
    },
    {
      name: "H.H. Penor Rinpoche",
      role: "Lineage Holder",
      teachings: "Nyingma Tradition, Kama and Terma",
      image: "/PenorRinpoche.jpg?height=300&width=300",
    },
    {
      name: "H.E. Kyabje Rigzin Dorje Rinpoche",
      role: "Wisdom Master",
      teachings: "Tantric Practices, Ritual Arts",
      image: "/kyabje.jpeg?height=300&width=300",
    },
  ];

  const teachingTopics = [
    {
      title: "Dzogchen",
      description:
        "The Great Perfection teachings, representing the pinnacle of Buddhist meditation practice in the Nyingma tradition.",
      color: "bg-amber/10",
    },
    {
      title: "Tri-Pitaka",
      description:
        "Scholarly work on the three baskets of the Buddha's teachings: Vinaya (discipline), Sutra (discourses), and Abhidharma (higher knowledge).",
      color: "bg-maroon/10",
    },
    {
      title: "Nyungné Practice",
      description:
        "Fasting ritual practice focused on Avalokiteshvara, the Buddha of Compassion, designed to purify negative karma and cultivate compassion.",
      color: "bg-teal/10",
    },
    {
      title: "Buddhist Philosophy",
      description:
        "Teachings on the Four Noble Truths, Dependent Origination, Emptiness, and other core philosophical concepts of Buddhism.",
      color: "bg-plum/10",
    },
    {
      title: "Meditation Techniques",
      description:
        "Practical instruction in various meditation methods, from basic mindfulness to advanced visualization practices.",
      color: "bg-terracotta/10",
    },
    {
      title: "Ritual Arts",
      description:
        "Preservation and teaching of traditional Buddhist ritual arts, including mandala creation, sacred dance, and ceremonial practices.",
      color: "bg-sage/10",
    },
  ];

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="font-lora text-4xl md:text-5xl text-center mb-12 text-teal dark:text-sage">
          Spiritual Lineage & Teachings
        </h1>

        <div className="mb-16">
          <h2 className="font-lora text-2xl md:text-3xl mb-8 text-center text-maroon dark:text-amber">
            Spiritual Lineage
          </h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-700 dark:text-gray-300">
            Ven. Khen Rinpoche has received key initiations and teachings from
            notable figures in Tibetan Buddhism, establishing a direct
            connection to authentic lineages of practice and realization.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lineageMasters.map((master, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={master.image || "/placeholder.svg"}
                    alt={master.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-lora text-xl mb-2 text-teal dark:text-sage">
                    {master.name}
                  </h3>
                  <p className="text-maroon dark:text-amber font-medium mb-2">
                    {master.role}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Key Teachings: {master.teachings}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="font-lora text-2xl md:text-3xl mb-8 text-center text-maroon dark:text-amber">
            Initiations & Empowerments
          </h2>
          <div className="bg-teal/10 p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="mb-4 text-gray-800 dark:text-gray-300">
                  Throughout his spiritual journey, Ven. Khen Rinpoche has
                  received numerous important initiations and empowerments that
                  authorize him to transmit specific teachings and practices to
                  others.
                </p>
                <p className="mb-4 text-gray-800 dark:text-gray-300">
                  These sacred transmissions include Dzogchen cycles, Nyingma
                  Kama lineages, and specialized practices related to various
                  meditational deities (yidams) within the Tibetan Buddhist
                  tradition.
                </p>
                <p className="text-gray-800 dark:text-gray-300">
                  The empowerments he has received form the foundation of his
                  authority as a teacher and his ability to guide students
                  through the stages of Buddhist practice, from preliminary
                  practices to advanced meditation techniques.
                </p>
              </div>
              <div className="relative h-full min-h-[300px]">
                <Image
                  src="/k6.png?height=400&width=600"
                  alt="Empowerment ceremony"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mb-16">
          <h2 className="font-lora text-2xl md:text-3xl mb-8 text-center text-maroon dark:text-amber">
            Teaching Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachingTopics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full ${topic.color} border-none shadow-md`}>
                  <CardContent className="pt-6">
                    <h3 className="font-lora text-xl mb-3 text-teal dark:text-sage">
                      {topic.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {topic.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <Tabs defaultValue="nyingma" className="mb-16">
          <TabsList className="grid grid-cols-1 md:grid-cols-3 w-full mb-8">
            <TabsTrigger value="nyingma">Nyingma Tradition</TabsTrigger>
            <TabsTrigger value="dzogchen">Dzogchen</TabsTrigger>
            <TabsTrigger value="nyungne">Nyungné Practice</TabsTrigger>
          </TabsList>
          <TabsContent
            value="nyingma"
            className="bg-maroon/10 p-8 rounded-lg shadow-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-lora text-2xl mb-4 text-maroon dark:text-amber">
                  Contributions to the Nyingma Tradition
                </h3>
                <p className="mb-4 text-gray-800 dark:text-gray-300">
                  As a respected teacher within the Nyingma lineage—the oldest
                  of the four major schools of Tibetan Buddhism—Ven. Khen
                  Rinpoche has made significant contributions to preserving and
                  propagating its unique teachings.
                </p>
                <p className="mb-4 text-gray-800 dark:text-gray-300">
                  He has been particularly active in organizing and leading
                  traditional practice retreats that focus on the distinctive
                  meditation techniques of the Nyingma school, including both
                  Kama (oral) and Terma (revealed treasure) traditions.
                </p>
                <p className="text-gray-800 dark:text-gray-300">
                  His scholarly work includes commentaries on classical Nyingma
                  texts and the documentation of oral instructions that might
                  otherwise be lost to future generations.
                </p>
              </div>
              <div className="relative h-full min-h-[300px]">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Nyingma tradition teachings"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="dzogchen"
            className="bg-amber/10 p-8 rounded-lg shadow-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="relative h-full min-h-[300px]">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Dzogchen meditation"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="font-lora text-2xl mb-4 text-maroon dark:text-amber">
                  Scholarly Work on Dzogchen
                </h3>
                <p className="mb-4 text-gray-800 dark:text-gray-300">
                  Dzogchen, or "Great Perfection," represents the pinnacle of
                  meditation practice in the Nyingma tradition. Ven. Khen
                  Rinpoche's scholarly work in this area has been particularly
                  noteworthy.
                </p>
                <p className="mb-4 text-gray-800 dark:text-gray-300">
                  His teachings on Dzogchen emphasize the direct recognition of
                  mind's nature beyond conceptual elaboration, making these
                  profound teachings accessible to contemporary practitioners
                  while maintaining their essential purity.
                </p>
                <p className="text-gray-800 dark:text-gray-300">
                  He has authored several commentaries on classical Dzogchen
                  texts and compiled practice manuals that guide students
                  through the stages of Dzogchen meditation in a systematic way.
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="nyungne"
            className="bg-teal/10 p-8 rounded-lg shadow-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-lora text-2xl mb-4 text-maroon dark:text-amber">
                  Nyungné: Cultivating Compassion
                </h3>
                <p className="mb-4 text-gray-800 dark:text-gray-300">
                  Ven. Khen Rinpoche is widely recognized for his expertise in
                  and promotion of Nyungné practice, a powerful method for
                  cultivating compassion and purifying negative karma through
                  fasting, prayer, and meditation focused on Avalokiteshvara
                  (Chenrezig), the Buddha of Compassion.
                </p>
                <p className="mb-4 text-gray-800 dark:text-gray-300">
                  Through his Nyungné Campaigns, he has organized meditation and
                  teaching tours across countries including Japan, Korea,
                  Taiwan, Canada, and the USA, making this profound practice
                  accessible to thousands of practitioners worldwide.
                </p>
                <p className="text-gray-800 dark:text-gray-300">
                  His dedicated website, Nyungne.org, serves as a comprehensive
                  resource for those interested in learning about and engaging
                  in this transformative practice.
                </p>
                <div className="mt-6">
                  <Button
                    asChild
                    className="bg-crimson hover:bg-crimson/90 text-white"
                  >
                    <a
                      href="https://nyungne.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      Learn More About Nyungné
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative h-full min-h-[300px]">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Nyungné practice"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="font-lora text-2xl md:text-3xl mb-8 text-center text-maroon dark:text-amber">
            Teaching Approach
          </h2>
          <div className="bg-sage/10 p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-lora text-xl mb-4 text-teal dark:text-sage">
                  Traditional Wisdom, Modern Context
                </h3>
                <p className="mb-4 text-gray-800 dark:text-gray-300">
                  Ven. Khen Rinpoche's teaching approach is characterized by a
                  deep respect for traditional Buddhist wisdom combined with a
                  practical understanding of modern contexts and challenges.
                </p>
                <p className="text-gray-800 dark:text-gray-300">
                  He emphasizes the importance of establishing a solid
                  foundation in Buddhist ethics and philosophy before
                  progressing to more advanced practices, ensuring that students
                  develop a comprehensive and balanced understanding.
                </p>
              </div>
              <div>
                <h3 className="font-lora text-xl mb-4 text-teal dark:text-sage">
                  Accessible to All
                </h3>
                <p className="mb-4 text-gray-800 dark:text-gray-300">
                  Known for his ability to explain complex Buddhist concepts in
                  clear, accessible language, Ven. Khen Rinpoche makes profound
                  teachings available to people of all backgrounds and levels of
                  experience.
                </p>
                <p className="text-gray-800 dark:text-gray-300">
                  His teaching methods incorporate traditional elements such as
                  oral transmission and empowerment with contemporary approaches
                  including multimedia presentations and online learning
                  platforms.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
