// Route titles and descriptions for the public site. Wording matches the
// page ledes. GitHub Pages serves each route as a directory, so the canonical
// URL has a trailing slash — `/isler` 301s to `/isler/`.
import { projects, studio } from './content.js'

export const siteOrigin = 'https://osware.org'

const brandImage = {
  image: `${siteOrigin}/osware.png`,
  imageAlt: 'Osware',
  imageWidth: 272,
  imageHeight: 204,
  card: 'summary',
}

// Portfolio screenshots in public/isler. The build checks the files match.
const shotImage = {
  imageWidth: 1440,
  imageHeight: 900,
  card: 'summary_large_image',
}

export function canonicalUrl(path) {
  if (!path || path === '/') return `${siteOrigin}/`
  const withSlash = path.startsWith('/') ? path : `/${path}`
  return `${siteOrigin}${withSlash.replace(/\/+$/, '')}/`
}

function page(entry) {
  return {
    ...brandImage,
    ...entry,
    socialDescription: entry.socialDescription ?? entry.description,
    url: canonicalUrl(entry.path),
  }
}

const pages = [
  page({
    path: '/',
    name: 'home',
    title: `Osware — ${studio.location}’de web ve IT`,
    description: `Osware, ${studio.location} merkezli web ve IT. Bumin, Aleyna, Seda — üç kişi, tek teslim. Optiviser ve Optiviser Trip çıkışlı. Canlı ürün: Kiosos.`,
    socialDescription: `${studio.location}’de web ve IT. Bumin, Aleyna, Seda. Optiviser çıkışlı üç kişi. Canlı iş: Optiviser, Optiviser Trip, Kiosos.`,
  }),
  page({
    path: '/isler',
    name: 'work',
    title: 'İşler — Osware',
    description:
      'Osware işleri: Optiviser ve Optiviser Trip’te ürettiğimiz canlı ürünler ve kendi kiosk yazılımımız Kiosos. Sahte katalog yok; üçü de yayında.',
  }),
  page({
    path: '/operasyon',
    name: 'studio',
    title: `Operasyon — Osware ${studio.location}`,
    description: `Osware operasyonu ${studio.location}’de. ${studio.founded}’da kurulan ekip; web, arayüz ve IT işini keşiften teslime aynı üç kişi kapatır. Optiviser çıkışlıyız.`,
  }),
  page({
    path: '/ekip',
    name: 'team',
    title: `Ekip — Osware ${studio.location}`,
    description: `Osware ekibi ${studio.location}’de: Bumin yazılım ve IT, Aleyna grafik tasarım, Seda frontend. Üç kişi, tek teslim. Optiviser ve Optiviser Trip çıkışlıyız.`,
  }),
  page({
    path: '/iletisim',
    name: 'contact',
    title: `İletişim — Osware ${studio.location}`,
    description: `Osware ile web veya IT işini konuşun. ${studio.location} — ${studio.email}, telefon ve WhatsApp. Mesaj Bumin, Aleyna ve Seda’ya düşer.`,
  }),
]

function projectMeta(project) {
  return page({
    path: `/isler/${project.slug}`,
    name: 'project',
    slug: project.slug,
    title: `${project.title} — Osware`,
    description: project.summary,
    image: `${siteOrigin}${project.image}`,
    imageAlt: project.alt,
    imageWidth: shotImage.imageWidth,
    imageHeight: shotImage.imageHeight,
    card: shotImage.card,
  })
}

export function indexableRoutes() {
  return [...pages, ...projects.map(projectMeta)]
}

export function metaFor(route, pathname = '/') {
  if (route?.name === 'project') {
    const project = projects.find((item) => item.slug === route.slug)
    if (project) return projectMeta(project)
  } else if (route?.name) {
    const match = pages.find((item) => item.name === route.name)
    if (match) return match
  }
  return page({
    path: pathname || '/',
    name: 'notfound',
    title: 'Bulunamadı — Osware',
    description: 'Bu sayfa Osware’de yok. İşlere dönün.',
  })
}

function escapeText(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function escapeAttr(value) {
  return escapeText(value).replaceAll('"', '&quot;')
}

export function jsonLdText(meta) {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${siteOrigin}/#studio`,
        name: 'Osware',
        url: `${siteOrigin}/`,
        email: studio.email,
        telephone: '+905510439979',
        areaServed: {
          '@type': 'City',
          name: studio.location,
        },
        description: `${studio.location} merkezli web geliştirme ve IT operasyonu.`,
        foundingDate: studio.founded,
        logo: `${siteOrigin}/osware.png`,
        knowsLanguage: 'tr',
      },
      {
        '@type': 'WebPage',
        '@id': meta.url,
        url: meta.url,
        name: meta.title,
        description: meta.description,
        isPartOf: { '@id': `${siteOrigin}/#studio` },
        inLanguage: 'tr-TR',
      },
    ],
  }
  return JSON.stringify(graph).replaceAll('<', '\\u003c')
}

export function renderHeadTags(meta) {
  const social = meta.socialDescription
  return [
    `<title>${escapeText(meta.title)}</title>`,
    `<meta name="description" content="${escapeAttr(meta.description)}" />`,
    `<link rel="canonical" href="${escapeAttr(meta.url)}" />`,
    `<meta property="og:title" content="${escapeAttr(meta.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(social)}" />`,
    `<meta property="og:url" content="${escapeAttr(meta.url)}" />`,
    `<meta property="og:image" content="${escapeAttr(meta.image)}" />`,
    `<meta property="og:image:alt" content="${escapeAttr(meta.imageAlt)}" />`,
    `<meta property="og:image:width" content="${meta.imageWidth}" />`,
    `<meta property="og:image:height" content="${meta.imageHeight}" />`,
    `<meta name="twitter:card" content="${escapeAttr(meta.card)}" />`,
    `<meta name="twitter:title" content="${escapeAttr(meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(social)}" />`,
    `<meta name="twitter:image" content="${escapeAttr(meta.image)}" />`,
    `<meta name="twitter:image:alt" content="${escapeAttr(meta.imageAlt)}" />`,
    `<script type="application/ld+json">${jsonLdText(meta)}</script>`,
  ].join('\n    ')
}

export function seoBlock(meta) {
  return `<!-- seo:start -->\n    ${renderHeadTags(meta)}\n    <!-- seo:end -->`
}

export function renderSitemap(entries) {
  const urls = entries
    .map((entry) => `  <url>\n    <loc>${escapeText(entry.url)}</loc>\n  </url>`)
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}
