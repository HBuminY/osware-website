export const studio = {
  name: 'osware',
  email: 'contact@osware.org',
  phone: '+90 551 043 99 79',
  phoneHref: 'tel:+905510439979',
  whatsappHref: 'https://wa.me/905510439979',
  location: 'Nevşehir',
  founded: '2026',
  tagline: 'Web ve IT işini bitiririz.',
}

export const nav = [
  { href: '/isler', label: 'İşler' },
  { href: '/operasyon', label: 'Hizmetler' },
  { href: '/iletisim', label: 'İletişim' },
]

export const services = [
  {
    code: '01',
    title: 'Web geliştirme',
    lead: 'Kurumsal site, yönetim paneli, ürün arayüzü. Tasarım ve kod aynı hatta yürür; teslim, yayında duran bir sistemdir.',
    detail:
      'Sade bir kurumsal sayfa da olur, ürünün kendi ekranı da. İkisi de aynı soruyla başlar: ne yayında kalacak, kim devralacak?',
  },
  {
    code: '02',
    title: 'IT ve altyapı',
    lead: 'Kurulum, güvenlik, entegrasyon, süreklilik. Ekranda görünmeyen katman da işin parçasıdır — erişim, yedek, devir dahil.',
    detail:
      'Site açıldıktan sonra kim sahip, nerede duruyor, bozulunca kim bakıyor. Bunu teslimde bırakırız; dokümantasyon da orada durur.',
  },
  {
    code: '03',
    title: 'Arayüz ve kimlik',
    lead: 'Ürünün duruşu tesadüf değildir. Tipografi, düzen, görsel sistem — ekranda ve belgede aynı disiplin.',
    detail:
      'Logo tek başına kimlik değildir. Sayfa, panel ve işaret aynı dili konuşur. Rastgele kalan bir yüzey bırakmayız.',
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
]

export const projects = [
  {
    slug: 'arincicek',
    line: 'client',
    title: 'Arin Çiçek',
    category: 'Kurumsal web',
    tag: 'Canlı',
    context: 'Müşteri sitesi',
    excerpt: 'Nevşehir’de dövme stüdyosu ve müzik için Türkçe tanıtım sitesi. Randevu Instagram DM ile.',
    summary:
      'Arin Çiçek, Nevşehir’de dövme stüdyosu için tanıtım sitesi. Dövme ve müzik aynı sayfada; randevu @arintattoo7 hesabına Instagram mesajı ile açılır. Osware üretimi.',
    description:
      'Nevşehir’de Arin Çiçek için Türkçe tanıtım sitesi. Dövme çalışmaları ve müzik bölümü aynı sayfada durur. Randevu form değil, Instagram DM (@arintattoo7) ile açılır. Müzik, YouTube kanalı @ArinOfficiall üzerinden durur. Osware’in ürettiği, yayında olan müşteri sitesi.',
    scope:
      'Müşteri sitesi. Yayındaki isim Arin Çiçek. Adres oswaretr.github.io/arincicek.',
    points: [
      'Nevşehir’de dövme stüdyosu tanıtımı. Randevu Instagram DM ile; hesap @arintattoo7.',
      'Müzik bölümü aynı sitede. YouTube kanalı @ArinOfficiall.',
      'Türkçe arayüz. oswaretr.github.io/arincicek adresinde yayında.',
    ],
    services: ['Kurumsal web'],
    image: '/isler/arincicek.png',
    alt: 'Arin Çiçek ana sayfası ekran görüntüsü',
    url: 'https://oswaretr.github.io/arincicek/',
  },
  {
    slug: 'nevmoto',
    line: 'client',
    title: 'NEV MOTO KLİNİK',
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
    image: '/isler/nevmoto.png',
    alt: 'NEV MOTO KLİNİK ana sayfası ekran görüntüsü',
    url: 'https://hbuminy.github.io/nevmoto/',
  },
  {
    slug: 'kiosos',
    line: 'product',
    title: 'Kiosos',
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
    image: '/isler/kiosos.png',
    alt: 'Kiosos ana sayfası ekran görüntüsü',
    url: 'https://kiosos.com',
  },
]

export const values = [
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
    text: 'Tasarım ve geliştirme paralel yürür. Haftalık görünür çıktı vardır. İş stüdyoda kalır, ara katmana devredilmez.',
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
