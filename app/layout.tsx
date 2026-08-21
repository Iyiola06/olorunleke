import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Olorunleke Ojuolape | Founder & Strategic Leader',
  description: 'The digital headquarters of Olorunleke Ojuolape, Founder, Entrepreneur, and Real Estate Professional.',
  openGraph: {
    title: 'Olorunleke Ojuolape | Founder',
    description: 'Founder, Entrepreneur, and Real Estate Professional.',
    type: 'website',
    url: 'https://olorunlekeojuolape.com', // Example URL
    siteName: 'Olorunleke Ojuolape',
    images: [
      {
        url: 'https://picsum.photos/seed/founder/1200/630',
        width: 1200,
        height: 630,
        alt: 'Olorunleke Ojuolape',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Olorunleke Ojuolape | Founder',
    description: 'Founder, Entrepreneur, and Real Estate Professional.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Olorunleke Ojuolape",
              "jobTitle": ["Founder", "Entrepreneur", "Real Estate Professional"],
              "url": "https://olorunlekeojuolape.com"
            })
          }}
        />
      </head>
      <body className="font-sans bg-ivory text-dark selection:bg-gold/30 selection:text-dark antialiased" suppressHydrationWarning>
        <Navigation />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
