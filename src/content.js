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
    { name: 'Trip Optiviser', href: 'https://trip.optiviser.com' },
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
    lead: 'Kurumsal siteler, paneller, ürün arayüzleri. Tasarım ve kod aynı hatta yürür; teslim çalışan bir sistemdir.',
    owner: 'Seda + Bumin',
  },
  {
    code: '02',
    title: 'IT ve altyapı',
    lead: 'Kurulum, güvenlik, entegrasyon, süreklilik. Ekranda görünmeyen kısım da işin parçasıdır — biz onu da kapatırız.',
    owner: 'Bumin',
  },
  {
    code: '03',
    title: 'Arayüz ve kimlik',
    lead: 'Ürünün duruşu tesadüf değildir. Tipografi, düzen, görsel sistem — ekranda ve belgede aynı disiplin.',
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

export const projects = [
  {
    slug: 'optiviser',
    title: 'Optiviser',
    category: 'Ürün',
    tag: 'Canlı',
    context: 'Optiviser bünyesinde',
    excerpt: 'Yapay zeka destekli elektronik alışveriş asistanı.',
    description:
      'Optiviser, bütçe ve ihtiyaca göre elektronik ürün öneren bir asistan. Bu iş Osware müşterisi değil — üçümüzün Optiviser kadrosundayken ürettiği, hâlâ yayında olan ürün. Site: optiviser.com.',
    services: ['Web', 'Ürün arayüzü', 'AI asistan'],
    image: '/isler/optiviser.png',
    alt: 'Optiviser ana sayfası ekran görüntüsü',
    url: 'https://optiviser.com',
  },
  {
    slug: 'optiviser-trip',
    title: 'Optiviser Trip',
    category: 'Ürün',
    tag: 'Canlı',
    context: 'Optiviser bünyesinde',
    excerpt: 'Yapay zeka destekli seyahat planlama asistanı.',
    description:
      'Optiviser Trip, kişiselleştirilmiş rota ve itinerary üreten bir seyahat asistanı. Bu da Osware müşterisi değil — Optiviser döneminde ürettiğimiz, hâlâ yayında olan ikinci ürün. Site: trip.optiviser.com.',
    services: ['Web', 'Ürün arayüzü', 'AI asistan'],
    image: '/isler/optiviser-trip.png',
    alt: 'Optiviser Trip ana sayfası ekran görüntüsü',
    url: 'https://trip.optiviser.com',
  },
  {
    slug: 'kiosos',
    title: 'Kiosos',
    category: 'Ürün',
    tag: 'Canlı',
    context: 'Osware üretimi',
    excerpt: 'Kafe ve restoranlar için kiosk yazılımı, yerinde kurulum ve mobil yönetim.',
    description:
      'Kiosos; salondaki kiosk, yazılım katmanı ve işletmecinin cebindeki uygulama. Menü, kampanya ve müsaitlik tek yerden yönetilir. Osware’in ürettiği, hâlâ yayında olan ürün. Site: kiosos.com.',
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
    bio: 'Kapsamı keser, yığını seçer, sistemi ayağa kaldırır. Kod ve IT aynı masada — ara katman yok.',
  },
  {
    id: 'aleyna',
    name: 'Aleyna',
    role: 'Grafik tasarım',
    tone: 'steel',
    focus: ['Kimlik', 'Düzen', 'Görsel sistem'],
    bio: 'Ürünün duruşundan sorumlu. Tipografi, yüzey, işaret — ekranda rastgele görünen hiçbir şey bırakmaz.',
  },
  {
    id: 'seda',
    name: 'Seda',
    role: 'Frontend geliştirme',
    tone: 'ink',
    focus: ['Arayüz', 'Performans', 'Üretim'],
    bio: 'Tasarımı çalışan arayüze çevirir. Durumlar, hız, tarayıcı gerçeği. Piksel konuşması burada biter, kod başlar.',
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
    text: 'İhtiyacı ve kısıtı yazarız. Bu iş bize ait değilse onu da söyleriz.',
  },
  {
    title: 'Mimari',
    text: 'Yığın, yapı, teslim planı. Koddan önce karar. Sürpriz üretimde olmaz.',
  },
  {
    title: 'Üretim',
    text: 'Tasarım ve geliştirme paralel. Haftalık görünür çıktı. Ara katman yok.',
  },
  {
    title: 'Teslim',
    text: 'Canlıya alınır, devredilir, izlenir. Sonra ya kapanır ya bakım hattına girer.',
  },
]

