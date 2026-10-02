// Per-locale titles, canonicals, and hreflang. GitHub Pages serves each route
// as a directory, so the canonical URL has a trailing slash — `/tr/isler`
// resolves to `/tr/isler/`. x-default points at Turkish.
import { getBundle, studio } from './content.js'
import { DEFAULT_LOCALE, LOCALES, pathFor } from './routes.js'

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

const PAGE_NAMES = ['home', 'work', 'studio', 'contact']

export function canonicalUrl(path) {
  if (!path || path === '/') return `${siteOrigin}/`
  const withSlash = path.startsWith('/') ? path : `/${path}`
  return `${siteOrigin}${withSlash.replace(/\/+$/, '')}/`
}

function page(entry) {
  const locale = entry.locale === 'en' ? 'en' : 'tr'
  return {
    ...brandImage,
    ...entry,
    locale,
    socialDescription: entry.socialDescription ?? entry.description,
    url: canonicalUrl(entry.path),
    htmlLang: locale === 'en' ? 'en' : 'tr',
    ogLocale: locale === 'en' ? 'en_US' : 'tr_TR',
    ogLocaleAlternate: locale === 'en' ? 'tr_TR' : 'en_US',
    inLanguage: locale === 'en' ? 'en' : 'tr-TR',
  }
}

function alternatesFor(name, slug) {
  const urls = {}
  for (const locale of LOCALES) urls[locale] = canonicalUrl(pathFor(locale, name, slug))
  urls['x-default'] = urls[DEFAULT_LOCALE]
  return urls
}

function pageMeta(locale, name) {
  const bundle = getBundle(locale)
  const seo = bundle.seo[name]
  return page({
    path: pathFor(locale, name),
    locale,
    name,
    title: seo.title,
    description: seo.description,
    socialDescription: seo.socialDescription,
    alternates: alternatesFor(name),
    studioDescription: bundle.seo.jsonLd,
  })
}

function projectMeta(locale, project) {
  return page({
    path: pathFor(locale, 'project', project.slug),
    locale,
    name: 'project',
    slug: project.slug,
    title: `${project.title} — Osware`,
    description: project.summary,
    image: `${siteOrigin}${project.image}`,
    imageAlt: project.alt,
    imageWidth: shotImage.imageWidth,
    imageHeight: shotImage.imageHeight,
    card: shotImage.card,
    alternates: alternatesFor('project', project.slug),
    studioDescription: getBundle(locale).seo.jsonLd,
  })
}

export function indexableRoutes() {
  const entries = []
  for (const locale of LOCALES) {
    for (const name of PAGE_NAMES) entries.push(pageMeta(locale, name))
    for (const project of getBundle(locale).projects) entries.push(projectMeta(locale, project))
  }
  return entries
}

export function metaFor(route, pathname = '/') {
  const locale = route?.locale === 'en' ? 'en' : 'tr'
  if (route?.name === 'project') {
    const project = getBundle(locale).projects.find((item) => item.slug === route.slug)
    if (project) return projectMeta(locale, project)
  } else if (PAGE_NAMES.includes(route?.name)) {
    return pageMeta(locale, route.name)
  }
  const bundle = getBundle(locale)
  return page({
    path: pathname || '/',
    locale,
    name: 'notfound',
    title: bundle.seo.notfound.title,
    description: bundle.seo.notfound.description,
    alternates: null,
    studioDescription: bundle.seo.jsonLd,
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
  const locale = meta.locale === 'en' ? 'en' : 'tr'
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${siteOrigin}/#studio`,
        name: 'Osware',
        url: canonicalUrl(pathFor(locale, 'home')),
        email: studio.email,
        telephone: '+905510439979',
        areaServed: {
          '@type': 'City',
          name: studio.location,
        },
        description: meta.studioDescription,
        foundingDate: studio.founded,
        logo: `${siteOrigin}/osware.png`,
        knowsLanguage: ['tr', 'en'],
      },
      {
        '@type': 'WebPage',
        '@id': meta.url,
        url: meta.url,
        name: meta.title,
        description: meta.description,
        isPartOf: { '@id': `${siteOrigin}/#studio` },
        inLanguage: meta.inLanguage,
      },
    ],
  }
  return JSON.stringify(graph).replaceAll('<', '\\u003c')
}

export function renderHeadTags(meta) {
  const social = meta.socialDescription
  const alternates = meta.alternates
    ? ['tr', 'en', 'x-default'].map(
        (lang) =>
          `<link rel="alternate" hreflang="${lang}" href="${escapeAttr(meta.alternates[lang])}" />`,
      )
    : []
  return [
    `<title>${escapeText(meta.title)}</title>`,
    `<meta name="description" content="${escapeAttr(meta.description)}" />`,
    `<link rel="canonical" href="${escapeAttr(meta.url)}" />`,
    ...alternates,
    `<meta property="og:locale" content="${escapeAttr(meta.ogLocale)}" />`,
    `<meta property="og:locale:alternate" content="${escapeAttr(meta.ogLocaleAlternate)}" />`,
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
    .map((entry) => {
      const links = ['tr', 'en', 'x-default']
        .map(
          (lang) =>
            `    <xhtml:link rel="alternate" hreflang="${lang}" href="${escapeText(entry.alternates[lang])}" />`,
        )
        .join('\n')
      return `  <url>\n    <loc>${escapeText(entry.url)}</loc>\n${links}\n  </url>`
    })
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`
}
