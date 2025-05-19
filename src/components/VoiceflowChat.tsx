import { useEffect } from 'react';

declare global {
  interface Window {
    voiceflow: {
      chat: {
        load: (config: any) => void;
        interact: (payload: any) => void;
      };
    };
  }
}

export const VoiceflowChat = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
    script.type = 'text/javascript';

    script.onload = () => {
      const NewsletterForm = {
        name: 'Forms',
        type: 'response',
        match: ({ trace }: any) =>
          trace.type === 'Custom_Form' || trace.payload?.name === 'Custom_Form',

        render: ({ trace, element }: any) => {
          const formContainer = document.createElement('form');
          formContainer.innerHTML = `<!-- Paste your newsletter HTML form from the working version here -->`;
          element.appendChild(formContainer);
        }
      };

      const UdlejForm = {
        name: 'UdlejForm',
        type: 'response',
        match: ({ trace }: any) =>
          trace.type === 'Custom_UdlejForm' || trace.payload?.name === 'Custom_UdlejForm',

        render: ({ trace, element }: any) => {
          const form = document.createElement('form');
          form.innerHTML = `
            <style>
              *, ::after, ::before { box-sizing: border-box; }
              form {
                width: 100%;
                max-width: 384px;
                padding: 25px;
                font-family: 'Arial', sans-serif;
                color: #000;
              }
              .form-heading { font-size: 22px; font-weight: bold; margin-bottom: 25px; text-align: left; }
              label { font-size: 14px; margin-bottom: 5px; display: block; }
              input, textarea {
                width: 100%; background: transparent; border: 1px solid #000;
                padding: 10px; font-size: 14px; margin-bottom: 20px; outline: none;
              }
              .checkbox-wrapper {
                display: flex; align-items: center; font-size: 13px; margin-bottom: 20px;
              }
              .checkbox-wrapper input[type="checkbox"] { margin-right: 8px; }
              .checkbox-wrapper a { color: #e79b3c; text-decoration: none; }
              .submit {
                background: #23394d; color: white; border: none;
                padding: 12px 0; font-size: 14px; font-weight: bold;
                width: 100%; cursor: pointer;
              }
              .invalid { border-color: red !important; }
            </style>

            <div class="form-heading">Udlej din bolig</div>

            <label>Fornavn</label>
            <input type="text" class="first" required>

            <label>Efternavn</label>
            <input type="text" class="last" required>

            <label>E-mail</label>
            <input type="email" class="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$">

            <label>Telefon</label>
            <input type="tel" class="phone" pattern="[0-9()#&+*=.-]+">

            <label>Besked</label>
            <textarea class="message" rows="4" required></textarea>

            <div class="checkbox-wrapper">
              <input type="checkbox" class="gdpr" required>
              <label>Jeg accepterer <a href="https://www.comforthousing.dk/comfort-housings-privatlivspolitik/" target="_blank">betingelser vedr. personoplysninger</a></label>
            </div>

            <input type="submit" class="submit" value="Bestil vurdering">
          `;

          form.addEventListener('submit', function (e) {
            e.preventDefault();

            const first = form.querySelector<HTMLInputElement>('.first')!;
            const last = form.querySelector<HTMLInputElement>('.last')!;
            const email = form.querySelector<HTMLInputElement>('.email')!;
            const phone = form.querySelector<HTMLInputElement>('.phone')!;
            const message = form.querySelector<HTMLTextAreaElement>('.message')!;
            const gdpr = form.querySelector<HTMLInputElement>('.gdpr')!;

            if (
              !first.checkValidity() ||
              !last.checkValidity() ||
              !email.checkValidity() ||
              !message.checkValidity() ||
              !gdpr.checked
            ) {
              [first, last, email, message].forEach(field => {
                field.classList.toggle('invalid', !field.checkValidity());
              });
              return;
            }

            form.querySelector('.submit')?.remove();

            window.voiceflow.chat.interact({
              type: 'complete',
              payload: {
                firstName: first.value,
                lastName: last.value,
                email: email.value,
                phone: phone.value,
                message: message.value,
                gdpr: gdpr.checked
              }
            });
          });

          element.appendChild(form);
        }
      };

      window.voiceflow.chat.load({
        verify: { projectID: '67e288d9b38caa87c5ee173d' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
        assistant: {
          extensions: [NewsletterForm, UdlejForm]
        },
        voice: {
          url: 'https://runtime-api.voiceflow.com'
        }
      });
    };

    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return null;
};