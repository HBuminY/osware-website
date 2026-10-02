import './style.css'
import { getBundle } from './content.js'
import { jsonLdText, metaFor } from './seo.js'
import { matchRoute, normalizePath, pathFor, switchPath } from './routes.js'

function readPath() {
  return normalizePath(window.location.pathname)
}

const state = {
  path: readPath(),
  menuOpen: false,
}

// Where to move focus after the next render. Null on the first paint so a
// load does not steal focus from the browser chrome.
let pendingFocus = null
let copy = getBundle('tr')

function navigate(path, { replace = false, focus = 'main' } = {}) {
  const next = normalizePath(path)
  pendingFocus = focus
  if (next === state.path && !replace) {
    state.menuOpen = false
    render()
    return
  }
  if (replace) history.replaceState({}, '', next)
  else history.pushState({}, '', next)
  state.path = next
  state.menuOpen = false
  window.scrollTo({ top: 0, behavior: 'instant' })
  render()
}

function setMenu(open, focus = open ? 'menu-open' : 'menu-close') {
  state.menuOpen = open
  pendingFocus = focus
  render()
}

function href(name, slug) {
  return pathFor(copy.locale, name, slug)
}

function joinList(items) {
  if (items.length <= 1) return items.join('')
  if (items.length === 2) return `${items[0]} ${copy.ui.and} ${items[1]}`
  const sep = copy.ui.oxford ? ',' : ''
  return `${items.slice(0, -1).join(', ')}${sep} ${copy.ui.and} ${items.at(-1)}`
}

function projectLinks() {
  return joinList(
    copy.projects.map((project) => {
      const path = href('project', project.slug)
      return `<a href="${path}" data-link="${path}">${project.title}</a>`
    }),
  )
}

function logoMark(extraClass = '', { inert = false } = {}) {
  const classes = extraClass ? `logo ${extraClass}` : 'logo'
  const home = href('home')
  return `<a class="${classes}" href="${home}" data-link="${home}" aria-label="${copy.ui.logoLabel}"${inert ? ' inert' : ''}>
    <img src="/osware.png" alt="" class="logo-img" />
  </a>`
}

function isNavActive(id, route) {
  if (id === 'work') return route.name === 'work' || route.name === 'project'
  return route.name === id
}

function navAnchors(route) {
  return copy.nav
    .map((item) => {
      const path = href(item.id)
      const active = isNavActive(item.id, route)
      const current = active ? ' class="is-active" aria-current="page"' : ''
      return `<a href="${path}" data-link="${path}"${current}>${item.label}</a>`
    })
    .join('')
}

function langSwitch({ inert = false } = {}) {
  const links = [
    ['tr', 'TR', 'Türkçe'],
    ['en', 'EN', 'English'],
  ]
    .map(([locale, short, name]) => {
      const target = switchPath(state.path, locale)
      const current = copy.locale === locale
      const cls = current ? ' class="is-active"' : ''
      const aria = current ? ' aria-current="true"' : ''
      return `<a href="${target}" data-link="${target}" lang="${locale}" hreflang="${locale}"${cls}${aria}>${short}<span class="visually-hidden"> — ${name}</span></a>`
    })
    .join('<span aria-hidden="true">/</span>')
  return `<nav class="lang-switch" aria-label="${copy.ui.langLabel}"${inert ? ' inert' : ''}>${links}</nav>`
}

function mailHref() {
  const subject = encodeURIComponent(copy.ui.mailSubject)
  return `mailto:${copy.studio.email}?subject=${subject}`
}

function whatsappInquiryHref() {
  const text = encodeURIComponent(copy.ui.whatsappText)
  return `${copy.studio.whatsappHref}?text=${text}`
}

function contactDetails() {
  return `<p class="contact-details">
    <a href="${mailHref()}">${copy.studio.email}</a>
    <a href="${copy.studio.phoneHref}">${copy.studio.phone}</a>
    <a href="${whatsappInquiryHref()}" target="_blank" rel="noopener noreferrer">WhatsApp<span class="visually-hidden"> (${copy.ui.newTab})</span></a>
    <span>${copy.studio.location}</span>
  </p>`
}

function whatsappFab() {
  return `<a
    class="whatsapp-fab"
    href="${copy.studio.whatsappHref}"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="${copy.ui.whatsappFab}"${state.menuOpen ? ' inert' : ''}
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  </a>`
}

function renderHeader(route) {
  const open = state.menuOpen
  const inert = open ? ' inert' : ''
  const links = navAnchors(route)
  const menuLabel = open ? copy.ui.menuClose : copy.ui.menuOpen
  const contact = href('contact')

  return `
    <a class="skip" href="#view"${inert}>${copy.ui.skip}</a>
    <header class="site-header">
      <div class="header-inner">
        ${logoMark('', { inert: open })}
        <nav class="desktop-nav" aria-label="${copy.ui.mainNav}"${inert}>${links}</nav>
        <div class="header-actions">
          ${langSwitch({ inert: open })}
          <a class="btn btn-sm header-cta" href="${contact}" data-link="${contact}"${inert}>${copy.ui.cta}</a>
          <button type="button" class="menu-btn" data-action="toggle-menu" aria-controls="site-menu" aria-expanded="${open}" aria-haspopup="dialog" aria-label="${menuLabel}">
            <span aria-hidden="true"></span><span aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </header>
    <div id="site-menu" class="mobile-nav${open ? ' is-open' : ''}"${open ? ' role="dialog" aria-modal="true" aria-label="' + copy.ui.menuDialog + '"' : ' hidden'}>
      <nav class="mobile-nav-links" aria-label="${copy.ui.mobileNav}">${links}</nav>
      ${langSwitch()}
      <a class="btn" href="${contact}" data-link="${contact}">${copy.ui.cta}</a>
    </div>
    <div class="scrim${open ? ' is-on' : ''}" data-action="close-overlays" aria-hidden="true"></div>
  `
}

function renderFooter(route) {
  const inert = state.menuOpen ? ' inert' : ''
  const contact = href('contact')
  return `
    <footer class="site-footer"${inert}>
      <div class="footer-cta">
        <p class="eyebrow">${copy.ui.footerEyebrow}</p>
        <h2>${copy.ui.footerTitle}</h2>
        <p>${copy.ui.footerText}</p>
        <a class="btn btn-invert" href="${contact}" data-link="${contact}">${copy.ui.cta}</a>
      </div>
      <div class="footer-grid">
        <div>
          ${logoMark('logo-footer')}
          <p class="muted">${copy.ui.footerBlurb}</p>
          ${contactDetails()}
          ${langSwitch()}
        </div>
        <nav aria-label="${copy.ui.pagesLabel}">
          <p class="eyebrow" aria-hidden="true">${copy.ui.pagesLabel}</p>
          <ul class="footer-links">
            ${copy.nav
              .map((item) => {
                const path = href(item.id)
                const active = isNavActive(item.id, route)
                const current = active ? ' aria-current="page"' : ''
                return `<li><a href="${path}" data-link="${path}"${current}>${item.label}</a></li>`
              })
              .join('')}
          </ul>
        </nav>
        <nav aria-label="${copy.ui.workLabel}">
          <p class="eyebrow" aria-hidden="true">${copy.ui.workLabel}</p>
          <ul class="footer-links">
            ${copy.projects
              .map((project) => {
                const path = href('project', project.slug)
                return `<li><a href="${path}" data-link="${path}">${project.title}</a></li>`
              })
              .join('')}
          </ul>
        </nav>
      </div>
    </footer>
  `
}

function workCard(project, level = 3) {
  const path = href('project', project.slug)
  const title = level === 2 ? `<h2 class="card-title">${project.title}</h2>` : `<h3>${project.title}</h3>`
  return `
    <article class="card">
      <a class="card-media" href="${path}" data-link="${path}">
        ${project.tag ? `<span class="chip">${project.tag}</span>` : ''}
        <img src="${project.image}" alt="${project.alt}" />
      </a>
      <div class="card-body">
        <div>
          <a href="${path}" data-link="${path}">${title}</a>
          <p class="muted">${project.context}</p>
          <p class="card-excerpt">${project.excerpt}</p>
        </div>
        <a class="text-btn" href="${path}" data-link="${path}">${copy.ui.viewWork}</a>
      </div>
    </article>
  `
}

function serviceCard(service, { detail = false } = {}) {
  return `
    <article class="service-card">
      <span class="code">${service.code}</span>
      <h3>${service.title}</h3>
      <p>${service.lead}</p>
      ${detail ? `<p>${service.detail}</p>` : ''}
    </article>`
}

function viewHome() {
  const work = href('work')
  const contact = href('contact')
  const studioPage = href('studio')
  return `
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">${copy.ui.homeEyebrow}</p>
        <h1 id="page-title">${copy.ui.homeTitle}</h1>
        <p class="lede">${copy.ui.homeLede} ${projectLinks()}.</p>
        <div class="hero-actions">
          <a class="btn" href="${work}" data-link="${work}">${copy.ui.seeWork}</a>
          <a class="btn btn-ghost" href="${contact}" data-link="${contact}">${copy.ui.cta}</a>
        </div>
        <dl class="hero-meta">
          <div><dt>${copy.ui.field}</dt><dd>${copy.ui.fieldValue}</dd></div>
          <div><dt>${copy.ui.locationLabel}</dt><dd>${copy.studio.location}</dd></div>
          <div><dt>${copy.ui.foundedLabel}</dt><dd>${copy.studio.founded}</dd></div>
        </dl>
      </div>
      <aside class="hero-panel">
        <p class="hero-panel-kicker">${copy.ui.panelKicker}</p>
        <p class="hero-panel-lead">${copy.ui.panelLead}</p>
        <ul class="hero-stack">
          ${copy.services.map((service) => `<li><span>${service.code}</span>${service.title}</li>`).join('')}
        </ul>
      </aside>
    </section>

    <div class="band">
      <h2 class="visually-hidden">${copy.ui.capabilitiesLabel}</h2>
      <ul>
        ${copy.capabilities.map((item) => `<li>${item}</li>`).join('')}
      </ul>
    </div>

    <section class="section">
      <div class="section-head">
        <div>
          <p class="eyebrow">${copy.ui.servicesEyebrow}</p>
          <h2>${copy.ui.servicesTitle}</h2>
        </div>
      </div>
      <div class="service-grid">
        ${copy.services.map((service) => serviceCard(service)).join('')}
      </div>
    </section>

    <section class="section section-tight">
      <div class="section-head">
        <div>
          <p class="eyebrow">${copy.ui.selectedEyebrow}</p>
          <h2>${copy.ui.selectedTitle}</h2>
          <p class="section-note">${copy.ui.selectedNote}</p>
        </div>
        <a class="text-btn" href="${work}" data-link="${work}">${copy.ui.allWork}</a>
      </div>
      <div class="work-grid">
        ${copy.projects.map((project) => workCard(project)).join('')}
      </div>
    </section>

    <section class="split">
      <div class="split-copy">
        <p class="eyebrow">${copy.ui.approachEyebrow}</p>
        <h2>${copy.ui.approachTitle}</h2>
        <p>${copy.ui.approachText}</p>
        <a class="btn btn-ghost" href="${studioPage}" data-link="${studioPage}">${copy.ui.seeServices}</a>
      </div>
      <div class="split-facts">
        ${copy.values
          .map(
            (value) => `
          <article>
            <h3>${value.title}</h3>
            <p>${value.text}</p>
          </article>`,
          )
          .join('')}
      </div>
    </section>
  `
}

function viewWork() {
  const groups = copy.workLines
    .map((line) => {
      const items = copy.projects.filter((project) => project.line === line.id)
      return `
        <section class="work-group">
          <div class="section-head">
            <div>
              <p class="eyebrow">${line.eyebrow}</p>
              <h2>${line.title}</h2>
              <p class="lede">${line.text}</p>
            </div>
          </div>
          <div class="work-grid ${items.length === 1 ? 'work-grid-1' : items.length === 2 ? 'work-grid-2' : ''}">
            ${items.map((project) => workCard(project)).join('')}
          </div>
        </section>`
    })
    .join('')

  return `
    <section class="page-hero">
      <p class="eyebrow">${copy.ui.workEyebrow}</p>
      <h1 id="page-title">${copy.ui.workTitle}</h1>
      <p class="lede">${copy.ui.workLede}</p>
    </section>
    ${groups}
  `
}

function viewProject(slug) {
  const project = copy.projects.find((item) => item.slug === slug)
  if (!project) return viewNotFound()
  const related = copy.projects.filter((item) => item.slug !== project.slug).slice(0, 3)
  const contact = href('contact')
  return `
    <article class="case">
      <div class="case-media">
        <img src="${project.image}" alt="${project.alt}" />
      </div>
      <div class="case-info">
        <p class="eyebrow">${project.context}</p>
        <h1 id="page-title">${project.title}</h1>
        <p class="lede">${project.excerpt}</p>
        <dl class="case-meta">
          <div><dt>${copy.ui.status}</dt><dd>${project.tag}</dd></div>
          <div><dt>${copy.ui.type}</dt><dd>${project.context}</dd></div>
          <div><dt>${copy.ui.scope}</dt><dd>${project.services.join(' · ')}</dd></div>
        </dl>
        <p>${project.description}</p>
        <ul class="fact-list">
          ${project.points.map((point) => `<li>${point}</li>`).join('')}
        </ul>
        <aside class="callout">
          <p class="eyebrow">${copy.ui.delivery}</p>
          <p>${project.scope}</p>
        </aside>
        <div class="case-actions">
          <a class="btn" href="${project.url}" target="_blank" rel="noopener noreferrer">${copy.ui.openSite}<span class="visually-hidden"> (${copy.ui.newTab})</span></a>
          <a class="btn btn-ghost" href="${contact}" data-link="${contact}">${copy.ui.cta}</a>
        </div>
      </div>
    </article>
    <section class="section">
      <div class="section-head">
        <div>
          <p class="eyebrow">${copy.ui.moreEyebrow}</p>
          <h2>${copy.ui.moreTitle}</h2>
        </div>
      </div>
      <div class="work-grid work-grid-2">
        ${related.map((item) => workCard(item)).join('')}
      </div>
    </section>
  `
}

function viewStudio() {
  const contact = href('contact')
  return `
    <section class="page-hero">
      <p class="eyebrow">${copy.ui.studioEyebrow}</p>
      <h1 id="page-title">${copy.ui.studioTitle}</h1>
      <p class="lede">${copy.ui.studioLede}</p>
    </section>
    <section class="section">
      <div class="section-head">
        <div>
          <p class="eyebrow">${copy.ui.takesEyebrow}</p>
          <h2>${copy.ui.servicesTitle}</h2>
          <p class="section-note">${copy.ui.takesNote}</p>
        </div>
      </div>
      <div class="service-grid">
        ${copy.services.map((service) => serviceCard(service, { detail: true })).join('')}
      </div>
    </section>
    <section class="section section-tight">
      <div class="section-head">
        <div>
          <p class="eyebrow">${copy.ui.lineEyebrow}</p>
          <h2>${copy.ui.lineTitle}</h2>
        </div>
      </div>
      <div class="process">
        ${copy.steps
          .map(
            (step, index) => `
          <article class="process-step">
            <span class="code">${String(index + 1).padStart(2, '0')}</span>
            <h3>${step.title}</h3>
            <p>${step.text}</p>
          </article>`,
          )
          .join('')}
      </div>
    </section>
    <section class="section section-tight">
      <aside class="callout">
        <p class="eyebrow">${copy.ui.limitEyebrow}</p>
        <p>${copy.ui.limitText}</p>
        <a class="btn" href="${contact}" data-link="${contact}">${copy.ui.cta}</a>
      </aside>
    </section>
  `
}

function viewContact() {
  return `
    <section class="page-hero">
      <p class="eyebrow">${copy.ui.contactEyebrow}</p>
      <h1 id="page-title">${copy.ui.contactTitle}</h1>
      <p class="lede">${copy.ui.contactLede}</p>
    </section>
    <div class="contact-channels">
      <a class="channel" href="${mailHref()}">
        <span class="eyebrow">${copy.ui.email}</span>
        <strong>${copy.studio.email}</strong>
        <span class="text-btn">${copy.ui.write}</span>
      </a>
      <a class="channel" href="${copy.studio.phoneHref}">
        <span class="eyebrow">${copy.ui.phone}</span>
        <strong>${copy.studio.phone}</strong>
        <span class="text-btn">${copy.ui.call}</span>
      </a>
      <a class="channel" href="${whatsappInquiryHref()}" target="_blank" rel="noopener noreferrer">
        <span class="eyebrow">WhatsApp</span>
        <strong>${copy.studio.phone}</strong>
        <span class="text-btn">${copy.ui.write}<span class="visually-hidden"> (${copy.ui.newTab})</span></span>
      </a>
      <div class="channel">
        <span class="eyebrow">${copy.ui.from}</span>
        <strong>${copy.studio.location}</strong>
        <span class="muted">${copy.ui.foundedLine}</span>
      </div>
    </div>
    <div class="inquiry">
      <div>
        <h2>${copy.ui.inquiryTitle}</h2>
        <ul class="fact-list">
          ${copy.inquiry.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </div>
      <aside class="inquiry-card">
        <p class="eyebrow">${copy.ui.studioAside}</p>
        <ul class="aside-list">
          ${copy.services.map((service) => `<li><strong>${service.title}</strong></li>`).join('')}
        </ul>
        <p>${copy.ui.inquiryNote}</p>
        <a class="btn btn-invert" href="${mailHref()}">${copy.ui.writeEmail}</a>
      </aside>
    </div>
  `
}

function viewNotFound() {
  const work = href('work')
  return `
    <section class="page-hero">
      <p class="eyebrow">404</p>
      <h1 id="page-title">${copy.ui.notFoundTitle}</h1>
      <p class="lede">${copy.ui.notFoundLede}</p>
      <a class="btn" href="${work}" data-link="${work}">${copy.ui.notFoundCta}</a>
    </section>
  `
}

function renderView(route) {
  switch (route.name) {
    case 'home':
      return viewHome()
    case 'work':
      return viewWork()
    case 'project':
      return viewProject(route.slug)
    case 'studio':
      return viewStudio()
    case 'contact':
      return viewContact()
    default:
      return viewNotFound()
  }
}

function render() {
  const route = matchRoute(state.path)
  if (route.name === 'redirect') {
    navigate(route.to, { replace: true, focus: pendingFocus })
    return
  }

  copy = getBundle(route.locale)
  const app = document.querySelector('#app')
  const focus = pendingFocus
  pendingFocus = null
  applyDocumentMeta(route)
  document.body.classList.toggle('lock', state.menuOpen)

  app.innerHTML = `
    ${renderHeader(route)}
    <main id="view" class="view" tabindex="-1" aria-labelledby="page-title"${state.menuOpen ? ' inert' : ''}>${renderView(route)}</main>
    ${renderFooter(route)}
    ${whatsappFab()}
  `
  moveFocus(focus)
}

function moveFocus(mode) {
  if (mode === 'main') {
    document.getElementById('view')?.focus({ preventScroll: true })
  } else if (mode === 'menu-open') {
    document.querySelector('#site-menu a')?.focus({ preventScroll: true })
  } else if (mode === 'menu-close') {
    document.querySelector('.menu-btn')?.focus({ preventScroll: true })
  }
}

function applyDocumentMeta(route) {
  const meta = metaFor(route, state.path)
  document.title = meta.title
  document.documentElement.lang = meta.htmlLang
  setMeta('meta[name="description"]', meta.description)
  setMeta('meta[property="og:locale"]', meta.ogLocale)
  setMeta('meta[property="og:locale:alternate"]', meta.ogLocaleAlternate)
  setMeta('meta[property="og:title"]', meta.title)
  setMeta('meta[property="og:description"]', meta.socialDescription)
  setMeta('meta[property="og:url"]', meta.url)
  setMeta('meta[property="og:image"]', meta.image)
  setMeta('meta[property="og:image:alt"]', meta.imageAlt)
  setMeta('meta[property="og:image:width"]', String(meta.imageWidth))
  setMeta('meta[property="og:image:height"]', String(meta.imageHeight))
  setMeta('meta[name="twitter:card"]', meta.card)
  setMeta('meta[name="twitter:title"]', meta.title)
  setMeta('meta[name="twitter:description"]', meta.socialDescription)
  setMeta('meta[name="twitter:image"]', meta.image)
  setMeta('meta[name="twitter:image:alt"]', meta.imageAlt)
  const canonical = document.head.querySelector('link[rel="canonical"]')
  if (!canonical) throw new Error('Missing canonical link')
  canonical.setAttribute('href', meta.url)
  applyAlternates(meta.alternates, canonical)
  const ld = document.head.querySelector('script[type="application/ld+json"]')
  if (!ld) throw new Error('Missing json-ld')
  ld.textContent = jsonLdText(meta)
}

function applyAlternates(alternates, canonical) {
  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove())
  if (!alternates) return
  let anchor = canonical
  for (const lang of ['tr', 'en', 'x-default']) {
    const el = document.createElement('link')
    el.rel = 'alternate'
    el.hreflang = lang
    el.href = alternates[lang]
    anchor.insertAdjacentElement('afterend', el)
    anchor = el
  }
}

function setMeta(selector, value) {
  const el = document.head.querySelector(selector)
  if (!el) throw new Error(`Missing ${selector}`)
  el.setAttribute('content', value)
}

function onClick(event) {
  const link = event.target.closest('[data-link]')
  if (link) {
    event.preventDefault()
    const path = link.getAttribute('data-link')
    if (path) navigate(path)
    return
  }

  const action = event.target.closest('[data-action]')?.getAttribute('data-action')
  if (action === 'toggle-menu') {
    setMenu(!state.menuOpen)
    return
  }
  if (action === 'close-overlays' && state.menuOpen) {
    setMenu(false)
  }
}

function menuTabStops() {
  const stops = []
  const button = document.querySelector('.menu-btn')
  if (button && button.getClientRects().length > 0) stops.push(button)
  const menu = document.getElementById('site-menu')
  if (menu) stops.push(...menu.querySelectorAll('a[href], button:not([disabled])'))
  return stops
}

function onKey(event) {
  if (!state.menuOpen) return
  if (event.key === 'Escape') {
    event.preventDefault()
    setMenu(false)
    return
  }
  if (event.key !== 'Tab') return
  const stops = menuTabStops()
  if (stops.length === 0) return
  const index = stops.indexOf(document.activeElement)
  if (event.shiftKey) {
    if (index <= 0) {
      event.preventDefault()
      stops[stops.length - 1].focus({ preventScroll: true })
    }
  } else if (index === -1 || index === stops.length - 1) {
    event.preventDefault()
    stops[0].focus({ preventScroll: true })
  }
}

window.addEventListener('popstate', () => {
  state.path = readPath()
  state.menuOpen = false
  pendingFocus = 'main'
  render()
})

window.matchMedia('(min-width: 981px)').addEventListener('change', (event) => {
  if (event.matches && state.menuOpen) setMenu(false, null)
})

document.addEventListener('click', onClick)
document.addEventListener('keydown', onKey)

render()
