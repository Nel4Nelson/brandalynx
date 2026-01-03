/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden flex items-center justify-center">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Decorative Blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-amber/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

            {/* Main Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16 md:py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* 404 Number with Diamond Accent */}
                    <div className="mb-6 sm:mb-8 md:mb-10 relative">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-block relative"
                        >
                            <h1 className="text-[100px] text-black xs:text-[120px] sm:text-[160px] md:text-[200px] lg:text-[240px] xl:text-[280px] font-bold leading-none">
                                <span>4</span>
                                <span>0</span>
                                <span>4</span>
                            </h1>

                            {/* Small Diamond Decoration */}
                            <div className="absolute -top-4 -right-4 xs:-top-6 xs:-right-6 sm:-top-10 sm:-right-10 md:-top-12 md:-right-12 w-12 h-12 xs:w-14 xs:h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-brand-amber rotate-45 rounded-lg opacity-80" />
                        </motion.div>
                    </div>

                    {/* Main Message */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mb-4 sm:mb-6 px-4"
                    >
                        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-3 sm:mb-4">
                            Currently In The{" "}
                            <span className="text-brand-red">Works</span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-2xl mx-auto px-2">
                            This page is being crafted with distinction. We're working on
                            something special—check back soon!
                        </p>
                    </motion.div>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-sm sm:text-base md:text-lg text-gray-500 mb-8 sm:mb-10 italic px-4"
                    >
                        Every diamond needs time to form
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
                    >
                        <Link
                            href="/"
                            className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-brand-red hover:opacity-90 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-base sm:text-lg flex items-center justify-center gap-2"
                        >
                            <Home size={18} className="sm:w-5 sm:h-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                            Back to Home
                        </Link>

                        <Link
                            href="/about"
                            className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-gray-50 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-base sm:text-lg border-2 border-gray-300 hover:border-brand-red flex items-center justify-center gap-2"
                        >
                            <ArrowLeft size={18} className="sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                            Learn About Us
                        </Link>
                    </motion.div>

                    {/* Decorative Diamond Element at Bottom */}
                    <motion.div
                        initial={{ opacity: 0, rotate: 0 }}
                        animate={{ opacity: 1, rotate: 45 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="mt-12 sm:mt-14 md:mt-16 inline-block w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-brand-red to-brand-amber rounded-xl"
                    >
                        <motion.div
                            animate={{ rotate: -45 }}
                            transition={{ duration: 0 }}
                            className="w-full h-full flex items-center justify-center text-white font-bold text-xs sm:text-sm"
                        >
                            Soon
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Floating Animation Background Elements */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [45, 50, 45],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-20 left-10 w-12 h-12 bg-brand-red/10 rotate-45 rounded-lg hidden lg:block"
            />

            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotate: [45, 40, 45],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-32 right-16 w-16 h-16 bg-brand-amber/10 rotate-45 rounded-lg hidden lg:block"
            />
        </div>
    );
}