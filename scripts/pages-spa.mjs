// GitHub Pages has no rewrite rules. Netlify `_redirects` is ignored, and
// `404.html` is served with HTTP 404. Copy the SPA shell to each real route
// so a direct load returns 200 (Pages adds a trailing slash for the folder).
import { copyFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { nav, projects } from '../src/content.js'

const dist = resolve('dist')
const index = resolve(dist, 'index.html')

copyFileSync(index, resolve(dist, '404.html'))

const routes = [
  ...nav.map((item) => item.href),
  ...projects.map((project) => `/isler/${project.slug}`),
]

for (const route of routes) {
  const target = resolve(dist, route.replace(/^\//, ''), 'index.html')
  mkdirSync(dirname(target), { recursive: true })
  copyFileSync(index, target)
}
