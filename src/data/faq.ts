import type { Locale } from '../i18n/translations';

export interface FaqItem {
  question: string;
  answer: string;
}

const faqData: Record<Locale, FaqItem[]> = {
  cs: [
    {
      question: 'Máte základní ceník skla?',
      answer: `<p>Omlouváme se. Našim klientům své ceny rádi řekneme. Je nutné si uvědomit, že každá konstrukce a každé sklo je individuální, a je nutné mu věnovat odlišnou pozornost.</p><p>Napište nám na email <a href="mailto:sklenarstviruska@sklenarstviruska.cz">sklenarstviruska@sklenarstviruska.cz</a> a my vám cenu rádi vypočítáme!</p>`,
    },
    {
      question: 'Co je kalené sklo (tepelně tvrzené bezpečnostní sklo)?',
      answer: `<p>Skla, u kterých je speciálním řízeným procesem ohřevu a ochlazení vyvoláno permanentní povrchové tlakové napětí s cílem značně zvýšit odolnost vůči mechanickému a tepelnému namáhání a zároveň získat předepsané vlastnosti rozpadu.</p><p>Díky vnesenému vnitřnímu napětí během procesu tepelného tvrzení (někdy chybně nazývaného kalení) dochází při rozbití skla ke vzniku velkého množství malých neostrých střepů o maximální velikosti 100 mm.</p>`,
    },
    {
      question: 'Co je vrstvené sklo (connex)?',
      answer: `<p>Podle definice normy ČSN EN 12543 je vrstvené a vrstvené bezpečnostní sklo definováno jako celek, který je tvořený jednou tabulí skla a jednou nebo více tabulemi skla nebo plochými zasklívacími materiály vzájemně spojenými jednou nebo více mezivrstvami.</p><p>Mezi vrstvená skla patří i vrstvené sklo, které nedosáhlo své požární odolnosti pomocí mezivrstev reagujících na vysoké teploty (vrstvené sklo s protipožárními vlastnostmi) a vrstvené sklo, jehož nejméně jedna mezivrstva reaguje na vysokou teplotu, aby tak poskytla výrobku jeho požární odolnost (protipožární vrstvené sklo).</p>`,
    },
    {
      question: 'Co je izolační sklo?',
      answer: `<p>Izolační sklo podle ČSN EN 1279 je výrobek sestávající nejméně ze dvou tabulí skla, oddělených jedním nebo více distančními rámečky, hermeticky utěsněný podél obvodu, mechanicky stálý a trvanlivý.</p>`,
    },
    {
      question: 'Co je bezpečnostní sklo?',
      answer: `<p>Mezi bezpečnostní skla lze zařadit dvě skla. Jedním je bezpečnostní tepelně tvrzené sklo vyrobené dle ČSN EN 12150 a do druhé skupiny můžeme zařadit vrstvené bezpečnostní sklo dle ČSN EN ISO 12543 až do třídy odolnosti dle ČSN EN 12600.</p>`,
    },
    {
      question: 'Jaké druhy hran brousíte?',
      answer: `<p><strong>Podle stupně opracování:</strong></p><ul><li>hrubě broušené hrany skla</li><li>jemně broušené hrany skla</li><li>matně broušené hrany skla</li><li>leštěné broušené hrany skla</li></ul><p><strong>Podle tvaru opracování:</strong></p><ul><li>fazety</li><li>hrana C</li><li>klasická hrana</li><li>sražená hrana</li><li>šikmá hrana</li></ul>`,
    },
    {
      question: 'Co potřebujete pro cenovou nabídku?',
      answer: `<p>Abychom vám dokázali správně ocenit sklo i s montáží potřebujeme znát:</p><ol><li>Kde sklo bude a k čemu bude sloužit.</li><li>Rozměry skla.</li><li>Způsob zatěžování a druh prostředí.</li><li>Způsob uložení a ukotvení.</li><li>Požadavky na bezpečnost a funkčnost.</li><li>Optické a vizuální požadavky.</li><li>Způsob údržby a výměny.</li><li>Hygienická a legislativní omezení.</li></ol>`,
    },
  ],
  en: [
    {
      question: 'Do you have a basic glass price list?',
      answer: `<p>We apologize, but we are happy to provide our prices upon request. Please understand that every construction and every piece of glass is individual and requires different attention.</p><p>Send us an email at <a href="mailto:sklenarstviruska@sklenarstviruska.cz">sklenarstviruska@sklenarstviruska.cz</a> and we will gladly calculate the price for you!</p>`,
    },
    {
      question: 'What is tempered (thermally toughened safety) glass?',
      answer: `<p>Glass in which a permanent surface compressive stress is induced by a specially controlled process of heating and cooling, in order to significantly increase resistance to mechanical and thermal stress while achieving prescribed breakage characteristics.</p><p>Due to the internal stress introduced during the thermal tempering process, when the glass breaks, it forms a large number of small, blunt fragments with a maximum size of 100 mm.</p>`,
    },
    {
      question: 'What is laminated glass (connex)?',
      answer: `<p>According to the definition of the EN 12543 standard, laminated and laminated safety glass is defined as an assembly consisting of one pane of glass and one or more panes of glass or flat glazing materials, bonded together by one or more interlayers.</p><p>Laminated glass also includes glass that has not achieved its fire resistance through interlayers that react to high temperatures (laminated glass with fire protection properties) and glass in which at least one interlayer reacts to high temperatures to provide the product with its fire resistance (fire-resistant laminated glass).</p>`,
    },
    {
      question: 'What is insulating glass?',
      answer: `<p>Insulating glass according to EN 1279 is a product consisting of at least two panes of glass, separated by one or more spacer frames, hermetically sealed around the perimeter, mechanically stable and durable.</p>`,
    },
    {
      question: 'What is safety glass?',
      answer: `<p>Two types of glass can be classified as safety glass. One is thermally toughened safety glass manufactured according to EN 12150, and the second group includes laminated safety glass according to EN ISO 12543, up to the resistance class defined in EN 12600.</p>`,
    },
    {
      question: 'What types of edges do you grind?',
      answer: `<p><strong>By degree of processing:</strong></p><ul><li>rough ground glass edges</li><li>fine ground glass edges</li><li>matt ground glass edges</li><li>polished ground glass edges</li></ul><p><strong>By shape of processing:</strong></p><ul><li>bevels</li><li>C-edge</li><li>classic edge</li><li>chamfered edge</li><li>oblique edge</li></ul>`,
    },
    {
      question: 'What do you need for a price quote?',
      answer: `<p>In order to correctly price the glass including installation, we need to know:</p><ol><li>Where the glass will be placed and what it will be used for.</li><li>Glass dimensions.</li><li>Type of load and environment.</li><li>Method of mounting and anchoring.</li><li>Safety and functionality requirements.</li><li>Optical and visual requirements.</li><li>Maintenance and replacement method.</li><li>Hygiene and legislative restrictions.</li></ol>`,
    },
  ],
};

export function getFaq(lang: Locale): FaqItem[] {
  return faqData[lang];
}
