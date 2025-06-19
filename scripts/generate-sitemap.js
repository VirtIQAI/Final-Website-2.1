import { SitemapStream, streamToPromise } from 'sitemap'
import { writeFileSync, mkdirSync, existsSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const BASE = 'https://virtiq.dk'
const outputDir = path.resolve(__dirname, '../dist')
const outputPath = path.join(outputDir, 'sitemap.xml')

// Ensure dist directory exists
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true })
}

const routes = [
  {
    url: '/', changefreq: 'weekly', priority: 1.0,
    links: [
      { lang: 'da', url: `${BASE}/vaerktoejer/` },
      { lang: 'en', url: `${BASE}/tools/` }
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
]

async function buildSitemap() {
  try {
    const smStream = new SitemapStream({ hostname: BASE })
    console.log('➡ Writing sitemap entries:')
    for (const item of routes) {
      console.log('  🧩', item.url)
      smStream.write(item)
    }
    smStream.end()

    const xml = await streamToPromise(smStream).then(data => data.toString())
    writeFileSync(outputPath, xml, 'utf8')
    console.log('✅ Sitemap generated at:', outputPath)
  } catch (err) {
    console.error('❌ Sitemap generation failed:', err)
    process.exit(1)
  }
}

buildSitemap()
