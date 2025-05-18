import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Initialize dataLayer
window.dataLayer = window.dataLayer || [];

// Track page views
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname + location.search;
    
    // Send to Google Analytics
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: document.title
    });

    // Send to Google Tag Manager
    window.dataLayer.push({
      event: 'page_view',
      page_path: path,
      page_title: document.title
    });
  }, [location]);
};

// Track button clicks
export const trackButtonClick = (buttonName: string, category: string = 'Button Click') => {
  // Send to Google Analytics
  window.gtag('event', 'button_click', {
    event_category: category,
    event_label: buttonName
  });

  // Send to Google Tag Manager
  window.dataLayer.push({
    event: 'button_click',
    event_category: category,
    event_label: buttonName
  });
};

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean = true) => {
  // Send to Google Analytics
  window.gtag('event', 'form_submission', {
    event_category: 'Form',
    event_label: formName,
    value: success ? 1 : 0
  });

  // Send to Google Tag Manager
  window.dataLayer.push({
    event: 'form_submission',
    event_category: 'Form',
    event_label: formName,
    value: success ? 1 : 0
  });
};

// Track outbound links
export const trackOutboundLink = (url: string, linkText: string = '') => {
  // Send to Google Analytics
  window.gtag('event', 'outbound_link', {
    event_category: 'Outbound Link',
    event_label: linkText || url,
    transport_type: 'beacon'
  });

  // Send to Google Tag Manager
  window.dataLayer.push({
    event: 'outbound_link',
    event_category: 'Outbound Link',
    event_label: linkText || url
  });
};

// Track scroll depth
let scrollDepthMarkers = new Set<number>();
export const initScrollTracking = () => {
  const checkScrollDepth = () => {
    const winHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;

    [25, 50, 75, 90].forEach(marker => {
      if (scrollPercent >= marker && !scrollDepthMarkers.has(marker)) {
        scrollDepthMarkers.add(marker);
        
        // Send to Google Analytics
        window.gtag('event', 'scroll_depth', {
          event_category: 'Scroll',
          event_label: `Scrolled ${marker}%`,
          value: marker
        });

        // Send to Google Tag Manager
        window.dataLayer.push({
          event: 'scroll_depth',
          event_category: 'Scroll',
          event_label: `Scrolled ${marker}%`,
          value: marker
        });
      }
    });
  };

  window.addEventListener('scroll', checkScrollDepth, { passive: true });
  return () => window.removeEventListener('scroll', checkScrollDepth);
};