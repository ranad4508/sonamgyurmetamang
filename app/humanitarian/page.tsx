"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PageTransition from "@/components/page-transition";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, GraduationCap, Leaf } from "lucide-react";

export default function HumanitarianPageClient() {
  const earthquakeRelief = {
    title: "Nepal Earthquake Relief (2014)",
    description:
      "In the aftermath of the devastating 2014 Nepal earthquake, Ven. Khen Rinpoche mobilized resources to provide immediate aid and long-term support to affected communities.",
    image: "/placeholder.svg?height=600&width=800",
    achievements: [
      "Provided emergency shelter to over 500 displaced families",
      "Distributed medical supplies and coordinated healthcare services",
      "Established temporary schools for children in affected areas",
      "Organized prayer ceremonies and spiritual support for survivors",
      "Facilitated rebuilding efforts for damaged homes and monasteries",
    ],
    testimonial: {
      quote:
        "When everything seemed lost, Khen Rinpoche and his team arrived with not just material aid, but also the spiritual support our community desperately needed.",
      author: "Tenzin Dorje",
      location: "Sindhupalchok District, Nepal",
    },
  };

  const fuelCrisis = {
    title: "Support During Fuel Crisis",
    description:
      "During Nepal's severe fuel crisis, Ven. Khen Rinpoche organized the distribution of free fuel to ensure the continuity of essential services, particularly for healthcare facilities and emergency transportation.",
    image: "/placeholder.svg?height=600&width=800",
    achievements: [
      "Secured and distributed fuel to 25 healthcare facilities",
      "Maintained emergency transportation services in remote areas",
      "Provided cooking fuel to community kitchens serving vulnerable populations",
      "Coordinated with international partners to import emergency supplies",
      "Advocated for equitable distribution of limited resources",
    ],
    testimonial: {
      quote:
        "The fuel provided by Khen Rinpoche's initiative allowed our hospital to continue operating during the crisis, saving countless lives.",
      author: "Dr. Pema Lhamo",
      location: "Community Hospital, Kathmandu",
    },
  };

  const ongoingProjects = [
    {
      title: "Education Support",
      description:
        "Providing scholarships, educational materials, and infrastructure support to schools in underserved communities.",
      icon: <GraduationCap className="h-10 w-10 text-amber" />,
      color: "amber/10",
      achievements: [
        "Awarded 200+ scholarships to students from disadvantaged backgrounds",
        "Established libraries in 15 rural schools",
        "Provided teacher training programs in modern educational methods",
        "Supplied computers and digital learning resources to remote schools",
      ],
    },
    {
      title: "Healthcare Initiatives",
      description:
        "Supporting access to healthcare services through medical camps, equipment donations, and health education programs.",
      icon: <Heart className="h-10 w-10 text-maroon" />,
      color: "maroon/10",
      achievements: [
        "Organized 30+ medical camps in remote areas",
        "Provided essential medical equipment to rural health posts",
        "Conducted health education workshops focusing on preventive care",
        "Supported traditional medicine practitioners in preserving knowledge",
      ],
    },
    {
      title: "Sustainable Living",
      description:
        "Promoting environmentally sustainable practices through education, training, and community-based projects.",
      icon: <Leaf className="h-10 w-10 text-plum" />,
      color: "plum/10",
      achievements: [
        "Established organic farming cooperatives in 10 villages",
        "Implemented water conservation projects in drought-prone areas",
        "Conducted workshops on sustainable building techniques",
        "Supported reforestation efforts around sacred sites",
      ],
    },
  ];

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="font-lora text-4xl md:text-5xl text-center mb-12 text-teal dark:text-sage">
          Humanitarian Contributions
        </h1>

        <p className="text-lg text-center max-w-3xl mx-auto mb-16 text-gray-700 dark:text-gray-300">
          Venerable Khen Rinpoche's compassion extends beyond spiritual
          teachings to practical humanitarian efforts that address immediate
          needs and create sustainable solutions for communities in crisis.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="font-lora text-3xl text-center mb-10 text-maroon dark:text-amber">
            Emergency Relief Efforts
          </h2>

          <Tabs defaultValue="earthquake" className="mb-12">
            <TabsList className="grid grid-cols-2 w-full mb-8">
              <TabsTrigger value="earthquake">
                Nepal Earthquake Relief
              </TabsTrigger>
              <TabsTrigger value="fuel">Fuel Crisis Support</TabsTrigger>
            </TabsList>

            <TabsContent value="earthquake">
              <div className="bg-teal/10 p-8 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                  <div>
                    <h3 className="font-lora text-2xl mb-4 text-maroon dark:text-amber">
                      {earthquakeRelief.title}
                    </h3>
                    <p className="mb-6 text-gray-800 dark:text-gray-300">
                      {earthquakeRelief.description}
                    </p>
                    <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-lg">
                      <h4 className="font-lora text-xl mb-4 text-teal dark:text-sage">
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {earthquakeRelief.achievements.map(
                          (achievement, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="w-6 h-6 rounded-full text-amber flex items-center justify-center shrink-0 mt-1">
                                ✓
                              </div>
                              <span className="text-gray-800 dark:text-gray-300">
                                {achievement}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                  <div className="relative h-full min-h-[400px]">
                    <Image
                      src={earthquakeRelief.image || "/placeholder.svg"}
                      alt="Nepal Earthquake Relief Efforts"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="bg-maroon/10 p-6 rounded-lg">
                  <blockquote className="italic text-gray-800 dark:text-gray-300 mb-4">
                    "{earthquakeRelief.testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full text-maroon flex items-center justify-center ">
                      {earthquakeRelief.testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">
                        {earthquakeRelief.testimonial.author}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {earthquakeRelief.testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="fuel">
              <div className="bg-amber/10 p-8 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                  <div className="order-2 md:order-1">
                    <div className="relative h-full min-h-[400px]">
                      <Image
                        src={fuelCrisis.image || "/placeholder.svg"}
                        alt="Fuel Crisis Support Efforts"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="font-lora text-2xl mb-4 text-maroon dark:text-amber">
                      {fuelCrisis.title}
                    </h3>
                    <p className="mb-6 text-gray-800 dark:text-gray-300">
                      {fuelCrisis.description}
                    </p>
                    <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-lg">
                      <h4 className="font-lora text-xl mb-4 text-teal dark:text-sage">
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {fuelCrisis.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-6 h-6 rounded-full text-maroon flex items-center justify-center shrink-0 mt-1">
                              ✓
                            </div>
                            <span className="text-gray-800 dark:text-gray-300">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-teal/10 p-6 rounded-lg">
                  <blockquote className="italic text-gray-800 dark:text-gray-300 mb-4">
                    "{fuelCrisis.testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full text-teal flex items-center justify-center text-white">
                      {fuelCrisis.testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">
                        {fuelCrisis.testimonial.author}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {fuelCrisis.testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        <div className="mb-20">
          <h2 className="font-lora text-3xl text-center mb-10 text-teal dark:text-sage">
            Ongoing Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ongoingProjects.map((project, index) => (
              <div
                key={index}
                className={`bg-${project.color} p-8 rounded-lg shadow-md`}
              >
                <div className="flex items-center gap-4 mb-6">
                  {project.icon}
                  <h3 className="font-lora text-2xl mb-0 text-maroon dark:text-amber">
                    {project.title}
                  </h3>
                </div>
                <p className="mb-6 text-gray-800 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-lg">
                  <h4 className="font-lora text-xl mb-4 text-teal dark:text-sage">
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {project.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full text-maroon flex items-center justify-center shrink-0 mt-1">
                          ✓
                        </div>
                        <span className="text-gray-800 dark:text-gray-300">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
