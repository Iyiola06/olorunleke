import { ContactHero } from '@/components/contact/ContactHero';
import { ContactOptions } from '@/components/contact/ContactOptions';
import { SocialFollow } from '@/components/contact/SocialFollow';
import { ContactCTA } from '@/components/contact/ContactCTA';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Contact | Leke Ojuolape',
  description: 'Connect directly with Olorunleke Ojuolape (Leke Ojuolape) to explore partnerships, business opportunities, collaborations, or strategic conversations.',
  openGraph: {
    title: 'Contact | Leke Ojuolape',
    description: 'Connect directly with Olorunleke Ojuolape (Leke Ojuolape) to explore partnerships, business opportunities, collaborations, or strategic conversations.',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-ivory selection:bg-gold/30 selection:text-dark">
      <ContactHero />
      <ContactOptions />
      <SocialFollow />
      <ContactCTA />
      <Footer />
    </main>
  );
}
