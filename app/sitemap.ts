import { MetadataRoute } from 'next';
import { SITE_URL, CONTENT_UPDATED } from '@/lib/site';

const PAGES: { path: string; priority: number; changeFrequency: 'monthly' | 'yearly'; images?: string[] }[] = [
  { path: '', priority: 1, changeFrequency: 'monthly', images: ['/founder.jpg'] },
  { path: '/about', priority: 0.9, changeFrequency: 'monthly', images: ['/about.jpg'] },
  { path: '/portfolio', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/vision', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/leadership', priority: 0.7, changeFrequency: 'monthly', images: ['/1.jpg'] },
  { path: '/contact', priority: 0.6, changeFrequency: 'yearly' },
];

// /insights is omitted until it has real articles (it is noindexed).
export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
    ...(p.images && { images: p.images.map((src) => `${SITE_URL}${src}`) }),
  }));
}
