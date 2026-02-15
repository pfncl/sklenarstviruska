import type { Locale } from '../i18n/translations';

export interface NavItem {
  label: string;
  href: string;
}

const navigationData: Record<Locale, NavItem[]> = {
  cs: [
    { label: 'Úvod', href: '/' },
    { label: 'O nás', href: '/o-nas' },
    { label: 'Služby', href: '/sluzby' },
    { label: 'Poradna', href: '/poradna' },
    { label: 'Kontakt', href: '/kontakt' },
  ],
  en: [
    { label: 'Home', href: '/en/' },
    { label: 'About', href: '/en/about' },
    { label: 'Services', href: '/en/services' },
    { label: 'Advice', href: '/en/advice' },
    { label: 'Contact', href: '/en/contact' },
  ],
};

export function getNavigation(lang: Locale): NavItem[] {
  return navigationData[lang];
}
