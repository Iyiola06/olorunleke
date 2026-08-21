import { VisionHero } from '@/components/vision/VisionHero';
import { ManifestoSection } from '@/components/vision/ManifestoSection';
import { StrategicPrinciples } from '@/components/vision/StrategicPrinciples';
import { StrategyTimeline } from '@/components/vision/StrategyTimeline';
import { FutureVision } from '@/components/vision/FutureVision';
import { LeadershipPhilosophy } from '@/components/vision/LeadershipPhilosophy';
import { VisionCTA } from '@/components/vision/VisionCTA';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Vision & Leadership Philosophy | Olorunleke Ojuolape',
  description: 'Explore the vision, principles, and leadership philosophy of Olorunleke Ojuolape.',
  openGraph: {
    title: 'Vision & Leadership Philosophy | Olorunleke Ojuolape',
    description: 'Explore the vision, principles, and leadership philosophy of Olorunleke Ojuolape.',
    type: 'website',
  },
};

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-ivory selection:bg-gold/30 selection:text-dark">
      <VisionHero />
      <ManifestoSection />
      <StrategicPrinciples />
      <StrategyTimeline />
      <FutureVision />
      <LeadershipPhilosophy />
      <VisionCTA />
      <Footer />
    </main>
  );
}
