"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Ven. Khen Rinpoche's teachings have transformed my understanding of Buddhism and brought profound peace to my life.",
      name: "Sarah Johnson",
      location: "Canada",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The pilgrimage led by Khen Rinpoche was a life-changing experience. His deep knowledge and compassionate guidance made every moment meaningful.",
      name: "David Chen",
      location: "Taiwan",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Participating in the Nyungné practice under Khen Rinpoche's guidance has been a powerful experience of purification and spiritual growth.",
      name: "Maria Gonzalez",
      location: "USA",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Khen Rinpoche's ability to explain complex Buddhist concepts in simple, relatable terms has made the teachings accessible and practical for daily life.",
      name: "Tenzin Dorje",
      location: "Nepal",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <section className="py-20 md:py-32 bg-[#1E3A5F]/5 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl text-[#1E3A5F] dark:text-[#EBE175] mb-4">Testimonials</h2>
          <div className="w-24 h-1 bg-[#F68F30] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
            Hear from those whose lives have been touched by Ven. Khen Rinpoche's teachings and guidance.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full z-10"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white dark:bg-gray-800 shadow-md"
              onClick={prev}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
          </div>

          <div
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-full z-10"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white dark:bg-gray-800 shadow-md"
              onClick={next}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border-none shadow-lg bg-white dark:bg-gray-800">
                    <CardContent className="pt-6 pb-6">
                      <div className="flex flex-col items-center text-center">
                        <Quote className="h-10 w-10 text-[#F68F30] mb-4" />
                        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 italic">"{testimonial.quote}"</p>
                        <div className="flex items-center gap-4">
                          <div className="relative w-16 h-16 rounded-full overflow-hidden">
                            <Image
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="text-left">
                            <p className="font-medium text-[#1E3A5F] dark:text-[#EBE175]">{testimonial.name}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current ? "bg-[#F68F30]" : "bg-gray-300 dark:bg-gray-600"
                }`}
                onClick={() => {
                  setCurrent(index)
                  setAutoplay(false)
                }}
                onMouseEnter={() => setAutoplay(false)}
                onMouseLeave={() => setAutoplay(true)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
