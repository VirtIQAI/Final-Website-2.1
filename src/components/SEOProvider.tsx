import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SEOHead } from './SEOHead';

interface SEOProviderProps {
  children: React.ReactNode;
}

export const SEOProvider: React.FC<SEOProviderProps> = ({ children }) => {
  const location = useLocation();
  const { i18n } = useTranslation();
  const isDanish = i18n.language === 'da';

  const getMetaData = () => {
    const baseUrl = 'https://virtiq.dk';
    const currentUrl = `${baseUrl}${location.pathname}`;

    const defaultTitle = isDanish 
      ? 'VirtIQ - Førende AI Bureau | Intelligente Automatiseringsløsninger'
      : 'VirtIQ - Leading AI Agency | Intelligent Automation Solutions';

    const defaultDescription = isDanish
      ? 'Transform din virksomhed med AI-drevne løsninger. Ekspertise inden for AI-automatisering, intelligente agenter og Meta-annonceoptimering. Start med en gratis konsultation.'
      : 'Transform your business with AI-powered solutions. Expert services in AI automation, intelligent agents, and Meta ads optimization. Get started with a free consultation.';

    const defaultKeywords = isDanish
      ? 'AI automatisering, AI agenter, Meta annoncer, webudvikling, digital transformation, kunstig intelligens, chatbots, forretningsautomatisering'
      : 'AI automation, AI agents, Meta ads, web development, digital transformation, artificial intelligence, chatbots, business automation';

    return {
      title: defaultTitle,
      description: defaultDescription,
      canonicalUrl: currentUrl,
      keywords: defaultKeywords,
      alternateLanguages: {
        en: `${baseUrl}${location.pathname}`,
        da: `${baseUrl}${location.pathname}`
      }
    };
  };

  const metaData = getMetaData();

  return (
    <>
      <SEOHead {...metaData} />
      {children}
    </>
  );
};