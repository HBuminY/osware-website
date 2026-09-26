export const studio = {
  name: 'osware',
  email: 'contact@osware.org',
  phone: '+90 551 043 99 79',
  phoneHref: 'tel:+905510439979',
  whatsappHref: 'https://wa.me/905510439979',
  location: 'Nevşehir',
  founded: '2026',
  tagline: 'Web ve IT işini bitiririz.',
  previous: [
    { name: 'Optiviser', href: 'https://optiviser.com' },
    { name: 'Optiviser Trip', href: 'https://trip.optiviser.com' },
  ],
}

export const nav = [
  { href: '/isler', label: 'İşler' },
  { href: '/operasyon', label: 'Operasyon' },
  { href: '/ekip', label: 'Ekip' },
  { href: '/iletisim', label: 'İletişim' },
]

export const services = [
  {
    code: '01',
    title: 'Web geliştirme',
    lead: 'Kurumsal site, yönetim paneli, ürün arayüzü. Tasarım ve kod aynı hatta yürür; teslim, yayında duran bir sistemdir.',
    detail:
      'Sade bir kurumsal sayfa da olur, ürünün kendi ekranı da. İkisi de aynı soruyla başlar: ne yayında kalacak, kim devralacak?',
    owner: 'Seda + Bumin',
  },
  {
    code: '02',
    title: 'IT ve altyapı',
    lead: 'Kurulum, güvenlik, entegrasyon, süreklilik. Ekranda görünmeyen katman da işin parçasıdır — erişim, yedek, devir dahil.',
    detail:
      'Site açıldıktan sonra kim sahip, nerede duruyor, bozulunca kim bakıyor. Bunu teslimde bırakırız; dokümantasyon da orada durur.',
    owner: 'Bumin',
  },
  {
    code: '03',
    title: 'Arayüz ve kimlik',
    lead: 'Ürünün duruşu tesadüf değildir. Tipografi, düzen, görsel sistem — ekranda ve belgede aynı disiplin.',
    detail:
      'Logo tek başına kimlik değildir. Sayfa, panel ve işaret aynı dili konuşur. Rastgele kalan bir yüzey bırakmayız.',
    owner: 'Aleyna',
  },
]

export const capabilities = [
  'Kurumsal web',
  'Ürün arayüzü',
  'Yönetim paneli',
  'IT kurulumu',
  'Entegrasyon',
  'Güvenlik',
  'Kimlik sistemi',
  'Frontend',
]

export const workLines = [
  {
    id: 'alumni',
    eyebrow: 'Önceki kadro',
    title: 'Optiviser döneminde',
    text: 'Bu işler Osware müşterisi değil. Üçümüz Optiviser kadrosundayken ürettik; ikisi de hâlâ yayında.',
  },
  {
    id: 'own',
    eyebrow: 'Kendi hattımız',
    title: 'Osware üretimi',
    text: 'Kiosos, Osware’in ürettiği kiosk yazılımı. Kafe ve restoran için yerinde kurulum ve mobil yönetimle birlikte yayında.',
  },
]

export const projects = [
  {
    slug: 'optiviser',
    line: 'alumni',
    title: 'Optiviser',
    category: 'Ürün',
    tag: 'Canlı',
    context: 'Optiviser bünyesinde',
    excerpt: 'Bütçe ve ihtiyaca göre elektronik ürün öneren yapay zeka asistanı.',
    summary:
      'Optiviser, elektronik ürün öneren yapay zeka asistanı. Osware müşterisi değil — Optiviser kadrosundayken ürettiğimiz, hâlâ yayında olan ürün.',
    description:
      'Optiviser, elektronik alışveriş için bir asistan. Bütçe ve ihtiyaca göre telefon, dizüstü ve benzeri ürün önerir; karşılaştırmayı kullanıcının yerine tarar. Bu iş Osware müşterisi değil — üçümüzün Optiviser kadrosundayken ürettiği, hâlâ yayında olan ürün.',
    scope:
      'Osware müşterisi değil. Üçümüz bu ürünü Optiviser kadrosundayken ürettik. Müşteri listesi yok; ürün optiviser.com adresinde duruyor.',
    points: [
      'Bütçe ve ihtiyaca göre elektronik ürün önerir: telefon, dizüstü ve benzeri cihazlar.',
      'Tercihi okuyup karşılaştırmayı kısaltır; çıkan şey kişiselleştirilmiş bir öneridir.',
      'optiviser.com adresinde yayında.',
    ],
    services: ['Web', 'Ürün arayüzü', 'AI asistan'],
    image: '/isler/optiviser.png',
    alt: 'Optiviser ana sayfası ekran görüntüsü',
    url: 'https://optiviser.com',
  },
  {
    slug: 'optiviser-trip',
    line: 'alumni',
    title: 'Optiviser Trip',
    category: 'Ürün',
    tag: 'Canlı',
    context: 'Optiviser bünyesinde',
    excerpt: 'Kişisel rota ve günlük plan üreten seyahat asistanı.',
    summary:
      'Optiviser Trip, kişisel rota ve günlük plan üreten seyahat asistanı. Osware müşterisi değil — Optiviser döneminde ürettiğimiz, hâlâ yayında olan ürün.',
    description:
      'Optiviser Trip, seyahat planını kişisel rota ve günlük itinerary’ye çeviren bir asistan. Tercihe göre plan çıkarır; plan sonradan düzenlenir. Web’de yayında. Optiviser’in iOS ve Android uygulamaları da açık. Bu da Osware müşterisi değil — Optiviser döneminde ürettiğimiz ikinci ürün.',
    scope:
      'Osware müşterisi değil. Optiviser döneminde ürettiğimiz ikinci canlı ürün. Site trip.optiviser.com; mobil uygulamalar da Optiviser adına açık.',
    points: [
      'Gidilecek yer ve tercihe göre kişisel rota ile günlük plan üretir.',
      'Plan sonradan düzenlenebilir; ayrıntı tek yerde durur.',
      'trip.optiviser.com adresinde yayında. iOS ve Android uygulamaları da herkese açık.',
    ],
    services: ['Web', 'Ürün arayüzü', 'AI asistan'],
    image: '/isler/optiviser-trip.png',
    alt: 'Optiviser Trip ana sayfası ekran görüntüsü',
    url: 'https://trip.optiviser.com',
  },
  {
    slug: 'kiosos',
    line: 'own',
    title: 'Kiosos',
    category: 'Ürün',
    tag: 'Canlı',
    context: 'Osware üretimi',
    excerpt: 'Kafe ve restoranlar için kiosk yazılımı, yerinde kurulum ve mobil yönetim.',
    summary:
      'Kiosos, kafe ve restoranlar için kiosk yazılımı, yerinde kurulum ve mobil yönetim. Osware üretimi; kiosos.com adresinde yayında.',
    description:
      'Kiosos; salondaki kiosk, yazılım katmanı ve işletmecinin cebindeki uygulama. Menü, kampanya ve müsaitlik tek yerden yönetilir. Yazılım ile donanım birlikte gelir, kurulum yerinde yapılır. Osware’in ürettiği, hâlâ yayında olan ürün.',
    scope:
      'Osware’in kendi ürünü. Kafe ve restoran hattı: yazılım, yerinde kurulum, mobil yönetim. Kurulum sayısı veya müşteri adı yayınlamıyoruz; ürün kiosos.com adresinde.',
    points: [
      'Kafe ve restoran salonuna kiosk kurulur; sipariş ekranı mekânda durur.',
      'Menü, kampanya ve müsaitlik, işletmecinin mobil uygulamasından ünitelere gider.',
      'Yazılım, donanım ve yerinde kurulum aynı iş. kiosos.com adresinde yayında.',
    ],
    services: ['Web', 'Kiosk yazılımı', 'Mobil'],
    image: '/isler/kiosos.png',
    alt: 'Kiosos ana sayfası ekran görüntüsü',
    url: 'https://kiosos.com',
  },
]

export const team = [
  {
    id: 'bumin',
    name: 'Bumin',
    role: 'Yazılım ve IT',
    tone: 'charcoal',
    focus: ['Sistem', 'Altyapı', 'Teslim'],
    bio: 'Kapsamı keser, yığını seçer, sistemi ayağa kaldırır. Web ile IT aynı masada durur: kurulum, entegrasyon, erişim, yedek ve devir onun hattı. Ara katman yok.',
  },
  {
    id: 'aleyna',
    name: 'Aleyna',
    role: 'Grafik tasarım',
    tone: 'steel',
    focus: ['Kimlik', 'Düzen', 'Görsel sistem'],
    bio: 'Ürünün duruşundan sorumlu. Tipografi, yüzey ve işaret dilini kurar; ekranda rastgele kalan bir şey bırakmaz. Kimlik ile arayüz aynı görsel sistemde durur.',
  },
  {
    id: 'seda',
    name: 'Seda',
    role: 'Frontend geliştirme',
    tone: 'ink',
    focus: ['Arayüz', 'Performans', 'Üretim'],
    bio: 'Tasarımı çalışan arayüze çevirir. Kurumsal site, panel ve ürün ekranı üretimde onun elinden çıkar. Durumlar, hız ve tarayıcı gerçeği burada biter.',
  },
]

export const values = [
  {
    title: 'Kapsamı keseriz',
    text: 'Her isteği almayız. Ne yapılmayacağını da söyleriz. Net iş, şişkin işten iyidir.',
  },
  {
    title: 'Aynı hatta üretiriz',
    text: 'Tasarım, frontend ve IT üç ayrı ajans değildir. Üç kişi, tek teslim. El değiştirmez.',
  },
  {
    title: 'Çalışır halde bırakırız',
    text: 'Sunum değil, sistem. Devir, erişim, yedek, dokümantasyon — iş bitmiş sayılır ancak o zaman.',
  },
]

export const steps = [
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
    text: 'Tasarım ve geliştirme paralel yürür. Haftalık görünür çıktı vardır. İş üç kişide kalır, ara katmana devredilmez.',
  },
  {
    title: 'Teslim',
    text: 'Canlıya alınır, erişim devredilir, izlenir. Çalışan sistem, yedek ve devir tamamsa iş bitmiş sayılır. Sonra kapanır ya da bakım hattına girer.',
  },
]

export const inquiry = [
  'Ne lazım: site, panel, ürün arayüzü, IT ya da kimlik.',
  'Kim için: işletme, ürün ya da elinizdeki mevcut sistem.',
  'Varsa tarih ve durduğu yer — eski site, alan adı, kurulacak mekân.',
]
