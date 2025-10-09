/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState } from 'react';
import Link from 'next/link';

// Custom Checkmark Icon Component
const CheckmarkIcon = ({ className = '' }) => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <circle cx="10" cy="10" r="10" fill="currentColor" fillOpacity="0.1" />
        <path
            d="M6 10L8.5 12.5L14 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const servicesData = [
    {
        id: 'brand-strategy',
        title: 'Brand Strategy',
        features: [
            'Brand positioning & differentiation',
            'Competitive analysis',
            'Target audience research',
            'Brand messaging framework',
            'Strategic roadmap development'
        ]
    },
    {
        id: 'brand-identity',
        title: 'Brand Identity Design',
        features: [
            'Logo design & brand mark',
            'Visual identity system',
            'Color palette & typography',
            'Brand guidelines documentation',
            'Marketing collateral design'
        ]
    },
    {
        id: 'branded-merchandise',
        title: 'Branded Merchandise',
        features: [
            'Custom product design',
            'Packaging & presentation',
            'Quality material selection',
            'Print & production management',
            'Branded gift sets'
        ]
    }
];

const BrandSolutionsSection = () => {
    const [activeTab, setActiveTab] = useState('brand-strategy');
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;

    const handleTouchStart = (e: any) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: any) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        const currentIndex = servicesData.findIndex(s => s.id === activeTab);

        if (isLeftSwipe && currentIndex < servicesData.length - 1) {
            // Swipe left - go to next
            setActiveTab(servicesData[currentIndex + 1].id);
        }
        if (isRightSwipe && currentIndex > 0) {
            // Swipe right - go to previous
            setActiveTab(servicesData[currentIndex - 1].id);
        }
    };

    const getCardPosition = (serviceId: string) => {
        const currentIndex = servicesData.findIndex(s => s.id === activeTab);
        const cardIndex = servicesData.findIndex(s => s.id === serviceId);
        const offset = cardIndex - currentIndex;

        return {
            x: offset * 380,
            scale: offset === 0 ? 1 : 0.85,
            opacity: Math.abs(offset) <= 1 ? 1 : 0,
            zIndex: offset === 0 ? 30 : 20 - Math.abs(offset) * 5,
        };
    };

    return (
        <>
            <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
                    {/* Section Title */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                            <span className="text-black">Brand </span>
                            <span className="text-brand-red">Solutions</span>
                        </h2>
                        <p className="italic text-gray-500 text-xl xl:text-2xl">
                            All your branding needs met in one place
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-5xl">
                            {servicesData.map((service) => (
                                <button
                                    key={service.id}
                                    onClick={() => setActiveTab(service.id)}
                                    className={`group relative flex-1 px-6 py-4 sm:px-8 sm:py-5 rounded-full font-bold text-sm sm:text-base transition-all duration-500 overflow-hidden ${activeTab === service.id
                                        ? 'bg-gradient-to-r from-brand-red to-red-600 text-white shadow-[0_8px_30px_rgba(220,38,38,0.4)] transform scale-105'
                                        : 'bg-white text-gray-800 hover:text-black border-2 border-gray-200 hover:border-brand-red hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:scale-102'
                                        }`}
                                >
                                    {/* Animated background on hover for inactive tabs */}
                                    {activeTab !== service.id && (
                                        <span className="absolute inset-0 bg-gradient-to-r from-brand-red/5 to-red-600/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
                                    )}

                                    {/* Shine effect for active tab */}
                                    {activeTab === service.id && (
                                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    )}

                                    <span className="relative z-10">{service.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Cards Carousel */}
                    <div
                        className="relative h-[600px]"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-full h-full">
                                {servicesData.map((service) => {
                                    const position = getCardPosition(service.id);
                                    const isActive = service.id === activeTab;

                                    return (
                                        <div
                                            key={service.id}
                                            className={`absolute left-1/2 top-1/2 w-[320px] sm:w-[360px] 
                        ${isActive ? 'bg-brand-red' : 'bg-brand-amber'} rounded-[24px] p-8 sm:p-10
                        transition-all duration-700 ease-out cursor-pointer
                        shadow-[0px_20px_60px_rgba(0,0,0,0.15)]`}
                                            style={{
                                                transform: `
                          translate(-50%, -50%)
                          translateX(${position.x}px)
                          scale(${position.scale})
                        `,
                                                opacity: position.opacity,
                                                zIndex: position.zIndex,
                                                visibility: Math.abs(position.x) > 400 ? 'hidden' : 'visible'
                                            }}
                                            onClick={() => setActiveTab(service.id)}
                                        >
                                            {/* Title Badge */}
                                            <div className={`inline-block ${isActive ? 'bg-white' : 'bg-black'} 
                        px-6 py-3 rounded-[12px] mb-8`}>
                                                <h3 className={`${isActive ? 'text-black' : 'text-white'} 
                          text-2xl sm:text-3xl font-bold`}>
                                                    {service.title}
                                                </h3>
                                            </div>

                                            {/* Features List */}
                                            <div className="space-y-4 mb-8">
                                                {service.features.map((feature, index) => (
                                                    <div key={index} className="flex items-start gap-3">
                                                        <CheckmarkIcon className={`${isActive ? 'text-white' : 'text-black'} flex-shrink-0 mt-1`} />
                                                        <p className={`${isActive ? 'text-white' : 'text-black'} text-base sm:text-lg font-medium`}>
                                                            {feature}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* CTA Button */}
                                            <Link
                                                href={`/services/${service.id}`}
                                                className={`block w-full text-center py-4 rounded-[12px] font-bold text-lg
                          ${isActive
                                                        ? 'bg-white text-black hover:bg-gray-100'
                                                        : 'bg-black text-white hover:bg-gray-900'
                                                    } transition-colors duration-300`}
                                            >
                                                Learn More →
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Dot Indicators */}
                    <div className="flex justify-center gap-3">
                        {servicesData.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveTab(service.id)}
                                className={`transition-all duration-300 rounded-full ${activeTab === service.id
                                    ? 'w-12 h-3 bg-brand-red'
                                    : 'w-3 h-3 bg-gray-400 hover:bg-gray-500'
                                    }`}
                                aria-label={`Go to ${service.title}`}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default BrandSolutionsSection;