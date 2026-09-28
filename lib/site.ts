// Primary production origin. Must match the domain Vercel serves without redirecting.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.olorunleke.com').replace(/\/+$/, '');

// Only the production deployment should be indexed; previews (e.g. olorunleke.minfirehomes.com) must not be.
export const IS_INDEXABLE = !process.env.VERCEL_ENV || process.env.VERCEL_ENV === 'production';

export const SITE_NAME = 'Olorunleke Ojuolape';

// Bump when page content changes so sitemap lastModified stays truthful.
export const CONTENT_UPDATED = '2026-09-28';

export const LINKEDIN_URL = 'https://www.linkedin.com/in/olorunleke-ojuolape';
export const INSTAGRAM_URL = 'https://www.instagram.com/olorunleke___/';
export const CONTACT_EMAIL = 'lekejay@yahoo.co.uk';
export const MINDFIRE_URL = 'https://mindfirehomes.com';
