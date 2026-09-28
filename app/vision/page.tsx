import { VisionHero } from '@/components/vision/VisionHero';
import { ManifestoSection } from '@/components/vision/ManifestoSection';
import { StrategicPrinciples } from '@/components/vision/StrategicPrinciples';
import { StrategyTimeline } from '@/components/vision/StrategyTimeline';
import { FutureVision } from '@/components/vision/FutureVision';
import { LeadershipPhilosophy } from '@/components/vision/LeadershipPhilosophy';
import { VisionCTA } from '@/components/vision/VisionCTA';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata, graph, webPageNode, breadcrumbNode } from '@/lib/seo';

const TITLE = 'Vision & Mission';
const DESCRIPTION =
  'The mission of Olorunleke Ojuolape, MD/CEO of Mindfire Homes and Investments: help more people own a piece of the future and build communities where the next generation thrives.';

export const metadata = pageMetadata({ path: '/vision', title: TITLE, description: DESCRIPTION });

const jsonLd = graph(
  webPageNode({ type: 'WebPage', path: '/vision', name: TITLE, description: DESCRIPTION }),
  breadcrumbNode([{ name: 'Vision', path: '/vision' }]),
);

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-ivory selection:bg-gold/30 selection:text-dark">
      <JsonLd data={jsonLd} />
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
