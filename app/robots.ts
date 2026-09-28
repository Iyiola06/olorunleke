import { MetadataRoute } from 'next';
import { SITE_URL, IS_INDEXABLE } from '@/lib/site';

// Search and AI answer-engine crawlers are welcomed explicitly so the profile can be cited.
const AI_AND_SEARCH_AGENTS = [
  'Googlebot',
  'Google-Extended',
  'Bingbot',
  'Applebot',
  'Applebot-Extended',
  'DuckDuckBot',
  'DuckAssistBot',
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Meta-ExternalAgent',
  'Amazonbot',
  'CCBot',
  'cohere-ai',
  'MistralAI-User',
  'YouBot',
];

export default function robots(): MetadataRoute.Robots {
  if (!IS_INDEXABLE) {
    return { rules: [{ userAgent: '*', disallow: '/' }] };
  }

  return {
    rules: [
      { userAgent: AI_AND_SEARCH_AGENTS, allow: '/' },
      { userAgent: '*', allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
