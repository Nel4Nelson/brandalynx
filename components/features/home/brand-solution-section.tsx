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
        bgColor: 'bg-[#FFB000]',
        textColor: 'text-black',
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
        bgColor: 'bg-brand-red',
        textColor: 'text-white',
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
        bgColor: 'bg-[#FFF3E7]',
        textColor: 'text-black',
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
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12 lg:mb-16">
                        <span className="text-black">Brand </span>
                        <span className="text-brand-red">Solutions</span>
                    </h2>

                    {/* Tabs */}
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full max-w-4xl">
                            {servicesData.map((service) => (
                                <button
                                    key={service.id}
                                    onClick={() => setActiveTab(service.id)}
                                    className={`flex-1 px-4 py-3 sm:px-6 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ${activeTab === service.id
                                        ? 'bg-brand-red text-white shadow-lg transform scale-105'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                                        }`}
                                >
                                    {service.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Cards Carousel */}
                    <div className="relative h-[600px] sm:h-[650px">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-full h-full">
                                {servicesData.map((service) => {
                                    const position = getCardPosition(service.id);

                                    return (
                                        <div
                                            key={service.id}
                                            className={`absolute left-1/2 top-1/2 w-[320px] sm:w-[360px] 
                        ${service.bgColor} rounded-[24px] p-8 sm:p-10
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
                                            <div className={`inline-block ${service.textColor === 'text-white' ? 'bg-white' : 'bg-black'} 
                        px-6 py-3 rounded-[12px] mb-8`}>
                                                <h3 className={`${service.textColor === 'text-white' ? 'text-black' : 'text-white'} 
                          text-2xl sm:text-3xl font-bold`}>
                                                    {service.title}
                                                </h3>
                                            </div>

                                            {/* Features List */}
                                            <div className="space-y-4 mb-8">
                                                {service.features.map((feature, index) => (
                                                    <div key={index} className="flex items-start gap-3">
                                                        <CheckmarkIcon className={`${service.textColor} flex-shrink-0 mt-1`} />
                                                        <p className={`${service.textColor} text-base sm:text-lg font-medium`}>
                                                            {feature}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* CTA Button */}
                                            <Link
                                                href={`/services/${service.id}`}
                                                className={`block w-full text-center py-4 rounded-[12px] font-bold text-lg
                          ${service.textColor === 'text-white'
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