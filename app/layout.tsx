import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import { JsonLd } from '@/components/JsonLd';
import { SITE_URL, SITE_NAME, IS_INDEXABLE } from '@/lib/site';
import { siteGraph } from '@/lib/seo';
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

const DEFAULT_TITLE = 'Olorunleke Ojuolape | MD/CEO, Mindfire Homes & Investments';
const DEFAULT_DESCRIPTION =
  'Olorunleke (Leke) Ojuolape is a geologist-turned real estate entrepreneur and MD/CEO of Mindfire Homes and Investments in Abuja, Nigeria: clean titles, strategic locations and the Skylands estate.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'Olorunleke Ojuolape',
    'Leke Ojuolape',
    'Mindfire Homes',
    'Mindfire Homes and Investments',
    'Mindfire Homes CEO',
    'Skylands Abuja',
    'Skylands estate',
    'Abuja real estate',
    'real estate developer Abuja',
    'Nigeria real estate investment',
    'land with verifiable title Abuja',
    'geologist real estate entrepreneur',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'Real Estate',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: IS_INDEXABLE,
    follow: IS_INDEXABLE,
    googleBot: {
      index: IS_INDEXABLE,
      follow: IS_INDEXABLE,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'profile',
    firstName: 'Olorunleke',
    lastName: 'Ojuolape',
    username: 'Leke Ojuolape',
    url: '/',
    siteName: SITE_NAME,
    locale: 'en_NG',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
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
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-readable profile" />
        <JsonLd data={siteGraph} />
      </head>
      <body className="font-sans bg-ivory text-dark selection:bg-gold/30 selection:text-dark antialiased" suppressHydrationWarning>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
