export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
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
];
