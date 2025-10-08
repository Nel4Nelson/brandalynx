import BrandSolutionsSection from "@/components/features/home/brand-solution-section";
import HeroSection from "@/components/features/home/hero-section";
import PronunciationSection from "@/components/features/home/pronounciation-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PronunciationSection />
      <BrandSolutionsSection />
    </main>
  )
}