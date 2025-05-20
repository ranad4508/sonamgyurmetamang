import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-teal text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-lora text-xl mb-4 text-sage">Ven. Khen Rinpoche</h3>
            <p className="text-gray-300 mb-4">
              A visionary spiritual master, educator, mentor, and entrepreneur devoted to preserving and sharing the
              timeless wisdom of Buddhism.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-amber transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-amber transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-amber transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-amber transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-lora text-xl mb-4 text-sage">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-amber transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/teachings" className="text-gray-300 hover:text-amber transition-colors">
                  Lineage & Teachings
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-amber transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/publications" className="text-gray-300 hover:text-amber transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/initiatives" className="text-gray-300 hover:text-amber transition-colors">
                  Global Initiatives
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-lora text-xl mb-4 text-sage">More Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/humanitarian" className="text-gray-300 hover:text-amber transition-colors">
                  Humanitarian Work
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-amber transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-amber transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-300 hover:text-amber transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-lora text-xl mb-4 text-sage">Contact</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>Buddha Eyes Dharma Center</p>
              <p>Boudha, Kathmandu, Nepal</p>
              <p className="flex items-center gap-2 mt-4">
                <Mail className="h-4 w-4" />
                <a href="mailto:contact@khenrinpoche.org" className="hover:text-amber transition-colors">
                  contact@khenrinpoche.org
                </a>
              </p>
              <p>Phone: +977 9810 223 626</p>
              <p>WhatsApp: +977 9766 883 351</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ven. Khen Rinpoche Dr. Sonam Gyurme Tamang. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
