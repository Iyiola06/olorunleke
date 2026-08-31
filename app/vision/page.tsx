import { VisionHero } from '@/components/vision/VisionHero';
import { ManifestoSection } from '@/components/vision/ManifestoSection';
import { StrategicPrinciples } from '@/components/vision/StrategicPrinciples';
import { StrategyTimeline } from '@/components/vision/StrategyTimeline';
import { FutureVision } from '@/components/vision/FutureVision';
import { LeadershipPhilosophy } from '@/components/vision/LeadershipPhilosophy';
import { VisionCTA } from '@/components/vision/VisionCTA';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Vision & Strategic Philosophy | Leke Ojuolape',
  description: 'Explore the strategic vision, principles, and leadership philosophy of Olorunleke Ojuolape (Leke Ojuolape).',
  openGraph: {
    title: 'Vision & Strategic Philosophy | Leke Ojuolape',
    description: 'Explore the strategic vision, principles, and leadership philosophy of Olorunleke Ojuolape (Leke Ojuolape).',
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
