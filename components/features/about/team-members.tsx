import Image from 'next/image';

export default function TeamMembers() {
    const teamMembers = [
        {
            name: 'Princewill Ezenwa',
            role: 'Founding CEO & Director of Brand Strategy',
            image: '/images/princewill.jpeg',
            borderColor: 'border-[#ff0000]',
        },
        {
            name: 'Sam Nwedo',
            role: 'Director of Brand Design',
            image: '/images/sam.jpeg',
            borderColor: 'border-black',
        },
        {
            name: 'Chimdinma Nwabata',
            role: 'Customer Relationship Manager',
            image: '/images/chimdinma.jpeg',
            borderColor: 'border-[#ffb000]',
        },
        {
            name: 'Emmanuel Edet',
            role: 'Global Partnerships Manager',
            image: '/images/emmanuel.jpeg',
            borderColor: 'border-black',
        },
        {
            name: 'Nelson Ekwueme',
            role: 'Lead Software Engineer',
            image: '/images/nelson.jpeg',
            borderColor: 'border-[#ff0000]',
        },
    ];

    return (
        <section className="relative py-20 lg:py-24 overflow-hidden bg-white">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="relative max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-6 lg:mb-8">
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                        Our Core <span className="text-[#ff0000]">Team Members</span>
                    </h2>
                </div>

                {/* Subtitle */}
                <div className="text-center mb-12 lg:mb-16 max-w-4xl mx-auto">
                    <p className="text-base lg:text-lg text-black leading-relaxed">
                        We&apos;re a tribe of <span className="font-bold">bold minds:</span> creators, strategists, storytellers, and Allies, bound by a shared obsession with guiding our client-brands into building the next Superbrand. Every project is personal to both us and the diverse talents in our teams.
                    </p>
                </div>

                {/* Team Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-3xl overflow-hidden border-4 ${member.borderColor} shadow-lg`}
                        >
                            {/* Image */}
                            <div className="relative aspect-[3/4] bg-gray-100">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover grayscale"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4 text-center">
                                <h3 className="text-lg font-bold text-black mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-sm text-gray-600 leading-snug">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}