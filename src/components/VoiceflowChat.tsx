import React, { useEffect } from 'react';

declare global {
  interface Window {
    voiceflow: {
      chat: { load: (config: any) => void };
      // Voiceflow’s state object (populated after load)
      state?: { variables?: Record<string, any> };
    };
  }
}

export const VoiceflowChat: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';

    script.onload = () => {
      /* ------------------------------------------------------------------ */
      /* helper: returns "da" | "en" (default da)                           */
      /* ------------------------------------------------------------------ */
      const getLang = (trace: any) => {
        // try payload first, then global variables
        const payloadLang = trace.payload?.language;
        const globalLang  = window.voiceflow?.state?.variables?.language;
        return payloadLang ?? globalLang ?? 'da';
      };

      /* ------------------------------------------------------------------ */
      /*   translations                                                     */
      /* ------------------------------------------------------------------ */
      const t = (lang = 'da') => ({
        newsletter: {
          heading     : lang === 'da' ? 'Tilmeld nyhedsmail'                 : 'Subscribe to newsletter',
          name        : lang === 'da' ? 'Navn'                               : 'Name',
          email       : 'E‑mail',
          profile     : lang === 'da' ? 'Min profil'                         : 'Profile',
          placeholder : lang === 'da' ? 'Vælg din profil'                    : 'Select your profile',
          profiles    : lang === 'da'
            ? ['Privatperson', 'Relocation Agent', 'Virksomhed / Ambassade', 'Forsikringsselskab']
            : ['Private', 'Relocation Agent', 'Company / Embassy', 'Insurance'],
          gdprLabel   : lang === 'da'
            ? 'Jeg accepterer'
            : 'I accept the',
          gdprLink    : lang === 'da'
            ? 'betingelser vedr. personoplysninger'
            : 'terms regarding personal data',
          submit      : lang === 'da' ? 'Tilmeld'                            : 'Subscribe'
        },

        udlej: {
          heading     : lang === 'da' ? 'Bestil vurdering'                   : 'Request valuation',
          firstName   : lang === 'da' ? 'Fornavn'                            : 'First name',
          lastName    : lang === 'da' ? 'Efternavn'                          : 'Last name',
          email       : 'E‑mail',
          phone       : lang === 'da' ? 'Telefon'                            : 'Phone',
          message     : lang === 'da' ? 'Besked'                             : 'Message',
          gdprLabel   : lang === 'da'
            ? 'Jeg accepterer'
            : 'I accept the',
          gdprLink    : lang === 'da'
            ? 'betingelser vedr. personoplysninger'
            : 'terms regarding personal data',
          submit      : lang === 'da' ? 'Bestil vurdering'                   : 'Submit'
        }
      });

      /* ------------------------------------------------------------------ */
      /* 1)  Newsletter form                                               */
      /* ------------------------------------------------------------------ */
      const NewsletterExtension = {
        name : 'Newsletter',
        type : 'response',
        match: ({ trace }: any) =>
          trace.type === 'Custom_Newsletter' || trace.payload?.name === 'Custom_Newsletter',

render: ({ trace, element }: any) => {
  const rawLang = trace?.payload?.language || window.voiceflow?.state?.variables?.language || 'Danish';
  const lang = rawLang === 'English' ? 'en' : 'da';
  const tr = t(lang).newsletter;

  const form = document.createElement('form');
  form.innerHTML = `
    <style>
      form { max-width:384px; padding:25px; font-family:Arial; color:#000 }
      .hf { font-size:22px; font-weight:bold; margin-bottom:25px }
      label { display:block; margin-bottom:5px; font-size:14px }
      input, select { width:100%; padding:10px; border:1px solid #000; margin-bottom:20px; font-size:14px }
      .chk { display:flex; align-items:center; font-size:13px; margin-bottom:20px }
      .chk input { margin-right:8px }
      .chk a { color:#e79b3c; text-decoration:none }
      .btn { width:100%; padding:12px; background:#7c8491; color:#fff; font-weight:bold; border:none; cursor:pointer }
      .invalid { border-color:red !important }
    </style>

    <div class="hf">${tr.heading}</div>

    <label>${tr.name}</label>
    <input type="text" class="name" required>

    <label>${tr.email}</label>
    <input type="email" class="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$">

    <label>${tr.profile}</label>
    <select class="profile" required>
      <option value="">${tr.placeholder}</option>
      ${tr.profiles.map((p: string) => `<option value="${p}">${p}</option>`).join('')}
    </select>

    <div class="chk">
      <input type="checkbox" class="gdpr" required>
      <label>${tr.gdprLabel} <a href="https://www.comforthousing.dk/comfort-housings-privatlivspolitik/" target="_blank">${tr.gdprLink}</a></label>
    </div>

    <input type="submit" class="btn" value="${tr.submit}">
  `;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = form.querySelector('.name') as HTMLInputElement;
    const email = form.querySelector('.email') as HTMLInputElement;
    const profile = form.querySelector('.profile') as HTMLSelectElement;
    const gdpr = form.querySelector('.gdpr') as HTMLInputElement;

    if (!name.checkValidity() || !email.checkValidity() || !profile.checkValidity() || !gdpr.checked) {
      name.classList.toggle('invalid', !name.checkValidity());
      email.classList.toggle('invalid', !email.checkValidity());
      profile.classList.toggle('invalid', !profile.checkValidity());
      return;
    }

    form.querySelector('.btn')?.remove();

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

          element.appendChild(form);
        }
      };

      /* ------------------------------------------------------------------ */
      /* 2)  Udlej Din Bolig form                                          */
      /* ------------------------------------------------------------------ */
      const UdlejFormExtension = {
        name : 'UdlejForm',
        type : 'response',
        match: ({ trace }: any) =>
          trace.type === 'Custom_UdlejForm' || trace.payload?.name === 'Custom_UdlejForm',

render: ({ trace, element }: any) => {
  const rawLang = trace?.payload?.language || window.voiceflow?.state?.variables?.language || 'Danish';
  const lang = rawLang === 'English' ? 'en' : 'da';
  const tr = t(lang).udlej;

          const form = document.createElement('form');
form.innerHTML = `
  <style>
    form { max-width: 384px; padding: 25px; font-family: Arial; color: #000; }
    .h { font-size: 22px; font-weight: bold; margin-bottom: 25px; }
    label { display: block; margin-bottom: 5px; font-size: 14px; }
    input, textarea {
      width: 100%;
      background: transparent;
      border: 1px solid #000;
      padding: 10px;
      font-size: 14px;
      margin-bottom: 20px;
      outline: none;
    }
    .chk { display: flex; align-items: center; font-size: 13px; margin-bottom: 20px; }
    .chk input { margin-right: 8px; }
    .chk a { color: #e79b3c; text-decoration: none; }
    .btn {
      background: #7c8491;
      color: white;
      border: none;
      padding: 12px 0;
      font-size: 14px;
      font-weight: bold;
      width: 100%;
      cursor: pointer;
    }
    .invalid { border-color: red !important; }
  </style>

  <div class="h">${tr.heading}</div>

  <label>${tr.firstName}</label>
  <input type="text" class="first" required>

  <label>${tr.lastName}</label>
  <input type="text" class="last" required>

  <label>${tr.email}</label>
  <input type="email" class="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$">

  <label>${tr.phone}</label>
  <input type="tel" class="phone" pattern="[0-9()#&+*=.-]+" title="Kun tal og telefontegn er tilladt.">

  <label>${tr.message}</label>
  <textarea class="message" rows="4" required></textarea>

  <div class="chk">
    <input type="checkbox" class="gdpr" required>
    <label>${tr.gdprLabel} <a href="https://www.comforthousing.dk/comfort-housings-privatlivspolitik/" target="_blank">${tr.gdprLink}</a></label>
  </div>

  <input type="submit" class="btn" value="${tr.submit}">
`;


          form.addEventListener('submit', (e: Event) => {
            e.preventDefault();
            const f = form.querySelector<HTMLInputElement>('.f')!;
            const l = form.querySelector<HTMLInputElement>('.l')!;
            const e1= form.querySelector<HTMLInputElement>('.e')!;
            const p = form.querySelector<HTMLInputElement>('.p')!;
            const m = form.querySelector<HTMLTextAreaElement>('.m')!;
            const g = form.querySelector<HTMLInputElement>('.g')!;

            if(!f.checkValidity()||!l.checkValidity()||!e1.checkValidity()||!m.checkValidity()||!g.checked){
              [f,l,e1,m].forEach(field=>field.classList.toggle('invalid',!field.checkValidity()));
              return;
            }

            form.querySelector<HTMLInputElement>('.btn')!.remove();

            window.voiceflow.chat.interact({
              type   : 'complete',
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

          element.appendChild(form);
        }
      };

      /* ------------------------------------------------------------------ */
      /*  Initialise Voiceflow widget                                      */
      /* ------------------------------------------------------------------ */
      window.voiceflow.chat.load({
        verify: { projectID: '67e288d9b38caa87c5ee173d' }, // client project
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
        assistant: {
          extensions: [NewsletterExtension, UdlejFormExtension]
        },
        voice: { url: 'https://runtime-api.voiceflow.com' }
      });
    };

    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return null;
};
