export default function BrandAdvantage() {
  const philosophyPoints = [
    {
      title: 'The SuperBrand™ Philosophy:',
      description: 'Branding to us is all about that journey from ordinary to unforgettable; building lasting emotional connections, brands loyalty & active reputation management.',
    },
    {
      title: '',
      description: 'Beyond aesthetic excellence, we prioritise function (results) and creative balance by working with our tested strategy-first framework, deeply rooted in research and consumer psychology.',
    },
    {
      title: 'Alliance Philosophy™:',
      description: "Value-first approach; before we consider what's in it for us, we factor in what's in it for our client. Our name BrandALYANX® (Brand-Alliance) is a symbol of this foundational compass; we work with our clients like partners-in-vision and not just hirelings. We look beyond the end of one project, and build with the future in mind.",
    },
  ];

  const frameworkSteps = [
    {
      title: 'Discover',
      description: '– Brand Discovery/Alignment. E.g vision, mission, core values, etc.',
    },
    {
      title: 'Define',
      description: '– Brand Architecture (Essence) and deep dive. E.g Brand archetypes, Audience avatars etc.',
    },
    {
      title: 'Design',
      description: '– Brand Application (Expression) This is where your brand identity starts taking shape. E.g logo, color palettes, typography etc.',
    },
    {
      title: 'Deploy',
      description: "– Brand Activation (Experience), launching out. Every necessary add-on is provided to you to help in this continuous phase of shaping the customers' experience accross all touchpoints..",
    },
    {
      title: 'Dominate',
      description: '– The SuperBrand Status. We help you with Brand Governance & Reputation Management solutions, e.g BID management systems, brand Audits reports. etc.',
    },
  ];

  return (
    <section className="relative py-20 lg:py-24 overflow-hidden bg-white">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            The <span className="text-[#ffb000]">Brand</span>
            <span className="text-[#ff0000]">ALYANX®</span> Advantage
          </h2>
        </div>

        {/* Two Cards */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Card - Philosophy */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-2xl">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-black">
              Our Philosophy:
            </h3>
            <ul className="space-y-6">
              {philosophyPoints.map((point, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-black text-lg flex-shrink-0 mt-1">•</span>
                  <div className="text-base lg:text-lg text-black leading-relaxed">
                    {point.title && (
                      <span className="font-bold">{point.title}</span>
                    )}{' '}
                    {point.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Card - Framework */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-2xl">
            <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-black">
              D-istinction® Framework™
              <br />
              <span className="text-xl lg:text-2xl">(our methodology)</span>
            </h3>

            {/* Framework Steps with Timeline */}
            <div className="relative">
              <div className="space-y-6">
                {frameworkSteps.map((step, index) => (
                  <div key={index} className="relative flex gap-6">
                    {/* Vertical Red Line - Only between nodes, not after last one */}
                    {index < frameworkSteps.length - 1 && (
                      <div className="absolute left-[11px] top-6 w-0.5 h-full bg-[#ff0000]" />
                    )}

                    {/* Diamond Node */}
                    <div className="relative flex-shrink-0 z-10">
                      <div className="w-6 h-6 bg-[#ff0000] rotate-45" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 -mt-1">
                      <span className="text-base lg:text-lg font-bold text-black">
                        {step.title}
                      </span>{' '}
                      <span className="text-base lg:text-lg text-black leading-relaxed">
                        {step.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}