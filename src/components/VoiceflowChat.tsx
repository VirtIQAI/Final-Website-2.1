import React, { useEffect } from 'react';

declare global {
  interface Window {
    voiceflow: {
      chat: { load: (config: any) => void };
      state?: { variables?: Record<string, any> };
    };
  }
}

export const VoiceflowChat: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
    script.type = 'text/javascript';

    script.onload = () => {
      /* ───────────────── helper ───────────────── */
      const normalizeLang = (trace: any): 'da' | 'en' => {
        const raw =
          trace?.payload?.language ??
          window.voiceflow?.state?.variables?.language ??
          'Danish';
        return raw === 'English' ? 'en' : 'da';
      };

      /* ───────────── translations map ─────────── */
      const t = (lang: 'da' | 'en') => ({
        newsletter: {
          heading     : lang === 'da' ? 'Tilmeld nyhedsmail'          : 'Subscribe to newsletter',
          name        : lang === 'da' ? 'Navn'                        : 'Name',
          email       : 'E‑mail',
          profile     : lang === 'da' ? 'Min profil'                  : 'Profile',
          placeholder : lang === 'da' ? 'Vælg din profil'             : 'Select your profile',
          profiles    : lang === 'da'
            ? ['Privatperson','Relocation Agent','Virksomhed / Ambassade','Forsikringsselskab']
            : ['Private','Relocation Agent','Company / Embassy','Insurance'],
          gdprLabel   : lang === 'da' ? 'Jeg accepterer'              : 'I accept the',
          gdprLink    : lang === 'da' ? 'betingelser vedr. personoplysninger'
                                       : 'terms regarding personal data',
          submit      : lang === 'da' ? 'Tilmeld'                     : 'Subscribe'
        },
        udlej: {
          heading     : lang === 'da' ? 'Bestil vurdering'            : 'Request valuation',
          firstName   : lang === 'da' ? 'Fornavn'                     : 'First name',
          lastName    : lang === 'da' ? 'Efternavn'                   : 'Last name',
          email       : 'E‑mail',
          phone       : lang === 'da' ? 'Telefon'                     : 'Phone',
          message     : lang === 'da' ? 'Besked'                      : 'Message',
          gdprLabel   : lang === 'da' ? 'Jeg accepterer'              : 'I accept the',
          gdprLink    : lang === 'da' ? 'betingelser vedr. personoplysninger'
                                       : 'terms regarding personal data',
          submit      : lang === 'da' ? 'Bestil vurdering'            : 'Submit'
        }
      });

      /* ───────── newsletter extension ─────────── */
      const NewsletterExtension = {
        name : 'Newsletter',
        type : 'response',
        match: ({ trace }: any) =>
          trace.type === 'Custom_Newsletter' || trace.payload?.name === 'Custom_Newsletter',

        render: ({ trace, element }: any) => {
          try {
            const lang = normalizeLang(trace);
            const tr = t(lang).newsletter;

            if (!element) { console.error('⚠️ Missing container'); return; }

            const form = document.createElement('form');
            form.innerHTML = `
              <style>
                form{max-width:384px;padding:25px;font-family:Arial;color:#000}
                .h{font-size:22px;font-weight:bold;margin-bottom:25px}
                label{display:block;margin-bottom:5px;font-size:14px}
                input,select{width:100%;padding:10px;border:1px solid #000;margin-bottom:20px;font-size:14px}
                .chk{display:flex;align-items:center;font-size:13px;margin-bottom:20px}
                .chk input{margin-right:8px}.chk a{color:#e79b3c;text-decoration:none}
                .btn{width:100%;padding:12px;background:#7c8491;color:#fff;font-weight:bold;border:none;cursor:pointer}
                .invalid{border-color:red!important}
              </style>
              <div class="h">${tr.heading}</div>
              <label>${tr.name}</label><input type="text" class="name" required>
              <label>${tr.email}</label><input type="email" class="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$">
              <label>${tr.profile}</label>
              <select class="profile" required>
                <option value="">${tr.placeholder}</option>
                ${tr.profiles.map(p=>`<option>${p}</option>`).join('')}
              </select>
              <div class="chk">
                <input type="checkbox" class="gdpr" required>
                <label>${tr.gdprLabel} <a href="https://www.comforthousing.dk/comfort-housings-privatlivspolitik/" target="_blank">${tr.gdprLink}</a></label>
              </div>
              <input type="submit" class="btn" value="${tr.submit}">
            `;

            form.addEventListener('submit', e => {
              e.preventDefault();
              const n = form.querySelector<HTMLInputElement>('.name')!;
              const e1= form.querySelector<HTMLInputElement>('.email')!;
              const p = form.querySelector<HTMLSelectElement>('.profile')!;
              const g = form.querySelector<HTMLInputElement>('.gdpr')!;

              if (!n.checkValidity()||!e1.checkValidity()||!p.checkValidity()||!g.checked) {
                [n,e1,p].forEach(f=>f.classList.toggle('invalid',!f.checkValidity()));
                return;
              }
              form.querySelector('.btn')?.remove();

              window.voiceflow.chat.interact({
                type: 'complete',
                payload: { name:n.value, email:e1.value, profile:p.value, gdpr:g.checked }
              });
            });

            element.appendChild(form);
          } catch (err) {
            console.error('❌ Newsletter form error:', err);
          }
        }
      };

      /* ──────────── udlej extension ───────────── */
      const UdlejFormExtension = {
        name : 'UdlejForm',
        type : 'response',
        match: ({ trace }: any) =>
          trace.type === 'Custom_UdlejForm' || trace.payload?.name === 'Custom_UdlejForm',

        render: ({ trace, element }: any) => {
          try {
            const lang = normalizeLang(trace);
            const tr = t(lang).udlej;

            if (!element) { console.error('⚠️ Missing container'); return; }

            const form = document.createElement('form');
            form.innerHTML = `
              <style>
                form{max-width:384px;padding:25px;font-family:Arial;color:#000}
                .h{font-size:22px;font-weight:bold;margin-bottom:25px}
                label{display:block;margin-bottom:5px;font-size:14px}
                input,textarea{width:100%;padding:10px;border:1px solid #000;margin-bottom:15px;font-size:14px}
                textarea{resize:vertical}
                .chk{display:flex;align-items:center;font-size:13px;margin-bottom:15px}
                .chk input{margin-right:8px}.chk a{color:#e79b3c;text-decoration:none}
                .btn{width:100%;padding:12px;background:#23394d;color:#fff;font-weight:bold;border:none;cursor:pointer}
                .invalid{border-color:red!important}
              </style>
              <div class="h">${tr.heading}</div>
              <label>${tr.firstName}</label><input type="text" class="first" required>
              <label>${tr.lastName}</label><input  type="text" class="last"  required>
              <label>${tr.email}</label><input     type="email" class="email" required>
              <label>${tr.phone}</label><input     type="tel"   class="phone" pattern="[0-9()#&+*=.-]+">
              <label>${tr.message}</label><textarea class="msg" rows="4" required></textarea>
              <div class="chk">
                <input type="checkbox" class="gdpr" required>
                <label>${tr.gdprLabel} <a href="https://www.comforthousing.dk/comfort-housings-privatlivspolitik/" target="_blank">${tr.gdprLink}</a></label>
              </div>
              <input type="submit" class="btn" value="${tr.submit}">
            `;

            form.addEventListener('submit', e => {
              e.preventDefault();
              const f = form.querySelector<HTMLInputElement>('.first')!;
              const l = form.querySelector<HTMLInputElement>('.last')!;
              const e1= form.querySelector<HTMLInputElement>('.email')!;
              const p = form.querySelector<HTMLInputElement>('.phone')!;
              const m = form.querySelector<HTMLTextAreaElement>('.msg')!;
              const g = form.querySelector<HTMLInputElement>('.gdpr')!;

              if (!f.checkValidity()||!l.checkValidity()||!e1.checkValidity()||!m.checkValidity()||!g.checked){
                [f,l,e1,m].forEach(x=>x.classList.toggle('invalid',!x.checkValidity()));
                return;
              }
              form.querySelector('.btn')?.remove();

              window.voiceflow.chat.interact({
                type: 'complete',
                payload: {
                  firstName: f.value, lastName: l.value, email: e1.value,
                  phone: p.value, message: m.value, gdpr: g.checked
                }
              });
            });

            element.appendChild(form);
          } catch (err) {
            console.error('❌ Udlej form error:', err);
          }
        }
      };

      /* ─────────── initialise widget ──────────── */
      window.voiceflow.chat.load({
        verify:  { projectID: '67e288d9b38caa87c5ee173d' },
        url:     'https://general-runtime.voiceflow.com',
        versionID: 'production',
        assistant: { extensions: [NewsletterExtension, UdlejFormExtension] },
        voice:   { url: 'https://runtime-api.voiceflow.com' }
      });
    };

    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return null;
};