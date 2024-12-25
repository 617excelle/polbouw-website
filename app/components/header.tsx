"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="text-xl md:text-2xl text-black font-bold">
            POLBOUW
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/over-ons"
              className="font-semibold text-black hover:text-gray-900 transition-colors duration-200"
            >
              Over Ons
            </Link>

            <Button className="bg-green-500 font-bold hover:bg-green-600 text-white rounded-lg px-6 transition-colors duration-200">
              <Link href="/contact">Maak Een Afspraak</Link>
            </Button>
          </nav>

          <button
            className="md:hidden text-black"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link
              href="/over-ons"
              className="font-semibold text-black hover:text-gray-900 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Over Ons
            </Link>

            <Button className="bg-green-500 font-bold hover:bg-green-600 text-white rounded-lg px-6 py-2 transition-colors duration-200 w-full">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Maak Een Afspraak
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
