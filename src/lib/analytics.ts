import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
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
      page_title: document.title,
      page_location: window.location.href
    });

    // Send to Meta Pixel
    window.fbq('track', 'PageView');

    // Send to Google Tag Manager
    window.dataLayer.push({
      event: 'virtualPageview',
      page: {
        path: path,
        title: document.title,
        url: window.location.href
      }
    });
  }, [location]);
};

// Track button clicks
export const trackButtonClick = (buttonName: string, category: string = 'Button Click', additionalData = {}) => {
  const eventData = {
    event_category: category,
    event_label: buttonName,
    ...additionalData
  };

  // Send to Google Analytics
  window.gtag('event', 'button_click', eventData);

  // Send to Meta Pixel
  window.fbq('trackCustom', 'ButtonClick', {
    button_name: buttonName,
    category: category,
    ...additionalData
  });

  // Send to Google Tag Manager
  window.dataLayer.push({
    event: 'buttonClick',
    button: {
      name: buttonName,
      category: category,
      ...additionalData
    }
  });
};

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean = true, formData = {}) => {
  const eventData = {
    event_category: 'Form',
    event_label: formName,
    value: success ? 1 : 0,
    form_data: formData
  };

  // Send to Google Analytics
  window.gtag('event', 'form_submission', eventData);

  // Send to Meta Pixel
  window.fbq('track', 'Lead', {
    form_name: formName,
    success: success,
    ...formData
  });

  // Send to Google Tag Manager
  window.dataLayer.push({
    event: 'formSubmission',
    form: {
      name: formName,
      success: success,
      ...formData
    }
  });
};

// Track outbound links
export const trackOutboundLink = (url: string, linkText: string = '') => {
  const eventData = {
    event_category: 'Outbound Link',
    event_label: linkText || url,
    transport_type: 'beacon',
    link_url: url,
    link_text: linkText
  };

  // Send to Google Analytics
  window.gtag('event', 'outbound_link', eventData);

  // Send to Meta Pixel
  window.fbq('trackCustom', 'OutboundLink', {
    url: url,
    text: linkText
  });

  // Send to Google Tag Manager
  window.dataLayer.push({
    event: 'outboundLink',
    link: {
      url: url,
      text: linkText
    }
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
        
        const eventData = {
          event_category: 'Scroll',
          event_label: `Scrolled ${marker}%`,
          value: marker,
          non_interaction: true
        };

        // Send to Google Analytics
        window.gtag('event', 'scroll_depth', eventData);

        // Send to Meta Pixel
        window.fbq('trackCustom', 'ScrollDepth', {
          depth: marker,
          ...eventData
        });

        // Send to Google Tag Manager
        window.dataLayer.push({
          event: 'scrollDepth',
          scroll: {
            depth: marker,
            ...eventData
          }
        });
      }
    });
  };

  window.addEventListener('scroll', checkScrollDepth, { passive: true });
  return () => window.removeEventListener('scroll', checkScrollDepth);
};

// Track errors
export const trackError = (error: Error, context: string = '') => {
  const eventData = {
    event_category: 'Error',
    event_label: error.message,
    error_stack: error.stack,
    error_context: context,
    non_interaction: true
  };

  // Send to Google Analytics
  window.gtag('event', 'error', eventData);

  // Send to Meta Pixel
  window.fbq('trackCustom', 'Error', {
    message: error.message,
    context: context
  });

  // Send to Google Tag Manager
  window.dataLayer.push({
    event: 'jsError',
    error: {
      message: error.message,
      stack: error.stack,
      context: context
    }
  });
};

// Track user engagement
export const trackEngagement = (action: string, label: string = '', value: number = 0) => {
  const eventData = {
    event_category: 'Engagement',
    event_label: label,
    value: value
  };

  // Send to Google Analytics
  window.gtag('event', action, eventData);

  // Send to Meta Pixel
  window.fbq('trackCustom', 'Engagement', {
    action,
    label,
    value
  });

  // Send to Google Tag Manager
  window.dataLayer.push({
    event: 'userEngagement',
    engagement: {
      action,
      label,
      value
    }
  });
};