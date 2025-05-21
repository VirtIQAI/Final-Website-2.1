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
    .vf-demo-form-wrapper {
      background: #18181b;
      border-radius: 14px;
      padding: 20px 16px;
      margin: 0;
      box-shadow: 0 2px 16px 0 rgba(124,58,237,.10);
      font-family: 'Inter', Arial, sans-serif;
      width: 100%;
      max-width: 420px;
      min-width: 0;
      box-sizing: border-box;
    }
    .vf-demo-form {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }
    .vf-demo-form label {
      font-size: 15px;
      font-weight: 500;
      color: #d1d5db;
      margin-bottom: 6px;
      margin-top: 0;
      display: block;
    }
    .vf-demo-form input,
    .vf-demo-form select,
    .vf-demo-form textarea {
      width: 100%;
      padding: 12px 14px;
      border-radius: 8px;
      background: rgba(31,41,55,0.68);
      border: 1.5px solid #343749;
      color: #fff;
      font-size: 15px;
      margin-bottom: 0;
      transition: border-color .18s;
      outline: none;
      resize: none;
      box-sizing: border-box;
    }
    .vf-demo-form input:focus,
    .vf-demo-form textarea:focus,
    .vf-demo-form select:focus {
      border-color: #a78bfa;
    }
    .vf-demo-form textarea {
      min-height: 64px;
      max-height: 170px;
    }
    .vf-demo-form .submit-btn {
      width: 100%;
      padding: 13px 0;
      border-radius: 8px;
      background: linear-gradient(90deg, #8b5cf6 0%, #7c3aed 100%);
      color: #fff;
      font-size: 17px;
      font-weight: 600;
      border: none;
      box-shadow: 0 2px 16px 0 rgba(124,58,237,.14);
      cursor: pointer;
      margin-top: 2px;
      margin-bottom: 2px;
      transition: filter .18s;
      position: relative;
      z-index: 1;
    }
    .vf-demo-form .submit-btn:hover {
      filter: brightness(1.07);
    }
    .vf-demo-form .vf-disclaimer {
      font-size: 11px;
      color: #9ca3af;
      margin-top: 10px;
      text-align: center;
    }
    .vf-demo-form .vf-disclaimer a {
      color: #a78bfa;
      text-decoration: underline;
      transition: color .18s;
    }
    .vf-demo-form .vf-disclaimer a:hover {
      color: #c4b5fd;
    }
  </style>
  <div class="vf-demo-form-wrapper">
    <form class="vf-demo-form" autocomplete="off">
      <div>
        <label for="vf_name">Name*</label>
        <input id="vf_name" type="text" class="name" required placeholder="Your name" />
      </div>
      <div>
        <label for="vf_email">Email*</label>
        <input id="vf_email" type="email" class="email" required placeholder="you@company.com" />
      </div>
      <div>
        <label for="vf_company">Company*</label>
        <input id="vf_company" type="text" class="company" required placeholder="Your company" />
      </div>
      <div>
        <label for="vf_service">Service*</label>
        <select id="vf_service" class="service" required>
          <option value="" disabled selected>Select a service</option>
          <option value="AI Agents">AI Agents</option>
          <option value="AI Automation">AI Automation</option>
          <option value="AI Outreach">AI Outreach</option>
          <option value="Meta Ads">Meta Ads</option>
          <option value="Website Development">Website Development</option>
        </select>
      </div>
      <div>
        <label for="vf_message">What specific problems are you looking to solve?*</label>
        <textarea id="vf_message" class="message" required placeholder="Please describe your current challenges and desired outcomes"></textarea>
      </div>
      <div>
        <label for="vf_additionalInfo">Additional Information</label>
        <textarea id="vf_additionalInfo" class="additionalInfo" placeholder="Optional: Share any other relevant details about your project or requirements"></textarea>
      </div>
      <button type="submit" class="submit-btn">Send</button>
      <div class="vf-disclaimer">By submitting this form, you agree to our <a href="/privacy-policy" target="_blank">Privacy Policy</a> and <a href="/terms-of-service" target="_blank">Terms of Service</a>.</div>
    </form>
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