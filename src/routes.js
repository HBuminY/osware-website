// Locale-prefixed routes.
// Turkish keeps the existing segments: /tr, /tr/isler, /tr/operasyon, /tr/iletisim.
// English uses natural segments: /en, /en/work, /en/studio, /en/contact.
// Bare legacy paths redirect with replace: Turkish segments to /tr, English aliases to /en.

export const LOCALES = ['tr', 'en']
export const DEFAULT_LOCALE = 'tr'

const PAGES = {
  work: { tr: 'isler', en: 'work' },
  studio: { tr: 'operasyon', en: 'studio' },
  contact: { tr: 'iletisim', en: 'contact' },
}

const SEGMENT_PAGE = {
  team: 'studio',
  ekip: 'studio',
}

for (const [page, byLocale] of Object.entries(PAGES)) {
  for (const segment of Object.values(byLocale)) SEGMENT_PAGE[segment] = page
}

export function normalizePath(path) {
  if (!path) return '/'
  let value = path.startsWith('/') ? path : `/${path}`
  value = value.replace(/\/index\.html$/i, '')
  if (value.length > 1) value = value.replace(/\/+$/, '')
  return value || '/'
}

export function pathFor(locale, name, slug) {
  const lang = locale === 'en' ? 'en' : 'tr'
  if (name === 'home') return `/${lang}`
  const page = name === 'project' ? 'work' : name
  const segment = PAGES[page]?.[lang]
  if (!segment) return `/${lang}`
  if (name === 'project') return `/${lang}/${segment}/${slug}`
  return `/${lang}/${segment}`
}

export function matchRoute(path) {
  const normalized = normalizePath(path)
  const parts = normalized.split('/').filter(Boolean)
  if (parts.length === 0) return { name: 'redirect', to: pathFor('tr', 'home') }

  const [head, ...rest] = parts
  if (head === 'tr' || head === 'en') return matchLocalized(head, rest, normalized)
  return matchLegacy(parts)
}

export function switchPath(pathname, locale) {
  const route = matchRoute(pathname)
  if (route.name === 'redirect') return switchPath(route.to, locale)
  if (route.name === 'notfound') return pathFor(locale, 'home')
  return pathFor(locale, route.name, route.slug)
}

function matchLocalized(locale, rest, normalized) {
  if (rest.length === 0) return { name: 'home', locale, path: normalized }
  if (rest.length > 2) return { name: 'notfound', locale, path: normalized }

  const page = SEGMENT_PAGE[rest[0]]
  if (!page) return { name: 'notfound', locale, path: normalized }
  if (rest.length === 2 && page !== 'work') return { name: 'notfound', locale, path: normalized }

  const name = rest.length === 2 ? 'project' : page
  const slug = rest.length === 2 ? rest[1] : undefined
  const canonical = pathFor(locale, name, slug)
  if (canonical !== normalized) return { name: 'redirect', to: canonical, locale }
  return { name, locale, slug, path: normalized }
}

function matchLegacy(parts) {
  if (parts.length > 2) return { name: 'notfound', locale: DEFAULT_LOCALE, path: `/${parts.join('/')}` }
  const page = SEGMENT_PAGE[parts[0]]
  if (!page) return { name: 'notfound', locale: DEFAULT_LOCALE, path: `/${parts.join('/')}` }
  if (parts.length === 2 && page !== 'work') {
    return { name: 'notfound', locale: DEFAULT_LOCALE, path: `/${parts.join('/')}` }
  }
  const locale = legacyLocale(parts[0])
  const name = parts.length === 2 ? 'project' : page
  return { name: 'redirect', to: pathFor(locale, name, parts[1]), locale }
}

function legacyLocale(segment) {
  if (segment === 'ekip') return 'tr'
  for (const byLocale of Object.values(PAGES)) {
    if (byLocale.tr === segment) return 'tr'
  }
  return 'en'
}
