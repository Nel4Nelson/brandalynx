"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-red-100 via-amber-200 to-orange-100 py-12 md:py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-black rounded-[32px] md:rounded-[48px] overflow-hidden">
          <div className="px-6 sm:px-8 lg:px-12 pt-12 md:pt-16 lg:pt-20 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
              <div className="lg:col-span-1">
                <Link href="/" className="inline-block mb-6">
                  <Image
                    src="/logos/ba-3-logo.svg"
                    alt="BrandALYANX"
                    width={180}
                    height={50}
                    className="h-10 w-auto"
                  />
                </Link>
                <p className="text-white text-base mb-6 leading-relaxed">
                  Transforming brands into powerful identities. We forge extraordinary brands from the ordinary.
                </p>

                <Link
                  href="/get-started"
                  className="inline-block bg-brand-red text-white px-6 py-3 rounded-lg hover:bg-brand-amber transition-colors font-semibold text-sm mb-8"
                >
                  Start Your Journey Now
                </Link>

                <div className="flex items-center gap-3">
                  <a
                    href="https://twitter.com/brandalyanx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href="https://facebook.com/brandalyanx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="https://instagram.com/brandalyanx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="https://linkedin.com/company/brandalyanx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="https://youtube.com/@brandalyanx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube size={18} />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold text-base mb-4">Services</h3>
                <ul className="space-y-2.5">
                  <li>
                    <Link
                      href="/services/brand-strategy"
                      className="text-white hover:text-white transition-colors text-base"
                    >
                      Brand Strategy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/brand-identity"
                      className="text-white hover:text-white transition-colors text-base"
                    >
                      Brand Identity Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/branded-merchandise"
                      className="text-white hover:text-white transition-colors text-base"
                    >
                      Branded Merchandise
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-white hover:text-white transition-colors text-base"
                    >
                      View All Services →
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold text-base mb-4">Company</h3>
                <ul className="space-y-2.5">
                  <li>
                    <Link
                      href="/about"
                      className="text-white hover:text-white transition-colors text-base"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/portfolio"
                      className="text-white hover:text-white transition-colors text-base"
                    >
                      Our Work
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/resources"
                      className="text-white hover:text-white transition-colors text-base"
                    >
                      Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-white hover:text-white transition-colors text-base"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold text-base mb-4">Resources</h3>
                <ul className="space-y-2.5">
                  <li>
                    <Link
                      href="/blog"
                      className="text-white hover:text-white transition-colors text-base"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/case-studies"
                      className="text-white hover:text-white transition-colors text-base"
                    >
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/brand-guides"
                      className="text-white hover:text-white transition-colors text-base"
                    >
                      Brand Guides
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="text-white hover:text-white transition-colors text-base"
                    >
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6 pb-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-base">
                  <Link
                    href="/privacy"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    Terms of Service
                  </Link>
                  <button
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    Cookie Preferences
                  </button>
                </div>
                <p className="text-white text-base">
                  © 2025 BrandALYANX. All rights reserved.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 py-6 px-6 sm:px-8 lg:px-12">
            <div className="flex items-center justify-center">
              <Image
                src="/logos/brand-logo-big.svg"
                alt="BrandALYANX"
                width={1200}
                height={200}
                className="w-full max-w-4xl h-auto opacity-80"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}