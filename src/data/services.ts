export interface Service {
  icon: string;
  title: string;
  description: string;
}

export const mainServices: Service[] = [
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
];

export const additionalServices: Service[] = [
  {
    icon: 'university',
    title: 'Etický kodex',
    description: 'Zakládáme si na dodržování etického kodexu podnikání a ctíme naší morální hodnotu.',
  },
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
];

export const serviceIntro = {
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
};
