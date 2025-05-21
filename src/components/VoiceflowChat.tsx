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
      const FormExtension = {
        name: 'Forms',
        type: 'response',
        match: ({ trace }) =>
          trace.type === 'Custom_Form_Demo' || trace.payload?.name === 'Custom_Form_Demo',
        render: ({ trace, element }) => {
          const formContainer = document.createElement('form');

          formContainer.innerHTML = `
            <style>
              *, ::after, ::before {
                box-sizing: border-box;
              }

              form {
                font-family: "Arial", sans-serif;
                color: #f5f5f5;
                background: #1a1a1a;
                padding: 10px;
                max-width: 100%;
              }

              label {
                display: block;
                margin-bottom: 5px;
                font-weight: 600;
                color: #d1d5db;
                font-size: 13px;
              }

              input, textarea, select {
                width: 100%;
                padding: 10px;
                border-radius: 8px;
                background-color: rgba(31, 41, 55, 0.5);
                border: 1px solid #374151;
                color: #fff;
                margin-bottom: 15px;
                font-size: 14px;
              }

              .submit {
                width: 100%;
                padding: 12px;
                background: linear-gradient(to right, #8b5cf6, #7c3aed);
                color: white;
                font-weight: bold;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                margin-top: 10px;
              }
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
                <option value="Other">Other</option>
              </select>

            <label>What specific problems are you looking to solve?*</label>
            <textarea class="message" rows="3" required></textarea>

            <label>Additional Information</label>
            <textarea class="additionalInfo" rows="3"></textarea>

            <input type="submit" class="submit" value="Send">
          `;

          formContainer.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = formContainer.querySelector('.name');
            const email = formContainer.querySelector('.email');
            const company = formContainer.querySelector('.company');
            const service = formContainer.querySelector('.service');
            const message = formContainer.querySelector('.message');
            const additionalInfo = formContainer.querySelector('.additionalInfo');

            if (!name.value || !email.value || !company.value || !service.value || !message.value) {
              return;
            }

            formContainer.querySelector('.submit').remove();

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
        }
      };

      window.voiceflow.chat.load({
        verify: { projectID: '6780f08c40d0634c3490b8d9' }, // ✅ your project ID
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
    };
  }, []);

  return null;
};