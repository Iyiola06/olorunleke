import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME, LINKEDIN_URL, INSTAGRAM_URL, MINDFIRE_URL } from './site';
import { PROFILE, type Faq } from './profile';

// Page-level `openGraph`/`twitter` replace the root objects wholesale, so rebuild the shared fields here.
export function pageMetadata({
  path,
  title,
  description,
  noindex = false,
}: {
  path: string;
  title: string;
  description: string;
  noindex?: boolean;
}): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  // File-based opengraph-image is not inherited once a page sets its own openGraph, so point at it explicitly.
  const images = [{ url: '/opengraph-image', width: 1200, height: 630, alt: `${PROFILE.name}, ${PROFILE.roleShort} of ${PROFILE.company}` }];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      url: path,
      siteName: SITE_NAME,
      locale: 'en_NG',
      title: fullTitle,
      description,
      images,
    },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images },
    ...(noindex && {
      robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
    }),
  };
}

export const PERSON_ID = `${SITE_URL}/#person`;
export const ORG_ID = `${SITE_URL}/#mindfire`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const SKYLANDS_ID = `${SITE_URL}/#skylands`;

const abuja = {
  '@type': 'City',
  name: PROFILE.city,
  containedInPlace: { '@type': 'Country', name: PROFILE.country },
};

export const siteGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      alternateName: ['Leke Ojuolape', 'Olorunleke (Leke) Ojuolape'],
      description: PROFILE.summary,
      inLanguage: 'en',
      publisher: { '@id': PERSON_ID },
      about: { '@id': PERSON_ID },
    },
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: PROFILE.name,
      givenName: PROFILE.givenName,
      familyName: PROFILE.familyName,
      alternateName: PROFILE.alternateNames,
      url: `${SITE_URL}/`,
      image: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/founder.jpg`,
        width: 1440,
        height: 1597,
        caption: `${PROFILE.name}, ${PROFILE.roleShort} of ${PROFILE.company}`,
      },
      description: PROFILE.summary,
      jobTitle: `${PROFILE.role}, ${PROFILE.company}`,
      worksFor: { '@id': ORG_ID },
      hasOccupation: [
        {
          '@type': 'Occupation',
          name: 'Real Estate Entrepreneur',
          description: 'Land acquisition, due diligence, documentation, infrastructure planning and estate development.',
          occupationLocation: abuja,
        },
        { '@type': 'Occupation', name: 'Geologist' },
      ],
      nationality: { '@type': 'Country', name: PROFILE.country },
      workLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: PROFILE.city, addressCountry: 'NG' } },
      knowsAbout: PROFILE.knowsAbout,
      sameAs: [LINKEDIN_URL, INSTAGRAM_URL],
      mainEntityOfPage: { '@id': `${SITE_URL}/#webpage` },
    },
    {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: PROFILE.company,
      alternateName: ['Mindfire Homes', 'Mindfire'],
      url: MINDFIRE_URL,
      description: PROFILE.mindfireDescription,
      slogan: 'No stories, no stress, just value.',
      founder: { '@id': PERSON_ID },
      employee: { '@id': PERSON_ID },
      areaServed: [abuja, { '@type': 'Country', name: PROFILE.country }],
      address: { '@type': 'PostalAddress', addressLocality: PROFILE.city, addressCountry: 'NG' },
      knowsAbout: [...PROFILE.services, 'Real estate development', 'Real estate investment'],
    },
  ],
};

export const skylandsNode = {
  '@type': 'Place',
  '@id': SKYLANDS_ID,
  name: 'Skylands',
  alternateName: 'Skylands Estate by Mindfire Homes',
  description: PROFILE.skylandsDescription,
  containedInPlace: abuja,
  address: { '@type': 'PostalAddress', addressLocality: PROFILE.city, addressCountry: 'NG' },
};

type Crumb = { name: string; path: string };

export function breadcrumbNode(crumbs: Crumb[]) {
  const all = [{ name: 'Home', path: '/' }, ...crumbs];
  return {
    '@type': 'BreadcrumbList',
    itemListElement: all.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path === '/' ? '/' : c.path}`,
    })),
  };
}

export function webPageNode({
  type = 'WebPage',
  path,
  name,
  description,
  extra = {},
}: {
  type?: string;
  path: string;
  name: string;
  description: string;
  extra?: Record<string, unknown>;
}) {
  const url = `${SITE_URL}${path === '/' ? '/' : path}`;
  return {
    '@type': type,
    '@id': path === '/' ? `${SITE_URL}/#webpage` : `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: 'en',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': PERSON_ID },
    ...extra,
  };
}

export function faqNode(faqs: Faq[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function graph(...nodes: Record<string, unknown>[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}
