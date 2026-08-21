import { LeadershipHero } from '@/components/leadership/LeadershipHero';
import { LeadershipPrinciples } from '@/components/leadership/LeadershipPrinciples';
import { LeadershipTimeline } from '@/components/leadership/LeadershipTimeline';
import { TrustSection } from '@/components/leadership/TrustSection';
import { ImpactGrid } from '@/components/leadership/ImpactGrid';
import { TestimonialFramework } from '@/components/leadership/TestimonialFramework';
import { LeadershipCTA } from '@/components/leadership/LeadershipCTA';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Leadership & Impact | Olorunleke Ojuolape',
  description: 'Discover the leadership philosophy, values, and impact-driven approach of Olorunleke Ojuolape.',
  openGraph: {
    title: 'Leadership & Impact | Olorunleke Ojuolape',
    description: 'Discover the leadership philosophy, values, and impact-driven approach of Olorunleke Ojuolape.',
    type: 'website',
  },
};

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-ivory selection:bg-gold/30 selection:text-dark">
      <LeadershipHero />
      <LeadershipPrinciples />
      <LeadershipTimeline />
      <TrustSection />
      <ImpactGrid />
      <TestimonialFramework />
      <LeadershipCTA />
      <Footer />
    </main>
  );
}
