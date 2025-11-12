import Image from 'next/image';

export default function SocialMediaSection() {
  const socialLinks = [
    {
      name: 'YouTube',
      icon: '/socials-logo/youtube.svg',
      url: 'https://youtube.com/@brandalyanx',
    },
    {
      name: 'Facebook',
      icon: '/socials-logo/facebook.svg',
      url: 'https://facebook.com/brandalyanx',
    },
    {
      name: 'Instagram',
      icon: '/socials-logo/instagram.svg',
      url: 'https://instagram.com/brandalyanx',
    },
    {
      name: 'TikTok',
      icon: '/socials-logo/tiktok.svg',
      url: 'https://tiktok.com/@brandalyanx',
    },
    {
      name: 'LinkedIn',
      icon: '/socials-logo/linkedin.svg',
      url: 'https://linkedin.com/company/brandalyanx',
    },
    {
      name: 'X (Twitter)',
      icon: '/socials-logo/x.svg',
      url: 'https://x.com/brandalyanx',
    },
    {
      name: 'Threads',
      icon: '/socials-logo/thread.svg',
      url: 'https://threads.net/@brandalyanx',
    },
    {
      name: 'Pinterest',
      icon: '/socials-logo/pininterest.svg',
      url: 'https://pinterest.com/brandalyanx',
    },
  ];

  return (
    <section className="relative py-20 lg:py-24 overflow-hidden bg-white">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          {/* Heading */}
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            We&apos;re Social, <span className="text-[#ff0000]">Connect With Us</span>
          </h2>

          {/* Social Icons */}
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-16 h-16 lg:w-20 lg:h-20 transition-transform hover:scale-110"
                aria-label={social.name}
              >
                <Image
                  src={social.icon}
                  alt={`${social.name} icon`}
                  fill
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}