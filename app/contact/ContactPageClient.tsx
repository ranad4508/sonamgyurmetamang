"use client"

import { motion } from "framer-motion"
import PageTransition from "@/components/page-transition"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Globe } from "lucide-react"

export default function ContactPageClient() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="font-playfair text-4xl md:text-5xl text-center mb-12 text-[#1E3A5F]">Contact & Engagement</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-[#9C282A]">Get in Touch</CardTitle>
                <CardDescription>
                  Reach out to Ven. Khen Rinpoche Dr. Sonam Gyurme Tamang or inquire about his initiatives
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Subject of your message" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message" rows={5} />
                  </div>
                  <Button type="submit" className="w-full bg-[#F68F30] hover:bg-[#F68F30]/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="bg-[#1E3A5F]/5">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-[#9C282A]">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-[#F68F30]" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p>+977 9810 223 626</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-[#F68F30]" />
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p>+977 9766 883 351</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-[#F68F30]" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p>contact@khenrinpoche.org</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-[#F68F30] mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p>
                      Buddha Eyes Dharma Center
                      <br />
                      Boudha, Kathmandu
                      <br />
                      Nepal
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#EBE175]/5">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-[#9C282A]">Join Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Are you a skilled, dedicated, and experienced individual seeking meaningful collaboration? Khen
                  Rinpoche warmly welcomes passionate souls to join his lifelong ventures.
                </p>
                <p className="mb-6">
                  If you resonate with wisdom, purpose, and heartfelt service, we'd love to hear from you!
                </p>
                <Button className="w-full bg-[#9C282A] hover:bg-[#9C282A]/90">Apply to Collaborate</Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="font-playfair text-3xl text-center mb-8 text-[#9C282A]">Our Websites</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Dharma Television", url: "https://dharmatelevision.org", color: "bg-[#F68F30]/10" },
              { name: "B.T.M.C. Foundation", url: "https://btmcfoundation.org", color: "bg-[#9C282A]/10" },
              { name: "Pure Land Tours & Travels", url: "https://purelandtours.com", color: "bg-[#1E3A5F]/10" },
              { name: "Nyungne.org", url: "https://nyungne.org", color: "bg-[#4B4C3A]/10" },
            ].map((site, index) => (
              <Card key={index} className={`${site.color} border-none hover:shadow-md transition-shadow`}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{site.name}</p>
                    <Globe className="h-5 w-5 text-[#9C282A]" />
                  </div>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1E3A5F] hover:underline text-sm mt-2 block"
                  >
                    {site.url.replace("https://", "")}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  )
}
