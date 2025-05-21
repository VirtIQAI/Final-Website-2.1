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

    // Hide the Powered By footer everywhere
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
      // By class/aria/selectors
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

    let observer: MutationObserver | null = null;

    script.onload = () => {
      // MutationObserver to catch when the footer re-appears
      observer = new MutationObserver(hidePoweredBy);
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
              .vf-form-container {
                background: #18181b;
                padding: 20px;
                border-radius: 12px;
                font-family: 'Inter', sans-serif;
              }
              .vf-form-group {
                margin-bottom: 16px;
              }
              .vf-form-group label {
                display: block;
                color: #d1d5db;
                font-size: 14px;
                margin-bottom: 6px;
              }
              .vf-form-group input,
              .vf-form-group select,
              .vf-form-group textarea {
                width: 100%;
                padding: 10px;
                background: #27272a;
                border: 1px solid #374151;
                border-radius: 6px;
                color: #fff;
                font-size: 14px;
              }
              .vf-form-group textarea {
                min-height: 80px;
                resize: vertical;
              }
              .vf-submit-btn {
                width: 100%;
                padding: 12px;
                background: #7c3aed;
                color: white;
                border: none;
                border-radius: 6px;
                font-size: 16px;
                font-weight: 500;
                cursor: pointer;
                transition: background-color 0.2s;
              }
              .vf-submit-btn:hover {
                background: #6d28d9;
              }
              .vf-disclaimer {
                margin-top: 12px;
                font-size: 12px;
                color: #9ca3af;
                text-align: center;
              }
              .vf-disclaimer a {
                color: #7c3aed;
                text-decoration: none;
              }
              .vf-disclaimer a:hover {
                text-decoration: underline;
              }
            </style>
            <div class="vf-form-container">
              <div class="vf-form-group">
                <label for="name">Name*</label>
                <input type="text" id="name" class="name" required>
              </div>
              <div class="vf-form-group">
                <label for="email">Email*</label>
                <input type="email" id="email" class="email" required>
              </div>
              <div class="vf-form-group">
                <label for="company">Company*</label>
                <input type="text" id="company" class="company" required>
              </div>
              <div class="vf-form-group">
                <label for="service">Service*</label>
                <select id="service" class="service" required>
                  <option value="" disabled selected>Select a service</option>
                  <option value="AI Agents">AI Agents</option>
                  <option value="AI Automation">AI Automation</option>
                  <option value="AI Outreach">AI Outreach</option>
                  <option value="Meta Ads">Meta Ads</option>
                  <option value="Website Development">Website Development</option>
                </select>
              </div>
              <div class="vf-form-group">
                <label for="message">What specific problems are you looking to solve?*</label>
                <textarea id="message" class="message" required></textarea>
              </div>
              <div class="vf-form-group">
                <label for="additionalInfo">Additional Information</label>
                <textarea id="additionalInfo" class="additionalInfo"></textarea>
              </div>
              <button type="submit" class="vf-submit-btn">Send</button>
              <div class="vf-disclaimer">
                By submitting this form, you agree to our <a href="/privacy-policy" target="_blank">Privacy Policy</a> and <a href="/terms-of-service" target="_blank">Terms of Service</a>
              </div>
            </div>
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

            formContainer.querySelector('.vf-submit-btn')?.remove();

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

    // Hide just after script is added (just in case)
    hidePoweredBy();

    return () => {
      document.body.removeChild(script);
      hidePoweredBy();
      // Clean up observer on unmount
      if (observer) observer.disconnect();
    };
  }, []);

  return null;
};