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
            <section className="relative w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
                <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6">
                    {/* Mobile Layout (< 1024px) - Stacked */}
                    <div className="flex flex-col gap-8 lg:hidden">
                        {/* Main Text */}
                        <div className="text-center">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight">
                                Did you know that <span className='text-brand-amber'>Brand</span><span className='text-brand-red'>ALYANX</span>  is pronounced Brand-Alliance?
                            </h2>
                        </div>

                        {/* Pronunciations */}
                        <div className="space-y-3 text-center">
                            <p className="text-gray-700">
                                <span className="font-semibold text-black text-xl sm:text-2xl">Brand</span>{' '}
                                <span className="italic text-gray-500 text-base sm:text-lg">/brænd/</span>
                            </p>
                            <p className="text-gray-700">
                                <span className="font-semibold text-black text-xl sm:text-2xl">Alliance</span>{' '}
                                <span className="italic text-gray-500 text-base sm:text-lg">/əˈlaɪ.əns/</span>
                            </p>
                        </div>

                        {/* Interactive Button */}
                        <div className="flex items-center justify-center pt-4">
                            <Link
                                href="/about"
                                className="diamond-button w-40 h-40 sm:w-48 sm:h-48 bg-brand-red flex items-center justify-center text-white font-bold text-lg sm:text-xl transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 active:scale-95"
                            >
                                <span className="diamond-button-text">About us</span>
                            </Link>
                        </div>
                    </div>

                    {/* Desktop Layout (≥ 1024px) - Horizontal */}
                    <div className="hidden lg:flex gap-8 xl:gap-16 items-center justify-between w-full">
                        {/* Left Side - Main Text */}
                        <div className="flex-1">
                            <h2 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-black leading-tight">
                                Did you know that{' '}
                                <span className="block"><span className='text-brand-amber'>Brand</span><span className='text-brand-red'>ALYANX</span> is pronounced</span>{' '}
                                Brand-Alliance?
                            </h2>
                        </div>

                        {/* Middle - Pronunciations */}
                        <div className="flex-shrink-0 space-y-4">
                            <p className="text-gray-700">
                                <span className="font-semibold text-black text-2xl xl:text-3xl">Brand</span>{' '}
                                <span className="italic text-gray-500 text-xl xl:text-2xl">/brænd/</span>
                            </p>
                            <p className="text-gray-700">
                                <span className="font-semibold text-black text-2xl xl:text-3xl">Alliance</span>{' '}
                                <span className="italic text-gray-500 text-xl xl:text-2xl">/əˈlaɪ.əns/</span>
                            </p>
                        </div>

                        {/* Right Side - Interactive Button */}
                        <div className="flex-shrink-0">
                            <Link
                                href="/about"
                                ref={buttonRef}
                                onMouseMove={handleMouseMove}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                className="diamond-button-3d relative block"
                                style={{ perspective: '1000px' }}
                            >
                                <div
                                    className="diamond-button w-56 h-56 xl:w-64 xl:h-64 bg-brand-red flex items-center justify-center text-white font-bold text-xl xl:text-2xl transition-all duration-200 ease-out shadow-2xl hover:shadow-3xl rotate-45"
                                    style={{
                                        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovered ? 1.05 : 1})`,
                                        transformStyle: 'preserve-3d',
                                    }}
                                >
                                    <span className="diamond-button-text" >About us</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Custom Cursor - Desktop Only */}
                {isHovered && (
                    <div
                        className="hidden lg:block fixed pointer-events-none z-50 w-6 h-6 bg-brand-amber rounded-full transition-transform duration-100"
                        style={{
                            left: cursorPosition.x - 12,
                            top: cursorPosition.y - 12,
                            transform: 'scale(1.5)',
                        }}
                    />
                )}
            </section>
        </>
    );
};

export default PronunciationSection;