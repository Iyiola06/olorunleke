import { InsightsHero } from '@/components/insights/InsightsHero';
import { FeaturedArticle } from '@/components/insights/FeaturedArticle';
import { ArticleGrid } from '@/components/insights/ArticleGrid';
import { ThoughtFramework } from '@/components/insights/ThoughtFramework';
import { NewsletterSection } from '@/components/insights/NewsletterSection';
import { InsightsCTA } from '@/components/insights/InsightsCTA';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata, graph, webPageNode, breadcrumbNode } from '@/lib/seo';

const TITLE = 'Insights';
const DESCRIPTION =
  'Perspectives from Olorunleke Ojuolape on real estate, land, leadership and building Mindfire Homes and Investments.';

export const metadata = pageMetadata({ path: '/insights', title: TITLE, description: DESCRIPTION, noindex: true });

const jsonLd = graph(
  webPageNode({ type: 'WebPage', path: '/insights', name: TITLE, description: DESCRIPTION }),
  breadcrumbNode([{ name: 'Insights', path: '/insights' }]),
);

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-ivory selection:bg-gold/30 selection:text-dark">
      <JsonLd data={jsonLd} />
      <InsightsHero />
      <FeaturedArticle />
      <ArticleGrid />
      <ThoughtFramework />
      <NewsletterSection />
      <InsightsCTA />
      <Footer />
    </main>
  );
}
