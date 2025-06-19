const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const fs = require('fs');
const path = require('path');

(async () => {
  const sitemap = new SitemapStream({ hostname: 'https://virtiq.dk' });
  const writeStream = createWriteStream(path.resolve(__dirname, '../public/sitemap.xml'));

  sitemap.pipe(writeStream);

  const pages = [
    '/', '/about', '/pricing', '/faq', '/contact', '/blog',
    '/services/ai-agents', '/services/ai-automation', '/services/ai-outreach',
    '/services/meta-ads', '/services/website-development',
    '/tools/youtube-transcript',
    '/privacy-policy', '/terms-of-service'
  ];

  for (const url of pages) {
    sitemap.write({
      url,
      changefreq: 'monthly',
      priority: url === '/' ? 1.0 : 0.8,
      lastmod: new Date().toISOString()
    });
  }

  sitemap.end();
  await streamToPromise(sitemap);

  console.log('✅ Sitemap generated successfully!');
})();
