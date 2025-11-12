export default function AboutDescription() {
    return (
        <section className="relative py-20 lg:py-24 overflow-hidden bg-white">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="relative max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto text-center">
                    <p className="text-lg lg:text-xl xl:text-2xl leading-relaxed text-black">
                        <span className="text-[#ffb000]">Brand</span>
                        <span className="text-[#ff0000]">ALYANX®</span> is a global full-service branding agency that specialises in building Superbrands. Over the years, BrandALYANX has consistently helped corporate entities, non-profit organisations, agencies, public figures, and events of various sizes across multiple sectors to excel and amplify their success through our robust branding solutions, amassing a strong portfolio of client brands that are doing exploits as a result.
                    </p>
                </div>
            </div>
        </section>
    );
}