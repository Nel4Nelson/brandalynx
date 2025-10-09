"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scrolling effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const brandingServices = [
        { name: 'Brand Strategy', href: '/services/brand-strategy' },
        { name: 'Brand Identity Design', href: '/services/brand-identity' },
        { name: 'Branded Merchandise', href: '/services/branded-merchandise' }
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logos/ba-3-logo.svg"
                                alt="BrandALYANX Logo"
                                className="h-14 w-auto sm:h-14 lg:h-16"
                                width={400}
                                height={100}
                                priority
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-10">
                            {/* Branding Solution with Dropdown */}
                            <div
                                className="relative group"
                                onMouseEnter={() => setIsDropdownOpen(true)}
                                onMouseLeave={() => setIsDropdownOpen(false)}
                            >
                                <button className="flex items-center space-x-1 text-black text-base font-medium hover:text-gray-600 transition-colors">
                                    <span>Branding Solution</span>
                                    <ChevronDown className="h-4 w-4" />
                                </button>

                                {/* Dropdown Menu */}
                                {isDropdownOpen && (
                                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                                        {brandingServices.map((service) => (
                                            <Link
                                                key={service.name}
                                                href={service.href}
                                                className="block px-5 py-3 text-black text-base hover:bg-gray-50 transition-colors"
                                            >
                                                {service.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <Link href="/portfolio" className="text-black text-base font-medium hover:text-gray-600 transition-colors">
                                See our work
                            </Link>

                            <Link href="/about" className="text-black text-base font-medium hover:text-gray-600 transition-colors">
                                About BA
                            </Link>

                            <Link href="/resources" className="text-black text-base font-medium hover:text-gray-600 transition-colors">
                                Resources
                            </Link>

                            <Link href="/contact" className="text-black text-base font-medium hover:text-gray-600 transition-colors">
                                Contact us
                            </Link>

                            {/* CTA Button */}
                            <Link
                                href="/get-started"
                                className="bg-brand-red text-white px-7 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold text-base"
                            >
                                Start your journey now!
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 text-black hover:bg-gray-100 rounded-lg transition-colors"
                            aria-label="Toggle menu"
                        >
                            <Menu className="h-7 w-7" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Full-Screen Mobile Menu */}
            <div
                className={`fixed inset-0 bg-brand-black z-[60] lg:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
            >
                <div className="h-full flex flex-col">
                    {/* Close Button */}
                    <div className="flex justify-end p-6">
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="w-14 h-14 bg-brand-red rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
                            aria-label="Close menu"
                        >
                            <X className="h-7 w-7 text-white" />
                        </button>
                    </div>

                    {/* Navigation Section */}
                    <div className="flex-1 px-6 pt-8 overflow-y-auto">
                        <div className="mb-8">
                            <p className="text-gray-400 text-sm uppercase tracking-wider mb-6">Navigation</p>
                            <div className="border-t border-gray-800"></div>
                        </div>

                        <nav className="space-y-2">
                            {/* Branding Solution with Sub-items */}
                            <div>
                                <button
                                    onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                                    className="w-full flex items-center justify-between text-white text-4xl sm:text-5xl font-bold py-4 hover:text-brand-red transition-colors"
                                >
                                    <span>Branding Solution</span>
                                    <ChevronDown
                                        className={`h-8 w-8 transition-transform ${isMobileDropdownOpen ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                {isMobileDropdownOpen && (
                                    <div className="pl-6 space-y-3 mt-2 mb-4">
                                        {brandingServices.map((service) => (
                                            <Link
                                                key={service.name}
                                                href={service.href}
                                                className="block text-gray-300 text-xl py-2 hover:text-brand-amber transition-colors"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {service.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <Link
                                href="/portfolio"
                                className="block text-white text-4xl sm:text-5xl font-bold py-4 hover:text-brand-red transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                See our work
                            </Link>

                            <Link
                                href="/about"
                                className="block text-white text-4xl sm:text-5xl font-bold py-4 hover:text-brand-red transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About BA
                            </Link>

                            <Link
                                href="/resources"
                                className="block text-white text-4xl sm:text-5xl font-bold py-4 hover:text-brand-red transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Resources
                            </Link>

                            <Link
                                href="/contact"
                                className="block text-white text-4xl sm:text-5xl font-bold py-4 hover:text-brand-red transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact us
                            </Link>
                        </nav>

                        {/* CTA Button */}
                        <div className="mt-12 mb-8">
                            <Link
                                href="/get-started"
                                className="block bg-brand-red text-white text-center px-8 py-5 rounded-lg hover:opacity-90 transition-opacity font-bold text-xl"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Start your journey now!
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;