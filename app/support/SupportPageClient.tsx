"use client"
import { motion } from "framer-motion"
import PageTransition from "@/components/page-transition"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, HandHeart, Lightbulb, Users } from "lucide-react"

export default function SupportPageClient() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="font-playfair text-4xl md:text-5xl text-center mb-6 text-[#1E3A5F]">Support & Donations</h1>

        <p className="text-lg text-center max-w-3xl mx-auto mb-16 text-gray-700">
          Your generous support enables us to continue our mission of preserving and sharing Buddhist wisdom, providing
          education, and fostering global peace and harmony.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="h-full bg-[#F68F30]/5 border-none shadow-md">
              <CardHeader>
                <Heart className="h-10 w-10 text-[#F68F30] mb-2" />
                <CardTitle className="text-xl font-playfair">One-Time Donation</CardTitle>
                <CardDescription>Make a direct impact with a one-time contribution</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Your donation will support our ongoing projects, including educational programs, humanitarian relief,
                  and the preservation of Buddhist teachings.
                </p>
                <Button className="w-full bg-[#F68F30] hover:bg-[#F68F30]/90">Donate Now</Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full bg-[#9C282A]/5 border-none shadow-md">
              <CardHeader>
                <HandHeart className="h-10 w-10 text-[#9C282A] mb-2" />
                <CardTitle className="text-xl font-playfair">Monthly Giving</CardTitle>
                <CardDescription>Become a sustaining supporter with monthly donations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Regular monthly contributions provide reliable support for our long-term initiatives and help us plan
                  for the future with confidence.
                </p>
                <Button className="w-full bg-[#9C282A] hover:bg-[#9C282A]/90 text-white">
                  Become a Monthly Supporter
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full bg-[#1E3A5F]/5 border-none shadow-md">
              <CardHeader>
                <Lightbulb className="h-10 w-10 text-[#1E3A5F] mb-2" />
                <CardTitle className="text-xl font-playfair">Project Sponsorship</CardTitle>
                <CardDescription>Support a specific initiative or project</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Direct your support to a particular project or initiative that resonates with you, such as education,
                  media production, or humanitarian relief.
                </p>
                <Button className="w-full bg-[#1E3A5F] hover:bg-[#1E3A5F]/90 text-white">Sponsor a Project</Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-[#EBE175]/10 p-8 rounded-lg shadow-md mb-16"
        >
          <h2 className="font-playfair text-2xl md:text-3xl mb-6 text-center text-[#9C282A]">Payment Methods</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-playfair text-xl mb-4 text-[#1E3A5F]">Online Payment</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#F68F30] flex items-center justify-center text-white">✓</div>
                  <span>Credit/Debit Cards</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#F68F30] flex items-center justify-center text-white">✓</div>
                  <span>PayPal</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#F68F30] flex items-center justify-center text-white">✓</div>
                  <span>Esewa (Nepal)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#F68F30] flex items-center justify-center text-white">✓</div>
                  <span>Khalti (Nepal)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-playfair text-xl mb-4 text-[#1E3A5F]">Bank Transfer</h3>
              <div className="space-y-3 text-gray-800">
                <p>
                  <strong>Account Name:</strong> B.T.M.C. Foundation
                </p>
                <p>
                  <strong>Bank:</strong> Nepal Investment Bank
                </p>
                <p>
                  <strong>Account Number:</strong> 01234567890123456
                </p>
                <p>
                  <strong>Swift Code:</strong> NIBLNPKT
                </p>
                <p className="text-sm text-gray-600 mt-4">
                  Please include your name and "Donation" in the transfer description.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="font-playfair text-2xl md:text-3xl mb-8 text-center text-[#9C282A]">Other Ways to Support</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-[#4B4C3A]/5 border-none shadow-md">
              <CardHeader>
                <Users className="h-10 w-10 text-[#4B4C3A] mb-2" />
                <CardTitle className="text-xl font-playfair">Volunteer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-700">
                  Share your skills and time to support our various initiatives. We welcome volunteers with expertise in
                  education, media, technology, translation, and more.
                </p>
                <Button variant="outline" className="w-full border-[#4B4C3A] text-[#4B4C3A] hover:bg-[#4B4C3A]/10">
                  Learn About Volunteering
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-[#90655A]/5 border-none shadow-md">
              <CardHeader>
                <Lightbulb className="h-10 w-10 text-[#90655A] mb-2" />
                <CardTitle className="text-xl font-playfair">In-Kind Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-700">
                  Donate books, educational materials, media equipment, or other resources that can support our
                  educational and media production initiatives.
                </p>
                <Button variant="outline" className="w-full border-[#90655A] text-[#90655A] hover:bg-[#90655A]/10">
                  Contact About In-Kind Donations
                </Button>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  )
}
