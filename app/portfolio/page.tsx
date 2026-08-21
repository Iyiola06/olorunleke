import { PortfolioHero } from '@/components/portfolio/PortfolioHero';
import { EcosystemOverview } from '@/components/portfolio/EcosystemOverview';
import { VentureShowcase } from '@/components/portfolio/VentureShowcase';
import { PortfolioTimeline } from '@/components/portfolio/PortfolioTimeline';
import { ImpactDashboard } from '@/components/portfolio/ImpactDashboard';
import { PartnershipPhilosophy } from '@/components/portfolio/PartnershipPhilosophy';
import { FutureOpportunitiesCTA } from '@/components/portfolio/FutureOpportunitiesCTA';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Ventures & Business Portfolio | Olorunleke Ojuolape',
  description: 'Explore the ventures, business philosophy, partnerships, and opportunities connected with Olorunleke Ojuolape.',
  openGraph: {
    title: 'Ventures & Business Portfolio | Olorunleke Ojuolape',
    description: 'Explore the ventures, business philosophy, partnerships, and opportunities connected with Olorunleke Ojuolape.',
    type: 'website',
  },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-cream selection:bg-gold/30 selection:text-dark">
      <PortfolioHero />
      <EcosystemOverview />
      <VentureShowcase />
      <PortfolioTimeline />
      <ImpactDashboard />
      <PartnershipPhilosophy />
      <FutureOpportunitiesCTA />
      <Footer />
    </main>
  );
}
