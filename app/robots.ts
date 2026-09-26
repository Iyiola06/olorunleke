import { MetadataRoute } from 'next';
import { SITE_URL, IS_INDEXABLE } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  if (!IS_INDEXABLE) {
    return { rules: [{ userAgent: '*', disallow: '/' }] };
  }

  return {
    rules: [
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: '*',
        allow: '/',
      }
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
