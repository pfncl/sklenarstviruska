import type { Locale } from '../i18n/translations';

export interface HoursItem {
  days: string;
  time: string;
}

export interface Contact {
  address: string;
  addressShort: string;
  phone: string;
  email: string;
  facebook: string;
  tagline: string;
  hours: HoursItem[];
  map: {
    embedUrl: string;
    lat: number;
    lng: number;
  };
}

const shared = {
  address: 'Ruská 40, 101 00, Praha 10',
  phone: '+420 774 483 345',
  email: 'sklenarstvi.ruska@seznam.cz',
  facebook: 'https://www.facebook.com/sklenarstviruska',
  map: {
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.7495732360157!2d14.454028215534066!3d50.0722514224246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b937c37494611%3A0x4a36714824553afa!2zU2tsZW7DocWZc3R2w60gUHJhaGEgMTA!5e0!3m2!1scs!2scz!4v1585685996129!5m2!1scs!2scz',
    lat: 50.072248,
    lng: 14.4562169,
  },
} as const;

const contactData: Record<Locale, Contact> = {
  cs: {
    ...shared,
    addressShort: 'Vršovice, Ruská 40',
    tagline: 'Sklenářství Praha 10 Vršovice',
    hours: [
      { days: 'Po, St, Čtv', time: '8:00 – 18:00' },
      { days: 'Út, Pá', time: '8:00 – 16:00' },
    ],
  },
  en: {
    ...shared,
    addressShort: 'Vršovice, Ruská 40',
    tagline: 'Glazier Prague 10 Vršovice',
    hours: [
      { days: 'Mon, Wed, Thu', time: '8:00 – 18:00' },
      { days: 'Tue, Fri', time: '8:00 – 16:00' },
    ],
  },
};

export function getContact(lang: Locale): Contact {
  return contactData[lang];
}
