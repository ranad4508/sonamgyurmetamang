"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import PageTransition from "@/components/page-transition"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Globe, Heart, ArrowRight } from "lucide-react"

export default function InitiativesPageClient() {
  const nyungneCampaigns = [
    {
      country: "Japan",
      year: "2018",
      participants: "500+",
      description: "A month-long series of Nyungné retreats across major cities in Japan.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      country: "Korea",
      year: "2019",
      participants: "350+",
      description: "Two-week intensive Nyungné practice program in Seoul and Busan.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      country: "Taiwan",
      year: "2020",
      participants: "600+",
      description: "Virtual and in-person Nyungné retreats throughout Taiwan during the pandemic.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      country: "Canada",
      year: "2021",
      participants: "250+",
      description: "Nyungné retreats in Vancouver and Toronto with emphasis on healing practices.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      country: "USA",
      year: "2022",
      participants: "400+",
      description: "Multi-city tour featuring Nyungné practices and teachings on compassion.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const dharmaIdealCampaign = {
    title: "Dharma Ideal Campaign",
    description:
      "A global initiative aiming to foster peace and harmony through Buddhist teachings and community engagement.",
    started: "2019",
    image: "/placeholder.svg?height=600&width=800",
    objectives: [
      "Promote understanding of Buddhist principles as tools for personal and social transformation",
      "Create platforms for interfaith dialogue and cooperation",
      "Develop educational resources that make Buddhist wisdom accessible to diverse audiences",
      "Support community-based initiatives that apply Buddhist values to address local challenges",
      "Foster a global network of practitioners committed to embodying and sharing Buddhist ideals",
    ],
    activities: [
      {
        title: "Peace Dialogues",
        description: "Regular forums bringing together leaders from different religious and cultural backgrounds.",
      },
      {
        title: "Educational Workshops",
        description: "Programs teaching practical applications of Buddhist principles in daily life.",
      },
      {
        title: "Media Productions",
        description: "Creating films, podcasts, and online content that share Buddhist wisdom globally.",
      },
      {
        title: "Community Service",
        description: "Organizing volunteer activities that embody the principle of compassion in action.",
      },
    ],
  }

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="font-lora text-4xl md:text-5xl text-center mb-12 text-teal dark:text-sage">
          Global Dharma Initiatives
        </h1>

        <p className="text-lg text-center max-w-3xl mx-auto mb-16 text-gray-700 dark:text-gray-300">
          Venerable Khen Rinpoche's international outreach efforts aim to share Buddhist wisdom and foster peace and
          harmony across cultural and geographical boundaries.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="font-lora text-3xl text-center mb-10 text-maroon dark:text-amber">Nyungné Campaigns</h2>

          <div className="bg-amber/10 p-8 rounded-lg shadow-md mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-lora text-2xl mb-4 text-maroon dark:text-amber">Global Compassion Practice</h3>
                <p className="mb-4 text-gray-800 dark:text-gray-300">
                  Ven. Khen Rinpoche has organized meditation and teaching tours across countries including Japan,
                  Korea, Taiwan, Canada, and the USA, promoting Buddhist practice and dialogue through Nyungné retreats.
                </p>
                <p className="mb-4 text-gray-800 dark:text-gray-300">
                  Nyungné is a powerful fasting and purification practice focused on Avalokiteshvara (Chenrezig), the
                  Buddha of Compassion. These campaigns have introduced thousands of practitioners worldwide to this
                  profound method for cultivating compassion and inner peace.
                </p>
                <p className="text-gray-800 dark:text-gray-300">
                  Each campaign combines intensive practice sessions with teachings on Buddhist philosophy and ethics,
                  creating transformative experiences for participants regardless of their cultural background.
                </p>
              </div>
              <div className="relative h-full min-h-[300px]">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Nyungné practice session"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full mb-8">
              <TabsTrigger value="all">All Campaigns</TabsTrigger>
              <TabsTrigger value="japan">Japan</TabsTrigger>
              <TabsTrigger value="korea">Korea</TabsTrigger>
              <TabsTrigger value="taiwan">Taiwan</TabsTrigger>
              <TabsTrigger value="north-america">North America</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {nyungneCampaigns.map((campaign, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image
                          src={campaign.image || "/placeholder.svg"}
                          alt={`Nyungné Campaign in ${campaign.country}`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-0 right-0 bg-maroon text-white px-3 py-1">{campaign.year}</div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl font-lora">{campaign.country} Campaign</CardTitle>
                        <CardDescription>{campaign.participants} Participants</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 dark:text-gray-300">{campaign.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="japan">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-96">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Nyungné Campaign in Japan"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="font-lora text-2xl mb-4 text-maroon dark:text-amber">Japan Campaign (2018)</h3>
                  <p className="mb-4 text-gray-800 dark:text-gray-300">
                    The Japan Nyungné Campaign was a month-long series of retreats across major cities including Tokyo,
                    Kyoto, and Osaka, reaching over 500 participants from diverse backgrounds.
                  </p>
                  <p className="mb-4 text-gray-800 dark:text-gray-300">
                    This campaign was particularly notable for its integration of Japanese cultural elements with
                    traditional Tibetan Buddhist practices, creating a unique and accessible experience for Japanese
                    practitioners.
                  </p>
                  <p className="text-gray-800 dark:text-gray-300">
                    The retreats were hosted in both traditional Buddhist temples and modern meditation centers,
                    highlighting the relevance of these ancient practices in contemporary Japanese society.
                  </p>
                  <div className="mt-6 bg-amber/10 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Highlights:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-amber flex items-center justify-center text-white shrink-0 mt-1 text-xs">
                          ✓
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Collaboration with 12 Japanese Buddhist temples
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-amber flex items-center justify-center text-white shrink-0 mt-1 text-xs">
                          ✓
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Special teachings on the connection between Avalokiteshvara and Kannon
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-amber flex items-center justify-center text-white shrink-0 mt-1 text-xs">
                          ✓
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Publication of practice materials in Japanese
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="korea">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-lora text-2xl mb-4 text-maroon dark:text-amber">Korea Campaign (2019)</h3>
                  <p className="mb-4 text-gray-800 dark:text-gray-300">
                    The Korea Nyungné Campaign consisted of a two-week intensive practice program in Seoul and Busan,
                    attracting over 350 participants from across the country.
                  </p>
                  <p className="mb-4 text-gray-800 dark:text-gray-300">
                    This campaign emphasized the relationship between Nyungné practice and Korean Buddhist traditions,
                    particularly the cultivation of compassion as expressed in both lineages.
                  </p>
                  <p className="text-gray-800 dark:text-gray-300">
                    The program included special sessions for young practitioners, introducing a new generation to these
                    traditional practices through contemporary teaching methods.
                  </p>
                  <div className="mt-6 bg-maroon/10 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Highlights:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-maroon flex items-center justify-center text-white shrink-0 mt-1 text-xs">
                          ✓
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Partnership with major Korean Buddhist organizations
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-maroon flex items-center justify-center text-white shrink-0 mt-1 text-xs">
                          ✓
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Youth-focused workshops on compassion in action
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-maroon flex items-center justify-center text-white shrink-0 mt-1 text-xs">
                          ✓
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Korean translation of Nyungné practice texts
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative h-96">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Nyungné Campaign in Korea"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="taiwan">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-96">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Nyungné Campaign in Taiwan"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="font-lora text-2xl mb-4 text-maroon dark:text-amber">Taiwan Campaign (2020)</h3>
                  <p className="mb-4 text-gray-800 dark:text-gray-300">
                    The Taiwan Nyungné Campaign was uniquely adapted to the challenges of the pandemic, offering both
                    virtual and small in-person retreats throughout the country, reaching over 600 participants.
                  </p>
                  <p className="mb-4 text-gray-800 dark:text-gray-300">
                    This campaign highlighted the healing aspects of Nyungné practice, with special emphasis on
                    cultivating compassion during times of global crisis and uncertainty.
                  </p>
                  <p className="text-gray-800 dark:text-gray-300">
                    The innovative hybrid format allowed for unprecedented participation and established new methods for
                    sharing these practices that continue to be utilized today.
                  </p>
                  <div className="mt-6 bg-teal/10 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Highlights:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-teal flex items-center justify-center text-white shrink-0 mt-1 text-xs">
                          ✓
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Development of online Nyungné practice platform
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-teal flex items-center justify-center text-white shrink-0 mt-1 text-xs">
                          ✓
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Special focus on practices for health and healing
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-teal flex items-center justify-center text-white shrink-0 mt-1 text-xs">
                          ✓
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Collaboration with Taiwanese healthcare professionals
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="north-america">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-lora text-2xl mb-4 text-maroon dark:text-amber">
                    North American Campaigns (2021-2022)
                  </h3>
                  <p className="mb-4 text-gray-800 dark:text-gray-300">
                    The North American Nyungné Campaigns included retreats in major cities across Canada and the United
                    States, reaching over 650 participants combined over two years.
                  </p>
                  <p className="mb-4 text-gray-800 dark:text-gray-300">
                    These campaigns were characterized by their emphasis on integrating traditional Nyungné practice
                    with contemporary Western approaches to mindfulness and compassion cultivation.
                  </p>
                  <p className="text-gray-800 dark:text-gray-300">
                    The programs included special components addressing modern challenges such as environmental
                    sustainability, social justice, and mental health, viewed through the lens of Buddhist compassion.
                  </p>
                  <div className="mt-6 bg-plum/10 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Highlights:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-plum flex items-center justify-center text-white shrink-0 mt-1 text-xs">
                          ✓
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Collaborations with Western academic institutions
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-plum flex items-center justify-center text-white shrink-0 mt-1 text-xs">
                          ✓
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Public talks on compassion in contemporary society
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-plum flex items-center justify-center text-white shrink-0 mt-1 text-xs">
                          ✓
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Development of adapted practices for beginners
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative h-96">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Nyungné Campaign in North America"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center">
            <Button asChild className="bg-maroon hover:bg-maroon/90 text-white">
              <a
                href="https://nyungne.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Learn More About Nyungné Practice
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="font-lora text-3xl text-center mb-10 text-maroon dark:text-amber">Dharma Ideal Campaign</h2>

          <div className="bg-teal/10 p-8 rounded-lg shadow-md mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-lora text-2xl mb-4 text-teal dark:text-sage">Fostering Global Peace and Harmony</h3>
                <p className="mb-4 text-gray-800 dark:text-gray-300">
                  The Dharma Ideal Campaign is a global initiative launched by Ven. Khen Rinpoche in 2019, aiming to
                  foster peace and harmony through Buddhist teachings and community engagement.
                </p>
                <p className="mb-4 text-gray-800 dark:text-gray-300">
                  This multifaceted campaign works to make Buddhist principles accessible and relevant to contemporary
                  challenges, emphasizing their practical application in daily life and social contexts.
                </p>
                <p className="text-gray-800 dark:text-gray-300">
                  Through educational programs, media productions, community service, and interfaith dialogues, the
                  campaign creates platforms for sharing Buddhist wisdom and building bridges across cultural and
                  religious differences.
                </p>
              </div>
              <div className="relative h-full min-h-[300px]">
                <Image
                  src={dharmaIdealCampaign.image || "/placeholder.svg"}
                  alt="Dharma Ideal Campaign"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <Card className="border-none shadow-md bg-sage/10">
              <CardHeader>
                <Globe className="h-10 w-10 text-amber mb-2" />
                <CardTitle className="text-xl font-lora">Campaign Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {dharmaIdealCampaign.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-amber flex items-center justify-center text-white shrink-0 mt-1">
                        ✓
                      </div>
                      <span className="text-gray-800 dark:text-gray-300">{objective}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-maroon/10">
              <CardHeader>
                <Heart className="h-10 w-10 text-maroon mb-2" />
                <CardTitle className="text-xl font-lora">Key Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {dharmaIdealCampaign.activities.map((activity, index) => (
                    <div key={index} className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
                      <h4 className="font-medium text-teal dark:text-sage mb-2">{activity.title}</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{activity.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-amber/10 p-8 rounded-lg shadow-md">
            <h3 className="font-lora text-2xl mb-6 text-center text-maroon dark:text-amber">Get Involved</h3>
            <p className="text-center text-gray-800 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              The Dharma Ideal Campaign welcomes participation from individuals and organizations who share the vision
              of creating a more peaceful and compassionate world through the application of Buddhist principles.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-none shadow-md bg-white/50 dark:bg-gray-800/50">
                <CardHeader>
                  <CardTitle className="text-lg font-lora">Join a Local Chapter</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Connect with Dharma Ideal Campaign participants in your area and join local activities.
                  </p>
                  <Button variant="outline" className="w-full">
                    Find Local Chapters
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md bg-white/50 dark:bg-gray-800/50">
                <CardHeader>
                  <CardTitle className="text-lg font-lora">Support the Campaign</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Contribute to the campaign's initiatives through donations or by offering your skills.
                  </p>
                  <Button className="w-full bg-maroon hover:bg-maroon/90 text-white">Support Now</Button>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md bg-white/50 dark:bg-gray-800/50">
                <CardHeader>
                  <CardTitle className="text-lg font-lora">Access Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Explore educational materials, practice guides, and media content created by the campaign.
                  </p>
                  <Button variant="outline" className="w-full">
                    Browse Resources
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  )
}
