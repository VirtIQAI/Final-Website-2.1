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

    function getLanguage(trace) {
  const payloadLang = trace?.payload?.language;
  const globalLang = window.voiceflow?.state?.variables?.language;
  const lang = payloadLang || globalLang;
  return lang === 'English' ? 'en' : 'da'; // default to Danish
      
}
    
    script.onload = () => {
      const NewsletterForm = {
        name: 'Forms',
        type: 'response',
        match: ({ trace }: any) =>
          trace.type === 'Custom_Form' || trace.payload?.name === 'Custom_Form',

render: ({ trace, element }) => {
  const formContainer = document.createElement('form');
  const lang = getLanguage(trace);
  
  formContainer.innerHTML = `
  <style>
  *, ::after, ::before { box-sizing: border-box; }
  form {
    width: 100%;
    max-width: 384px;
    padding: 25px;
    font-family: 'Arial', sans-serif;
    color: #000;
  }

  .form-heading {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 25px;
    text-align: left;
  }

  label {
    font-size: 14px;
    margin-bottom: 5px;
    display: block;
  }

  input[type="text"], input[type="email"], select, textarea {
    width: 100%;
    background: transparent;
    border: 1px solid #000;
    padding: 10px;
    font-size: 14px;
    margin-bottom: 20px;
    outline: none;
  }

  .checkbox-wrapper {
    display: flex;
    align-items: center;
    font-size: 13px;
    margin-bottom: 20px;
  }

  .checkbox-wrapper input[type="checkbox"] {
    margin-right: 8px;
  }

  .checkbox-wrapper a {
    color: #e79b3c;
    text-decoration: none;
  }

  .submit {
    background: #7c8491;
    color: white;
    border: none;
    padding: 12px 0;
    font-size: 14px;
    font-weight: bold;
    width: 100%;
    cursor: pointer;
  }

  .invalid {
    border-color: red !important;
  }
</style>

<div class="form-heading">${lang === 'da' ? 'Tilmeld nyhedsmail' : 'Subscribe to our newsletter'}</div>

<label for="name">${lang === 'da' ? 'Navn' : 'Name'}</label>
<input type="text" class="name" name="name" required>

<label for="email">E-mail</label>
<input type="email" class="email" name="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$">

<label for="profile">${lang === 'da' ? 'Min profil' : 'My profile'}</label>
<select class="profile" name="profile" required>
  <option value="">${lang === 'da' ? 'Vælg din profil' : 'Select your profile'}</option>
  <option value="Privatperson">${lang === 'da' ? 'Privatperson' : 'Private'}</option>
  <option value="Relocation Agent">Relocation Agent</option>
  <option value="Virksomhed / Ambassade">${lang === 'da' ? 'Virksomhed / Ambassade' : 'Company / Embassy'}</option>
  <option value="Forsikringsselskab">${lang === 'da' ? 'Forsikringsselskab' : 'Insurance Company'}</option>
</select>

<div class="checkbox-wrapper">
  <input type="checkbox" class="gdpr" name="gdpr" required>
  <label for="gdpr">
    ${lang === 'da' ? 'Jeg accepterer' : 'I accept the'} 
    <a href="https://www.comforthousing.dk/comfort-housings-privatlivspolitik/" target="_blank">
      ${lang === 'da' ? 'betingelser vedr. personoplysninger' : 'terms regarding personal data'}
    </a>
  </label>
</div>

<input type="submit" class="submit" value="${lang === 'da' ? 'Tilmeld' : 'Subscribe'}">

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

  if (!element) {
    console.error('❌ Voiceflow container element is missing');
    return;
  }

  element.appendChild(formContainer);
}

      };

const UdlejForm = {
  name: 'UdlejForm',
  type: 'response',
  match: ({ trace }) =>
    trace.type === 'Custom_UdlejForm' || trace.payload?.name === 'Custom_UdlejForm',

  render: ({ trace, element }) => {
    const formContainer = document.createElement('form');

    formContainer.innerHTML = `
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
        input[type="text"], input[type="email"], textarea {
          width: 100%; background: transparent; border: 1px solid #000;
          padding: 10px; font-size: 14px; margin-bottom: 20px; outline: none;
        }
        .checkbox-wrapper {
          display: flex; align-items: center; font-size: 13px; margin-bottom: 20px;
        }
        .checkbox-wrapper input[type="checkbox"] { margin-right: 8px; }
        .checkbox-wrapper a { color: #e79b3c; text-decoration: none; }
        .submit {
          background: #7c8491; color: white; border: none;
          padding: 12px 0; font-size: 14px; font-weight: bold;
          width: 100%; cursor: pointer;
        }
        .invalid { border-color: red !important; }
      </style>

      <div class="form-heading">Bestil vurdering</div>

      <label for="firstName">Fornavn</label>
      <input type="text" class="firstName" required>

      <label for="lastName">Efternavn</label>
      <input type="text" class="lastName" required>

      <label for="email">E-mail</label>
      <input type="email" class="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$">

      <label for="phone">Telefon</label>
      <input type="text" class="phone">

      <label for="message">Besked</label>
      <textarea class="message" rows="4" required></textarea>

      <div class="checkbox-wrapper">
        <input type="checkbox" class="gdpr" required>
        <label for="gdpr">Jeg accepterer <a href="https://www.comforthousing.dk/comfort-housings-privatlivspolitik/" target="_blank">betingelser vedr. personoplysninger</a></label>
      </div>

      <input type="submit" class="submit" value="Bestil vurdering">
    `;

    formContainer.addEventListener('submit', function (e) {
      e.preventDefault();

      const f = formContainer.querySelector('.firstName');
      const l = formContainer.querySelector('.lastName');
      const e1 = formContainer.querySelector('.email');
      const p = formContainer.querySelector('.phone');
      const m = formContainer.querySelector('.message');
      const g = formContainer.querySelector('.gdpr');

      if (!f.checkValidity() || !l.checkValidity() || !e1.checkValidity() || !m.checkValidity() || !g.checked) {
        f.classList.toggle('invalid', !f.checkValidity());
        l.classList.toggle('invalid', !l.checkValidity());
        e1.classList.toggle('invalid', !e1.checkValidity());
        m.classList.toggle('invalid', !m.checkValidity());
        return;
      }

      formContainer.querySelector('.submit')?.remove();

      window.voiceflow.chat.interact({
        type: 'complete',
        payload: {
          firstName : f.value,
          lastName  : l.value,
          email     : e1.value,
          phone     : p.value,
          message   : m.value,
          gdpr      : g.checked
        }
      });
    });

    if (!element) {
      console.error('❌ Voiceflow container element is missing');
      return;
    }

    element.appendChild(formContainer);
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