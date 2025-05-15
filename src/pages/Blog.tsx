import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { NewsletterPopup } from '../components/NewsletterPopup';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export const Blog: React.FC = () => {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const { i18n } = useTranslation();
  const isDanish = i18n.language === 'da';

  const pageTitle = isDanish ? 'Blog - VirtIQ AI Indsigter og Nyheder' : 'Blog - VirtIQ AI Insights and News';
  const pageDescription = isDanish
    ? 'Udforsk de seneste indsigter om AI, teknologi og digital transformation. Få ekspert viden om AI-automatisering, chatbots og digitale løsninger.'
    : 'Explore the latest insights about AI, technology, and digital transformation. Get expert knowledge about AI automation, chatbots, and digital solutions.';

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsNewsletterOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: isDanish 
        ? 'Udnyt kraften i brugerdefinerede GPT\'er i ChatGPT'
        : 'Unlocking the Power of Custom GPTs in ChatGPT',
      excerpt: isDanish
        ? 'Udforsk hvordan OpenAI\'s brugerdefinerede GPT\'er revolutionerer AI-interaktioner og muliggør mere personlige, effektive oplevelser på tværs af forskellige brancher.'
        : 'Explore how OpenAI\'s custom GPTs are revolutionizing AI interactions and enabling more personalized, efficient experiences across various industries.',
      date: '2025-04-22',
      readTime: isDanish ? '5 min læsetid' : '5 min read',
      category: isDanish ? 'AI-Teknologi' : 'AI Technology',
      slug: 'unlocking-power-custom-gpts'
    }
  ];

  return (
    <main className="flex-grow pt-24">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://virtiq.dk/blog`} />
        <link rel="canonical" href="https://virtiq.dk/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": pageTitle,
            "description": pageDescription,
            "url": "https://virtiq.dk/blog",
            "publisher": {
              "@type": "Organization",
              "name": "VirtIQ",
              "logo": {
                "@type": "ImageObject",
                "url": "https://virtiq.dk/logo.png"
              }
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "datePublished": post.date,
              "author": {
                "@type": "Person",
                "name": "Lucas Vange"
              }
            }))
          })}
        </script>
      </Helmet>

      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {isDanish ? 'Seneste Indsigter' : 'Latest Insights'}
            </h1>
            <p className="text-xl text-gray-300">
              {isDanish
                ? 'Udforsk vores seneste tanker om AI, teknologi og digital transformation'
                : 'Explore our latest thoughts on AI, technology, and digital transformation'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-colors h-full flex flex-col p-6"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-sm text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar size={14} className="mr-1" />
                    {new Date(post.date).toLocaleDateString(isDanish ? 'da-DK' : 'en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <h2 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-4 flex-grow">{post.excerpt}</p>
                <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                  {isDanish ? 'Læs mere' : 'Read more'}
                  <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <NewsletterPopup 
        isOpen={isNewsletterOpen} 
        onClose={() => setIsNewsletterOpen(false)} 
      />
    </main>
  );
};