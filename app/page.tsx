import { FounderHero } from '@/components/FounderHero';
import { FounderIntro } from '@/components/FounderIntro';
import { FounderPrinciples } from '@/components/FounderPrinciples';
import { PremiumCTA } from '@/components/PremiumCTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory selection:bg-gold/30 selection:text-dark">
      <FounderHero />
      <FounderIntro />
      <FounderPrinciples />
      <PremiumCTA />
      <Footer />
    </main>
  );
}
