import { PortfolioHero } from '@/components/portfolio/PortfolioHero';
import { EcosystemOverview } from '@/components/portfolio/EcosystemOverview';
import { VentureShowcase } from '@/components/portfolio/VentureShowcase';
import { ProjectGallery } from '@/components/portfolio/ProjectGallery';
import { PortfolioTimeline } from '@/components/portfolio/PortfolioTimeline';
import { MindfirePromise } from '@/components/portfolio/MindfirePromise';
import { PartnershipPhilosophy } from '@/components/portfolio/PartnershipPhilosophy';
import { FutureOpportunitiesCTA } from '@/components/portfolio/FutureOpportunitiesCTA';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata, graph, webPageNode, breadcrumbNode, skylandsNode, ORG_ID, SKYLANDS_ID } from '@/lib/seo';

const TITLE = 'Mindfire Homes & Skylands Estate, Abuja';
const DESCRIPTION =
  'Mindfire Homes and Investments, led by MD/CEO Olorunleke Ojuolape: land acquisition, due diligence, documentation and development in Abuja, including the Skylands estate.';

export const metadata = pageMetadata({ path: '/portfolio', title: TITLE, description: DESCRIPTION });

const jsonLd = graph(
  webPageNode({
    type: 'CollectionPage',
    path: '/portfolio',
    name: TITLE,
    description: DESCRIPTION,
    extra: { mentions: [{ '@id': ORG_ID }, { '@id': SKYLANDS_ID }] },
  }),
  breadcrumbNode([{ name: 'Portfolio', path: '/portfolio' }]),
  skylandsNode,
);

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-cream selection:bg-gold/30 selection:text-dark">
      <JsonLd data={jsonLd} />
      <PortfolioHero />
      <EcosystemOverview />
      <VentureShowcase />
      <ProjectGallery />
      <PortfolioTimeline />
      <MindfirePromise />
      <PartnershipPhilosophy />
      <FutureOpportunitiesCTA />
      <Footer />
    </main>
  );
}
