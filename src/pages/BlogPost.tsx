import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

// Blog data structure
const blogPosts = {
  'unlocking-power-custom-gpts': {
    title: 'Unlocking the Power of Custom GPTs in ChatGPT',
    date: '2025-04-22',
    readTime: '5 min read',
    category: 'AI Technology',
    author: {
      name: 'Lucas Vange',
      role: 'CEO & Founder',
      image: '/public/lucas-vange.jpg',
    },
    images: ['/blog-assets/1.svg', '/blog-assets/2.svg', '/blog-assets/3.svg', '/blog-assets/4.svg', '/blog-assets/5.svg', '/blog-assets/6.svg', '/blog-assets/7.svg'],
    content: (
      <>
        <p>
          In the evolving landscape of artificial intelligence, OpenAI's introduction of custom GPTs within ChatGPT marks a significant milestone. These tailored AI agents are designed to perform specific tasks, offering users a more personalized and efficient experience.
        </p>

        <h2>What Are Custom GPTs?</h2>
        <p>
          Custom GPTs are specialized versions of ChatGPT that can be configured to handle particular tasks or cater to specific industries. By customizing the behavior and knowledge base of these agents, users can achieve more targeted and effective interactions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
          <img src="/blog-assets/2.svg" alt="Custom GPT Example 1" className="rounded-lg w-full" />
          <img src="/blog-assets/3.svg" alt="Custom GPT Example 2" className="rounded-lg w-full" />
          <img src="/blog-assets/4.svg" alt="Custom GPT Example 3" className="rounded-lg w-full" />
        </div>

        <h2>Practical Applications</h2>
        <ul className="list-disc pl-6">
          <li><strong>Customer Support:</strong> Automate responses to common inquiries, providing instant support and freeing up human resources.</li>
          <li><strong>Content Creation:</strong> Generate tailored content for blogs, social media, and marketing campaigns.</li>
          <li><strong>E-commerce Assistance:</strong> Guide customers through product selections, answer FAQs, and streamline purchases.</li>
          <li><strong>Education:</strong> Offer personalized tutoring or information dissemination.</li>
          <li><strong>Healthcare:</strong> Direct patients to appropriate resources or professionals.</li>
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
          <img src="/blog-assets/5.svg" alt="Custom GPT Application 1" className="rounded-lg w-full" />
          <img src="/blog-assets/6.svg" alt="Custom GPT Application 2" className="rounded-lg w-full" />
          <img src="/blog-assets/7.svg" alt="Custom GPT Application 3" className="rounded-lg w-full" />
        </div>

        <h2>Creating Your Own Custom GPT</h2>
        <p>
          OpenAI has made the process of creating custom GPTs accessible to users without requiring extensive programming knowledge. This empowers individuals and businesses to develop agents aligned to their needs.
        </p>

        <h2>Conclusion</h2>
        <p>
          Custom GPTs represent a significant advancement in AI personalization. By leveraging these agents, users can enhance engagement and efficiency.
        </p>
      </>
    )
  }
};

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold">Post not found</h1>
          <Link to="/blog" className="text-purple-400 hover:text-purple-300 mt-4 inline-block">
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-grow pt-24">
      <article className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 group"
            >
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>

            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-sm text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center text-sm text-gray-400">
                  <Calendar size={14} className="mr-1" />
                  {new Date(post.date).toLocaleDateString('en-US', {
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

              <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

              <div className="flex items-center mb-8">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden mr-4">
                  <img
                    src={post.author.image}
                    alt={post.author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">{post.author.name}</div>
                  <div className="text-sm text-gray-400">{post.author.role}</div>
                </div>
              </div>
            </div>

            <div className="prose prose-invert prose-purple max-w-none">
              {post.content}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};