import type { Locale } from '../i18n/translations';

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceIntro {
  heading: string;
  items: string[];
}

const mainServicesData: Record<Locale, Service[]> = {
  cs: [
    {
      icon: 'home',
      title: 'Sklenářství',
      description: 'Ve sklenářství v pražských Vršovicích opracováváme ploché stavební sklo.',
    },
    {
      icon: 'wrench',
      title: 'Montáže skla',
      description: 'Realizujeme montáže skel po celé Praze, po domluvě i v jiných místech České republiky.',
    },
    {
      icon: 'cogs',
      title: 'Rámování',
      description: 'Zhotovíme pro vás rámy zcela na míru a dle vašeho přání. Rámy nabízíme dřevěné a hliníkové. (Lira, Nielsen)',
    },
    {
      icon: 'thumbs-up',
      title: 'Paspartování',
      description: 'Pasparty na přání zákazníka, velký výběr barev. Nabízíme kartonové a plátěné pasparty.',
    },
  ],
  en: [
    {
      icon: 'home',
      title: 'Glaziery',
      description: 'In our glazier workshop in Prague Vršovice, we process flat construction glass.',
    },
    {
      icon: 'wrench',
      title: 'Glass Installation',
      description: 'We carry out glass installations throughout Prague, and by arrangement in other parts of the Czech Republic.',
    },
    {
      icon: 'cogs',
      title: 'Framing',
      description: 'We make custom frames to your specifications. We offer wooden and aluminium frames. (Lira, Nielsen)',
    },
    {
      icon: 'thumbs-up',
      title: 'Matting',
      description: 'Custom mats at the customer\'s request, wide selection of colours. We offer cardboard and canvas mats.',
    },
  ],
};

const additionalServicesData: Record<Locale, Service[]> = {
  cs: [
    { icon: 'university', title: 'Etický kodex', description: 'Zakládáme si na dodržování etického kodexu podnikání a ctíme naší morální hodnotu.' },
    { icon: 'tags', title: 'Skleněné příčky', description: '' },
    { icon: 'tags', title: 'Sklo ke krbu', description: '' },
    { icon: 'tags', title: 'Skleněné výplně zábradlí', description: '' },
    { icon: 'tags', title: 'Lepení skla', description: '' },
    { icon: 'tags', title: 'Zrcadla', description: '' },
    { icon: 'tags', title: 'Zasklívání a přesklívání', description: '' },
    { icon: 'tags', title: 'Broušení a fazety', description: '' },
    { icon: 'tags', title: 'Neprůstřelná skla', description: '' },
    { icon: 'tags', title: 'Tvrzená (kalená) skla', description: '' },
    { icon: 'tags', title: 'Protipožární skla', description: '' },
  ],
  en: [
    { icon: 'university', title: 'Code of Ethics', description: 'We are committed to maintaining ethical business standards and honoring our moral values.' },
    { icon: 'tags', title: 'Glass Partitions', description: '' },
    { icon: 'tags', title: 'Fireplace Glass', description: '' },
    { icon: 'tags', title: 'Glass Railing Panels', description: '' },
    { icon: 'tags', title: 'Glass Bonding', description: '' },
    { icon: 'tags', title: 'Mirrors', description: '' },
    { icon: 'tags', title: 'Glazing & Reglazing', description: '' },
    { icon: 'tags', title: 'Grinding & Bevelling', description: '' },
    { icon: 'tags', title: 'Bulletproof Glass', description: '' },
    { icon: 'tags', title: 'Tempered (Toughened) Glass', description: '' },
    { icon: 'tags', title: 'Fire-resistant Glass', description: '' },
  ],
};

const serviceIntroData: Record<Locale, ServiceIntro> = {
  cs: {
    heading: 'Sklenářství Ruská zajišťuje veškeré sklenářské práce',
    items: [
      'broušení skla, vrtání, lepení, pískování, fazetování, výřezy vodním paprskem',
      'řezání skla na přesně požadovaný rozměr, pravoúhlý i kulatý',
      'řezání zrcadel na míru',
      'skleněné obklady pro kuchyňské linky (barevné sklo Lacobel)',
      'lepení akvárií a terárií',
      'izolační dvojskla dle přání zákazníka',
      'zasklívání v bytech i na stavbách',
    ],
  },
  en: {
    heading: 'Sklenářství Ruská provides all types of glazier work',
    items: [
      'glass grinding, drilling, bonding, sandblasting, bevelling, waterjet cutting',
      'cutting glass to precise dimensions, rectangular and circular',
      'custom mirror cutting',
      'glass splashbacks for kitchen counters (Lacobel coloured glass)',
      'bonding aquariums and terrariums',
      'insulating double glazing to customer specifications',
      'glazing in apartments and on construction sites',
    ],
  },
};

export function getMainServices(lang: Locale): Service[] {
  return mainServicesData[lang];
}

export function getAdditionalServices(lang: Locale): Service[] {
  return additionalServicesData[lang];
}

export function getServiceIntro(lang: Locale): ServiceIntro {
  return serviceIntroData[lang];
}
