import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden bg-white">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Meet the <span className="text-[#ffb000]">No. 1</span>
              <br />
              <span className="text-[#ff0000]">Branding Agency</span>
              <br />
              From Africa
            </h1>
          </div>

          {/* Right Illustration */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-square">
              <Image
                src="/images/about-hero.svg"
                alt="BrandALYANX team illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}