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
  form {
    font-family: "Arial", sans-serif;
    background: #fff;
    padding: 0;
  }

  label {
    font-size: 0.9em;
    font-weight: 600;
    margin-bottom: 4px;
    display: block;
    color: #333;
  }

  input[type="text"], input[type="email"], select {
    width: 100%;
    background: #f6f6f6;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    padding: 10px;
    font-size: 14px;
    margin-bottom: 12px;
    box-sizing: border-box;
  }

  .checkbox-wrapper {
    font-size: 0.85em;
    color: #333;
    margin: 10px 0;
    display: flex;
    align-items: center;
  }

  .checkbox-wrapper input[type="checkbox"] {
    margin-right: 8px;
  }

  .checkbox-wrapper a {
    color: #e79b3c;
    text-decoration: none;
    font-weight: 500;
  }

  .submit {
    background: #7c8491;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    width: 100%;
    margin-top: 10px;
  }

  .invalid {
    border-color: red !important;
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
