import React, { useEffect } from 'react';

declare global {
  interface Window {
    voiceflow: {
      chat: {
        load: (config: any) => void;
        interact?: (payload: any) => void;
      };
    };
  }
}

export const VoiceflowChat: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';

    // Helper function to hide the Powered By footer, everywhere
    const hidePoweredBy = () => {
      // By text
      document.querySelectorAll('div, span, footer').forEach(el => {
        if (el.textContent && el.textContent.includes('Powered by')) {
          el.style.display = 'none';
          el.style.visibility = 'hidden';
          el.style.height = '0px';
          el.style.margin = '0px';
          el.style.padding = '0px';
          el.style.fontSize = '0px';
          el.style.lineHeight = '0px';
        }
      });
      // By class/aria
      [
        '.vfrc-powered-by',
        '[class*="poweredBy"]',
        'div[aria-label*="Powered by"]',
        'footer',
        'form .vfrc-powered-by',
        'form [class*="poweredBy"]',
        'form div[aria-label*="Powered by"]',
        'form footer',
        'span.vfrc-powered-by',
        'span[class*="poweredBy"]',
        'span[aria-label*="Powered by"]',
        '.vfrc-widget *[class*="poweredBy"]',
        '.vfrc-widget *[aria-label*="Powered by"]'
      ].forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
          el.style.display = 'none';
          el.style.visibility = 'hidden';
          el.style.height = '0px';
          el.style.margin = '0px';
          el.style.padding = '0px';
          el.style.fontSize = '0px';
          el.style.lineHeight = '0px';
        });
      });
    };

    // Will be available after Voiceflow bundle loads
    script.onload = () => {
      // MutationObserver to catch when the footer re-appears
      const observer = new MutationObserver(() => {
        hidePoweredBy();
      });
      observer.observe(document.body, { childList: true, subtree: true });

      // Hide right after load
      hidePoweredBy();

      const FormExtension = {
        name: 'Forms',
        type: 'response',
        match: ({ trace }: any) =>
          trace.type === 'Custom_Form_Demo' || trace.payload?.name === 'Custom_Form_Demo',
        render: ({ trace, element }: any) => {
          const formContainer = document.createElement('form');
          formContainer.innerHTML = `
            <style>
              *, ::after, ::before { box-sizing: border-box; }
              form { font-family: "Arial", sans-serif; color: #f5f5f5; background: #1a1a1a; padding: 10px; max-width: 100%; }
              label { display: block; margin-bottom: 5px; font-weight: 600; color: #d1d5db; font-size: 13px; }
              input, textarea, select { width: 100%; padding: 10px; border-radius: 8px; background-color: rgba(31, 41, 55, 0.5); border: 1px solid #374151; color: #fff; margin-bottom: 15px; font-size: 14px; }
              .submit { width: 100%; padding: 12px; background: linear-gradient(to right, #8b5cf6, #7c3aed); color: white; font-weight: bold; border: none; border-radius: 8px; cursor: pointer; margin-top: 10px; }
            </style>
            <label>Name*</label>
            <input type="text" class="name" required>
            <label>Email*</label>
            <input type="email" class="email" required>
            <label>Company*</label>
            <input type="text" class="company" required>
            <label>Service*</label>
            <select class="service" required>
              <option value="">Select a service</option>
              <option value="AI Agents">AI Agents</option>
              <option value="AI Automation">AI Automation</option>
              <option value="AI Outreach">AI Outreach</option>
              <option value="AI Voice Caller">AI Voice Caller</option>
              <option value="Meta Ads (Facebook & Instagram)">Meta Ads (Facebook & Instagram)</option>
              <option value="Custom Websites">Custom Websites</option>
            </select>
            <label>What specific problems are you looking to solve?*</label>
            <textarea class="message" rows="3" required></textarea>
            <label>Additional Information</label>
            <textarea class="additionalInfo" rows="3"></textarea>
            <input type="submit" class="submit" value="Send">
          `;

          formContainer.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = formContainer.querySelector('.name') as HTMLInputElement;
            const email = formContainer.querySelector('.email') as HTMLInputElement;
            const company = formContainer.querySelector('.company') as HTMLInputElement;
            const service = formContainer.querySelector('.service') as HTMLSelectElement;
            const message = formContainer.querySelector('.message') as HTMLTextAreaElement;
            const additionalInfo = formContainer.querySelector('.additionalInfo') as HTMLTextAreaElement;

            if (!name.value || !email.value || !company.value || !service.value || !message.value) {
              return;
            }

            formContainer.querySelector('.submit')?.remove();

            window.voiceflow.chat.interact &&
              window.voiceflow.chat.interact({
                type: 'complete',
                payload: {
                  name: name.value,
                  email: email.value,
                  company: company.value,
                  service: service.value,
                  message: message.value,
                  additionalInfo: additionalInfo.value
                }
              });
          });

          element.appendChild(formContainer);

          // Hide again in case it pops up with form
          hidePoweredBy();
        }
      };

      window.voiceflow.chat.load({
        verify: { projectID: '6780f08c40d0634c3490b8d9' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
        assistant: {
          stylesheet: "/voiceflow-chat.css",
          extensions: [FormExtension]
        },
        voice: {
          url: 'https://runtime-api.voiceflow.com'
        }
      });
    };

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
      // You may want to disconnect the observer, but since we attach it on script load, 
      // and script is removed, it's safe.
    };
  }, []);

  return null;
};