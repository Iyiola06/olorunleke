import { InsightsHero } from '@/components/insights/InsightsHero';
import { FeaturedArticle } from '@/components/insights/FeaturedArticle';
import { ArticleGrid } from '@/components/insights/ArticleGrid';
import { ThoughtFramework } from '@/components/insights/ThoughtFramework';
import { NewsletterSection } from '@/components/insights/NewsletterSection';
import { InsightsCTA } from '@/components/insights/InsightsCTA';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Founder Insights | Olorunleke Ojuolape',
  description: 'Explore leadership insights, business perspectives, and strategic thinking from Olorunleke Ojuolape.',
  openGraph: {
    title: 'Founder Insights | Olorunleke Ojuolape',
    description: 'Explore leadership insights, business perspectives, and strategic thinking from Olorunleke Ojuolape.',
    type: 'website',
  },
};

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-ivory selection:bg-gold/30 selection:text-dark">
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
