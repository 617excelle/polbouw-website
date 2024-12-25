import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto px-4 pt-10 md:pt-16 md:pb-8 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="mb-8 md:mb-0 flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold mb-4">Polbouw BV</h3>
            <p className="mb-4 w-3/4">
              Snelle toegang tot experts en onderaannemers, zonder lange
              verplichtingen.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold mb-4">Snelle Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Over Ons
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold mb-4">Contacteer Ons</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:info@example.com" className="hover:text-white">
                  jordan.bentkowski@gmail.com
                </a>
              </li>
              <li className="flex items-center justify-center">
                <Phone size={16} className="mr-2" />
                <a href="tel:+1234567890" className="hover:text-white">
                  +32 488 33 07 75
                </a>
              </li>
              <li className="flex items-start justify-center">
                <MapPin size={16} className="mr-2 mt-1" />
                <span>
                  drapstraat 48,
                  <br />
                  9220, Hamme
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 md:mb-0 mb-8 border-t border-white text-sm text-center">
          © {new Date().getFullYear()} POLBOUW BV. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
