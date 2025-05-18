import fs from 'fs';
import path from 'path';

const baseUrl = 'https://virtiq.dk';

const routes = [
  { path: '/', changefreq: 'weekly', priority: 1.0 },
  { path: '/services/ai-agents', changefreq: 'monthly', priority: 0.9 },
  { path: '/services/ai-automation', changefreq: 'monthly', priority: 0.9 },
  { path: '/services/ai-outreach', changefreq: 'monthly', priority: 0.9 },
  { path: '/services/meta-ads', changefreq: 'monthly', priority: 0.9 },
  { path: '/services/website-development', changefreq: 'monthly', priority: 0.9 },
  { path: '/about', changefreq: 'monthly', priority: 0.8 },
  { path: '/pricing', changefreq: 'monthly', priority: 0.8 },
  { path: '/blog', changefreq: 'weekly', priority: 0.8 },
  { path: '/contact', changefreq: 'monthly', priority: 0.8 },
  { path: '/faq', changefreq: 'monthly', priority: 0.7 },
  { path: '/privacy-policy', changefreq: 'monthly', priority: 0.5 },
  { path: '/terms-of-service', changefreq: 'monthly', priority: 0.5 },
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully!');
};

generateSitemap();