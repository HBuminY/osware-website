// GitHub Pages has no rewrite rules. Netlify `_redirects` is ignored, and
// `404.html` is served with HTTP 404. Copy the SPA shell to each real route
// so a direct load returns 200 (Pages adds a trailing slash for the folder).
//
// The same route list (src/seo.js, derived from src/content.js) is stamped
// into each copy's head and written to dist/sitemap.xml. Adding a project
// in content.js updates the router, the route shells, and the sitemap together.
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { nav, projects } from '../src/content.js'
import { indexableRoutes, renderSitemap, seoBlock, siteOrigin } from '../src/seo.js'

const dist = resolve('dist')
const index = resolve(dist, 'index.html')
const routes = indexableRoutes()

assertRoutes(routes)
assertShareImages(routes)
assertSourceHead(routes)

const shell = readFileSync(index, 'utf8')
const home = routes.find((entry) => entry.path === '/')
writeFileSync(index, stamp(shell, home))
copyFileSync(index, resolve(dist, '404.html'))

for (const entry of routes) {
  if (entry.path === '/') continue
  const target = resolve(dist, entry.path.replace(/^\//, ''), 'index.html')
  mkdirSync(dirname(target), { recursive: true })
  writeFileSync(target, stamp(shell, entry))
}

writeFileSync(resolve(dist, 'sitemap.xml'), renderSitemap(routes))
assertRobots()

function stamp(html, meta) {
  const block = seoBlock(meta)
  const start = html.indexOf('<!-- seo:start -->')
  const end = html.indexOf('<!-- seo:end -->')
  if (start < 0 || end < 0 || end < start) {
    throw new Error('dist/index.html is missing seo markers')
  }
  return html.slice(0, start) + block + html.slice(end + '<!-- seo:end -->'.length)
}

function assertSourceHead(entries) {
  const source = readFileSync(resolve('index.html'), 'utf8')
  const home = entries.find((entry) => entry.path === '/')
  if (!source.includes(seoBlock(home))) {
    throw new Error('index.html SEO block does not match src/seo.js')
  }
}

function assertRoutes(entries) {
  const paths = entries.map((entry) => entry.path)
  if (new Set(paths).size !== paths.length) {
    throw new Error('duplicate public routes in sitemap')
  }
  for (const item of nav) {
    if (!paths.includes(item.href)) {
      throw new Error(`sitemap missing nav route ${item.href}`)
    }
  }
  for (const project of projects) {
    const path = `/isler/${project.slug}`
    if (!paths.includes(path)) throw new Error(`sitemap missing project ${path}`)
  }
  for (const entry of entries) {
    if (!entry.url.startsWith(`${siteOrigin}/`)) {
      throw new Error(`canonical URL is not absolute: ${entry.url}`)
    }
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

function assertRobots() {
  const robots = readFileSync(resolve(dist, 'robots.txt'), 'utf8')
  if (!/User-agent:\s*\*/.test(robots) || !/Allow:\s*\//.test(robots)) {
    throw new Error('dist/robots.txt does not allow crawl')
  }
  if (!robots.includes(`Sitemap: ${siteOrigin}/sitemap.xml`)) {
    throw new Error('dist/robots.txt is missing the sitemap URL')
  }
}
