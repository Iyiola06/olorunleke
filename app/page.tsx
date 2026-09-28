import { FounderHero } from '@/components/FounderHero';
import { FounderIntro } from '@/components/FounderIntro';
import { AtAGlance } from '@/components/AtAGlance';
import { FounderPrinciples } from '@/components/FounderPrinciples';
import { PremiumCTA } from '@/components/PremiumCTA';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { graph, webPageNode, PERSON_ID } from '@/lib/seo';
import { PROFILE } from '@/lib/profile';

const jsonLd = graph(
  webPageNode({
    type: 'ProfilePage',
    path: '/',
    name: `${PROFILE.name} | ${PROFILE.roleShort}, ${PROFILE.company}`,
    description: PROFILE.summary,
    extra: { mainEntity: { '@id': PERSON_ID } },
  }),
);

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory selection:bg-gold/30 selection:text-dark">
      <JsonLd data={jsonLd} />
      <FounderHero />
      <FounderIntro />
      <AtAGlance />
      <FounderPrinciples />
      <PremiumCTA />
      <Footer />
    </main>
  );
}
