import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  ChevronRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-maroon text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-lora text-xl mb-4 text-gold">
              Sonam Gyurme Tamang
            </h3>
            <p className="text-gray-300 mb-4">
              A visionary spiritual master, educator, mentor, and entrepreneur
              devoted to preserving and sharing the timeless wisdom of Buddhism.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/venkhenposonamgyurme.tamang"
                className="text-gray-300 hover:text-amber transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.facebook.com/venkhenposonamgyurme.tamang"
                className="text-gray-300 hover:text-amber transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.instagram.com/btmcnepal/"
                className="text-gray-300 hover:text-amber transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.youtube.com/@dharmatelevision7477"
                className="text-gray-300 hover:text-amber transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-lora text-xl mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="flex items-center group text-gray-300 hover:text-amber transition-all"
                >
                  <ChevronRight className="h-4 w-4 mr-1 group-hover:text-amber transition-colors" />
                  <span className="group-hover:tracking-wider transition-all">
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/teachings"
                  className="flex items-center group text-gray-300 hover:text-amber transition-all"
                >
                  <ChevronRight className="h-4 w-4 mr-1 group-hover:text-amber transition-colors" />
                  <span className="group-hover:tracking-wider transition-all">
                    Lineage & Teachings
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="flex items-center group text-gray-300 hover:text-amber transition-all"
                >
                  <ChevronRight className="h-4 w-4 mr-1 group-hover:text-amber transition-colors" />
                  <span className="group-hover:tracking-wider transition-all">
                    Projects
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/publications"
                  className="flex items-center group text-gray-300 hover:text-amber transition-all"
                >
                  <ChevronRight className="h-4 w-4 mr-1 group-hover:text-amber transition-colors" />
                  <span className="group-hover:tracking-wider transition-all">
                    Publications
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/initiatives"
                  className="flex items-center group text-gray-300 hover:text-amber transition-all"
                >
                  <ChevronRight className="h-4 w-4 mr-1 group-hover:text-amber transition-colors" />
                  <span className="group-hover:tracking-wider transition-all">
                    Global Initiatives
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-lora text-xl mb-4 text-gold">More Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/humanitarian"
                  className="flex items-center group text-gray-300 hover:text-amber transition-all"
                >
                  <ChevronRight className="h-4 w-4 mr-1 group-hover:text-amber transition-colors" />
                  <span className="group-hover:tracking-wider transition-all">
                    Humanitarian Work
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="flex items-center group text-gray-300 hover:text-amber transition-all"
                >
                  <ChevronRight className="h-4 w-4 mr-1 group-hover:text-amber transition-colors" />
                  <span className="group-hover:tracking-wider transition-all">
                    Gallery
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center group text-gray-300 hover:text-amber transition-all"
                >
                  <ChevronRight className="h-4 w-4 mr-1 group-hover:text-amber transition-colors" />
                  <span className="group-hover:tracking-wider transition-all">
                    Contact
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="flex items-center group text-gray-300 hover:text-amber transition-all"
                >
                  <ChevronRight className="h-4 w-4 mr-1 group-hover:text-amber transition-colors" />
                  <span className="group-hover:tracking-wider transition-all">
                    Support
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-lora text-xl mb-4 text-gold">Contact</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>Buddha Eyes Dharma Center</p>
              <p>Boudha, Kathmandu, Nepal</p>
              <p className="flex items-center gap-2 mt-4">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:contact@khenrinpoche.org"
                  className="hover:text-amber transition-colors"
                >
                  contact@khenrinpoche.org
                </a>
              </p>
              <p>Phone: +977 9810 223 626</p>
              <p>WhatsApp: +977 9766 883 351</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-500 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Ven. Khen Rinpoche Dr. Sonam
            Gyurme Tamang. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
