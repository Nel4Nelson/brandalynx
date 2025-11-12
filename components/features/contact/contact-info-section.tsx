export default function ContactInfoSection() {
  const contactInfo = [
    {
      title: "For reviews, feedback and any complaints",
      email: "feedback@brandalyanx.com",
    },
    {
      title: "For sales, pricing, & service related inquiries",
      email: "solutions@brandalyanx.com",
    },
    {
      title: "To explore career opportunities at BA",
      email: "careers@brandalyanx.com",
    },
    {
      title: "For Anything else",
      email: "hello@brandalyanx.com",
    },
  ];

  return (
    <section className="relative py-20 lg:py-24 overflow-hidden bg-white">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* White Container with Shadow */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-0">
            {contactInfo.map((info, index) => (
              <div key={index} className="relative flex flex-col items-start lg:items-center text-left lg:text-center px-4 lg:px-6">
                {/* Vertical Divider - Hidden on mobile, shown from lg and up, hidden on last item */}
                {index < contactInfo.length - 1 && (
                  <div className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 h-32">
                    {/* Top Diamond */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#ff0000] rotate-45" />
                    {/* Vertical Line */}
                    <div className="absolute top-3 bottom-3 left-1/2 -translate-x-1/2 w-0.5 bg-[#ff0000]" />
                    {/* Bottom Diamond */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#ff0000] rotate-45" />
                  </div>
                )}

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-base lg:text-lg font-semibold text-black leading-snug">
                    {info.title}
                  </h3>
                  <a
                    href={`mailto:${info.email}`}
                    className="text-[#ff0000] font-bold text-base lg:text-lg hover:underline transition-all"
                  >
                    {info.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}