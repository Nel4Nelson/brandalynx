"use client";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// Client logos - you'll replace these with your actual client logos
// Generate logo paths automatically
const topRowLogos = Array.from({ length: 35 }, (_, i) => `/client-logo/${i + 1}.svg`);

const bottomRowLogos = Array.from({ length: 35 }, (_, i) => `/client-logo/${i + 36}.svg`);

export default function BrandsWeWorkedWithSection() {
  const [isTopRowHovered, setIsTopRowHovered] = useState(false);
  const [isBottomRowHovered, setIsBottomRowHovered] = useState(false);
  const topRowControls = useAnimationControls();
  const bottomRowControls = useAnimationControls();

  // Top row animation - scrolls left to right
  useEffect(() => {
    if (!isTopRowHovered) {
      topRowControls.start({
        x: ["0%", "-50%"],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      });
    } else {
      topRowControls.stop();
    }
  }, [isTopRowHovered, topRowControls]);

  // Bottom row animation - scrolls right to left (opposite direction)
  useEffect(() => {
    if (!isBottomRowHovered) {
      bottomRowControls.start({
        x: ["-50%", "0%"],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      });
    } else {
      bottomRowControls.stop();
    }
  }, [isBottomRowHovered, bottomRowControls]);

  // Logo component for top row
  const TopRowLogoItem = ({ src, alt }: { src: string; alt: string }) => (
    <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 flex items-center justify-center bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
        />
      </div>
    </div>
  );

  // Logo component for bottom row
  const BottomRowLogoItem = ({ src, alt }: { src: string; alt: string }) => (
    <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 flex items-center justify-center bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
        />
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-4">
            Trusted Globally by <span className="text-brand-red">200+ brands</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Our clientele cuts across several sectors and continents.
          </p>
        </div>
      </div>

      {/* Top Row - Scrolls Left to Right */}
      <div
        className="relative overflow-hidden mb-6 md:mb-8"
        onMouseEnter={() => setIsTopRowHovered(true)}
        onMouseLeave={() => setIsTopRowHovered(false)}
      >
        <motion.div
          className="flex gap-6 md:gap-8"
          animate={topRowControls}
          initial={{ x: "0%" }}
          style={{ width: "200%" }}
        >
          {/* First set */}
          <div className="flex gap-6 md:gap-8">
            {topRowLogos.map((logo, index) => (
              <TopRowLogoItem
                key={`top-set1-${index}`}
                src={logo}
                alt={`Client logo ${index + 1}`}
              />
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex gap-6 md:gap-8">
            {topRowLogos.map((logo, index) => (
              <TopRowLogoItem
                key={`top-set2-${index}`}
                src={logo}
                alt={`Client logo ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Row - Scrolls Right to Left */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsBottomRowHovered(true)}
        onMouseLeave={() => setIsBottomRowHovered(false)}
      >
        <motion.div
          className="flex gap-6 md:gap-8"
          animate={bottomRowControls}
          initial={{ x: "-50%" }}
          style={{ width: "200%" }}
        >
          {/* First set */}
          <div className="flex gap-6 md:gap-8">
            {bottomRowLogos.map((logo, index) => (
              <BottomRowLogoItem
                key={`bottom-set1-${index}`}
                src={logo}
                alt={`Client logo ${index + 9}`}
              />
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex gap-6 md:gap-8">
            {bottomRowLogos.map((logo, index) => (
              <BottomRowLogoItem
                key={`bottom-set2-${index}`}
                src={logo}
                alt={`Client logo ${index + 9}`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Optional: Subtle hint text */}
      <div className="text-center mt-8 md:mt-12">
        <p className="text-sm text-gray-500 italic">
          Hover to pause • Seamless infinite scroll
        </p>
      </div>
    </section>
  );
}