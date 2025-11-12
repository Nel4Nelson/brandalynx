import { Metadata } from 'next';
import AboutHero from '@/components/features/about/about-hero';
import AboutIntro from '@/components/features/about/about-intro';
import AboutDescription from '@/components/features/about/about-description';
import VisionMission from '@/components/features/about/vision-mission';
import CoreValues from '@/components/features/about/core-values';
import BrandAdvantage from '@/components/features/about/brand-advantage';
import TeamMembers from '@/components/features/about/team-members';

export const metadata: Metadata = {
    title: 'About Us | BrandALYANX',
    description: 'Meet the No. 1 Branding Agency from Africa. Learn about our vision, mission, and the team behind BrandALYANX.',
};

export default function AboutPage() {
    return (
        <main>
            <AboutHero />
            <AboutIntro />
            <AboutDescription />
            <VisionMission />
            <CoreValues />
            <BrandAdvantage />
            <TeamMembers />
        </main>
    );
}