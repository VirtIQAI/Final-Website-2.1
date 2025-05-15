import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export const PrivacyPolicy: React.FC = () => {
  const { i18n } = useTranslation();
  const isDanish = i18n.language === 'da';

  return (
    <main className="flex-grow pt-24">
      <Helmet>
        <title>{isDanish ? 'Privatlivspolitik | VirtIQ' : 'Privacy Policy | VirtIQ'}</title>
        <meta name="description" content={isDanish ? 'VirtIQ\'s privatlivspolitik og behandling af persondata' : 'VirtIQ\'s privacy policy and data processing guidelines'} />
      </Helmet>

      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-12">
              {isDanish ? 'Privatlivspolitik' : 'Privacy Policy'}
            </h1>

            <div className="prose prose-invert max-w-none">
              {isDanish ? (
                <>
                  <h2 className="font-bold">Introduktion</h2>
                  <p>Når du besøger vores website, indsamles der oplysninger om dig, som bruges til at tilpasse og forbedre vores indhold og til at øge værdien af den markedsføring, vi laver – både på siden og via andre platforme. Hvis du ikke ønsker, at der indsamles oplysninger, bør du slette dine cookies.</p>
                  <p>Nedenfor har vi uddybet, hvilke informationer der indsamles, deres formål og hvilke tredjeparter, der har adgang til dem.</p>

                  <h2 className="font-bold">E-mail marketing og annoncering</h2>
                  <p>Når du tilmelder dig VirtIQ's nyhedsbrev eller downloader gratis indhold fra vores website (f.eks. e-bøger, guides eller AI-analyser), accepterer du samtidig at modtage vores nyhedsbrev. Vores mål er at levere værdi i form af indhold om AI-løsninger, automatisering og chatbot-teknologi.</p>
                  <p>Du kan til enhver tid framelde dig nyhedsbrevet via linket i e-mails eller ved at kontakte os direkte på lucas@virtiq.dk. Ved framelding vil dine oplysninger blive slettet automatisk efter ét år, medmindre du aktivt skriver dig op igen. Ønsker du straks at få slettet dine oplysninger, kan du kontakte os på samme e-mail.</p>

                  <h2 className="font-bold">Brug af kundedata og logoer</h2>
                  <p>Vi forbeholder os retten til at anvende vores kunders logoer og anonymiseret data (f.eks. performance, resultater og funktionsbeskrivelser) i markedsføringsøjemed – både på vores website og i salgs- og præsentationsmateriale. Dette sker altid med respekt for datasikkerhed og uden deling af følsomme eller identificerbare oplysninger, medmindre andet er aftalt skriftligt.</p>

                  <h2 className="font-bold">Cookies</h2>
                  <p>Websitet anvender cookies – små tekstfiler der gemmes på din enhed – med det formål at:</p>
                  <ul>
                    <li>Genkende dig ved tilbagevendende besøg</li>
                    <li>Huske dine præferencer</li>
                    <li>Udføre statistik</li>
                    <li>Målrette annoncer</li>
                  </ul>
                  <p>Cookies kan ikke indeholde skadelig kode som f.eks. virus.</p>
                  <p>Du kan slette eller blokere for cookies. Se vejledning: <a href="http://minecookies.org/cookiehandtering" target="_blank" rel="noopener noreferrer">http://minecookies.org/cookiehandtering</a></p>
                  <p>Vær opmærksom på, at visse funktioner på sitet kan stoppe med at fungere, hvis du blokerer cookies.</p>

                  <p>Vi anvender cookies fra bl.a.:</p>
                  <ul>
                    <li>Meta (Facebook, Instagram)</li>
                    <li>Google</li>
                    <li>LinkedIn</li>
                    <li>Andre platforme relateret til digital annoncering og analyse</li>
                  </ul>

                  <h2 className="font-bold">Personoplysninger</h2>
                  <h3 className="font-bold">Generelt</h3>
                  <p>Vi indsamler oplysninger i forbindelse med brugen af websitet og vores services – f.eks. ved:</p>
                  <ul>
                    <li>Tilgang til indhold</li>
                    <li>Tilmelding til nyhedsbrev</li>
                    <li>Køb af services</li>
                    <li>Udfyldelse af kontaktformularer</li>
                    <li>Download af indhold</li>
                  </ul>

                  <p>Vi kan indsamle:</p>
                  <ul>
                    <li>IP-adresse, browserinformation, enhedstype</li>
                    <li>Geografisk placering</li>
                    <li>Hvilke sider og funktioner, du interagerer med</li>
                    <li>Navn, e-mail, telefonnummer og evt. virksomhedsoplysninger, hvis du selv afgiver dem</li>
                  </ul>

                  <h3 className="font-bold">Sikkerhed</h3>
                  <p>Vi beskytter dine oplysninger med både tekniske og organisatoriske foranstaltninger, så de ikke bliver misbrugt, slettet eller delt uden tilladelse.</p>

                  <h3 className="font-bold">Formål</h3>
                  <p>Oplysninger bruges til:</p>
                  <ul>
                    <li>At identificere dig som bruger</li>
                    <li>At kunne levere AI-løsninger, du efterspørger</li>
                    <li>At sende nyhedsbreve og relevant information</li>
                    <li>At forbedre vores services, platform og markedsføring</li>
                  </ul>

                  <h3 className="font-bold">Opbevaringsperiode</h3>
                  <p>Oplysninger opbevares kun så længe, det er nødvendigt i forhold til det formål, de er indsamlet til, og i overensstemmelse med lovgivningen.</p>

                  <h3 className="font-bold">Videregivelse</h3>
                  <p>Vi videregiver ikke dine personoplysninger uden samtykke, medmindre vi er forpligtet ved lov. Vi anvender databehandlere, som opbevarer og behandler oplysninger på vores vegne – altid under gældende regler, typisk inden for EU/EØS eller i lande med tilstrækkelig databeskyttelse.</p>
                  <p>Anonyme data om brug af websitet og annoncering kan deles med tredjeparter med henblik på markedsføring og statistik.</p>

                  <h2 className="font-bold">Dine rettigheder</h2>
                  <p>Du har ret til indsigt i de oplysninger, vi har om dig – og til at få dem rettet eller slettet. Du kan til enhver tid trække samtykke tilbage.</p>
                  <p>Kontakt os på: lucas@virtiq.dk</p>
                  <p>Hvis du vil klage over vores behandling af dine data, kan du kontakte Datatilsynet via datatilsynet.dk.</p>
                </>
              ) : (
                <>
                  <h2 className="font-bold">Introduction</h2>
                  <p>When you visit our website, information about you is collected and used to customize and improve our content and increase the value of the marketing we do - both on the site and through other platforms. If you do not want information to be collected, you should delete your cookies.</p>
                  <p>Below, we have detailed what information is collected, their purpose, and which third parties have access to them.</p>

                  <h2 className="font-bold">Email Marketing and Advertising</h2>
                  <p>When you sign up for VirtIQ's newsletter or download free content from our website (e.g., e-books, guides, or AI analyses), you also agree to receive our newsletter. Our goal is to deliver value through content about AI solutions, automation, and chatbot technology.</p>
                  <p>You can unsubscribe from the newsletter at any time via the link in emails or by contacting us directly at lucas@virtiq.dk. Upon unsubscription, your information will be automatically deleted after one year unless you actively sign up again. If you want your information deleted immediately, you can contact us at the same email.</p>

                  <h2 className="font-bold">Use of Customer Data and Logos</h2>
                  <p>We reserve the right to use our customers' logos and anonymized data (e.g., performance, results, and feature descriptions) for marketing purposes - both on our website and in sales and presentation materials. This is always done with respect for data security and without sharing sensitive or identifiable information unless otherwise agreed in writing.</p>

                  <h2 className="font-bold">Cookies</h2>
                  <p>The website uses cookies - small text files stored on your device - for the purpose of:</p>
                  <ul>
                    <li>Recognizing you on returning visits</li>
                    <li>Remembering your preferences</li>
                    <li>Performing statistics</li>
                    <li>Targeting advertisements</li>
                  </ul>
                  <p>Cookies cannot contain harmful code such as viruses.</p>
                  <p>You can delete or block cookies. See instructions: <a href="http://minecookies.org/cookiehandtering" target="_blank" rel="noopener noreferrer">http://minecookies.org/cookiehandtering</a></p>
                  <p>Please note that certain features on the site may stop working if you block cookies.</p>

                  <p>We use cookies from, among others:</p>
                  <ul>
                    <li>Meta (Facebook, Instagram)</li>
                    <li>Google</li>
                    <li>LinkedIn</li>
                    <li>Other platforms related to digital advertising and analysis</li>
                  </ul>

                  <h2 className="font-bold">Personal Information</h2>
                  <h3 className="font-bold">General</h3>
                  <p>We collect information in connection with the use of the website and our services - for example when:</p>
                  <ul>
                    <li>Accessing content</li>
                    <li>Subscribing to newsletter</li>
                    <li>Purchasing services</li>
                    <li>Filling out contact forms</li>
                    <li>Downloading content</li>
                  </ul>

                  <p>We may collect:</p>
                  <ul>
                    <li>IP address, browser information, device type</li>
                    <li>Geographic location</li>
                    <li>Which pages and features you interact with</li>
                    <li>Name, email, phone number, and company information if you provide them</li>
                  </ul>

                  <h3 className="font-bold">Security</h3>
                  <p>We protect your information with both technical and organizational measures to prevent misuse, deletion, or unauthorized sharing.</p>

                  <h3 className="font-bold">Purpose</h3>
                  <p>Information is used to:</p>
                  <ul>
                    <li>Identify you as a user</li>
                    <li>Deliver AI solutions you request</li>
                    <li>Send newsletters and relevant information</li>
                    <li>Improve our services, platform, and marketing</li>
                  </ul>

                  <h3 className="font-bold">Storage Period</h3>
                  <p>Information is only stored as long as necessary for the purpose for which it was collected and in accordance with legislation.</p>

                  <h3 className="font-bold">Disclosure</h3>
                  <p>We do not disclose your personal information without consent unless required by law. We use data processors who store and process information on our behalf - always under applicable rules, typically within the EU/EEA or in countries with adequate data protection.</p>
                  <p>Anonymous data about website usage and advertising may be shared with third parties for marketing and statistics purposes.</p>

                  <h2 className="font-bold">Your Rights</h2>
                  <p>You have the right to access the information we have about you - and to have it corrected or deleted. You can withdraw consent at any time.</p>
                  <p>Contact us at: lucas@virtiq.dk</p>
                  <p>If you want to complain about our data processing, you can contact the Danish Data Protection Agency via datatilsynet.dk.</p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};