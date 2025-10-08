'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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
      image: '/images/hero-1.svg',
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
      image: '/images/hero-2.svg',
    },
    {
      title: (
        <>
          WE WELCOME YOU IN
          <br />
          THE NAME OF <br/> <span className="text-brand-red">D-ISTINCTION</span>
        </>
      ),
      description:
        'Being memorable is never enough, your brand must become unforgettable to remain relevant. You choose—extinction or distinction?',
      image: '/images/hero-3.svg',
    },
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const goToSlide = (index: number) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative h-full flex items-center">
        {/* Content Container */}
        <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto">
            {/* Text Content - Left Side */}
            <div
              key={currentSlide}
              className="max-w-7xl animate-fadeInUp"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-black leading-tight mb-4 sm:mb-6">
                {slides[currentSlide].title}
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-xl">
                {slides[currentSlide].description}
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Link
                  href="/about"
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-brand-amber hover:opacity-90 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-base sm:text-lg"
                >
                  LEARN MORE
                </Link>
                <Link
                  href="/get-started"
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-brand-red hover:opacity-90 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-base sm:text-lg"
                >
                  START YOUR JOURNEY NOW!
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Image - Bottom Right */}
        <div className="absolute bottom-16 right-0 w-full h-[45%] sm:w-3/4 sm:h-1/2 md:w-2/3 md:h-3/5 lg:w-1/2 lg:h-2/3 pointer-events-none z-10">
          <div className="relative w-full h-full">
            {slides.map((slide, index) => (
              <Image
                fill
                key={index}
                src={slide.image}
                alt={`Hero ${index + 1}`}
                className={`absolute bottom-0 right-0 w-full h-full object-contain transition-opacity duration-700 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ objectPosition: 'bottom right' }}
              />
            ))}
          </div>
        </div>

        {/* Navigation Arrows - Side Edges on Desktop, Above Dots on Mobile */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-4 lg:hidden">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/50 transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/50 transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Desktop Navigation Arrows - Side Edges */}
        <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-4 md:left-8">
          <button
            onClick={prevSlide}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/50 transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
          </button>
        </div>

        <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-4 md:right-8">
          <button
            onClick={nextSlide}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/50 transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
          </button>
        </div>

        {/* Dots - Bottom Center */}
        <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
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