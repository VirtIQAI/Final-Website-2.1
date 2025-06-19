import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'fs';
import path from 'path';
import { Readable } from 'stream';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://virtiq.dk';

const routes = [
  {
    url: '/',
    changefreq: 'weekly',
    priority: 1.0,
    links: [
      { lang: 'da', url: `${baseUrl}/vaerktoejer/` },
      { lang: 'en', url: `${baseUrl}/tools/` }
    ]
  },
  { url: '/services/ai-agents', changefreq: 'monthly', priority: 0.9 },
  { url: '/services/ai-automation', changefreq: 'monthly', priority: 0.9 },
  { url: '/services/ai-outreach', changefreq: 'monthly', priority: 0.9 },
  { url: '/services/meta-ads', changefreq: 'monthly', priority: 0.9 },
  { url: '/services/website-development', changefreq: 'monthly', priority: 0.9 },
  { url: '/tools/youtube-transcript', changefreq: 'monthly', priority: 0.85 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/pricing', changefreq: 'monthly', priority: 0.8 },
  { url: '/blog', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/faq', changefreq: 'monthly', priority: 0.7 },
  { url: '/privacy-policy', changefreq: 'monthly', priority: 0.5 },
  { url: '/terms-of-service', changefreq: 'monthly', priority: 0.5 }
];

const sitemap = new SitemapStream({ hostname: baseUrl });
const writeStream = createWriteStream(path.resolve(__dirname, '../public/sitemap.xml'));

Readable.from(routes).pipe(sitemap).pipe(writeStream);

console.log('✅ Sitemap with hreflang support generated!');
