"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PageTransition from "@/components/page-transition";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, Award } from "lucide-react";

export default function AboutPageClient() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="font-lora text-3xl md:text-4xl lg:text-5xl text-center mb-8 md:mb-12 text-maroon dark:text-amber">
          About Venerable Khen Rinpoche
        </h1>

        {/* Bio Section - Made more responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <Image
              src="/k4.png?height=600&width=500"
              alt="Ven. Khen Rinpoche Dr. Sonam Gyurme Tamang"
              width={500}
              height={600}
              className="rounded-lg shadow-lg w-full max-w-sm object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-lora text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 text-crimson dark:text-orange">
              A Visionary Spiritual Master
            </h2>
            <p className="mb-4 text-gray-800 dark:text-gray-300">
              Ven. Khen Rinpoche Dr. Sonam Gyurme Tamang is a visionary
              spiritual master, educator, mentor, and entrepreneur devoted to
              preserving and sharing the timeless wisdom of Buddhism. Through
              his transformative initiatives, he empowers seekers worldwide,
              fostering spiritual growth, education, and sustainable well-being.
            </p>
            <p className="mb-4 text-gray-800 dark:text-gray-300">
              Guided by compassion and innovation, he pioneers spiritual
              wellness tourism as a force for nation-building, while harnessing
              media to illuminate Buddhist values across the globe. His mission
              is to create a thriving ecosystem of mindfulness, wisdom, and
              inner peace inspiring to new generations toward global harmony.
            </p>
          </motion.div>
        </div>

        {/* Responsive Tabs Section */}
        <div className="mb-12 md:mb-16">
          <Tabs defaultValue="early-life" className="w-full">
            {/* Mobile-friendly TabsList with vertical stacking on small screens */}
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-12 md:mb-6 gap-2">
              <TabsTrigger value="early-life" className="text-sm sm:text-base">
                Early Life
              </TabsTrigger>
              <TabsTrigger value="education" className="text-sm sm:text-base">
                Monastic Education
              </TabsTrigger>
              <TabsTrigger value="languages" className="text-sm sm:text-base">
                Languages & Skills
              </TabsTrigger>
              <TabsTrigger
                value="achievements"
                className="text-sm sm:text-base"
              >
                Achievements
              </TabsTrigger>
            </TabsList>

            {/* Tab Content - Early Life */}
            <TabsContent
              value="early-life"
              className="bg-saffron/10 p-4 md:p-8 rounded-lg shadow-md"
            >
              <h3 className="font-lora text-xl md:text-2xl mb-4 md:mb-6 text-crimson dark:text-orange">
                Early Life in the Tamang Community
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <p className="mb-4 text-gray-800 dark:text-gray-300">
                    Born into the Tamang Buddhist community in Nepal, Ven. Khen
                    Rinpoche was recognized from an early age for his
                    exceptional spiritual qualities and deep connection to
                    Buddhist teachings.
                  </p>
                  <p className="mb-4 text-gray-800 dark:text-gray-300">
                    At the tender age of nine, he was ordained as a monk,
                    beginning his lifelong journey in Buddhist studies and
                    practice. This early ordination set him on a path of deep
                    spiritual inquiry and service to the Dharma.
                  </p>
                  <p className="text-gray-800 dark:text-gray-300">
                    His childhood was marked by a natural inclination toward
                    meditation and philosophical inquiry, traits that would
                    later define his approach to teaching and sharing Buddhist
                    wisdom.
                  </p>
                </div>
                <div className="relative h-64 md:h-full md:min-h-[250px]">
                  <Image
                    src="/k1.png?height=400&width=300"
                    alt="Young Khen Rinpoche"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </TabsContent>

            {/* Tab Content - Education */}
            <TabsContent
              value="education"
              className="bg-maroon/10 p-4 md:p-8 rounded-lg shadow-md"
            >
              <h3 className="font-lora text-xl md:text-2xl mb-4 md:mb-6 text-crimson dark:text-orange">
                Monastic Education Under Esteemed Masters
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <p className="mb-4 text-gray-800 dark:text-gray-300">
                    Following his ordination, Ven. Khen Rinpoche received
                    comprehensive training in Buddhist philosophy, meditation,
                    and ritual practices under the guidance of several esteemed
                    masters of the Nyingma tradition.
                  </p>
                  <p className="mb-4 text-gray-800 dark:text-gray-300">
                    His formal education culminated in a master's degree from
                    the prestigious Taktse Nyingma Institute in Gangtok, where
                    he excelled in advanced Buddhist studies, including
                    Madhyamaka philosophy, Abhidharma, and Tantric practices.
                  </p>
                  <p className="text-gray-800 dark:text-gray-300">
                    Throughout his educational journey, he was recognized for
                    his exceptional analytical abilities and deep understanding
                    of both the theoretical and practical aspects of Buddhism.
                  </p>
                </div>
                <div>
                  <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-md">
                    <h4 className="font-lora text-lg md:text-xl mb-3 md:mb-4 text-maroon dark:text-gold">
                      Academic Timeline
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-orange flex items-center justify-center text-white shrink-0 mt-1">
                          ✓
                        </div>
                        <span className="text-sm md:text-base text-gray-800 dark:text-gray-300">
                          <strong>Early Education:</strong> Traditional monastic
                          curriculum in Nepal
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-orange flex items-center justify-center text-white shrink-0 mt-1">
                          ✓
                        </div>
                        <span className="text-sm md:text-base text-gray-800 dark:text-gray-300">
                          <strong>Advanced Studies:</strong> Specialized
                          training under renowned masters
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-orange flex items-center justify-center text-white shrink-0 mt-1">
                          ✓
                        </div>
                        <span className="text-sm md:text-base text-gray-800 dark:text-gray-300">
                          <strong>Higher Education:</strong> Master's degree
                          from Taktse Nyingma Institute, Gangtok
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-orange flex items-center justify-center text-white shrink-0 mt-1">
                          ✓
                        </div>
                        <span className="text-sm md:text-base text-gray-800 dark:text-gray-300">
                          <strong>Doctoral Studies:</strong> Research and
                          dissertation on Buddhist philosophy
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Tab Content - Languages */}
            <TabsContent
              value="languages"
              className="bg-crimson/10 p-4 md:p-8 rounded-lg shadow-md"
            >
              <h3 className="font-lora text-xl md:text-2xl mb-4 md:mb-6 text-crimson dark:text-orange">
                Multilingual Proficiency
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <p className="mb-4 text-gray-800 dark:text-gray-300">
                    One of Ven. Khen Rinpoche's most remarkable abilities is his
                    fluency in multiple languages, which has enabled him to
                    share Buddhist teachings across cultural and linguistic
                    boundaries.
                  </p>
                  <p className="mb-4 text-gray-800 dark:text-gray-300">
                    His linguistic skills have been instrumental in translating
                    and preserving ancient Buddhist texts, making them
                    accessible to contemporary practitioners from diverse
                    backgrounds.
                  </p>
                  <p className="text-gray-800 dark:text-gray-300">
                    This multilingual proficiency has allowed him to lead
                    teaching tours and establish connections with Buddhist
                    communities throughout Asia, Europe, and North America.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-md">
                  <h4 className="font-lora text-lg md:text-xl mb-3 md:mb-4 text-maroon dark:text-gold">
                    Languages
                  </h4>
                  <div className="space-y-3 md:space-y-4">
                    {[
                      {
                        language: "Tibetan",
                        level: "Native",
                        percentage: "100%",
                      },
                      {
                        language: "Nepali",
                        level: "Native",
                        percentage: "100%",
                      },
                      {
                        language: "English",
                        level: "Fluent",
                        percentage: "95%",
                      },
                      { language: "Hindi", level: "Fluent", percentage: "90%" },
                      {
                        language: "Sanskrit",
                        level: "Advanced",
                        percentage: "85%",
                      },
                      {
                        language: "Chinese",
                        level: "Intermediate",
                        percentage: "70%",
                      },
                    ].map((lang, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-300">
                            {lang.language}
                          </span>
                          <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                            {lang.level}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 md:h-2">
                          <div
                            className="bg-orange h-1.5 md:h-2 rounded-full"
                            style={{ width: lang.percentage }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Tab Content - Achievements */}
            <TabsContent
              value="achievements"
              className="bg-vermilion/10 p-4 md:p-8 rounded-lg shadow-md"
            >
              <h3 className="font-lora text-xl md:text-2xl mb-4 md:mb-6 text-crimson dark:text-orange">
                Academic & Spiritual Achievements
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                <Card className="bg-white/50 dark:bg-gray-800/50 border-none">
                  <CardContent className="pt-4 md:pt-6">
                    <div className="flex flex-col items-center text-center">
                      <GraduationCap className="h-8 w-8 md:h-10 md:w-10 text-maroon dark:text-gold mb-3 md:mb-4" />
                      <h4 className="font-lora text-lg md:text-xl mb-2 text-maroon dark:text-gold">
                        Academic Excellence
                      </h4>
                      <p className="text-sm md:text-base text-gray-800 dark:text-gray-300">
                        Recognized for his scholarly contributions to Buddhist
                        studies, culminating in his doctoral research on the
                        intersection of traditional Buddhist philosophy and
                        contemporary applications.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white/50 dark:bg-gray-800/50 border-none">
                  <CardContent className="pt-4 md:pt-6">
                    <div className="flex flex-col items-center text-center">
                      <BookOpen className="h-8 w-8 md:h-10 md:w-10 text-crimson dark:text-orange mb-3 md:mb-4" />
                      <h4 className="font-lora text-lg md:text-xl mb-2 text-maroon dark:text-gold">
                        Preservation Work
                      </h4>
                      <p className="text-sm md:text-base text-gray-800 dark:text-gray-300">
                        Led significant efforts to preserve rare Buddhist texts
                        and teachings, particularly from the Nyingma lineage,
                        through translation, documentation, and digital
                        archiving projects.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white/50 dark:bg-gray-800/50 border-none sm:col-span-2 md:col-span-1">
                  <CardContent className="pt-4 md:pt-6">
                    <div className="flex flex-col items-center text-center">
                      <Award className="h-8 w-8 md:h-10 md:w-10 text-orange mb-3 md:mb-4" />
                      <h4 className="font-lora text-lg md:text-xl mb-2 text-maroon dark:text-gold">
                        Recognitions
                      </h4>
                      <p className="text-sm md:text-base text-gray-800 dark:text-gray-300">
                        Received numerous awards and recognitions from Buddhist
                        organizations and academic institutions for his
                        contributions to the preservation and dissemination of
                        Buddhist teachings.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Vision & Mission Section - Enhanced Responsiveness */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="font-lora text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 text-center text-crimson dark:text-orange">
            Vision & Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="bg-maroon/10 p-4 md:p-6 rounded-lg shadow-md">
              <h3 className="font-lora text-lg md:text-xl mb-3 md:mb-4 text-orange">
                Vision
              </h3>
              <p className="text-sm md:text-base text-gray-800 dark:text-gray-300">
                To champion spiritual wellness tourism as a beacon of peace,
                prosperity, happiness, harmony, and unity worldwide, inspiring a
                global movement toward collective well-being.
              </p>
            </div>
            <div className="bg-orange/10 p-4 md:p-6 rounded-lg shadow-md">
              <h3 className="font-lora text-lg md:text-xl mb-3 md:mb-4 text-maroon dark:text-gold">
                Mission
              </h3>
              <p className="text-sm md:text-base text-gray-800 dark:text-gray-300">
                To create a thriving ecosystem of mindfulness, wisdom, and inner
                peace, inspiring new generations toward global harmony through
                the timeless wisdom of Buddhism.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Final Section - Better Responsive Handling */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 md:mt-16"
        >
          <h2 className="font-lora text-xl md:text-2xl lg:text-3xl mb-4 md:mb-8 text-center text-crimson dark:text-orange">
            Dedication to Preserving Buddhist Teachings
          </h2>
          <div className="bg-vermilion/10 p-4 md:p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div>
                <p className="mb-4 text-sm md:text-base text-gray-800 dark:text-gray-300">
                  Throughout his life, Ven. Khen Rinpoche has demonstrated an
                  unwavering commitment to preserving and disseminating the
                  authentic teachings of Buddhism. His approach combines deep
                  respect for tradition with innovative methods of sharing
                  wisdom in the modern world.
                </p>
                <p className="mb-4 text-sm md:text-base text-gray-800 dark:text-gray-300">
                  He has established educational institutions, media platforms,
                  and practice centers that serve as vessels for transmitting
                  Buddhist knowledge to current and future generations.
                </p>
                <p className="text-sm md:text-base text-gray-800 dark:text-gray-300">
                  His preservation efforts extend beyond theoretical knowledge
                  to include practical meditation techniques, ritual arts, and
                  the living traditions of Buddhist practice that might
                  otherwise be lost in our rapidly changing world.
                </p>
              </div>
              <div className="relative h-64 md:h-full md:min-h-[300px]">
                <Image
                  src="/k3.png?height=400&width=600"
                  alt="Ven. Khen Rinpoche teaching"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
