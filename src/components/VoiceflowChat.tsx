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
          trace.type === 'Custom_Form' || trace.payload?.name === 'Custom_Form',
        render: ({ trace, element }) => {
          const formContainer = document.createElement('form');
          formContainer.innerHTML = `
            <style>
              label { font-size: 0.8em; color: #888; }
              input[type="text"], input[type="email"], select {
                width: 100%;
                border: none;
                border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
                background: transparent;
                margin: 5px 0;
                outline: none;
                padding: 8px 0;
              }
              .invalid { border-color: red; }
              .submit {
                background: linear-gradient(to right, #2e6ee1, #2e7ff1);
                border: none;
                color: white;
                padding: 10px;
                border-radius: 5px;
                width: 100%;
                cursor: pointer;
                margin-top: 15px;
              }
              .checkbox-wrapper {
                font-size: 0.8em;
                margin-top: 10px;
              }
            </style>

            <label>Navn</label>
            <input type="text" class="name" required>
            <label>E-mail</label>
            <input type="email" class="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$">
            <label>Min profil</label>
            <select class="profile" required>
              <option value="">Vælg din profil</option>
              <option value="Privatperson">Privatperson</option>
              <option value="Relocation Agent">Relocation Agent</option>
              <option value="Virksomhed / Ambassade">Virksomhed / Ambassade</option>
              <option value="Forsikringsselskab">Forsikringsselskab</option>
            </select>
            <div class="checkbox-wrapper">
              <input type="checkbox" class="gdpr" required>
              Jeg accepterer <a href="https://www.comforthousing.dk/comfort-housings-privatlivspolitik/" target="_blank">betingelser vedr. personoplysninger</a>
            </div>
            <input type="submit" class="submit" value="Tilmeld">
          `;

          formContainer.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = formContainer.querySelector('.name');
            const email = formContainer.querySelector('.email');
            const profile = formContainer.querySelector('.profile');
            const gdpr = formContainer.querySelector('.gdpr');

            if (!name.checkValidity() || !email.checkValidity() || !profile.checkValidity() || !gdpr.checked) {
              name.classList.toggle('invalid', !name.checkValidity());
              email.classList.toggle('invalid', !email.checkValidity());
              profile.classList.toggle('invalid', !profile.checkValidity());
              return;
            }

            formContainer.querySelector('.submit').remove();

            window.voiceflow.chat.interact({
              type: 'complete',
              payload: {
                name: name.value,
                email: email.value,
                profile: profile.value,
                gdpr: gdpr.checked
              }
            });
          });

          element.appendChild(formContainer);
        }
      };

      window.voiceflow.chat.load({
        verify: { projectID: '67e288d9b38caa87c5ee173d' }, // ✅ your client’s project
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
        assistant: {
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
