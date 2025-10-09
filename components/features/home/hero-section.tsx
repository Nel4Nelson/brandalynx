'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true); // Track auto-play state

  const slides = [
    {
      title: (
        <>
          ADVANCE FROM ORDINARY
          <br />
          TO <span className="text-brand-red">SUPERBRAND</span>
        </>
      ),
      description:
        'Shine through the noise, like a red diamond—Your brand needs distinction, emotional connection and loyalty to become unforgettable.',
      image: '/images/hero-image-1.svg',
    },
    {
      title: (
        <>
          WE ARE YOUR <span className="text-brand-red">ALLY</span>
          <br />
          ON THAT JOURNEY
        </>
      ),
      description:
        'Join a league of corporate, personal, product & service brands who are building brands that are seen, heard, understood and unforgettable',
      image: '/images/hero-image-2.svg',
    },
    {
      title: (
        <>
          WE WELCOME YOU IN
          <br />
          THE NAME OF <br /> <span className="text-brand-red">D-ISTINCTION</span>
        </>
      ),
      description:
        'Being memorable is never enough, your brand must become unforgettable to remain relevant. You choose—extinction or distinction?',
      image: '/images/hero-image-3.svg',
    },
  ];

  const nextSlide = () => {
    console.log('Next slide clicked, currentSlide:', currentSlide); // Debug log
    setIsAutoPlaying(false); // Pause auto-play on manual interaction
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    console.log('Previous slide clicked, currentSlide:', currentSlide); // Debug log
    setIsAutoPlaying(false); // Pause auto-play on manual interaction
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    if (index !== currentSlide) {
      console.log('Go to slide:', index); // Debug log
      setIsAutoPlaying(false); // Pause auto-play on manual interaction
      setCurrentSlide(index);
    }
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  // Ensure client-side rendering to prevent hydration issues
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative min-h-screen flex items-center py-20 sm:py-0">
        {/* Content Container */}
        <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto">
            {/* Mobile Layout - Stacked */}
            <div className="block sm:hidden">
              <div key={currentSlide} className="animate-fadeInUp">
                {/* Text Content */}
                <h1 className="text-3xl font-bold text-black leading-tight mb-4">
                  {slides[currentSlide].title}
                </h1>

                <p className="text-base text-gray-700 leading-relaxed mb-6 max-w-xl">
                  {slides[currentSlide].description}
                </p>

                {/* Image - Between Text and CTAs */}
                <div className="w-full max-w-sm mx-auto mb-6 h-56">
                  <div className="relative w-full h-full">
                    {slides.map((slide, index) => (
                      <Image
                        fill
                        key={index}
                        src={slide.image}
                        alt={`Hero ${index + 1}`}
                        priority // Preload images for faster rendering
                        className={`absolute w-full h-full object-contain transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                          }`}
                      />
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex gap-3 w-full">
                  <Link
                    href="/about"
                    className="px-4 py-2.5 bg-brand-amber hover:opacity-90 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm text-center"
                  >
                    LEARN MORE
                  </Link>
                  <Link
                    href="/get-started"
                    className="px-4 py-2.5 bg-brand-red hover:opacity-90 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm text-center"
                  >
                    START YOUR JOURNEY NOW!
                  </Link>
                </div>
              </div>
            </div>

            {/* Desktop/Tablet Layout - Original */}
            <div className="hidden sm:block">
              <div key={currentSlide} className="max-w-7xl animate-fadeInUp">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-black leading-tight mb-6">
                  {slides[currentSlide].title}
                </h1>

                <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 lg:mb-10 max-w-xl">
                  {slides[currentSlide].description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/about"
                    className="px-8 py-4 bg-brand-amber hover:opacity-90 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
                  >
                    LEARN MORE
                  </Link>
                  <Link
                    href="/get-started"
                    className="px-8 py-4 bg-brand-red hover:opacity-90 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
                  >
                    START YOUR JOURNEY NOW!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image - Bottom Right (Desktop/Tablet Only) */}
        <div className="hidden sm:block absolute bottom-16 right-0 w-2/3 h-[35%] md:w-1/2 md:h-[40%] lg:w-5/12 lg:h-[45%] max-h-[450px] pointer-events-none z-10">
          <div className="relative w-full h-full">
            {slides.map((slide, index) => (
              <Image
                fill
                key={index}
                src={slide.image}
                alt={`Hero ${index + 1}`}
                priority // Preload images for faster rendering
                className={`absolute bottom-0 right-0 w-full h-full object-contain transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                style={{ objectPosition: 'bottom right' }}
              />
            ))}
          </div>
        </div>

        {/* Navigation Arrows - Above Dots on Mobile */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-4 sm:hidden z-20">
          <button
            onClick={prevSlide}
            type="button"
            className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/50 transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            type="button"
            className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/50 transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Desktop Navigation Arrows - Side Edges */}
        <div className="hidden sm:block absolute top-1/2 -translate-y-1/2 left-4 md:left-8 z-20">
          <button
            onClick={prevSlide}
            type="button"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/50 transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
          </button>
        </div>

        <div className="hidden sm:block absolute top-1/2 -translate-y-1/2 right-4 md:right-8 z-20">
          <button
            onClick={nextSlide}
            type="button"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/50 transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
          </button>
        </div>

        {/* Dots - Bottom Center */}
        <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              type="button"
              className={`transition-all duration-300 rounded-full ${index === currentSlide
                ? 'w-12 h-3 bg-brand-red'
                : 'w-3 h-3 bg-gray-400 hover:bg-gray-500'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;