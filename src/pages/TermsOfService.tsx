import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export const TermsOfService: React.FC = () => {
  const { i18n } = useTranslation();
  const isDanish = i18n.language === 'da';

  return (
    <main className="flex-grow pt-24">
      <Helmet>
        <title>{isDanish ? 'Betingelser | VirtIQ' : 'Terms of Service | VirtIQ'}</title>
        <meta name="description" content={isDanish ? 'VirtIQs generelle betingelser og vilkår' : 'VirtIQ\'s general terms and conditions'} />
      </Helmet>

      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-12">
              {isDanish ? 'Generelle Betingelser' : 'Terms of Service'}
            </h1>

            <div className="prose prose-invert max-w-none">
              {isDanish ? (
                <>
                  <h2>1. Generelt</h2>
                  <p>1.1. Disse betingelser gælder for alle de services VirtIQ (CVR: 45291804) leverer.</p>
                  <p>1.2. I disse betingelser omtales VirtIQ som "VirtIQ" og den, som modtager ydelsen eller servicen, som "Kunden".</p>
                  <p>1.3. "Parterne" dækker både VirtIQ og Kunden. Disse generelle betingelser omtales i det følgende som "Betingelserne".</p>
                  <p>1.4. En aftale mellem VirtIQ og Kunden omtales som "Aftalen" – også i tilfælde af flere aftaler.</p>
                  <p>1.5. Fravigelse af disse betingelser kan kun ske ved skriftlig aftale mellem Parterne.</p>

                  <h2>2. Betalingsbetingelser og priser</h2>
                  <p>2.1. Udsendte fakturaer har forfald 8 dage fra fakturadato, medmindre andet er aftalt.</p>
                  <p>2.2. Ved for sen betaling pålægges et rykkergebyr på kr. 100 jf. Renteloven § 9b, stk. 2.</p>
                  <p>2.3. VirtIQ forbeholder sig retten til at tilbageholde eller afbryde ydelser ved manglende betaling.</p>
                  <p>2.4. Priser på VirtIQ's ydelser fremgår af den individuelle aftale.</p>

                  <h2>3. Ophør af aftale og periode</h2>
                  <p>3.1. Dette punkt vedrører løbende ydelser såsom: AI-chatbots, automatisering, AI Outreach, Meta Ads og lignende services.</p>
                  <p>3.2. Varighed og omfang af Aftalen fremgår af den indgåede aftale.</p>
                  <p>3.3. Ændringer i varighed og omfang kan ske løbende, dog kun ved skriftlig accept.</p>
                  <p>3.4. Aftaler løber som udgangspunkt i 30-dages intervaller med opstart den 1. eller 14. i måneden, medmindre andet er aftalt.</p>

                  <h2>4. Levering af AI-løsninger og systemer</h2>
                  <p>4.1. VirtIQ leverer softwarebaserede AI-løsninger såsom chatbots, automatiseringer og API-integrationer.</p>
                  <p>4.2. Medmindre andet er aftalt, inkluderer leverancen ikke løbende drift, overvågning, opdatering eller teknisk support. Disse ydelser kan tilkøbes.</p>
                  <p>4.3. VirtIQ er ikke ansvarlig for kundens efterfølgende databehandling eller overholdelse af GDPR og anden lovgivning ifbm. brugen af AI-løsninger.</p>
                  <p>4.4. Kunden er ansvarlig for det indhold (data, prompts, output), der anvendes og genereres gennem AI-løsninger leveret af VirtIQ.</p>

                  <h2>5. Hæftelse og ansvar</h2>
                  <p>5.1. Kunden er ansvarlig for alt indhold, der anvendes i forbindelse med VirtIQ's ydelser – herunder tekst, billeder og data anvendt i chatbots, automatisering og marketingmateriale.</p>
                  <p>5.2. VirtIQ er alene ansvarlig for direkte tab og kun i det omfang, tabet skyldes fejl i en leveret ydelse.</p>
                  <p>5.2.1. Erstatningsansvaret er begrænset til det beløb, Kunden har betalt for den specifikke ydelse, der er årsag til tabet – dog maksimalt svarende til de seneste 6 måneders fakturering.</p>
                  <p>5.2.2. Ansvarsbegrænsningen gælder også i tilfælde af krav fra tredjemand.</p>
                  <p>5.3. VirtIQ kan ikke holdes ansvarlig for manglende overholdelse af GDPR, ePrivacy eller anden lovgivning i forbindelse med Kundens brug af vores løsninger, uanset om vi har assisteret med teknisk opsætning (f.eks. tracking eller integrationer).</p>

                  <h2>6. Annoncering og performance</h2>
                  <p>6.1. Ved annonceringsydelser (f.eks. Google Ads, Meta-platforme eller lignende), vil VirtIQ opsætte og optimere annoncer baseret på "best practice" og tidligere erfaringer.</p>
                  <p>6.2. Det er Kundens ansvar at gennemgå budget og indhold for at sikre overensstemmelse. Ændringer kan altid anmodes skriftligt, og VirtIQ vil implementere dem hurtigst muligt inden for normale arbejdstider.</p>

                  <h2>7. Reference og brug af data</h2>
                  <p>7.1. VirtIQ forbeholder sig retten til at anvende Kundens logo og navn som reference på vores website og i markedsføring – medmindre andet er skriftligt aftalt. Dette kan til enhver tid trækkes tilbage.</p>
                  <p>7.2. VirtIQ forbeholder sig også retten til at anvende anonymiserede data og cases fra projekter med Kunden til brug i markedsføring og præsentationer. Ingen personfølsomme oplysninger vil blive delt.</p>

                  <h2>8. Tavshedspligt</h2>
                  <p>8.1. Begge Parter er underlagt tavshedspligt ift. fortrolige og følsomme oplysninger, som måtte udveksles i samarbejdet.</p>

                  <h2>9. Tvister</h2>
                  <p>9.1. Enhver tvist, der udspringer af disse betingelser eller Aftalen, er underlagt dansk ret og skal afgøres ved Københavns Byret som første instans.</p>

                  <h2>10. Beskyttelse af personoplysninger</h2>
                  <p>10.1. Ved brug af kontaktformularer, hvor Kunden afgiver navn, e-mail og/eller telefonnummer, forbeholder VirtIQ sig retten til at tage kontakt med relevante tilbud og information.</p>
                  <p>10.2. Kunden kan til enhver tid frabede sig kontakt ved at skrive til lucas@virtiq.dk.</p>
                  <p>10.3. VirtIQ vil ikke sælge oplysninger til tredjepart som er indsendt i en kontaktformular mm.</p>
                </>
              ) : (
                <>
                  <h2>1. General</h2>
                  <p>1.1. These terms apply to all services provided by VirtIQ (CVR: 45291804).</p>
                  <p>1.2. In these terms, VirtIQ is referred to as "VirtIQ" and the recipient of the service is referred to as the "Customer".</p>
                  <p>1.3. "Parties" covers both VirtIQ and the Customer. These general terms are referred to as the "Terms".</p>
                  <p>1.4. An agreement between VirtIQ and the Customer is referred to as the "Agreement" - even in cases of multiple agreements.</p>
                  <p>1.5. Deviation from these terms can only occur through written agreement between the Parties.</p>

                  <h2>2. Payment Terms and Prices</h2>
                  <p>2.1. Invoices are due 8 days from the invoice date unless otherwise agreed.</p>
                  <p>2.2. Late payments incur a reminder fee of DKK 100 cf. Interest Act § 9b, section 2.</p>
                  <p>2.3. VirtIQ reserves the right to withhold or discontinue services in case of non-payment.</p>
                  <p>2.4. Prices for VirtIQ's services are specified in the individual agreement.</p>

                  <h2>3. Termination of Agreement and Period</h2>
                  <p>3.1. This section concerns ongoing services such as: AI chatbots, automation, AI Outreach, Meta Ads, and similar services.</p>
                  <p>3.2. Duration and scope of the Agreement are specified in the concluded agreement.</p>
                  <p>3.3. Changes in duration and scope can occur continuously, but only with written acceptance.</p>
                  <p>3.4. Agreements typically run in 30-day intervals starting on the 1st or 14th of the month unless otherwise agreed.</p>

                  <h2>4. Delivery of AI Solutions and Systems</h2>
                  <p>4.1. VirtIQ provides software-based AI solutions such as chatbots, automations, and API integrations.</p>
                  <p>4.2. Unless otherwise agreed, the delivery does not include ongoing operation, monitoring, updates, or technical support. These services can be purchased separately.</p>
                  <p>4.3. VirtIQ is not responsible for the customer's subsequent data processing or compliance with GDPR and other legislation in connection with the use of AI solutions.</p>
                  <p>4.4. The Customer is responsible for the content (data, prompts, output) used and generated through AI solutions provided by VirtIQ.</p>

                  <h2>5. Liability and Responsibility</h2>
                  <p>5.1. The Customer is responsible for all content used in connection with VirtIQ's services - including text, images, and data used in chatbots, automation, and marketing materials.</p>
                  <p>5.2. VirtIQ is only liable for direct losses and only to the extent that the loss is due to errors in a delivered service.</p>
                  <p>5.2.1. Liability for damages is limited to the amount the Customer has paid for the specific service causing the loss - however, maximum corresponding to the last 6 months of invoicing.</p>
                  <p>5.2.2. The limitation of liability also applies in cases of third-party claims.</p>
                  <p>5.3. VirtIQ cannot be held responsible for non-compliance with GDPR, ePrivacy, or other legislation in connection with the Customer's use of our solutions, regardless of whether we have assisted with technical setup (e.g., tracking or integrations).</p>

                  <h2>6. Advertising and Performance</h2>
                  <p>6.1. For advertising services (e.g., Google Ads, Meta platforms, or similar), VirtIQ will set up and optimize ads based on best practices and previous experiences.</p>
                  <p>6.2. It is the Customer's responsibility to review budget and content to ensure compliance. Changes can always be requested in writing, and VirtIQ will implement them as soon as possible within normal working hours.</p>

                  <h2>7. Reference and Use of Data</h2>
                  <p>7.1. VirtIQ reserves the right to use the Customer's logo and name as a reference on our website and in marketing - unless otherwise agreed in writing. This can be withdrawn at any time.</p>
                  <p>7.2. VirtIQ also reserves the right to use anonymized data and cases from projects with the Customer for use in marketing and presentations. No personally sensitive information will be shared.</p>

                  <h2>8. Confidentiality</h2>
                  <p>8.1. Both Parties are subject to confidentiality regarding confidential and sensitive information that may be exchanged in the collaboration.</p>

                  <h2>9. Disputes</h2>
                  <p>9.1. Any dispute arising from these terms or the Agreement is subject to Danish law and shall be settled at the Copenhagen City Court as the first instance.</p>

                  <h2>10. Protection of Personal Information</h2>
                  <p>10.1. When using contact forms where the Customer provides name, email, and/or phone number, VirtIQ reserves the right to make contact with relevant offers and information.</p>
                  <p>10.2. The Customer can at any time opt out of contact by writing to lucas@virtiq.dk.</p>
                  <p>10.3. VirtIQ will not sell information to third parties that is submitted in a contact form, etc.</p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};