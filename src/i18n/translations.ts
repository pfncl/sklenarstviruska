export type Locale = 'cs' | 'en';

const translations = {
  cs: {
    // SEO
    seoLocale: 'cs_CZ',
    seoDefaultDescription: 'Sklenářství Ruská – kompletní sklenářské služby v Praze 10 Vršovicích. Montáže skla, rámování, paspartování.',
    seoTitleHome: 'Sklenářství Ruská | Praha 10 | Vršovice',
    seoTitleAbout: 'O nás – Sklenářství Ruská | Praha 10 | Vršovice',
    seoDescAbout: 'Zakládáme si na osobním přístupu a kvalitním servisu. Každá zakázka je pro nás výzvou. Sklenářské zkušenosti od roku 2006.',
    seoTitleServices: 'Služby – Sklenářství Ruská | Praha 10 | Vršovice',
    seoDescServices: 'Kompletní sklenářské služby – broušení, vrtání, lepení, pískování, fazetování, montáže skla, rámování, paspartování.',
    seoTitleAdvice: 'Poradna – Sklenářství Ruská | Praha 10 | Vršovice',
    seoDescAdvice: 'Nejčastěji kladené otázky o skle – kalené sklo, vrstvené sklo, izolační sklo, bezpečnostní sklo, broušení hran a cenové nabídky.',
    seoTitleContact: 'Kontakt – Sklenářství Ruská | Praha 10 | Vršovice',
    seoDescContact: 'Kontaktujte nás – Ruská 40, Praha 10. Telefon +420 774 483 345, email sklenarstvi.ruska@seznam.cz.',

    // Layout
    skipToContent: 'Přeskočit na obsah',
    mainNav: 'Hlavní navigace',
    mobileNav: 'Mobilní navigace',
    openMenu: 'Otevřít menu',
    closeMenu: 'Zavřít menu',
    scrollToTop: 'Zpět nahoru',
    copyright: 'Všechna práva vyhrazena',

    // Homepage
    homeHeading: 'Sklenářství Ruská?',
    homeProducts: 'Produkty a služby',
    homeNotice: 'Důležité upozornění',
    heroAlt: 'Sklenářství Ruská – Kompletní sklenářské služby, rámování a paspartování obrazů',
    testimonialText: 'S firmou Skloservis nemáme nic společného.',
    ctaTitle: 'Když montáž skla, tak od Sklenářství RUSKÁ.',
    ctaSubtitle: 'Svěřte své sklo sklenářské firmě, která má praktické zkušenosti od roku 2006!',
    ctaButton: 'Kontakt',
    ctaLink: '/kontakt',

    // About
    aboutWhyTitle: 'Proč to děláme',
    aboutWhyQuote: 'Sklo vnímáme jako symbol dokonalosti. Stavebnictví se dělí na dobu před objevem plochého skla a na dobu jeho rozsáhlého používání.',
    aboutWhatTitle: 'Co nás baví',
    aboutWhatItems: [
      'Dokonalá krása a čistota skla.',
      'Vidět interiéry a stavby s našim sklem.',
      'Učit se novým věcem a technologiím.',
    ],
    aboutExpTitle: 'Naše zkušenosti',
    aboutGoodTitle: 'V čem jsme dobří',
    aboutGoodText1: 'Zakládáme si na osobním přístupu a kvalitním servisu. Každá zakázka je pro nás výzvou, jak ji udělat dokonale, abychom ctili krásu skla a jeho výjimečnost. U nás je prioritou spokojený zákazník.',
    aboutGoodText2: 'Místo slov máme raději činy, proto si prohlédněte naše reference a udělejte si názor sami.',
    aboutImageAlt: 'Sklenářství Ruská - ukázka práce',

    // FAQ / Advice
    faqHeading: 'Nejčastěji kladené otázky:',
    faqNotFound: 'Nenašli jste odpověď?',
    faqConsultation: 'Našim zákazníkům, kteří u nás nakupují nebo chtějí nakoupit, dáváme konzultace zdarma. Pokud u nás nechcete nic koupit a nenašli jste odpověď v naší poradně, tak vám můžeme doporučit knowledge databázi o skle',
    faqLinkText: 'Sklovestavebnictvi.cz',
    ourServices: 'Naše služby:',
    servicesLink: '/sluzby',

    // Contact
    contactHeading: 'Kontaktní informace',
    contactForm: 'Napište nám vzkaz',
    contactCompany: 'Sklenářství RUSKÁ.',
    contactIntro: 'Stavte se u nás na prodejně! Budeme se vám osobně věnovat, poradíme a doporučíme ta nejlepší řešení. Pokud si hned nebudeme vědět rady, tak se za vás spojíme se specialisty v oboru.',
    labelAddress: 'Adresa:',
    labelPhone: 'Telefon:',
    labelEmail: 'Email:',
    labelHours: 'Provozní doba:',
    labelFacebook: 'Facebook:',

    // Form
    formName: 'Jméno *',
    formEmail: 'E-mail *',
    formPhoneRequired: 'Telefon *',
    formPhoneOptional: 'Telefon',
    formMessage: 'Zpráva *',
    formSubmit: 'Odeslat',
    formSubmitting: 'Odesílám...',
    formSuccess: 'Děkujeme za vaši zprávu! Ozveme se vám co nejdříve.',
    formErrorGeneral: 'Při odesílání došlo k chybě. Zkuste to prosím znovu.',
    formErrorTurnstile: 'Ověření nebylo dokončeno. Zkuste to prosím znovu.',
  },
  en: {
    // SEO
    seoLocale: 'en_US',
    seoDefaultDescription: 'Sklenářství Ruská – complete glazier services in Prague 10, Vršovice. Glass installation, framing, matting.',
    seoTitleHome: 'Sklenářství Ruská | Glazier Prague 10 | Vršovice',
    seoTitleAbout: 'About Us – Sklenářství Ruská | Prague 10 | Vršovice',
    seoDescAbout: 'We value a personal approach and quality service. Every project is a challenge for us. Glazier experience since 2006.',
    seoTitleServices: 'Services – Sklenářství Ruská | Prague 10 | Vršovice',
    seoDescServices: 'Complete glazier services – grinding, drilling, bonding, sandblasting, bevelling, glass installation, framing, matting.',
    seoTitleAdvice: 'Advice – Sklenářství Ruská | Prague 10 | Vršovice',
    seoDescAdvice: 'Frequently asked questions about glass – tempered glass, laminated glass, insulating glass, safety glass, edge grinding and pricing.',
    seoTitleContact: 'Contact – Sklenářství Ruská | Prague 10 | Vršovice',
    seoDescContact: 'Contact us – Ruská 40, Prague 10. Phone +420 774 483 345, email sklenarstvi.ruska@seznam.cz.',

    // Layout
    skipToContent: 'Skip to content',
    mainNav: 'Main navigation',
    mobileNav: 'Mobile navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    scrollToTop: 'Back to top',
    copyright: 'All rights reserved',

    // Homepage
    homeHeading: 'Sklenářství Ruská?',
    homeProducts: 'Products & Services',
    homeNotice: 'Important Notice',
    heroAlt: 'Sklenářství Ruská – Complete glazier services, framing and matting of pictures',
    testimonialText: 'We have nothing in common with the company Skloservis.',
    ctaTitle: 'When it comes to glass installation, choose Sklenářství RUSKÁ.',
    ctaSubtitle: 'Trust your glass to a glazier company with practical experience since 2006!',
    ctaButton: 'Contact',
    ctaLink: '/en/contact',

    // About
    aboutWhyTitle: 'Why We Do It',
    aboutWhyQuote: 'We perceive glass as a symbol of perfection. Construction is divided into the era before the discovery of flat glass and the era of its widespread use.',
    aboutWhatTitle: 'What We Enjoy',
    aboutWhatItems: [
      'The perfect beauty and purity of glass.',
      'Seeing interiors and buildings with our glass.',
      'Learning new things and technologies.',
    ],
    aboutExpTitle: 'Our Experience',
    aboutGoodTitle: 'What We Do Best',
    aboutGoodText1: 'We value a personal approach and quality service. Every project is a challenge for us to execute perfectly, honoring the beauty and uniqueness of glass. Our priority is a satisfied customer.',
    aboutGoodText2: 'Instead of words, we prefer actions — take a look at our references and judge for yourself.',
    aboutImageAlt: 'Sklenářství Ruská - work sample',

    // FAQ / Advice
    faqHeading: 'Frequently Asked Questions:',
    faqNotFound: "Didn't find the answer?",
    faqConsultation: 'We provide free consultations to customers who buy from us or intend to. If you do not wish to purchase anything and did not find the answer in our advice section, we recommend the glass knowledge database',
    faqLinkText: 'Sklovestavebnictvi.cz',
    ourServices: 'Our Services:',
    servicesLink: '/en/services',

    // Contact
    contactHeading: 'Contact Information',
    contactForm: 'Send Us a Message',
    contactCompany: 'Sklenářství RUSKÁ.',
    contactIntro: 'Visit us at our store! We will personally attend to you, provide advice and recommend the best solutions. If we are not immediately sure, we will connect with industry specialists on your behalf.',
    labelAddress: 'Address:',
    labelPhone: 'Phone:',
    labelEmail: 'Email:',
    labelHours: 'Opening Hours:',
    labelFacebook: 'Facebook:',

    // Form
    formName: 'Name *',
    formEmail: 'E-mail *',
    formPhoneRequired: 'Phone *',
    formPhoneOptional: 'Phone',
    formMessage: 'Message *',
    formSubmit: 'Send',
    formSubmitting: 'Sending...',
    formSuccess: 'Thank you for your message! We will get back to you as soon as possible.',
    formErrorGeneral: 'An error occurred while sending. Please try again.',
    formErrorTurnstile: 'Verification was not completed. Please try again.',
  },
} as const;

export type Translations = (typeof translations)[Locale];

export function t(lang: Locale): Translations {
  return translations[lang];
}
