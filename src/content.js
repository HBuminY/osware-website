// Shared facts plus per-locale copy. Brand names stay as published.
// Location is Nevşehir; do not invent clients, counts, or a nevmotoklinik.com delivery.

export const studio = {
  name: 'osware',
  email: 'contact@osware.org',
  phone: '+90 551 469 56 65',
  phoneHref: 'tel:+905514695665',
  whatsappHref: 'https://wa.me/905514695665',
  location: 'Nevşehir',
  founded: '2026',
}

const services = {
  tr: [
    {
      title: 'Web geliştirme',
      lead: 'Kurumsal site, yönetim paneli, ürün arayüzü. Tasarım ve kod aynı hatta yürür; teslim, yayında duran bir sistemdir.',
      detail:
        'Sade bir kurumsal sayfa da olur, ürünün kendi ekranı da. İkisi de aynı soruyla başlar: ne yayında kalacak, kim devralacak?',
    },
    {
      title: 'IT ve altyapı',
      lead: 'Kurulum, güvenlik, entegrasyon, süreklilik. Ekranda görünmeyen katman da işin parçasıdır — erişim, yedek, devir dahil.',
      detail:
        'Site açıldıktan sonra kim sahip, nerede duruyor, bozulunca kim bakıyor. Bunu teslimde bırakırız; dokümantasyon da orada durur.',
    },
    {
      title: 'Arayüz ve kimlik',
      lead: 'Ürünün duruşu tesadüf değildir. Tipografi, düzen, görsel sistem — ekranda ve belgede aynı disiplin.',
      detail:
        'Logo tek başına kimlik değildir. Sayfa, panel ve işaret aynı dili konuşur. Rastgele kalan bir yüzey bırakmayız.',
    },
  ],
  en: [
    {
      title: 'Web development',
      lead: 'Company sites, admin panels, product interfaces. Design and code stay on the same line; delivery is a system that stays live.',
      detail:
        'A plain company page, or the product’s own screens. Both start with the same question: what stays live, and who takes it over?',
    },
    {
      title: 'IT and infrastructure',
      lead: 'Setup, security, integration, continuity. The layer you do not see on screen is part of the work — access, backups, and handover included.',
      detail:
        'After the site is up: who owns it, where it runs, who looks when it breaks. We leave that with the handover; the documentation stays there too.',
    },
    {
      title: 'Interface and identity',
      lead: 'How a product stands is not an accident. Type, layout, visual system — the same discipline on screen and on paper.',
      detail:
        'A logo alone is not an identity. Page, panel, and mark speak the same language. We do not leave a surface that was left to chance.',
    },
  ],
}

const capabilities = {
  tr: [
    'Kurumsal web',
    'Ürün arayüzü',
    'Yönetim paneli',
    'IT kurulumu',
    'Entegrasyon',
    'Güvenlik',
    'Kimlik sistemi',
    'Frontend',
  ],
  en: [
    'Company sites',
    'Product interface',
    'Admin panel',
    'IT setup',
    'Integration',
    'Security',
    'Identity system',
    'Frontend',
  ],
}

const workLines = {
  tr: [
    {
      id: 'client',
      eyebrow: 'Müşteri',
      title: 'Yayındaki siteler',
      text: 'İşletmeler için üretilmiş tanıtım siteleri. İkisi de yayında, ikisi de açılıp bakılır.',
    },
    {
      id: 'product',
      eyebrow: 'Ürün',
      title: 'Kiosk yazılımı',
      text: 'Kiosos, kafe ve restoranlar için kiosk yazılımı, yerinde kurulum ve mobil yönetim. Osware üretimi.',
    },
  ],
  en: [
    {
      id: 'client',
      eyebrow: 'Client',
      title: 'Live sites',
      text: 'Brochure sites built for businesses. Both are live, and both can be opened and looked at.',
    },
    {
      id: 'product',
      eyebrow: 'Product',
      title: 'Kiosk software',
      text: 'Kiosos is kiosk software for cafes and restaurants, with on-site setup and mobile management. Built by Osware.',
    },
  ],
}

const projects = [
  {
    slug: 'arincicek',
    line: 'client',
    title: 'Arin Çiçek',
    image: '/isler/arincicek.png',
    url: 'https://oswaretr.github.io/arincicek/',
    tr: {
      category: 'Kurumsal web',
      tag: 'Canlı',
      context: 'Müşteri sitesi',
      excerpt: 'Nevşehir’de dövme stüdyosu ve müzik için Türkçe tanıtım sitesi. Randevu Instagram DM ile.',
      summary:
        'Arin Çiçek, Nevşehir’de dövme stüdyosu için tanıtım sitesi. Dövme ve müzik aynı sayfada; randevu @arintattoo7 hesabına Instagram mesajı ile açılır. Osware üretimi.',
      description:
        'Nevşehir’de Arin Çiçek için Türkçe tanıtım sitesi. Dövme çalışmaları ve müzik bölümü aynı sayfada durur. Randevu form değil, Instagram DM (@arintattoo7) ile açılır. Müzik, YouTube kanalı @ArinOfficiall üzerinden durur. Osware’in ürettiği, yayında olan müşteri sitesi.',
      scope: 'Müşteri sitesi. Yayındaki isim Arin Çiçek. Adres oswaretr.github.io/arincicek.',
      points: [
        'Nevşehir’de dövme stüdyosu tanıtımı. Randevu Instagram DM ile; hesap @arintattoo7.',
        'Müzik bölümü aynı sitede. YouTube kanalı @ArinOfficiall.',
        'Türkçe arayüz. oswaretr.github.io/arincicek adresinde yayında.',
      ],
      services: ['Kurumsal web'],
      alt: 'Arin Çiçek ana sayfası ekran görüntüsü',
    },
    en: {
      category: 'Company site',
      tag: 'Live',
      context: 'Client site',
      excerpt: 'Turkish brochure site for a tattoo studio and music in Nevşehir. Appointments open by Instagram DM.',
      summary:
        'Arin Çiçek is a brochure site for a tattoo studio in Nevşehir. Tattoo work and music sit on the same page; appointments open by Instagram message to @arintattoo7. Built by Osware.',
      description:
        'A Turkish brochure site for Arin Çiçek in Nevşehir. Tattoo work and a music section sit on the same page. Appointments are not a form; they open by Instagram DM (@arintattoo7). Music sits on the YouTube channel @ArinOfficiall. A live client site built by Osware.',
      scope: 'Client site. The live name is Arin Çiçek. Address: oswaretr.github.io/arincicek.',
      points: [
        'Tattoo studio introduction in Nevşehir. Appointments by Instagram DM; account @arintattoo7.',
        'Music section on the same site. YouTube channel @ArinOfficiall.',
        'Turkish interface. Live at oswaretr.github.io/arincicek.',
      ],
      services: ['Company site'],
      alt: 'Screenshot of the Arin Çiçek homepage',
    },
  },
  {
    slug: 'nevmoto',
    line: 'client',
    title: 'NEV MOTO KLİNİK',
    image: '/isler/nevmoto.png',
    url: 'https://hbuminy.github.io/nevmoto/',
    tr: {
      category: 'Kurumsal web',
      tag: 'Canlı',
      context: 'Müşteri sitesi',
      excerpt: 'Nevşehir motosiklet ve ATV servisi tanıtım sitesi. Randevu Instagram DM ile.',
      summary:
        'NEV MOTO KLİNİK, Nevşehir’de motosiklet ve ATV servisi için tanıtım sitesi. Osware üretimi; randevu @nevmoto_klinik50 hesabına Instagram mesajı ile açılır.',
      description:
        'Nevşehir’de motosiklet ve ATV servisi için tanıtım sitesi. Tamir, bakım ve yedek parça sayfada durur. Randevu form değil, Instagram DM (@nevmoto_klinik50) ile alınır. Osware’in ürettiği, yayında olan müşteri sitesi.',
      scope:
        'Müşteri sitesi. Adres hbuminy.github.io/nevmoto. Eski alan adı nevmotoklinik.com bu teslimin parçası değil; sitede yalnızca eski kaynak olarak geçer.',
      points: [
        'Nevşehir’de motosiklet ve ATV servisi: bakım, tamir ve yedek parça.',
        'Randevu Instagram DM ile alınır; hesap @nevmoto_klinik50.',
        'hbuminy.github.io/nevmoto adresinde yayında.',
      ],
      services: ['Kurumsal web'],
      alt: 'NEV MOTO KLİNİK ana sayfası ekran görüntüsü',
    },
    en: {
      category: 'Company site',
      tag: 'Live',
      context: 'Client site',
      excerpt: 'Brochure site for a motorcycle and ATV workshop in Nevşehir. Appointments by Instagram DM.',
      summary:
        'NEV MOTO KLİNİK is a brochure site for a motorcycle and ATV workshop in Nevşehir. Built by Osware; appointments open by Instagram message to @nevmoto_klinik50.',
      description:
        'A brochure site for a motorcycle and ATV workshop in Nevşehir. Repair, service, and spare parts sit on the page. Appointments are not a form; they are taken by Instagram DM (@nevmoto_klinik50). A live client site built by Osware.',
      scope:
        'Client site. Address: hbuminy.github.io/nevmoto. The old domain nevmotoklinik.com is not part of this delivery; the site only mentions it as a former source.',
      points: [
        'Motorcycle and ATV workshop in Nevşehir: service, repair, and spare parts.',
        'Appointments are taken by Instagram DM; account @nevmoto_klinik50.',
        'Live at hbuminy.github.io/nevmoto.',
      ],
      services: ['Company site'],
      alt: 'Screenshot of the NEV MOTO KLİNİK homepage',
    },
  },
  {
    slug: 'kiosos',
    line: 'product',
    title: 'Kiosos',
    image: '/isler/kiosos.png',
    url: 'https://kiosos.com',
    tr: {
      category: 'Ürün',
      tag: 'Canlı',
      context: 'Osware ürünü',
      excerpt: 'Kafe ve restoranlar için kiosk yazılımı, yerinde kurulum ve mobil yönetim.',
      summary:
        'Kiosos, kafe ve restoranlar için kiosk yazılımı, yerinde kurulum ve mobil yönetim. Osware üretimi; kiosos.com adresinde yayında.',
      description:
        'Kiosos; salondaki kiosk, yazılım katmanı ve işletmecinin cebindeki uygulama. Menü, kampanya ve müsaitlik tek yerden yönetilir. Yazılım ile donanım birlikte gelir, kurulum yerinde yapılır. Osware’in ürettiği, hâlâ yayında olan ürün.',
      scope:
        'Osware ürünü. Kafe ve restoran hattı: yazılım, yerinde kurulum, mobil yönetim. Kurulum sayısı veya müşteri adı yayınlamıyoruz; ürün kiosos.com adresinde.',
      points: [
        'Kafe ve restoran salonuna kiosk kurulur; sipariş ekranı mekânda durur.',
        'Menü, kampanya ve müsaitlik, işletmecinin mobil uygulamasından ünitelere gider.',
        'Yazılım, donanım ve yerinde kurulum aynı iş. kiosos.com adresinde yayında.',
      ],
      services: ['Web', 'Kiosk yazılımı', 'Mobil'],
      alt: 'Kiosos ana sayfası ekran görüntüsü',
    },
    en: {
      category: 'Product',
      tag: 'Live',
      context: 'Osware product',
      excerpt: 'Kiosk software for cafes and restaurants, with on-site setup and mobile management.',
      summary:
        'Kiosos is kiosk software for cafes and restaurants, with on-site setup and mobile management. Built by Osware; live at kiosos.com.',
      description:
        'Kiosos: the kiosk in the room, the software layer, and the app in the operator’s pocket. Menu, campaigns, and availability are managed from one place. Software and hardware arrive together, and setup is done on site. A product built by Osware that is still live.',
      scope:
        'Osware product. Cafe and restaurant line: software, on-site setup, mobile management. We do not publish install counts or customer names; the product is at kiosos.com.',
      points: [
        'A kiosk is installed in the cafe or restaurant; the order screen stays in the room.',
        'Menu, campaigns, and availability go out to the units from the operator’s mobile app.',
        'Software, hardware, and on-site setup are the same job. Live at kiosos.com.',
      ],
      services: ['Web', 'Kiosk software', 'Mobile'],
      alt: 'Screenshot of the Kiosos homepage',
    },
  },
]

const values = {
  tr: [
    {
      title: 'Kapsamı keseriz',
      text: 'Her isteği almayız. Ne yapılmayacağını da söyleriz. Net iş, şişkin işten iyidir.',
    },
    {
      title: 'Tek teslim',
      text: 'Tasarım, yazılım ve IT ayrı masalara bölünmez. Aynı stüdyo, aynı teslim. El değiştirmez.',
    },
    {
      title: 'Çalışır halde bırakırız',
      text: 'Sunum değil, sistem. Devir, erişim, yedek, dokümantasyon — iş bitmiş sayılır ancak o zaman.',
    },
  ],
  en: [
    {
      title: 'We cut the scope',
      text: 'We do not take every request. We also say what will not be done. A clear job is better than a swollen one.',
    },
    {
      title: 'One delivery',
      text: 'Design, software, and IT are not split across separate tables. The same studio, the same delivery. It does not change hands.',
    },
    {
      title: 'We leave it working',
      text: 'Not a presentation — a system. Handover, access, backups, documentation. The job counts as finished only then.',
    },
  ],
}

const steps = {
  tr: [
    {
      title: 'Keşif',
      text: 'İhtiyacı, kısıtı ve neyin dışında kaldığını yazarız. Web mi, IT mi, ikisi birden mi — bu iş bize ait değilse onu da söyleriz.',
    },
    {
      title: 'Mimari',
      text: 'Yığın, yapı ve teslim planı koddan önce durur. Ne yayına çıkacak, kim devralacak, ne yedeklenecek — sürpriz üretimde kalmaz.',
    },
    {
      title: 'Üretim',
      text: 'Tasarım ve geliştirme paralel yürür. Haftalık görünür çıktı vardır. İş stüdyoda kalır, ara katmana devredilmez.',
    },
    {
      title: 'Teslim',
      text: 'Canlıya alınır, erişim devredilir, izlenir. Çalışan sistem, yedek ve devir tamamsa iş bitmiş sayılır. Sonra kapanır ya da bakım hattına girer.',
    },
  ],
  en: [
    {
      title: 'Discovery',
      text: 'We write down the need, the constraint, and what sits outside it. Web, IT, or both — if the job is not ours, we say that too.',
    },
    {
      title: 'Architecture',
      text: 'Stack, structure, and the delivery plan stand before the code. What goes live, who takes it over, what gets backed up — none of that stays a surprise in production.',
    },
    {
      title: 'Production',
      text: 'Design and development run in parallel. There is visible output each week. The work stays in the studio; it is not handed to a middle layer.',
    },
    {
      title: 'Handover',
      text: 'It goes live, access is handed over, it is watched. The job counts as finished when the working system, the backup, and the handover are complete. Then it closes, or it enters a maintenance line.',
    },
  ],
}

const inquiry = {
  tr: [
    'Ne lazım: site, panel, ürün arayüzü, IT ya da kimlik.',
    'Kim için: işletme, ürün ya da elinizdeki mevcut sistem.',
    'Varsa tarih ve durduğu yer — eski site, alan adı, kurulacak mekân.',
  ],
  en: [
    'What is needed: a site, a panel, a product interface, IT, or identity.',
    'Who it is for: a business, a product, or a system you already have.',
    'A date and where it stands, if you have them — an old site, a domain, a place to install.',
  ],
}

const ui = {
  tr: {
    nav: [
      { id: 'work', label: 'İşler' },
      { id: 'studio', label: 'Hizmetler' },
      { id: 'contact', label: 'İletişim' },
    ],
    langLabel: 'Dil',
    logoLabel: 'Osware, ana sayfa',
    skip: 'İçeriğe geç',
    mainNav: 'Ana menü',
    mobileNav: 'Mobil menü',
    menuOpen: 'Menüyü aç',
    menuClose: 'Menüyü kapat',
    menuDialog: 'Menü',
    cta: 'Proje başlat',
    mailSubject: 'Osware — web / IT işi',
    whatsappText: 'Merhaba Osware, bir web / IT işi konuşmak istiyorum.',
    newTab: 'yeni sekmede',
    whatsappFab: 'WhatsApp ile yazın (yeni sekmede)',
    footerEyebrow: 'Sonraki iş',
    footerTitle: 'Kapsam netse başlarız.',
    footerText: 'Web, IT veya kimlik. Kapsamı birlikte keseriz. Uymuyorsa onu da söyleriz.',
    footerBlurb: `Osware — ${studio.location}’de web geliştirme ve IT stüdyosu. Kuruluş ${studio.founded}.`,
    pagesLabel: 'Sayfalar',
    workLabel: 'İşler',
    viewWork: 'İncele',
    and: 've',
    oxford: false,
    homeEyebrow: `Web ve IT stüdyosu · ${studio.location}`,
    homeTitle: `Osware.<br>${studio.location}’de<br>web ve IT.`,
    homeLede:
      'Web ve IT işini teslim ederiz. Kurumsal site, ürün arayüzü, kimlik ve altyapı aynı hatta yürür. Kapsam yazılır, sistem yayına çıkar, devir tamamlanır. Canlı iş:',
    seeWork: 'İşlere bak',
    field: 'Alan',
    fieldValue: 'Web + IT',
    locationLabel: 'Konum',
    foundedLabel: 'Kuruluş',
    panelKicker: `Kuruluş ${studio.founded}`,
    panelLead: 'Web, IT ve arayüz. Aynı stüdyo, aynı teslim.',
    capabilitiesLabel: 'Yetenekler',
    servicesEyebrow: 'Hizmet',
    servicesTitle: 'Web, IT, arayüz',
    selectedEyebrow: 'Seçilmiş iş',
    selectedTitle: 'Canlı işler',
    selectedNote:
      'Müşteri siteleri önde: Arin Çiçek ve NEV MOTO KLİNİK. Kendi ürünümüz Kiosos aynı listede. Hepsi yayında.',
    allWork: 'Tüm işler',
    approachEyebrow: 'Yaklaşım',
    approachTitle: 'Karar ve üretim aynı hatta.',
    approachText: `Ara katman yok. Kapsam, tasarım, yazılım ve IT tek teslimde birleşir. İş ${studio.location}’den yürür; yayındaki sistem, erişim ve devir ile kapanır.`,
    seeServices: 'Hizmetleri gör',
    workEyebrow: 'Portföy',
    workTitle: 'Canlı işler.',
    workLede:
      'Sahte katalog yok. Gösterdiğimiz her iş yayında ve açılıp bakılır. Müşteri siteleri önde; ürünümüz Kiosos aynı portföyde.',
    status: 'Durum',
    type: 'Tür',
    scope: 'Kapsam',
    delivery: 'Teslim',
    openSite: 'Siteyi aç',
    moreEyebrow: 'Devamı',
    moreTitle: 'Diğer canlı işler',
    studioEyebrow: `Stüdyo · ${studio.location}`,
    studioTitle: 'Net kapsam.<br>Çalışan teslim.',
    studioLede: `Osware, ${studio.founded}’da ${studio.location}’de kurulmuş bir web ve IT stüdyosudur. İşi alır, kapsamını keser, üretir ve çalışan halde bırakır.`,
    takesEyebrow: 'Ne alırız',
    takesNote: 'Web, IT ve arayüz. Birlikte ya da ayrı yürür; teslim tektir.',
    lineEyebrow: 'Hat',
    lineTitle: 'Nasıl yürür',
    limitEyebrow: 'Sınır',
    limitText:
      'Portföyde logo duvarı yok. Gösterdiğimiz iş, ürettiğimiz müşteri siteleri ile kendi ürünümüz Kiosos’tur. Hepsi canlıdadır. Uymayan işi baştan söyler, almayız.',
    contactEyebrow: `İletişim · ${studio.location}`,
    contactTitle: 'İşi doğrudan konuşun.',
    contactLede: `Web veya IT işi için yazın. ${studio.location} — e-posta, telefon ve WhatsApp. Form yok; mesaj doğrudan stüdyoya düşer. Uygunsa keşif, değilse net bir hayır.`,
    email: 'E-posta',
    write: 'Yaz',
    phone: 'Telefon',
    call: 'Ara',
    from: 'Nereden',
    foundedLine: `Kuruluş ${studio.founded}`,
    inquiryTitle: 'İlk mesajda bunlar yeter.',
    studioAside: 'Stüdyo',
    inquiryNote: 'Aracı yok. İlk yazıda kapsam yeter. Uygun iş keşfe alınır.',
    writeEmail: 'E-posta yaz',
    notFoundTitle: 'Bu adres yok.',
    notFoundLede: 'Bu sayfa Osware’de yok. İşlere dönün.',
    notFoundCta: 'İşler',
  },
  en: {
    nav: [
      { id: 'work', label: 'Work' },
      { id: 'studio', label: 'Studio' },
      { id: 'contact', label: 'Contact' },
    ],
    langLabel: 'Language',
    logoLabel: 'Osware, home',
    skip: 'Skip to content',
    mainNav: 'Main',
    mobileNav: 'Mobile',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    menuDialog: 'Menu',
    cta: 'Start a project',
    mailSubject: 'Osware — web / IT work',
    whatsappText: 'Hello Osware, I would like to talk about a web / IT job.',
    newTab: 'opens in a new tab',
    whatsappFab: 'Message on WhatsApp (opens in a new tab)',
    footerEyebrow: 'Next job',
    footerTitle: 'If the scope is clear, we start.',
    footerText: 'Web, IT, or identity. We cut the scope together. If it does not fit, we say that too.',
    footerBlurb: `Osware — a web development and IT studio in ${studio.location}. Founded ${studio.founded}.`,
    pagesLabel: 'Pages',
    workLabel: 'Work',
    viewWork: 'View',
    and: 'and',
    oxford: true,
    homeEyebrow: `Web and IT studio · ${studio.location}`,
    homeTitle: `Osware.<br>Web and IT<br>in ${studio.location}.`,
    homeLede:
      'We deliver the web and IT work. Company site, product interface, identity, and infrastructure stay on the same line. The scope is written, the system goes live, the handover is finished. Live work:',
    seeWork: 'See the work',
    field: 'Field',
    fieldValue: 'Web + IT',
    locationLabel: 'Location',
    foundedLabel: 'Founded',
    panelKicker: `Founded ${studio.founded}`,
    panelLead: 'Web, IT, and interface. The same studio, the same delivery.',
    capabilitiesLabel: 'Capabilities',
    servicesEyebrow: 'Services',
    servicesTitle: 'Web, IT, interface',
    selectedEyebrow: 'Selected work',
    selectedTitle: 'Live work',
    selectedNote:
      'Client sites first: Arin Çiçek and NEV MOTO KLİNİK. Our own product, Kiosos, is on the same list. All of them are live.',
    allWork: 'All work',
    approachEyebrow: 'Approach',
    approachTitle: 'Decision and production on the same line.',
    approachText: `No middle layer. Scope, design, software, and IT come together in one delivery. The work runs from ${studio.location}; it closes with the live system, access, and handover.`,
    seeServices: 'See the services',
    workEyebrow: 'Portfolio',
    workTitle: 'Live work.',
    workLede:
      'No fake catalogue. Every job we show is live and can be opened. Client sites come first; our product Kiosos is in the same portfolio.',
    status: 'Status',
    type: 'Type',
    scope: 'Scope',
    delivery: 'Delivery',
    openSite: 'Open the site',
    moreEyebrow: 'More',
    moreTitle: 'Other live work',
    studioEyebrow: `Studio · ${studio.location}`,
    studioTitle: 'Clear scope.<br>A working delivery.',
    studioLede: `Osware is a web and IT studio founded in ${studio.location} in ${studio.founded}. It takes the job, cuts the scope, builds it, and leaves it working.`,
    takesEyebrow: 'What we take',
    takesNote: 'Web, IT, and interface. Together or apart; the delivery is one.',
    lineEyebrow: 'Process',
    lineTitle: 'How it runs',
    limitEyebrow: 'Limit',
    limitText:
      'There is no logo wall in the portfolio. The work we show is the client sites we built and our own product, Kiosos. All of it is live. If a job does not fit, we say so at the start and do not take it.',
    contactEyebrow: `Contact · ${studio.location}`,
    contactTitle: 'Talk about the job directly.',
    contactLede: `Write about a web or IT job. ${studio.location} — email, phone, and WhatsApp. There is no form; the message goes straight to the studio. A fit goes to discovery. If not, a clear no.`,
    email: 'Email',
    write: 'Write',
    phone: 'Phone',
    call: 'Call',
    from: 'Where',
    foundedLine: `Founded ${studio.founded}`,
    inquiryTitle: 'This is enough in the first message.',
    studioAside: 'Studio',
    inquiryNote: 'No intermediary. Scope is enough in the first note. A fitting job goes to discovery.',
    writeEmail: 'Write an email',
    notFoundTitle: 'This address does not exist.',
    notFoundLede: 'This page is not on Osware. Go back to the work.',
    notFoundCta: 'Work',
  },
}

const seo = {
  tr: {
    home: {
      title: `Osware — ${studio.location}’de web ve IT`,
      description: `Osware, ${studio.location} merkezli web ve IT stüdyosu. Kurumsal site, ürün arayüzü, kimlik ve altyapı. Canlı iş: Arin Çiçek, NEV MOTO KLİNİK ve Kiosos.`,
      socialDescription: `${studio.location}’de web ve IT stüdyosu. Canlı iş: Arin Çiçek, NEV MOTO KLİNİK, Kiosos.`,
    },
    work: {
      title: 'İşler — Osware',
      description:
        'Osware işleri: müşteri siteleri Arin Çiçek ve NEV MOTO KLİNİK, kiosk yazılımı Kiosos. Sahte katalog yok; hepsi yayında.',
    },
    studio: {
      title: `Hizmetler — Osware ${studio.location}`,
      description: `Osware, ${studio.location}’de web, arayüz ve IT stüdyosu. ${studio.founded}’da kuruldu. Keşiften teslime aynı hat; kapsam, üretim ve devir birlikte yürür.`,
    },
    contact: {
      title: `İletişim — Osware ${studio.location}`,
      description: `Osware ile web veya IT işini konuşun. ${studio.location} — ${studio.email}, telefon ve WhatsApp. Mesaj doğrudan stüdyoya düşer.`,
    },
    notfound: {
      title: 'Bulunamadı — Osware',
      description: 'Bu sayfa Osware’de yok. İşlere dönün.',
    },
    jsonLd: `${studio.location} merkezli web geliştirme ve IT stüdyosu.`,
  },
  en: {
    home: {
      title: `Osware — web and IT in ${studio.location}`,
      description: `Osware is a web and IT studio based in ${studio.location}. Company sites, product interfaces, identity, and infrastructure. Live work: Arin Çiçek, NEV MOTO KLİNİK, and Kiosos.`,
      socialDescription: `Web and IT studio in ${studio.location}. Live work: Arin Çiçek, NEV MOTO KLİNİK, Kiosos.`,
    },
    work: {
      title: 'Work — Osware',
      description:
        'Osware work: client sites Arin Çiçek and NEV MOTO KLİNİK, and the kiosk software Kiosos. No fake catalogue; all of it is live.',
    },
    studio: {
      title: `Studio — Osware ${studio.location}`,
      description: `Osware is a web, interface, and IT studio in ${studio.location}. Founded in ${studio.founded}. One line from discovery to handover; scope, production, and transfer move together.`,
    },
    contact: {
      title: `Contact — Osware ${studio.location}`,
      description: `Talk to Osware about web or IT work. ${studio.location} — ${studio.email}, phone, and WhatsApp. The message goes straight to the studio.`,
    },
    notfound: {
      title: 'Not found — Osware',
      description: 'This page is not on Osware. Go back to the work.',
    },
    jsonLd: `Web development and IT studio based in ${studio.location}.`,
  },
}

const cache = {}

export function getBundle(locale) {
  const lang = locale === 'en' ? 'en' : 'tr'
  if (!cache[lang]) cache[lang] = buildBundle(lang)
  return cache[lang]
}

function buildBundle(lang) {
  return {
    locale: lang,
    studio: { ...studio, tagline: lang === 'en' ? 'We finish the web and IT work.' : 'Web ve IT işini bitiririz.' },
    nav: ui[lang].nav,
    services: services[lang].map((item, index) => ({
      code: String(index + 1).padStart(2, '0'),
      ...item,
    })),
    capabilities: capabilities[lang],
    workLines: workLines[lang],
    projects: projects.map((project) => ({
      slug: project.slug,
      line: project.line,
      title: project.title,
      image: project.image,
      url: project.url,
      ...project[lang],
    })),
    values: values[lang],
    steps: steps[lang],
    inquiry: inquiry[lang],
    ui: ui[lang],
    seo: seo[lang],
  }
}
