import { ContactHero } from '@/components/contact/ContactHero';
import { ContactOptions } from '@/components/contact/ContactOptions';
import { SocialFollow } from '@/components/contact/SocialFollow';
import { ContactCTA } from '@/components/contact/ContactCTA';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata, graph, webPageNode, breadcrumbNode } from '@/lib/seo';

const TITLE = 'Contact & Partnerships';
const DESCRIPTION =
  'Contact Olorunleke (Leke) Ojuolape about land and home investments, joint ventures, Skylands enquiries and partnerships with Mindfire Homes and Investments in Abuja.';

export const metadata = pageMetadata({ path: '/contact', title: TITLE, description: DESCRIPTION });

const jsonLd = graph(
  webPageNode({ type: 'ContactPage', path: '/contact', name: TITLE, description: DESCRIPTION }),
  breadcrumbNode([{ name: 'Contact', path: '/contact' }]),
);

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-ivory selection:bg-gold/30 selection:text-dark">
      <JsonLd data={jsonLd} />
      <ContactHero />
      <ContactOptions />
      <SocialFollow />
      <ContactCTA />
      <Footer />
    </main>
  );
}
