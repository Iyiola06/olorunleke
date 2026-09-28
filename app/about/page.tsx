import { AboutHero } from '@/components/about/AboutHero';
import { PersonalStory } from '@/components/about/PersonalStory';
import { QuoteSection } from '@/components/about/QuoteSection';
import { ValuesSystem } from '@/components/about/ValuesSystem';
import { FounderTimeline } from '@/components/about/FounderTimeline';
import { HumanSide } from '@/components/about/HumanSide';
import { AboutFAQ } from '@/components/about/AboutFAQ';
import { AboutCTA } from '@/components/about/AboutCTA';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata, graph, webPageNode, breadcrumbNode, faqNode, PERSON_ID } from '@/lib/seo';
import { FAQS } from '@/lib/profile';

const TITLE = 'About: From Geology to Real Estate';
const DESCRIPTION =
  'The story of Olorunleke (Leke) Ojuolape: a geologist who moved from studying land to unlocking its value, founded Mindfire Homes and Investments, and leads it as MD/CEO.';

export const metadata = pageMetadata({ path: '/about', title: TITLE, description: DESCRIPTION });

const jsonLd = graph(
  webPageNode({
    type: 'AboutPage',
    path: '/about',
    name: TITLE,
    description: DESCRIPTION,
    extra: { mainEntity: { '@id': PERSON_ID } },
  }),
  breadcrumbNode([{ name: 'About', path: '/about' }]),
  faqNode(FAQS),
);

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-ivory selection:bg-gold/30 selection:text-dark pt-32">
      <JsonLd data={jsonLd} />
      <AboutHero />
      <PersonalStory />
      <QuoteSection />
      <ValuesSystem />
      <FounderTimeline />
      <HumanSide />
      <AboutFAQ />
      <AboutCTA />
      <Footer />
    </main>
  );
}
