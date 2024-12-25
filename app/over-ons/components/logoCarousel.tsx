"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const logos = [
  { src: "/images/200x200.svg", alt: "Company 1" },
  { src: "/images/200x200.svg", alt: "Company 1" },
  { src: "/images/200x200.svg", alt: "Company 1" },
];

export default function LogoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000); // Change logo every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold text-center mb-10">Onze Partners</h2>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {logos.concat(logos.slice(0, 2)).map((logo, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 flex justify-center items-center p-4"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={100}
                className="max-w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
