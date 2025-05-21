"use client";

import { motion } from "framer-motion";
import PageTransition from "@/components/page-transition";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

export default function ContactPageClient() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="font-playfair text-4xl md:text-5xl text-center mb-12 text-maroon">
          Contact & Engagement
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-crimson">
                  Get in Touch
                </CardTitle>
                <CardDescription>
                  Reach out to Ven. Khen Rinpoche Dr. Sonam Gyurme Tamang or
                  inquire about his initiatives
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
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={5}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-orange hover:bg-orange/90"
                  >
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
            <div className="bg-maroon text-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="font-playfair text-2xl text-gold mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Phone</p>
                    <p>+977 9810 223 626</p>
                    <p className="mt-1">
                      WhatsApp:{" "}
                      <a
                        href="https://wa.me/9779766883351"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-gold transition-colors"
                      >
                        +977 9766 883 351
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Email</p>
                    <p>
                      <a
                        href="mailto:contact@khenrinpoche.org"
                        className="underline hover:text-gold transition-colors"
                      >
                        contact@khenrinpoche.org
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Address</p>
                    <p>
                      Buddha Eyes Dharma Center
                      <br />
                      Boudha, Kathmandu
                      <br />
                      Nepal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="font-playfair text-3xl text-center mb-8 text-crimson">
            Our Websites
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Dharma Television",
                url: "https://www.dharmatelevision.tv",
                color: "bg-orange/10",
              },
              {
                name: "B.T.M.C. Foundation",
                url: "https://btmcfoundation.org",
                color: "bg-crimson/10",
              },
              {
                name: "Pure Land Tours & Travels",
                url: "https://www.purelandtours.com",
                color: "bg-maroon/10",
              },
              {
                name: "Ngyungne.org",
                url: "https://ngyungne.org",
                color: "bg-vermilion/10",
              },
            ].map((site, index) => (
              <Card
                key={index}
                className={`${site.color} border-none hover:shadow-md transition-shadow`}
              >
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{site.name}</p>
                    <Globe className="h-5 w-5 text-crimson" />
                  </div>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-maroon hover:underline text-sm mt-2 block"
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
  );
}
