import { LeadershipHero } from '@/components/leadership/LeadershipHero';
import { LeadershipPrinciples } from '@/components/leadership/LeadershipPrinciples';
import { LeadershipTimeline } from '@/components/leadership/LeadershipTimeline';
import { TrustSection } from '@/components/leadership/TrustSection';
import { ImpactGrid } from '@/components/leadership/ImpactGrid';
import { TestimonialFramework } from '@/components/leadership/TestimonialFramework';
import { LeadershipCTA } from '@/components/leadership/LeadershipCTA';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata, graph, webPageNode, breadcrumbNode } from '@/lib/seo';

const TITLE = 'Leadership & Values';
const DESCRIPTION =
  'How Olorunleke (Leke) Ojuolape leads Mindfire Homes and Investments as strategist, negotiator, leader and visionary: clean titles, no shortcuts, and the long game.';

export const metadata = pageMetadata({ path: '/leadership', title: TITLE, description: DESCRIPTION });

const jsonLd = graph(
  webPageNode({ type: 'WebPage', path: '/leadership', name: TITLE, description: DESCRIPTION }),
  breadcrumbNode([{ name: 'Leadership', path: '/leadership' }]),
);

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-ivory selection:bg-gold/30 selection:text-dark">
      <JsonLd data={jsonLd} />
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
