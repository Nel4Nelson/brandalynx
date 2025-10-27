"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function QuoteSection() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-3xl mx-auto">
                {/* Section Header (Optional) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
                        Our Philosophy
                    </h2>
                </motion.div>

                {/* Simple Quote Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 md:p-8"
                >
                    {/* Profile Header */}
                    <div className="flex items-start gap-3 md:gap-4 mb-4">
                        {/* Avatar */}
                        <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden flex-shrink-0 border">
                            <Image
                                src="/logos/ba-logo.png"
                                alt="Founder"
                                fill
                                className="object-cover object-top"
                            />
                        </div>

                        {/* Name, Badge & Handle */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5">
                                <h3 className="font-bold text-black text-base md:text-lg">
                                    BrandALYANX
                                </h3>
                                {/* Verification Badge */}
                                <div className="relative w-5 h-5 md:w-6 md:h-6 flex-shrink-0">
                                    <Image
                                        src="/logos/twitter-verified-badge.svg"
                                        alt="Verified"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <p className="text-gray-500 text-sm md:text-base">
                                @brandalyanx
                            </p>
                        </div>
                    </div>

                    {/* Quote Content */}
                    <div className="mt-4">
                        <p className="text-gray-800 text-lg md:text-xl lg:text-2xl leading-relaxed font-medium">
                            Every diamond was once an ordinary element of carbon; if Apple, Nike, etc could do it, you too can. — Princewill Ezenwa.
                        </p>
                    </div>
                </motion.div>

                {/* Optional CTA Below */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                  <Link
                    href="/get-started"
                    className="px-8 py-4 bg-brand-red hover:opacity-90 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
                  >
                    START YOUR JOURNEY NOW!
                  </Link>
                </motion.div>
            </div>
        </section>
    );
}