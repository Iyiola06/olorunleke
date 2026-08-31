import { AboutHero } from '@/components/about/AboutHero';
import { PersonalStory } from '@/components/about/PersonalStory';
import { QuoteSection } from '@/components/about/QuoteSection';
import { ValuesSystem } from '@/components/about/ValuesSystem';
import { FounderTimeline } from '@/components/about/FounderTimeline';
import { HumanSide } from '@/components/about/HumanSide';
import { AboutCTA } from '@/components/about/AboutCTA';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'About Leke Ojuolape',
  description: 'Learn about Olorunleke Ojuolape (Leke Ojuolape): the journey, philosophy, and strategic vision of a leading Founder and Real Estate Professional.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-ivory selection:bg-gold/30 selection:text-dark pt-32">
      <AboutHero />
      <PersonalStory />
      <QuoteSection />
      <ValuesSystem />
      <FounderTimeline />
      <HumanSide />
      <AboutCTA />
      <Footer />
    </main>
  );
}
