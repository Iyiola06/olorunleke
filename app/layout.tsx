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
  title: {
    default: 'Olorunleke Ojuolape | Founder & Strategic Leader',
    template: '%s | Olorunleke Ojuolape (Leke)',
  },
  description: 'The digital headquarters of Olorunleke Ojuolape (Leke Ojuolape), a visionary Founder, Entrepreneur, and Strategic Real Estate Professional.',
  keywords: [
    'Olorunleke Ojuolape',
    'Leke Ojuolape',
    'Olorunleke',
    'Ojuolape',
    'Leke',
    'Founder',
    'Entrepreneur',
    'Business Leader',
    'Strategic Thinker',
    'Real Estate Professional',
    'Nigeria',
    'Africa Business',
    'Venture Builder',
    'Investment'
  ],
  authors: [{ name: 'Olorunleke Ojuolape' }],
  creator: 'Olorunleke Ojuolape',
  publisher: 'Olorunleke Ojuolape',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://olorunlekeojuolape.com',
  },
  openGraph: {
    title: 'Olorunleke Ojuolape | Founder, Entrepreneur & Leader',
    description: 'Explore the ventures, vision, and leadership of Olorunleke (Leke) Ojuolape. Dedicated to building sustainable value and creating opportunities.',
    type: 'website',
    url: 'https://olorunlekeojuolape.com', // Replace with the actual URL
    siteName: 'Olorunleke Ojuolape',
    images: [
      {
        url: '/logo1.jpg',
        width: 1200,
        height: 1200,
        alt: 'Olorunleke Ojuolape Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Olorunleke Ojuolape | Founder',
    description: 'Founder, Entrepreneur, and Strategic Leader.',
    images: ['/logo1.jpg'],
  },
  icons: {
    icon: '/logo1.jpg',
    apple: '/logo1.jpg',
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
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://olorunlekeojuolape.com/#website",
                  "url": "https://olorunlekeojuolape.com/",
                  "name": "Olorunleke Ojuolape",
                  "alternateName": ["Leke Ojuolape", "Leke"],
                  "description": "The digital headquarters of Olorunleke Ojuolape (Leke Ojuolape), a visionary Founder, Entrepreneur, and Strategic Real Estate Professional."
                },
                {
                  "@type": "ProfilePage",
                  "@id": "https://olorunlekeojuolape.com/#webpage",
                  "url": "https://olorunlekeojuolape.com/",
                  "name": "Olorunleke Ojuolape | Founder & Strategic Leader",
                  "isPartOf": { "@id": "https://olorunlekeojuolape.com/#website" },
                  "about": { "@id": "https://olorunlekeojuolape.com/#person" }
                },
                {
                  "@type": "Person",
                  "@id": "https://olorunlekeojuolape.com/#person",
                  "name": "Olorunleke Ojuolape",
                  "givenName": "Olorunleke",
                  "familyName": "Ojuolape",
                  "additionalName": "Leke",
                  "alternateName": ["Leke Ojuolape", "Olorunleke", "Leke"],
                  "jobTitle": ["Founder", "Entrepreneur", "Real Estate Professional", "Strategic Leader", "Venture Builder", "Investor"],
                  "url": "https://olorunlekeojuolape.com",
                  "image": "https://olorunlekeojuolape.com/logo1.jpg",
                  "description": "Olorunleke Ojuolape (Leke Ojuolape) is a visionary Founder, Entrepreneur, and Strategic Real Estate Professional based in Nigeria, dedicated to building sustainable value across Africa and beyond.",
                  "nationality": "Nigerian",
                  "knowsAbout": ["Real Estate", "Venture Building", "Entrepreneurship", "Strategic Leadership", "Business Development", "Investment"],
                  "sameAs": [
                    "https://www.instagram.com/olorunleke___/",
                    "https://www.linkedin.com/in/olorunleke-ojuolape"
                  ],
                  "mainEntityOfPage": { "@id": "https://olorunlekeojuolape.com/#webpage" }
                }
              ]
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
