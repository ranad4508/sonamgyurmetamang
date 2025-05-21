"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import PageTransition from "@/components/page-transition";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function GalleryPageClient() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState("all");

  const images = [
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Ven. Khen Rinpoche teaching at a monastery",
      category: "Teaching",
      location: "Kathmandu, Nepal",
      year: "2022",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Dharma Television studio recording",
      category: "Media",
      location: "Kathmandu, Nepal",
      year: "2021",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Pilgrimage to Bodh Gaya",
      category: "Travel",
      location: "Bodh Gaya, India",
      year: "2020",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Meditation retreat in the mountains",
      category: "Retreat",
      location: "Himalayan Foothills",
      year: "2019",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Humanitarian aid distribution",
      category: "Humanitarian",
      location: "Rural Nepal",
      year: "2018",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Teaching tour in Japan",
      category: "International",
      location: "Tokyo, Japan",
      year: "2018",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Nyungné practice session",
      category: "Practice",
      location: "Boudha, Nepal",
      year: "2021",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Meeting with Buddhist leaders",
      category: "Events",
      location: "Dharamsala, India",
      year: "2019",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Traditional Buddhist ceremony",
      category: "Ceremonies",
      location: "Kathmandu, Nepal",
      year: "2022",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Teaching tour in Taiwan",
      category: "International",
      location: "Taipei, Taiwan",
      year: "2020",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Monastery construction project",
      category: "Projects",
      location: "Sindhupalchok, Nepal",
      year: "2017",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Blessing ceremony for local community",
      category: "Ceremonies",
      location: "Kathmandu Valley, Nepal",
      year: "2021",
    },
  ];

  const categories = [
    "all",
    ...Array.from(new Set(images.map((image) => image.category.toLowerCase()))),
  ];

  const filteredImages =
    filter === "all"
      ? images
      : images.filter((image) => image.category.toLowerCase() === filter);

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="font-lora text-4xl md:text-5xl text-center mb-6 text-maroon dark:text-gold">
          Photo Gallery
        </h1>

        <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-700 dark:text-gray-300">
          Explore moments from Ven. Khen Rinpoche's teachings, travels,
          ceremonies, and humanitarian work around the world.
        </p>

        <div className="flex items-center justify-center mb-8">
          <Tabs
            defaultValue="all"
            value={filter}
            onValueChange={setFilter}
            className="w-full max-w-3xl"
          >
            <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-wrap">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="capitalize"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative group"
              onClick={() => setSelectedImage(images.indexOf(image))}
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
              <div className="absolute bottom-3 right-3 bg-crimson text-white text-sm px-3 py-1 rounded-full">
                {image.year}
              </div>
            </motion.div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              No images found in this category.
            </p>
          </div>
        )}

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-5xl w-full">
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
                <p className="text-lg font-lora">{images[selectedImage].alt}</p>
                <p className="text-sm text-gray-300">
                  {images[selectedImage].location} |{" "}
                  {images[selectedImage].year}
                </p>
              </div>

              <div className="flex justify-between mt-6">
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                  onClick={() =>
                    setSelectedImage((prev) =>
                      prev !== null && prev > 0 ? prev - 1 : images.length - 1
                    )
                  }
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                  onClick={() =>
                    setSelectedImage((prev) =>
                      prev !== null
                        ? prev < images.length - 1
                          ? prev + 1
                          : 0
                        : 0
                    )
                  }
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
}
