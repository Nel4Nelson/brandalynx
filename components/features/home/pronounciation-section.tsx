'use client';
import React, { useState, useRef } from 'react';
import Link from 'next/link';

const PronunciationSection = () => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const buttonRef = useRef<HTMLAnchorElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Calculate rotation based on mouse position relative to center
        const rotateY = ((mouseX - centerX) / (rect.width / 2)) * 20;
        const rotateX = -((mouseY - centerY) / (rect.height / 2)) * 20;

        setRotation({ x: rotateX, y: rotateY });
        setCursorPosition({ x: mouseX, y: mouseY });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
        setIsHovered(false);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    return (
        <>
            <section className="relative w-full bg-white py-16 md:py-24 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 xl:px-0">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        {/* Left Side - Main Text */}
                        <div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
                                Did you know that BrandALYANX is pronounced Brand-Alliance
                            </h2>
                        </div>

                        {/* Right Side - Pronunciations and Button */}
                        <div className="space-y-8">
                            {/* Pronunciations */}
                            <div className="space-y-4 text-2xl sm:text-3xl lg:text-4xl">
                                <p className="text-gray-700">
                                    <span className="font-semibold text-black">Brand</span>{' '}
                                    <span className="italic text-gray-500 text-xl sm:text-2xl">/brænd/</span>
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-semibold text-black">Alliance</span>{' '}
                                    <span className="italic text-gray-500 text-xl sm:text-2xl">/əˈlaɪ.əns/</span>
                                </p>
                            </div>

                            {/* Interactive Button */}
                            <div className="flex items-center justify-center pt-6">
                                <Link
                                    href="/about"
                                    ref={buttonRef}
                                    onMouseMove={handleMouseMove}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className="relative block"
                                    style={{ perspective: '1000px' }}
                                >
                                    <div
                                        className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full bg-brand-red flex items-center justify-center text-white font-bold text-xl sm:text-2xl transition-all duration-200 ease-out shadow-2xl hover:shadow-3xl"
                                        style={{
                                            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovered ? 1.05 : 1})`,
                                            transformStyle: 'preserve-3d',
                                        }}
                                    >
                                        <span style={{ transform: 'translateZ(30px)' }}>About us</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Custom Cursor - Using Brand Amber */}
                {isHovered && (
                    <div
                        className="fixed pointer-events-none z-50 w-6 h-6 bg-brand-amber rounded-full transition-transform duration-100"
                        style={{
                            left: cursorPosition.x - 12,
                            top: cursorPosition.y - 12,
                            transform: 'scale(1.5)',
                        }}
                    />
                )}
            </section>

            <style jsx>{`
        @media (hover: hover) {
          section a {
            cursor: none;
          }
        }
      `}</style>
        </>
    );
};

export default PronunciationSection;