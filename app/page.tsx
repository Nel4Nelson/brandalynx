import BrandSolutionsSection from "@/components/features/home/brand-solution-section";
import BrandsWeWorkedWithSection from "@/components/features/home/brands-we-worked-with-section";
import HeroSection from "@/components/features/home/hero-section";
import PortfolioPreviewSection from "@/components/features/home/portfolio-preview-section";
import PronunciationSection from "@/components/features/home/pronounciation-section";
import QuoteSection from "@/components/features/home/quote-section";
import TestimonialsSection from "@/components/features/home/testimonials-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <section>
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <PronunciationSection />
      </section>
      <BrandSolutionsSection />
      <PortfolioPreviewSection />
      <BrandsWeWorkedWithSection />
      <TestimonialsSection />
      <QuoteSection />
    </main>
  )
}