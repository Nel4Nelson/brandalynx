import { Metadata } from 'next';
import ContactHero from '@/components/features/contact/contact-hero';
import ContactInfoSection from '@/components/features/contact/contact-info-section';
import ContactFormSection from '@/components/features/contact/contact-section';
import SocialMediaSection from '@/components/features/contact/social-media-section';


export const metadata: Metadata = {
    title: 'Contact Us | BrandALYANX',
    description: 'Get in touch with BrandALYANX. Discuss your unique branding needs with our team.',
};

export default function ContactPage() {
    return (
        <main>
            <ContactHero />
            <ContactFormSection />
            <ContactInfoSection />
            <SocialMediaSection />
        </main>
    );
}