import React, { useEffect } from 'react';

declare global {
  interface Window {
    voiceflow: {
      chat: { load: (config: any) => void };
      state?: { variables?: Record<string, any> };
    };
  }
}

export const VoiceflowChat: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
    script.type = 'text/javascript';

    script.onload = () => {
      // Initialize widget with minimal configuration first to test
      window.voiceflow.chat.load({
        verify: { projectID: '67e288d9b38caa87c5ee173d' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production'
      });
    };

    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return null;
};