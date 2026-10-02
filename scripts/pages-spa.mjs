// GitHub Pages has no rewrite rules. Netlify `_redirects` is ignored, and
// `404.html` is served with HTTP 404. Copy the SPA shell to each real route
// so a direct load returns 200 (Pages adds a trailing slash for the folder).
//
// Locale routes (/tr/... and /en/...) are the public copies and the sitemap.
// Bare legacy paths get the same shell, stamped with the locale page they
// redirect to, so an old URL still returns 200 before the client replace.
// The root shell is the Turkish home, because `/` replace-redirects to `/tr`.
//
// The same route list (src/seo.js, derived from src/content.js) is stamped
// into each copy's head and written to dist/sitemap.xml. Adding a project
// in content.js updates the router, the route shells, and the sitemap together.
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { getBundle } from '../src/content.js'
import { LOCALES, matchRoute, pathFor, switchPath } from '../src/routes.js'
import { indexableRoutes, renderSitemap, seoBlock, siteOrigin } from '../src/seo.js'

const dist = resolve('dist')
const index = resolve(dist, 'index.html')
const routes = indexableRoutes()

assertRoutes(routes)
assertShareImages(routes)
assertSourceHead(routes)

const shell = readFileSync(index, 'utf8')
const home = routes.find((entry) => entry.path === '/tr')
writeFileSync(index, stamp(shell, home))
copyFileSync(index, resolve(dist, '404.html'))

for (const entry of routes) {
  if (entry.path === '/') continue
  writeShell(entry.path, stamp(shell, entry))
}

for (const { path, meta } of legacyShells(routes)) writeShell(path, stamp(shell, meta))

writeFileSync(resolve(dist, 'sitemap.xml'), renderSitemap(routes))
assertRobots()
assertSitemapOmitsLegacy()

function writeShell(routePath, html) {
  const target = resolve(dist, routePath.replace(/^\//, ''), 'index.html')
  mkdirSync(dirname(target), { recursive: true })
  writeFileSync(target, html)
}

function legacyShells(entries) {
  const byPath = new Map(entries.map((entry) => [entry.path, entry]))
  const slugs = getBundle('tr').projects.map((project) => project.slug)
  const pairs = [
    ['/isler', '/tr/isler'],
    ['/operasyon', '/tr/operasyon'],
    ['/iletisim', '/tr/iletisim'],
    ['/ekip', '/tr/operasyon'],
    ['/work', '/en/work'],
    ['/studio', '/en/studio'],
    ['/team', '/en/studio'],
    ['/contact', '/en/contact'],
    ...slugs.flatMap((slug) => [
      [`/isler/${slug}`, `/tr/isler/${slug}`],
      [`/work/${slug}`, `/en/work/${slug}`],
    ]),
  ]
  return pairs.map(([path, target]) => {
    const meta = byPath.get(target)
    if (!meta) throw new Error(`legacy shell ${path} has no target ${target}`)
    return { path, meta }
  })
}

function stamp(html, meta) {
  const block = seoBlock(meta)
  const start = html.indexOf('<!-- seo:start -->')
  const end = html.indexOf('<!-- seo:end -->')
  if (start < 0 || end < 0 || end < start) {
    throw new Error('dist/index.html is missing seo markers')
  }
  const next = html.slice(0, start) + block + html.slice(end + '<!-- seo:end -->'.length)
  return next.replace(/<html lang="[^"]*">/, `<html lang="${meta.htmlLang}">`)
}

function assertSourceHead(entries) {
  const source = readFileSync(resolve('index.html'), 'utf8')
  const home = entries.find((entry) => entry.path === '/tr')
  if (!source.includes(seoBlock(home))) {
    throw new Error('index.html SEO block does not match src/seo.js')
  }
  if (!/<html lang="tr">/.test(source)) {
    throw new Error('index.html lang should stay tr; locale shells set lang at build')
  }
}

function assertRoutes(entries) {
  const paths = entries.map((entry) => entry.path)
  if (new Set(paths).size !== paths.length) {
    throw new Error('duplicate public routes in sitemap')
  }
  const slugs = getBundle('tr').projects.map((project) => project.slug)
  for (const locale of LOCALES) {
    for (const name of ['home', 'work', 'studio', 'contact']) {
      const path = pathFor(locale, name)
      if (!paths.includes(path)) throw new Error(`sitemap missing ${path}`)
    }
    for (const slug of slugs) {
      const path = pathFor(locale, 'project', slug)
      if (!paths.includes(path)) throw new Error(`sitemap missing project ${path}`)
    }
  }
  for (const entry of entries) {
    if (!entry.url.startsWith(`${siteOrigin}/`)) {
      throw new Error(`canonical URL is not absolute: ${entry.url}`)
    }
    if (entry.url !== `${siteOrigin}${entry.path}/` && !(entry.path === '/' && entry.url === `${siteOrigin}/`)) {
      throw new Error(`canonical does not match path ${entry.path}`)
    }
    if (!entry.alternates?.tr || !entry.alternates?.en || entry.alternates['x-default'] !== entry.alternates.tr) {
      throw new Error(`hreflang incomplete for ${entry.path}`)
    }
    if (entry.htmlLang !== entry.locale) throw new Error(`html lang mismatch for ${entry.path}`)
  }
  if (paths.includes('/') || paths.some((path) => !path.startsWith('/tr') && !path.startsWith('/en'))) {
    throw new Error('sitemap should list only locale routes')
  }
  assertRedirects()
}

function assertRedirects() {
  const cases = [
    ['/', '/tr'],
    ['/isler', '/tr/isler'],
    ['/isler/nevmoto', '/tr/isler/nevmoto'],
    ['/operasyon', '/tr/operasyon'],
    ['/iletisim', '/tr/iletisim'],
    ['/work', '/en/work'],
    ['/work/kiosos', '/en/work/kiosos'],
    ['/studio', '/en/studio'],
    ['/team', '/en/studio'],
    ['/ekip', '/tr/operasyon'],
    ['/contact', '/en/contact'],
    ['/en/isler', '/en/work'],
    ['/en/isler/nevmoto', '/en/work/nevmoto'],
    ['/tr/work', '/tr/isler'],
    ['/tr/studio', '/tr/operasyon'],
    ['/tr/contact', '/tr/iletisim'],
    ['/tr/team', '/tr/operasyon'],
    ['/en/operasyon', '/en/studio'],
    ['/en/iletisim', '/en/contact'],
    ['/en/ekip', '/en/studio'],
  ]
  for (const [from, to] of cases) {
    const route = matchRoute(from)
    if (route.name !== 'redirect' || route.to !== to) {
      throw new Error(`${from} should redirect to ${to}, got ${JSON.stringify(route)}`)
    }
  }
  const pairs = [
    ['/tr', '/en'],
    ['/tr/isler', '/en/work'],
    ['/tr/isler/nevmoto', '/en/work/nevmoto'],
    ['/tr/operasyon', '/en/studio'],
    ['/tr/iletisim', '/en/contact'],
  ]
  for (const [trPath, enPath] of pairs) {
    if (switchPath(trPath, 'en') !== enPath) throw new Error(`switch ${trPath} → en`)
    if (switchPath(enPath, 'tr') !== trPath) throw new Error(`switch ${enPath} → tr`)
  }
  const trHome = matchRoute('/tr')
  const enProject = matchRoute('/en/work/arincicek')
  if (trHome.name !== 'home' || trHome.locale !== 'tr') throw new Error('tr home route')
  if (enProject.name !== 'project' || enProject.locale !== 'en' || enProject.slug !== 'arincicek') {
    throw new Error('en project route')
  }
}

function assertShareImages(entries) {
  const seen = new Set()
  for (const entry of entries) {
    const pathname = new URL(entry.image).pathname
    if (seen.has(pathname)) continue
    seen.add(pathname)
    const file = resolve('public', pathname.replace(/^\//, ''))
    const size = pngSize(file)
    if (size.width !== entry.imageWidth || size.height !== entry.imageHeight) {
      throw new Error(
        `${file} is ${size.width}x${size.height}, seo.js expects ${entry.imageWidth}x${entry.imageHeight}`,
      )
    }
  }
}

function pngSize(file) {
  const buf = readFileSync(file)
  if (buf.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a') {
    throw new Error(`${file} is not a PNG`)
  }
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) }
}

function assertSitemapOmitsLegacy() {
  const xml = readFileSync(resolve(dist, 'sitemap.xml'), 'utf8')
  for (const path of ['/isler/', '/operasyon/', '/iletisim/', '/work/', '/studio/', '/contact/']) {
    if (xml.includes(`<loc>${siteOrigin}${path}</loc>`)) {
      throw new Error(`sitemap should not list legacy path ${path}`)
    }
  }
}

function assertRobots() {
  const robots = readFileSync(resolve(dist, 'robots.txt'), 'utf8')
  if (!/User-agent:\s*\*/.test(robots) || !/Allow:\s*\//.test(robots)) {
    throw new Error('dist/robots.txt does not allow crawl')
  }
  if (!robots.includes(`Sitemap: ${siteOrigin}/sitemap.xml`)) {
    throw new Error('dist/robots.txt is missing the sitemap URL')
  }
}
