"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Ven. Khen Rinpoche teaching",
      category: "Teaching",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Dharma Television studio",
      category: "Media",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Pilgrimage in Nepal",
      category: "Travel",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Meditation retreat",
      category: "Retreat",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Humanitarian work",
      category: "Humanitarian",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "International teaching tour",
      category: "International",
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl text-maroon dark:text-gold mb-4">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-orange mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
            Glimpses of Ven. Khen Rinpoche's teachings, travels, and
            humanitarian work around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md cursor-pointer">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-maroon/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium">View</span>
                </div>
              </div>
              <div className="absolute bottom-3 left-3 bg-orange text-white text-sm px-3 py-1 rounded-full">
                {image.category}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Button asChild className="bg-maroon hover:bg-maroon/90 text-white">
            <a href="/gallery">View Full Gallery</a>
          </Button>
        </motion.div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 z-10 text-white hover:bg-white/20 rounded-full"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Button>

              <div className="relative aspect-video">
                <Image
                  src={images[selectedImage].src || "/placeholder.svg"}
                  alt={images[selectedImage].alt}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="mt-4 text-white text-center">
                <p className="text-lg">{images[selectedImage].alt}</p>
                <p className="text-sm text-gray-300">
                  {images[selectedImage].category}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
