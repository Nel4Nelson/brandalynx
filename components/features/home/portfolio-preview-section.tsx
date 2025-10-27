/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "brand-strategy" | "brand-identity" | "branded-merchandise";
  logo: string;
}

// Mock project data - 3 projects per category
const projects: Project[] = [
  // Brand Strategy Projects
  {
    id: "brand-strategy-1",
    title: "TechVision Rebranding",
    tagline: "Transforming a legacy tech company into a modern innovator",
    category: "brand-strategy",
    logo: "/logos/1.svg",
  },
  {
    id: "brand-strategy-2",
    title: "EcoLife Market Positioning",
    tagline: "Defining a sustainable brand's voice in a crowded market",
    category: "brand-strategy",
    logo: "/logos/2.svg",
  },
  {
    id: "brand-strategy-3",
    title: "FinanceFirst Brand Architecture",
    tagline: "Restructuring a financial services brand portfolio",
    category: "brand-strategy",
    logo: "/logos/3.svg",
  },
  
  // Brand Identity Design Projects
  {
    id: "brand-identity-1",
    title: "Brew & Bean Coffee Co.",
    tagline: "Crafting an artisanal coffee brand identity from scratch",
    category: "brand-identity",
    logo: "/logos/4.svg",
  },
  {
    id: "brand-identity-2",
    title: "Urban Threads Fashion",
    tagline: "Modern streetwear brand with bold visual language",
    category: "brand-identity",
    logo: "/logos/5.svg",
  },
  {
    id: "brand-identity-3",
    title: "Wellness Wave Spa",
    tagline: "Serene brand identity for holistic wellness center",
    category: "brand-identity",
    logo: "/logos/6.svg",
  },
  
  // Branded Merchandise Projects
  {
    id: "branded-merchandise-1",
    title: "StartupHub Swag Collection",
    tagline: "Cohesive merchandise line for tech accelerator",
    category: "branded-merchandise",
    logo: "/logos/7.svg",
  },
  {
    id: "branded-merchandise-2",
    title: "FitLife Gym Merchandise",
    tagline: "Performance wear and branded accessories",
    category: "branded-merchandise",
    logo: "/logos/8.svg",
  },
  {
    id: "branded-merchandise-3",
    title: "GreenEarth Event Kits",
    tagline: "Sustainable promotional materials for environmental non-profit",
    category: "branded-merchandise",
    logo: "/logos/9.svg",
  },
];

type FilterType = "all" | "brand-strategy" | "brand-identity" | "branded-merchandise";

export default function PortfolioPreviewSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 5;

  // Filter projects based on active filter
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  // Reset to page 1 when filter changes
  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  // Get pagination items with ellipsis
  const getPaginationItems = () => {
    const items: (number | string)[] = [];
    
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        items.push(i);
      }
    } else {
      if (currentPage <= 3) {
        items.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        items.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        items.push(1, "...", currentPage, "...", totalPages);
      }
    }
    
    return items;
  };

  const filters = [
    { id: "all", label: "All" },
    { id: "brand-strategy", label: "Brand Strategy" },
    { id: "brand-identity", label: "Brand Identity Design" },
    { id: "branded-merchandise", label: "Branded Merchandise" },
  ] as const;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-4">
            Our <span className="text-brand-red">Work</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped brands transform their identity and captivate their audience
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilterChange(filter.id)}
              className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-brand-red text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-brand-red"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="space-y-0">
          {currentProjects.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.id}`}
              className="group flex items-center gap-4 md:gap-6 py-6 md:py-8 border-b border-gray-200 hover:bg-gray-50 transition-all duration-300 -mx-4 px-4 md:-mx-6 md:px-6"
            >
              {/* Logo */}
              <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 relative bg-white rounded-lg overflow-hidden border border-gray-100 group-hover:border-brand-red transition-colors duration-300">
                <Image
                  src={project.logo}
                  alt={`${project.title} logo`}
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg md:text-2xl font-bold text-black mb-1 group-hover:text-brand-red transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 truncate">
                  {project.tagline}
                </p>
              </div>

              {/* Arrow Button */}
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-brand-red group-hover:bg-brand-red transition-all duration-300">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-1 md:gap-2 mt-8 md:mt-16">
            {/* Previous button */}
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className="flex w-10 h-10 md:w-14 md:h-14 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:bg-gray-50 hover:border-black disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Page numbers */}
            {getPaginationItems().map((item, index) => (
              <button
                key={index}
                onClick={() =>
                  typeof item === "number" ? setCurrentPage(item) : null
                }
                disabled={typeof item !== "number"}
                className={`flex w-10 h-10 md:w-14 md:h-14 items-center justify-center rounded-full transition-all duration-300 font-medium text-sm md:text-base ${
                  currentPage === item
                    ? "bg-black text-white"
                    : typeof item === "number"
                    ? "border-2 border-gray-300 bg-white hover:bg-gray-50 hover:border-black"
                    : "border-transparent bg-transparent cursor-default"
                }`}
              >
                {item}
              </button>
            ))}

            {/* Next button */}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
              aria-label="Next page"
              className="flex w-10 h-10 md:w-14 md:h-14 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:bg-gray-50 hover:border-black disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}