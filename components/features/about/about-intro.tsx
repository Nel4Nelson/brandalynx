"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function AboutIntro() {
  const [isPlaying, setIsPlaying] = useState(false);

  const features = [
    "Dependable services from our team of seasoned experts with a collective 50+ years of branding experience.",
    "Holistic services & tailored offers to solve all your needs, no matter how unusual.",
    "Full-fledged agency-grade services & excellent world-class branding solutions"
  ];

  const handlePlayVideo = () => {
    const video = document.getElementById('about-video') as HTMLVideoElement;
    if (video) {
      video.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative py-20 lg:py-24 overflow-hidden bg-white">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading - Outside container */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            About <span className="text-[#ffb000]">Brand</span>
            <span className="text-[#ff0000]">ALYANX®</span>
          </h2>
        </div>

        {/* Content Container */}
        <div className="relative">
          {/* Video - Full width with organic blob shape on left */}
          <div className="relative w-[65%] aspect-[16/10] lg:aspect-[18/9] rounded-3xl lg:rounded-[4rem] overflow-hidden bg-gray-100 shadow-2xl">
            <video
              id="about-video"
              className="w-full h-full object-cover"
              poster="/images/video-poster.jpg"
              controls={isPlaying}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            >
              <source src="/videos/about.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play Button Overlay */}
            {!isPlaying && (
              <button
                onClick={handlePlayVideo}
                className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
                aria-label="Play video"
              >
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-[#ff0000] rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 lg:w-10 lg:h-10 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            )}
          </div>

          {/* Feature Card - Overlapping on the right side */}
          <div className="relative lg:absolute lg:right-8 lg:top-1/2 lg:-translate-y-1/2 mt-8 lg:mt-0 lg:max-w-md xl:max-w-lg">
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl">
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    {/* Badge Icon */}
                    <div className="flex-shrink-0 mt-1">
                      <Image
                        src="/logos/badge-icon.svg"
                        alt="Feature badge"
                        width={40}
                        height={40}
                        className="w-10 h-10"
                      />
                    </div>
                    {/* Feature Text */}
                    <p className="text-base lg:text-lg text-black leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}