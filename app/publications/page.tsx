"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PageTransition from "@/components/page-transition";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, Calendar, Headphones } from "lucide-react";

export default function PublicationsPageClient() {
  const books = [
    {
      title: "Essence of Dzogchen Practice",
      year: "2015",
      description:
        "A comprehensive guide to the theory and practice of Dzogchen meditation.",
      image: "/placeholder.svg?height=400&width=300",
      language: "English, Tibetan",
    },
    {
      title: "Nyungné: The Practice of Compassion",
      year: "2017",
      description:
        "Detailed instructions for the Nyungné fasting ritual practice.",
      image: "/placeholder.svg?height=400&width=300",
      language: "English, Nepali",
    },
    {
      title: "Buddhist Ethics in Modern Times",
      year: "2019",
      description:
        "An exploration of how traditional Buddhist ethics apply to contemporary challenges.",
      image: "/placeholder.svg?height=400&width=300",
      language: "English",
    },
    {
      title: "Essential Prayers and Practices",
      year: "2016",
      description:
        "A collection of translated and transliterated ritual texts for daily practice.",
      image: "/placeholder.svg?height=400&width=300",
      language: "Tibetan, English, Nepali",
    },
  ];

  const mediaItems = [
    {
      title: "Introduction to Buddhist Meditation",
      type: "DVD Series",
      year: "2014",
      description:
        "A six-part series introducing various Buddhist meditation techniques.",
      image: "/placeholder.svg?height=400&width=600",
      icon: <Video className="h-6 w-6 text-amber" />,
    },
    {
      title: "Dzogchen Retreat Teachings",
      type: "Audio Series",
      year: "2018",
      description:
        "Recordings from a month-long Dzogchen retreat led by Ven. Khen Rinpoche.",
      image: "/placeholder.svg?height=400&width=600",
      icon: <Headphones className="h-6 w-6 text-maroon" />,
    },
    {
      title: "Sacred Sites of Buddhism",
      type: "Documentary",
      year: "2016",
      description:
        "A documentary exploring the most significant Buddhist pilgrimage sites in Asia.",
      image: "/placeholder.svg?height=400&width=600",
      icon: <Video className="h-6 w-6 text-teal" />,
    },
    {
      title: "Buddhist Astrology Calendar",
      type: "Annual Publication",
      year: "2012-2018",
      description:
        "Annual calendars featuring auspicious days and times according to Buddhist astrology.",
      image: "/placeholder.svg?height=400&width=600",
      icon: <Calendar className="h-6 w-6 text-plum" />,
    },
  ];

  const articles = [
    {
      title: "The Relevance of Compassion in the Modern World",
      publication: "Buddhist Review Quarterly",
      year: "2020",
      description:
        "An exploration of how Buddhist compassion practices can address contemporary challenges.",
    },
    {
      title: "Preserving Tibetan Buddhist Traditions in the Digital Age",
      publication: "Journal of Buddhist Studies",
      year: "2019",
      description:
        "Research on methods for preserving and transmitting traditional Buddhist knowledge using modern technology.",
    },
    {
      title:
        "Nyungné Practice: Historical Development and Contemporary Applications",
      publication: "International Journal of Buddhist Practice",
      year: "2018",
      description:
        "A scholarly examination of the history and benefits of Nyungné fasting practice.",
    },
    {
      title: "Buddhist Approaches to Environmental Ethics",
      publication: "Ecology and Spirituality Journal",
      year: "2017",
      description:
        "An article exploring Buddhist perspectives on environmental stewardship and sustainability.",
    },
  ];

  const appearances = [
    {
      title: "Buddhism in the 21st Century",
      venue: "Global Spirituality Conference, New York",
      year: "2022",
      description:
        "Keynote address on the relevance of Buddhist teachings in addressing modern challenges.",
    },
    {
      title: "The Science of Meditation",
      venue: "Mind and Life Institute Symposium",
      year: "2021",
      description:
        "Panel discussion on the intersection of Buddhist meditation practices and neuroscience research.",
    },
    {
      title: "Compassion as a Path to Peace",
      venue: "International Peace Forum, Geneva",
      year: "2020",
      description:
        "Presentation on Buddhist compassion practices as tools for conflict resolution.",
    },
    {
      title: "Preserving Ancient Wisdom",
      venue: "UNESCO Cultural Heritage Conference",
      year: "2019",
      description:
        "Talk on the importance of preserving traditional Buddhist knowledge and practices.",
    },
  ];

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="font-lora text-4xl md:text-5xl text-center mb-12 text-teal dark:text-sage">
          Publications & Media
        </h1>

        <p className="text-lg text-center max-w-3xl mx-auto mb-16 text-gray-700 dark:text-gray-300">
          A curated collection of Venerable Khen Rinpoche's published works,
          including books, audio-visual materials, articles, and media
          appearances.
        </p>

        <Tabs defaultValue="books" className="mb-16">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-8">
            <TabsTrigger value="books">Books</TabsTrigger>
            <TabsTrigger value="media">Audio & Video</TabsTrigger>
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="appearances">Media Appearances</TabsTrigger>
          </TabsList>

          <TabsContent value="books">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {books.map((book, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="relative h-64 w-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <Image
                        src={book.image || "/placeholder.svg"}
                        alt={book.title}
                        width={200}
                        height={300}
                        className="object-contain"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-lora">
                        {book.title}
                      </CardTitle>
                      <CardDescription>
                        {book.year} | {book.language}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 dark:text-gray-300">
                        {book.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="media">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mediaItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-md">
                        {item.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl font-lora">
                          {item.title}
                        </CardTitle>
                        <CardDescription>
                          {item.type} | {item.year}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 dark:text-gray-300">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="articles">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-sage/5 border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl font-lora">
                        {article.title}
                      </CardTitle>
                      <CardDescription>
                        {article.publication} | {article.year}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 dark:text-gray-300">
                        {article.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="appearances">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {appearances.map((appearance, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-teal/5 border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl font-lora">
                        {appearance.title}
                      </CardTitle>
                      <CardDescription>
                        {appearance.venue} | {appearance.year}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 dark:text-gray-300">
                        {appearance.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="font-lora text-2xl md:text-3xl mb-8 text-center text-maroon dark:text-amber">
            Featured Publication
          </h2>
          <div className="bg-amber/10 p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="relative h-80 w-full max-w-[250px] mx-auto">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Nyungné: The Practice of Compassion"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <h3 className="font-lora text-2xl mb-4 text-maroon dark:text-amber">
                  Nyungné: The Practice of Compassion
                </h3>
                <p className="mb-4 text-gray-800 dark:text-gray-300">
                  This comprehensive guide to the Nyungné practice is Ven. Khen
                  Rinpoche's most influential publication, translated into
                  multiple languages and used by practitioners worldwide. The
                  book provides detailed instructions for this powerful fasting
                  ritual dedicated to Avalokiteshvara, the Buddha of Compassion.
                </p>
                <p className="mb-6 text-gray-800 dark:text-gray-300">
                  Drawing on his decades of experience leading Nyungné retreats,
                  Ven. Khen Rinpoche offers clear explanations of the practice's
                  history, benefits, and step-by-step instructions, making this
                  profound practice accessible to both beginners and experienced
                  practitioners.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-maroon hover:bg-maroon/90 text-white">
                    Order Book
                  </Button>
                  <Button
                    variant="outline"
                    className="border-maroon text-maroon hover:bg-maroon/10 dark:text-white dark:border-white"
                  >
                    Download Sample Chapter
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="font-lora text-2xl md:text-3xl mb-8 text-center text-maroon dark:text-amber">
            Buddhist Astrology Calendars
          </h2>
          <div className="bg-sage/10 p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-lora text-2xl mb-4 text-teal dark:text-sage">
                  Annual Publications (2012-2018)
                </h3>
                <p className="mb-4 text-gray-800 dark:text-gray-300">
                  From 2012 to 2018, Ven. Khen Rinpoche published annual
                  Buddhist astrology calendars that became essential resources
                  for practitioners seeking to align their activities with
                  auspicious times according to Tibetan Buddhist traditions.
                </p>
                <p className="mb-4 text-gray-800 dark:text-gray-300">
                  Each calendar featured detailed information about lunar
                  phases, auspicious and inauspicious days for various
                  activities, and special practice days throughout the year.
                  They also included brief teachings and practice
                  recommendations for each month.
                </p>
                <p className="text-gray-800 dark:text-gray-300">
                  Though no longer published annually, these calendars remain
                  valuable references for understanding the traditional Buddhist
                  approach to time and its relationship to spiritual practice.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[2015, 2016, 2017, 2018].map((year) => (
                  <div
                    key={year}
                    className="relative aspect-square bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Calendar className="h-12 w-12 text-amber opacity-20" />
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-bold text-teal dark:text-sage">
                        {year}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Calendar
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
