import type { LegalDocument } from './types'

/**
 * Legal templates. These are structured placeholders and MUST be reviewed by a
 * legal advisor and completed with the restaurant's verified company details
 * (legal entity, OIB, registered address) before publishing.
 */
export const privacyPolicy: LegalDocument = {
  seo: {
    title: { hr: 'Politika privatnosti', en: 'Privacy policy' },
    description: {
      hr: 'Kako Restoran Mašić prikuplja, koristi i štiti vaše osobne podatke.',
      en: 'How Restoran Mašić collects, uses and protects your personal data.',
    },
  },
  title: { hr: 'Politika privatnosti', en: 'Privacy policy' },
  updated: '2026-10-13',
  intro: {
    hr: 'Ovaj dokument je predložak i bit će dovršen nakon pravne provjere. Opisuje kako postupamo s osobnim podacima koje nam povjerite putem ove web stranice, u skladu s Općom uredbom o zaštiti podataka (GDPR).',
    en: 'This document is a template and will be finalised after legal review. It describes how we handle the personal data you entrust to us through this website, in line with the General Data Protection Regulation (GDPR).',
  },
  sections: [
    {
      heading: { hr: 'Voditelj obrade', en: 'Data controller' },
      body: {
        hr: [
          'Voditelj obrade je Restoran Mašić. Puni naziv pravne osobe, OIB i sjedište bit će navedeni nakon potvrde podataka.',
          'Za sva pitanja o privatnosti možete nam se obratiti putem adrese e-pošte navedene na stranici Kontakt.',
        ],
        en: [
          'The data controller is Restoran Mašić. The full legal entity name, tax number (OIB) and registered address will be added once confirmed.',
          'For any privacy questions, contact us at the email address listed on the Contact page.',
        ],
      },
    },
    {
      heading: { hr: 'Koje podatke prikupljamo', en: 'What data we collect' },
      body: {
        hr: [
          'Kada pošaljete upit za rezervaciju, obrađujemo ime i prezime, adresu e-pošte, broj telefona, datum i vrijeme dolaska, broj gostiju te eventualnu poruku koju nam napišete.',
          'Ne prikupljamo posebne kategorije osobnih podataka osim ako nam ih sami ne navedete (npr. informacije o alergijama radi pripreme jela).',
        ],
        en: [
          'When you send a reservation request, we process your name, email address, phone number, date and time of arrival, number of guests and any message you include.',
          'We do not collect special categories of personal data unless you provide them yourself (for example, allergy information so we can prepare your meal).',
        ],
      },
    },
    {
      heading: { hr: 'Svrha i pravna osnova', en: 'Purpose and legal basis' },
      body: {
        hr: [
          'Podatke koristimo isključivo kako bismo obradili i potvrdili vašu rezervaciju te vas kontaktirali u vezi s njom. Pravna osnova je poduzimanje radnji na vaš zahtjev prije sklapanja ugovora (članak 6. stavak 1. točka (b) GDPR-a).',
        ],
        en: [
          'We use your data solely to process and confirm your reservation and to contact you about it. The legal basis is taking steps at your request prior to entering into a contract (Article 6(1)(b) GDPR).',
        ],
      },
    },
    {
      heading: { hr: 'Razdoblje čuvanja', en: 'Retention period' },
      body: {
        hr: [
          'Podatke o rezervaciji čuvamo samo onoliko dugo koliko je potrebno za ostvarenje svrhe, a najdulje [razdoblje potvrditi] nakon datuma posjeta, osim ako zakon ne propisuje drukčije.',
        ],
        en: [
          'We keep reservation data only as long as needed for its purpose, and no longer than [period to be confirmed] after the visit date, unless the law requires otherwise.',
        ],
      },
    },
    {
      heading: { hr: 'Vaša prava', en: 'Your rights' },
      body: {
        hr: [
          'Imate pravo na pristup, ispravak i brisanje podataka, ograničenje obrade, prenosivost podataka te pravo na prigovor.',
          'Ako smatrate da su vaša prava povrijeđena, možete podnijeti pritužbu Agenciji za zaštitu osobnih podataka (AZOP).',
        ],
        en: [
          'You have the right to access, rectify and erase your data, to restrict processing, to data portability and to object.',
          'If you believe your rights have been violated, you can lodge a complaint with the Croatian Personal Data Protection Agency (AZOP).',
        ],
      },
    },
    {
      heading: { hr: 'Dijeljenje podataka', en: 'Sharing your data' },
      body: {
        hr: [
          'Vaše podatke ne prodajemo niti ih dijelimo s trećim stranama u marketinške svrhe. Mogu ih obrađivati samo pružatelji usluga koji nam pomažu u radu (npr. usluga e-pošte), uz odgovarajuće ugovore o obradi.',
        ],
        en: [
          'We never sell your data or share it with third parties for marketing. It may only be processed by service providers that help us operate (e.g. email services), under appropriate data processing agreements.',
        ],
      },
    },
  ],
}

export const cookiePolicy: LegalDocument = {
  seo: {
    title: { hr: 'Politika kolačića', en: 'Cookie policy' },
    description: {
      hr: 'Koje kolačiće i lokalnu pohranu koristi web stranica Restorana Mašić.',
      en: 'Which cookies and local storage the Restoran Mašić website uses.',
    },
  },
  title: { hr: 'Politika kolačića', en: 'Cookie policy' },
  updated: '2026-10-13',
  intro: {
    hr: 'Ovaj dokument je predložak i bit će dovršen nakon pravne provjere. Trudimo se koristiti što manje kolačića i nikada ne pratimo posjetitelje bez njihova pristanka.',
    en: 'This document is a template and will be finalised after legal review. We use as few cookies as possible and never track visitors without their consent.',
  },
  sections: [
    {
      heading: { hr: 'Što su kolačići', en: 'What cookies are' },
      body: {
        hr: [
          'Kolačići su male tekstualne datoteke koje web stranica sprema u vaš preglednik. Slično funkcionira i lokalna pohrana preglednika (localStorage).',
        ],
        en: [
          'Cookies are small text files that a website stores in your browser. Your browser’s local storage (localStorage) works in a similar way.',
        ],
      },
    },
    {
      heading: { hr: 'Nužni kolačići', en: 'Essential cookies' },
      body: {
        hr: [
          'Odabrani jezik (hrvatski ili engleski) pamtimo kako bismo vam pri sljedećem posjetu prikazali stranicu na istom jeziku.',
          'Pamtimo i vaš izbor u vezi s kolačićima kako vas ne bismo ponovno pitali. Ovi zapisi ne sadrže osobne podatke i nužni su za rad stranice.',
        ],
        en: [
          'We remember your chosen language (Croatian or English) so the site appears in the same language on your next visit.',
          'We also remember your cookie choice so we don’t ask again. These entries contain no personal data and are necessary for the site to work.',
        ],
      },
    },
    {
      heading: { hr: 'Analitički kolačići', en: 'Analytics cookies' },
      body: {
        hr: [
          'Trenutačno ne koristimo analitičke alate niti kolačiće za praćenje. Ako ih u budućnosti uvedemo, koristit ćemo isključivo alate usmjerene na privatnost i aktivirati ih tek nakon vašeg izričitog pristanka.',
        ],
        en: [
          'We currently use no analytics tools or tracking cookies. If we introduce them in the future, we will only use privacy-focused tools and activate them only after your explicit consent.',
        ],
      },
    },
    {
      heading: { hr: 'Upravljanje postavkama', en: 'Managing your preferences' },
      body: {
        hr: [
          'Svoj izbor možete promijeniti u bilo kojem trenutku putem poveznice „Postavke kolačića” u podnožju stranice ili brisanjem podataka u postavkama preglednika.',
        ],
        en: [
          'You can change your choice at any time via the “Cookie settings” link in the footer, or by clearing site data in your browser settings.',
        ],
      },
    },
  ],
}
