import React from 'react';
import { Button } from './components/ui/Button';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const YouTubeTranscriptTool = () => {
  const { i18n } = useTranslation();
  const isDanish = i18n.language === 'da';

  const title = isDanish
    ? 'YouTube Transcript Værktøj'
    : 'YouTube Transcript Tool';

  const description = isDanish
    ? 'Transskriber YouTube-videoer med ét klik. Kopiér automatisk tekst og gem indhold nemt og hurtigt.'
    : 'Transcribe YouTube videos with one click. Automatically extract and copy subtitles fast and easily.';

  const ctaText = isDanish ? 'Prøv Værktøjet' : 'Try the Tool';

  return (
    <>
      <Helmet>
        <title>{title} | VirtIQ</title>
        <meta name="description" content={description} />
        <link
          rel="canonical"
          href={`https://virtiq.dk/${isDanish ? 'værktøjer' : 'tools'}/youtube-transcript`}
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://virtiq.dk/${isDanish ? 'værktøjer' : 'tools'}/youtube-transcript`}
        />
        <meta property="og:title" content={`${title} | VirtIQ`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://virtiq.dk/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} | VirtIQ`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://virtiq.dk/og-image.jpg" />
      </Helmet>

      <section className="bg-gradient-to-b from-black to-gray-900 text-white py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <span className="uppercase text-xs tracking-widest text-purple-500 font-medium mb-4 inline-block">
            {isDanish ? 'AI Værktøj' : 'AI Tool'}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {isDanish
              ? 'Transskriber YouTube-videoer med AI-hastighed'
              : 'Transcribe YouTube Videos at AI Speed'}
          </h1>
          <p className="text-lg text-gray-300 mb-8">{description}</p>

          <div className="w-full aspect-video rounded-xl overflow-hidden mb-8">
            <video
              className="w-full h-full object-cover"
              controls
              poster="https://virtiq.dk/og-image.jpg"
            >
              <source src="/YouTube Transcrip Tool.mp4" type="video/mp4" />
              {isDanish
                ? 'Din browser understøtter ikke videoafspilleren.'
                : 'Your browser does not support the video player.'}
            </video>
          </div>

          <a
            href="https://youtubetranscript.eu/?utm_source=virtiq.dk&utm_medium=tool_landing&utm_campaign=tools"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" size="lg">
              {ctaText}
            </Button>
          </a>
        </div>
      </section>

      <section className="bg-black py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-xl font-semibold mb-2 text-white">
              {isDanish ? 'Ingen login' : 'No Login'}
            </h3>
            <p className="text-gray-400">
              {isDanish
                ? 'Brug værktøjet med det samme – helt gratis og uden oprettelse.'
                : 'Use the tool instantly – completely free and no signup required.'}
            </p>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-xl font-semibold mb-2 text-white">
              {isDanish ? 'Hurtig tekstkopi' : 'Quick Text Copy'}
            </h3>
            <p className="text-gray-400">
              {isDanish
                ? 'Kopier hele transskriptionen af en video med ét klik.'
                : 'Copy the full transcript of any video in a single click.'}
            </p>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-xl font-semibold mb-2 text-white">
              {isDanish ? 'Fungerer globalt' : 'Works Globally'}
            </h3>
            <p className="text-gray-400">
              {isDanish
                ? 'Understøtter de fleste sprog og videoer med undertekster.'
                : 'Supports most languages and subtitle-enabled videos.'}
            </p>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-xl font-semibold mb-2 text-white">
              {isDanish ? 'Designet til deling' : 'Built to Share'}
            </h3>
            <p className="text-gray-400">
              {isDanish
                ? 'Perfekt til sociale medier, blogindlæg og AI-arbejdsflows.'
                : 'Perfect for social media, blogs, or feeding your AI workflows.'}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default YouTubeTranscriptTool;
