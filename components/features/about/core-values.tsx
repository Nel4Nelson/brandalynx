import Image from 'next/image';

export default function CoreValues() {
    const values = [
        {
            title: 'D-istinction®:',
            description: 'This is our DNA—uniqueness & differentiation that immediately stands our clients out of any crowd.',
        },
        {
            title: 'Innovation:',
            description: 'We are constantly pushing creative boundaries and delivering novel and evergreen branding solutions.',
        },
        {
            title: 'Integrity:',
            description: 'Transparent communication, honesty, and professionalism is at the heart of all our dealings—strongly rooted in high moral standards.',
        },
        {
            title: 'Collaboration:',
            description: 'We work closely with clients to understand their vision and needs at a deep level, and partner with various facilitators as needed to make sure we help our clients build superbrands and foster long-term relationships with them.',
        },
        {
            title: 'Customer Success:',
            description: "Our clients' growth and satisfaction are the driving force behind every service we offer. If they're not satisfied, no matter how exquisite our delivery was, we have failed.",
        },
        {
            title: 'Excellence:',
            description: 'We strive for perfection in every project, ensuring the highest possible quality deliverables.',
        },
        {
            title: 'Evolution, Growth & Transformation:',
            description: 'At BrandALYANX, It is about guiding our clients to evolve their brand to stay relevant, timeless, resonate with their',
        },
    ];

    return (
        <section className="relative py-20 lg:py-24 overflow-hidden bg-white">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Decorative Atoms */}
            {/* Red Atom - Top Right */}
            <div className="absolute top-8 right-4 lg:top-12 lg:right-12 w-48 h-48 lg:w-64 lg:h-64 opacity-90 pointer-events-none">
                <Image
                    src="/logos/atom-red.svg"
                    alt="Decorative atom"
                    fill
                    className="object-contain"
                />
            </div>

            {/* Amber Atom - Bottom Left */}
            <div className="absolute bottom-8 left-4 lg:bottom-12 lg:left-12 w-48 h-48 lg:w-64 lg:h-64 opacity-90 pointer-events-none">
                <Image
                    src="/logos/atom-amber.svg"
                    alt="Decorative atom"
                    fill
                    className="object-contain"
                />
            </div>

            <div className="relative max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                        Our <span className="text-[#ff0000]">Core Values</span> (D.I.I.C.C.E.E)
                    </h2>
                </div>

                {/* White Card with Values */}
                <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl max-w-4xl mx-auto">
                    <ol className="space-y-6">
                        {values.map((value, index) => (
                            <li key={index} className="flex gap-3">
                                <span className="text-lg lg:text-xl font-bold text-black flex-shrink-0">
                                    {index + 1}.
                                </span>
                                <div>
                                    <span className="text-lg lg:text-xl font-bold text-black">
                                        {value.title}
                                    </span>{' '}
                                    <span className="text-base lg:text-lg text-black leading-relaxed">
                                        {value.description}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}