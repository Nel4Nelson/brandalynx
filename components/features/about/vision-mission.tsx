import Image from 'next/image';

export default function VisionMission() {
    const cards = [
        {
            icon: '/logos/vision.svg',
            title: 'Our Vision:',
            titleColor: 'text-[#ffb000]',
            description: 'We are set on a path to become a global leader in creating transformational brands that drive success, impact and influence across industries.',
        },
        {
            icon: '/logos/mission.svg',
            title: 'Our Mission:',
            titleColor: 'text-[#ffb000]',
            description: 'At BrandALYANX®, we are committed to Building SuperBrands by offering innovative and timeless branding solutions that create distinction even in the most competitive industries, resonate with global audiences and are tailored to local target audiences.',
        },
        {
            icon: '/logos/tagline.svg',
            title: 'Tagline:',
            titleColor: 'text-[#ff0000]',
            description: 'Building SuperBrands',
        },
        {
            icon: '/logos/promise.svg',
            title: 'Brand Promise:',
            titleColor: 'text-[#ff0000]',
            description: 'We equip and empower you to build SuperBrands through our robust suite of branding solutions.',
        },
    ];

    return (
        <section className="relative py-20 lg:py-24 overflow-hidden bg-white">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="relative max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl"
                        >
                            <div className="flex items-start gap-6">
                                {/* Icon */}
                                <div className="flex-shrink-0">
                                    <Image
                                        src={card.icon}
                                        alt={card.title}
                                        width={64}
                                        height={64}
                                        className="w-16 h-16"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 space-y-3">
                                    <h3 className={`text-xl lg:text-2xl font-bold ${card.titleColor}`}>
                                        {card.title}
                                    </h3>
                                    <p className="text-base lg:text-lg text-black leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}