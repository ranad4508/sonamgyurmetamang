"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PageTransition from "@/components/page-transition";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, Tv, School, Mountain, Film, Calendar } from "lucide-react";

export default function ProjectsPageClient() {
  const coreProjects = [
    {
      title: "Buddhist Teaching & Meditation Center (BTMC)",
      description:
        "Established in 2008 in Kathmandu, offering free Buddhist education and meditation courses to a global audience.",
      year: "2008",
      icon: <Building className="h-10 w-10 text-amber" />,
      color: "bg-amber/10",
      image: "/btmcfoundation.png?height=400&width=600",
      details: [
        "Provides structured courses in Buddhist philosophy and meditation",
        "Hosts regular teaching sessions by Ven. Khen Rinpoche and visiting masters",
        "Offers both introductory and advanced programs for practitioners",
        "Maintains a library of Buddhist texts in multiple languages",
        "Conducts special ceremonies and group practice sessions",
      ],
    },
    {
      title: "Dharma Television HD",
      description:
        "A pioneering satellite TV channel dedicated to broadcasting Buddhist teachings, meditation sessions, and cultural programs in multiple languages.",
      year: "2009",
      icon: <Tv className="h-10 w-10 text-maroon" />,
      color: "bg-maroon/10",
      image: "/dharmatv.png?height=400&width=600",
      details: [
        "Broadcasts 24/7 Buddhist content to viewers worldwide",
        "Features live teachings, guided meditations, and documentary programs",
        "Provides content in multiple languages including Nepali, Tibetan, and English",
        "Covers important Buddhist events and festivals",
        "Produces original content on Buddhist philosophy and practice",
      ],
    },
    {
      title: "Rigzin Dechhen Chhoeling Chuglag Khang",
      description:
        "A practical monastic school focusing on Buddhist studies and arts, providing education to students from Nepal and beyond.",
      year: "2010",
      icon: <School className="h-10 w-10 text-teal" />,
      color: "bg-teal/10",
      image: "/rdcck.png?height=400&width=600",
      details: [
        "Offers traditional monastic education to young monks and nuns",
        "Curriculum includes Buddhist philosophy, ritual arts, and meditation",
        "Preserves traditional Tibetan Buddhist arts including thangka painting and mandala creation",
        "Provides general education alongside Buddhist studies",
        "Supports students from economically disadvantaged backgrounds",
      ],
    },
    {
      title: "Tri-Yana Bodhi Meditation Center",
      description:
        "A retreat center located in Kakani, Nepal, offering short and long-term meditation courses to practitioners worldwide.",
      year: "2011",
      icon: <Mountain className="h-10 w-10 text-plum" />,
      color: "bg-plum/10",
      image: "/18.jpg?height=400&width=600",
      details: [
        "Provides a serene environment for intensive meditation practice",
        "Hosts retreats ranging from weekend programs to three-year retreats",
        "Facilities include individual meditation cabins and group practice halls",
        "Specializes in retreats focused on Dzogchen and Nyungné practices",
        "Welcomes practitioners from all Buddhist traditions and backgrounds",
      ],
    },
    {
      title: "Mahabodhi Documentary & Film Production Foundation",
      description:
        "Founded in 2012 to produce documentaries and films on Buddhist heritage, aiming to preserve and promote the teachings of the Buddha and Bodhisattvas.",
      year: "2012",
      icon: <Film className="h-10 w-10 text-terracotta" />,
      color: "bg-terracotta/10",
      image: "/placeholder.svg?height=400&width=600",
      details: [
        "Produces high-quality documentaries on Buddhist sites, practices, and masters",
        "Creates educational films for use in schools and dharma centers",
        "Documents rare Buddhist rituals and teachings for preservation",
        "Collaborates with international filmmakers and production companies",
        "Distributes content through multiple platforms including television and online streaming",
      ],
    },
  ];

  const recentInitiatives = [
    {
      title: "Pure Land Tours & Travels",
      description:
        "Formally established in 2024, Pure Land Tours & Travels expands on Khen Rinpoche's two decades of guiding informal pilgrim tourism across Asia, serving thousands of pilgrims with transformative spiritual journeys.",
      year: "2024",
      icon: <Calendar className="h-10 w-10 text-amber" />,
      color: "bg-amber/10",
      image: "/pureland.png?height=400&width=600",
      details: [
        "Organizes pilgrimages to sacred Buddhist sites throughout Asia",
        "Provides expert guidance with deep knowledge of Buddhist history and significance",
        "Combines travel with teachings, meditation, and practice opportunities",
        "Offers customized itineraries for individuals and groups",
        "Emphasizes ethical, sustainable tourism that benefits local communities",
      ],
    },
    {
      title: "B.T.M.C. Foundation",
      description:
        "Founded in 2024, the B.T.M.C. Foundation promotes global peace and prevents conflict through compassion-based dialogues and Buddhist practices like Nyungné (fasting rituals).",
      year: "2024",
      icon: <Building className="h-10 w-10 text-maroon" />,
      color: "bg-maroon/10",
      image: "/btmcfoundation.png?height=400&width=600",
      details: [
        "Facilitates dialogue between different religious and cultural traditions",
        "Promotes Nyungné practice as a method for cultivating compassion and peace",
        "Organizes conferences and workshops on conflict resolution through Buddhist principles",
        "Supports research on the application of Buddhist ethics to contemporary challenges",
        "Provides resources for communities seeking to implement compassion-based approaches",
      ],
    },
  ];

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="font-lora text-4xl md:text-5xl text-center mb-12 text-teal dark:text-sage">
          Core Dharma Projects
        </h1>

        <p className="text-lg text-center max-w-3xl mx-auto mb-16 text-gray-700 dark:text-gray-300">
          Venerable Khen Rinpoche has established numerous institutions and
          initiatives dedicated to preserving and sharing Buddhist wisdom,
          education, and cultural heritage.
        </p>

        <Tabs defaultValue="all" className="mb-16">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-8">
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="media">Media</TabsTrigger>
            <TabsTrigger value="recent">Recent Initiatives</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...coreProjects, ...recentInitiatives].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    className={`h-full ${project.color} border-none shadow-md hover:shadow-lg transition-shadow`}
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <CardHeader className="flex flex-row items-center gap-4">
                      {project.icon}
                      <div>
                        <CardTitle className="text-xl font-lora">
                          {project.title}
                        </CardTitle>
                        <CardDescription>Est. {project.year}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <ul className="space-y-1">
                        {project.details.slice(0, 2).map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-5 h-5 rounded-full text-amber flex items-center justify-center  shrink-0 mt-1 text-xs">
                              ✓
                            </div>
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="education">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[coreProjects[0], coreProjects[2], coreProjects[3]].map(
                (project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      className={`h-full ${project.color} border-none shadow-md hover:shadow-lg transition-shadow`}
                    >
                      <div className="relative h-48 w-full">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="flex flex-row items-center gap-4">
                        {project.icon}
                        <div>
                          <CardTitle className="text-xl font-lora">
                            {project.title}
                          </CardTitle>
                          <CardDescription>Est. {project.year}</CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          {project.description}
                        </p>
                        <ul className="space-y-1">
                          {project.details.slice(0, 3).map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-5 h-5 rounded-full text-amber flex items-center justify-center shrink-0 mt-1 text-xs">
                                ✓
                              </div>
                              <span className="text-sm text-gray-700 dark:text-gray-300">
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              )}
            </div>
          </TabsContent>

          <TabsContent value="media">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[coreProjects[1], coreProjects[4]].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    className={`h-full ${project.color} border-none shadow-md hover:shadow-lg transition-shadow`}
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <CardHeader className="flex flex-row items-center gap-4">
                      {project.icon}
                      <div>
                        <CardTitle className="text-xl font-lora">
                          {project.title}
                        </CardTitle>
                        <CardDescription>Est. {project.year}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <ul className="space-y-1">
                        {project.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-5 h-5 rounded-full text-amber flex items-center justify-center shrink-0 mt-1 text-xs">
                              ✓
                            </div>
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recent">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {recentInitiatives.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    className={`h-full ${project.color} border-none shadow-md hover:shadow-lg transition-shadow`}
                  >
                    <div className="relative h-64 w-full">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <CardHeader className="flex flex-row items-center gap-4">
                      {project.icon}
                      <div>
                        <CardTitle className="text-xl font-lora">
                          {project.title}
                        </CardTitle>
                        <CardDescription>Est. {project.year}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <ul className="space-y-1">
                        {project.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-5 h-5 rounded-full text-amber flex items-center justify-center shrink-0 mt-1 text-xs">
                              ✓
                            </div>
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
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
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-lora text-3xl text-center mb-10 text-maroon dark:text-amber">
            Project Details
          </h2>

          {coreProjects.map((project, index) => (
            <div
              key={index}
              className={`mb-16 p-8 rounded-lg shadow-md ${project.color}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-4 mb-6">
                    {project.icon}
                    <h3 className="font-lora text-2xl text-teal dark:text-sage">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {project.description}
                  </p>
                  <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-lg">
                    <h4 className="font-lora text-xl mb-4 text-maroon dark:text-amber">
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {project.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-6 h-6 rounded-full text-amber flex items-center justify-center shrink-0 mt-1">
                            ✓
                          </div>
                          <span className="text-gray-800 dark:text-gray-300">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="font-lora text-3xl text-center mb-10 text-maroon dark:text-amber">
            Recent Initiatives
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {recentInitiatives.map((initiative, index) => (
              <Card
                key={index}
                className={`${initiative.color} border-none shadow-lg`}
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={initiative.image || "/placeholder.svg"}
                    alt={initiative.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-lora">
                    {initiative.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    Established in {initiative.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-800 dark:text-gray-300 mb-6">
                    {initiative.description}
                  </p>
                  <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-lg">
                    <h4 className="font-lora text-xl mb-4 text-teal dark:text-sage">
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {initiative.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-6 h-6 rounded-full text-amber flex items-center justify-centershrink-0 mt-1">
                            ✓
                          </div>
                          <span className="text-gray-800 dark:text-gray-300">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
