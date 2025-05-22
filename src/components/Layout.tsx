import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { VoiceflowChat } from './VoiceflowChat';
import { NewsletterPopup } from './NewsletterPopup';

interface LayoutProps {
  isNewsletterOpen: boolean;
  onNewsletterClose: () => void;
  onNewsletterOpen: () => void;
}

export const Layout: React.FC<LayoutProps> = ({
  isNewsletterOpen,
  onNewsletterClose,
  onNewsletterOpen,
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>
      <Footer onNewsletterClick={onNewsletterOpen} />
      <VoiceflowChat />
      <NewsletterPopup 
        isOpen={isNewsletterOpen}
        onClose={onNewsletterClose}
      />
    </div>
  );
};