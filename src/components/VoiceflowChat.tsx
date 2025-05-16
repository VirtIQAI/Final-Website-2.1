import React, { useEffect } from 'react';

declare global {
  interface Window {
    voiceflow: {
      chat: {
        load: (config: any) => void;
      };
    };
  }
}

export const VoiceflowChat: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: '6780f08c40d0634c3490b8d9' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
        voice: {
          url: "https://runtime-api.voiceflow.com"
        }
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      // Inject custom form extension
const customFormScript = document.createElement('script');
customFormScript.type = 'text/javascript';
customFormScript.text = `
  const FormExtension = {
    name: 'Forms',
    type: 'response',
    match: ({ trace }) =>
      trace.type === 'Custom_Form' || trace.payload?.name === 'Custom_Form',
    render: ({ trace, element }) => {
      const formContainer = document.createElement('form');
      formContainer.innerHTML = \`
        <style>
          label {
            font-size: 0.8em;
            color: #888;
          }
          input[type="text"], input[type="email"], select {
            width: 100%;
            border: none;
            border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
            background: transparent;
            margin: 5px 0;
            outline: none;
            padding: 8px 0;
          }
          .invalid {
            border-color: red;
          }
          .submit {
            background: linear-gradient(to right, #2e6

    };
  }, []);

  return null;
};