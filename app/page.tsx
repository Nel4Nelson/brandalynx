import BrandSolutionsSection from "@/components/features/home/brand-solution-section";
import HeroSection from "@/components/features/home/hero-section";
import PronunciationSection from "@/components/features/home/pronounciation-section";

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
    </main>
  )
}