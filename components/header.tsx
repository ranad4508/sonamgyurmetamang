"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Set active link based on current path
    setActiveLink(window.location.pathname);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Teachings", href: "/teachings" },
    { name: "Projects", href: "/projects" },
    { name: "Publications", href: "/publications" },
    { name: "Initiatives", href: "/initiatives" },
    { name: "Humanitarian", href: "/humanitarian" },
    { name: "Gallery", href: "/gallery" },
    { name: "Support", href: "/support" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <span className="font-lora text-2xl font-medium text-maroon dark:text-amber">
              Sonam Gyurme Tamang
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <div className="flex space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 relative group
                    ${
                      activeLink === link.href
                        ? "text-orange dark:text-amber"
                        : "text-gray-700 hover:text-orange dark:text-gray-200 dark:hover:text-amber"
                    }
                  `}
                  onClick={() => setActiveLink(link.href)}
                >
                  {link.name}
                  {activeLink === link.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange dark:bg-amber"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <div className="absolute inset-0 rounded-full bg-orange/10 dark:bg-amber/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </Link>
              ))}
            </div>

            <Button
              asChild
              className="ml-4 bg-orange hover:bg-orange/90 text-white rounded-full"
              size="sm"
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-maroon dark:text-amber"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col divide-y divide-gray-100 dark:divide-gray-800">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.href);
                    closeMenu();
                  }}
                  className={`py-4 text-base font-medium transition-colors ${
                    activeLink === link.href
                      ? "text-orange dark:text-amber"
                      : "text-gray-700 dark:text-gray-200"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button
                  asChild
                  className="w-full bg-orange hover:bg-orange/90 text-white rounded-full mt-2"
                >
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
