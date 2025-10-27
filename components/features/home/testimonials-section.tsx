/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    country: string;
    avatar: string;
    content: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sarah Mitchell",
        role: "CEO",
        company: "TechVision Inc",
        country: "United States",
        avatar: "/images/headshot1.jpg",
        content:
            "BrandALYANX transformed our entire brand identity. Their strategic approach and creative execution exceeded all expectations. Our brand recognition increased by 300% in just 6 months.",
        rating: 5,
    },
    {
        id: 2,
        name: "David Okonkwo",
        role: "Marketing Director",
        company: "EcoLife Solutions",
        country: "Nigeria",
        avatar: "/images/headshot2.jpg",
        content:
            "Working with BrandALYANX was a game-changer for our sustainable brand. They understood our mission and created a visual identity that truly resonates with our eco-conscious audience.",
        rating: 5,
    },
    {
        id: 3,
        name: "Lisa Chen",
        role: "Founder",
        company: "Urban Threads Fashion",
        country: "Singapore",
        avatar: "/images/headshot3.jpg",
        content:
            "The team at BrandALYANX brought our fashion brand to life with stunning visuals and a cohesive brand strategy. Their attention to detail is unmatched in the industry.",
        rating: 5,
    },
    {
        id: 4,
        name: "Michael Torres",
        role: "Brand Manager",
        company: "FinanceFirst Group",
        country: "United Kingdom",
        avatar: "/images/headshot4.jpg",
        content:
            "BrandALYANX helped us reposition our financial services brand for the modern market. The strategic insights and creative execution were exceptional from start to finish.",
        rating: 4,
    },
    {
        id: 5,
        name: "Amara Johnson",
        role: "Creative Director",
        company: "Wellness Wave Spa",
        country: "Canada",
        avatar: "/images/headshot5.jpg",
        content:
            "Our collaboration with BrandALYANX resulted in a serene, luxurious brand identity that perfectly captures our spa's essence. Client feedback has been overwhelmingly positive.",
        rating: 5,
    },
];

export default function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    return (
        <section className="relative py-16 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-amber/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            {/* Mesh grid background */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
                    backgroundSize: "20px 20px",
                }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-4">
                        Client <span className="text-brand-red">Success </span> Stories
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover how we've helped brands worldwide transform their identity and achieve remarkable results
                    </p>
                </motion.div>

                {/* Testimonial Card */}
                <div className="relative">
                    <div className="flex justify-center">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative w-full max-w-4xl"
                        >
                            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                                <div className="md:flex">
                                    {/* Main Content */}
                                    <div className="p-8 md:p-12 relative w-full md:w-3/4">
                                        {/* Quote Icon */}
                                        <div className="absolute top-6 right-6 text-brand-red opacity-10">
                                            <Quote size={80} strokeWidth={1.5} />
                                        </div>

                                        {/* Star Rating */}
                                        <div className="mb-6 flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={24}
                                                    className={`${i < testimonials[activeIndex].rating
                                                        ? "text-brand-amber fill-brand-amber"
                                                        : "text-gray-300"
                                                        }`}
                                                />
                                            ))}
                                        </div>

                                        {/* Testimonial Content */}
                                        <blockquote className="text-xl md:text-2xl font-medium text-gray-800 mb-8 relative z-10 leading-relaxed">
                                            "{testimonials[activeIndex].content}"
                                        </blockquote>

                                        {/* Client Info */}
                                        <div className="flex items-center gap-4">
                                            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-brand-red/10 flex-shrink-0">
                                                <Image
                                                    src={testimonials[activeIndex].avatar}
                                                    alt={testimonials[activeIndex].name}
                                                    fill
                                                    className="object-cover object-top"
                                                />
                                            </div>
                                            <div>
                                                <p className="font-bold text-xl text-black mb-1">
                                                    {testimonials[activeIndex].name}
                                                </p>
                                                <p className="text-gray-600 text-sm md:text-base">
                                                    <span className="font-medium">{testimonials[activeIndex].role}</span>
                                                    <span className="mx-2">•</span>
                                                    <span className="text-brand-red font-medium">
                                                        {testimonials[activeIndex].company}
                                                    </span>
                                                </p>
                                                <p className="text-gray-500 text-sm flex items-center gap-2 mt-1">
                                                    <svg
                                                        className="w-4 h-4"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    {testimonials[activeIndex].country}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Visual Accent Panel */}
                                    <div className="hidden md:block md:w-1/4 bg-gradient-to-br from-brand-red via-brand-red/90 to-brand-amber relative overflow-hidden">
                                        {/* Decorative Grid Pattern */}
                                        <div className="absolute inset-0 opacity-20">
                                            <svg
                                                width="100%"
                                                height="100%"
                                                viewBox="0 0 100 100"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <defs>
                                                    <pattern
                                                        id="testimonial-grid"
                                                        width="10"
                                                        height="10"
                                                        patternUnits="userSpaceOnUse"
                                                    >
                                                        <path
                                                            d="M 10 0 L 0 0 0 10"
                                                            fill="none"
                                                            stroke="white"
                                                            strokeWidth="0.5"
                                                        />
                                                    </pattern>
                                                </defs>
                                                <rect width="100%" height="100%" fill="url(#testimonial-grid)" />
                                            </svg>
                                        </div>

                                        {/* Counter Badge */}
                                        <div className="absolute bottom-8 left-0 right-0 text-center text-white p-4">
                                            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 inline-block border border-white/30">
                                                <span className="font-mono text-2xl font-bold">
                                                    {String(activeIndex + 1).padStart(2, '0')}
                                                </span>
                                                <span className="mx-2 opacity-60">/</span>
                                                <span className="font-mono text-lg opacity-80">
                                                    {String(testimonials.length).padStart(2, '0')}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center mt-8 md:mt-12 gap-4">
                        <button
                            onClick={prevTestimonial}
                            aria-label="Previous testimonial"
                            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border-2 border-gray-300 text-gray-700 hover:border-brand-red hover:bg-brand-red hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-lg"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            aria-label="Next testimonial"
                            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border-2 border-gray-300 text-gray-700 hover:border-brand-red hover:bg-brand-red hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-lg"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Indicator Dots */}
                    <div className="flex justify-center mt-6 md:mt-8 gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                aria-label={`Go to testimonial ${index + 1}`}
                                className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex
                                    ? "bg-brand-red w-8"
                                    : "bg-gray-300 w-2 hover:bg-gray-400"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}