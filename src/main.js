import './style.css'
import {
  capabilities,
  inquiry,
  nav,
  projects,
  services,
  steps,
  studio,
  team,
  values,
  workLines,
} from './content.js'
import { jsonLdText, metaFor } from './seo.js'

// GitHub Pages redirects a directory (`/isler` → `/isler/`) and serves
// route copies as `/operasyon/`. Match those the same as the canonical path.
function normalizePath(path) {
  if (!path) return '/'
  let value = path.startsWith('/') ? path : `/${path}`
  value = value.replace(/\/index\.html$/i, '')
  if (value.length > 1) value = value.replace(/\/+$/, '')
  return value || '/'
}

function readPath() {
  return normalizePath(window.location.pathname)
}

const state = {
  path: readPath(),
  menuOpen: false,
}

function projectBySlug(slug) {
  return projects.find((p) => p.slug === slug)
}

function navigate(path, { replace = false } = {}) {
  const next = normalizePath(path)
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

function matchRoute(path) {
  path = normalizePath(path)
  const aliases = {
    '/work': '/isler',
    '/studio': '/operasyon',
    '/team': '/ekip',
    '/contact': '/iletisim',
  }
  if (aliases[path]) return { name: 'redirect', to: aliases[path] }
  if (path === '/' || path === '') return { name: 'home' }
  if (path === '/isler') return { name: 'work' }
  if (path === '/operasyon') return { name: 'studio' }
  if (path === '/ekip') return { name: 'team' }
  if (path === '/iletisim') return { name: 'contact' }
  const work = path.match(/^\/isler\/([^/]+)$/)
  if (work) return { name: 'project', slug: work[1] }
  const old = path.match(/^\/work\/([^/]+)$/)
  if (old) return { name: 'redirect', to: `/isler/${old[1]}` }
  return { name: 'notfound' }
}

function logoMark(extraClass = '') {
  return `<span class="logo ${extraClass}" data-link="/" role="link" tabindex="0">
    <img src="/osware.png" alt="Osware" class="logo-img" />
  </span>`
}

function originLine() {
  const links = studio.previous
    .map(
      (item) =>
        `<a href="${item.href}" target="_blank" rel="noopener noreferrer">${item.name}</a>`,
    )
    .join(' ve ')
  return `Üçümüz ${links} çıkışlıyız.`
}

function mailHref() {
  const subject = encodeURIComponent('Osware — web / IT işi')
  return `mailto:${studio.email}?subject=${subject}`
}

function whatsappInquiryHref() {
  const text = encodeURIComponent('Merhaba Osware, bir web / IT işi konuşmak istiyorum.')
  return `${studio.whatsappHref}?text=${text}`
}

function contactDetails() {
  return `<p class="contact-details">
    <a href="${mailHref()}">${studio.email}</a>
    <a href="${studio.phoneHref}">${studio.phone}</a>
    <a href="${whatsappInquiryHref()}" target="_blank" rel="noopener noreferrer">WhatsApp</a>
    <span>${studio.location}</span>
  </p>`
}

function whatsappFab() {
  return `<a
    class="whatsapp-fab"
    href="${studio.whatsappHref}"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp ile yazın"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  </a>`
}

function renderHeader() {
  const route = matchRoute(state.path)
  const links = nav
    .map((item) => {
      const active =
        item.href === '/isler'
          ? route.name === 'work' || route.name === 'project'
          : state.path === item.href
      return `<a href="${item.href}" data-link="${item.href}" class="${active ? 'is-active' : ''}">${item.label}</a>`
    })
    .join('')

  return `
    <a class="skip" href="#view">İçeriğe geç</a>
    <header class="site-header">
      <div class="header-inner">
        ${logoMark()}
        <nav class="desktop-nav" aria-label="Ana menü">${links}</nav>
        <div class="header-actions">
          <a class="btn btn-sm header-cta" href="/iletisim" data-link="/iletisim">Proje başlat</a>
          <button class="menu-btn" data-action="toggle-menu" aria-label="Menü" aria-expanded="${state.menuOpen}">
            <span></span><span></span>
          </button>
        </div>
      </div>
    </header>
    <div class="mobile-nav ${state.menuOpen ? 'is-open' : ''}">
      <nav aria-label="Mobil menü">${links}</nav>
      <a class="btn" href="/iletisim" data-link="/iletisim">Proje başlat</a>
    </div>
    <div class="scrim ${state.menuOpen ? 'is-on' : ''}" data-action="close-overlays"></div>
  `
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="footer-cta">
        <p class="eyebrow">Kapasite</p>
        <h2>İş netse başlarız.</h2>
        <p>Web, IT veya kimlik. Kapsamı birlikte keseriz. Uymuyorsa onu da söyleriz.</p>
        <a class="btn btn-invert" href="/iletisim" data-link="/iletisim">Proje başlat</a>
      </div>
      <div class="footer-grid">
        <div>
          ${logoMark('logo-footer')}
          ${contactDetails()}
        </div>
        <div>
          <p class="eyebrow">Hat</p>
          ${nav.map((l) => `<a href="${l.href}" data-link="${l.href}">${l.label}</a>`).join('')}
        </div>
        <div>
          <p class="eyebrow">Ekip</p>
          ${team.map((m) => `<a href="/ekip" data-link="/ekip">${m.name}</a>`).join('')}
        </div>
        <div>
          <p class="eyebrow">Kuruluş ${studio.founded}</p>
          <p class="muted">Osware — ${studio.location}’de web geliştirme ve IT. Üç kişi, tek teslim.</p>
        </div>
      </div>
    </footer>
  `
}

function workCard(p) {
  return `
    <article class="card">
      <a class="card-media" href="/isler/${p.slug}" data-link="/isler/${p.slug}">
        ${p.tag ? `<span class="chip">${p.tag}</span>` : ''}
        <img src="${p.image}" alt="${p.alt}" />
      </a>
      <div class="card-body">
        <div>
          <a href="/isler/${p.slug}" data-link="/isler/${p.slug}"><h3>${p.title}</h3></a>
          <p class="muted">${p.context}</p>
          <p class="card-excerpt">${p.excerpt}</p>
        </div>
        <a class="text-btn" href="/isler/${p.slug}" data-link="/isler/${p.slug}">İncele</a>
      </div>
    </article>
  `
}

function serviceCard(s, { detail = false } = {}) {
  return `
    <article class="service-card">
      <span class="code">${s.code}</span>
      <h3>${s.title}</h3>
      <p>${s.lead}</p>
      ${detail ? `<p>${s.detail}</p>` : ''}
      <p class="muted">Ekip · ${s.owner}</p>
    </article>`
}

function viewHome() {
  return `
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Operasyon grubu · kuruluş ${studio.founded}</p>
        <h1>Osware.<br>${studio.location}’de<br>web ve IT.</h1>
        <p class="lede">Web ve IT işini bitiririz. Osware; Bumin, Aleyna ve Seda — ${studio.location} merkezli üç kişilik üretim hattı. Kurumsal site, ürün arayüzü, kimlik ve altyapı aynı hatta yürür. ${originLine()}. Kendi ürünümüz <a href="/isler/kiosos" data-link="/isler/kiosos">Kiosos</a> da yayında.</p>
        <div class="hero-actions">
          <a class="btn" href="/isler" data-link="/isler">İşlere bak</a>
          <a class="btn btn-ghost" href="/iletisim" data-link="/iletisim">Proje başlat</a>
        </div>
        <dl class="hero-meta">
          <div><dt>Ekip</dt><dd>3 kişi</dd></div>
          <div><dt>Alan</dt><dd>Web + IT</dd></div>
          <div><dt>Konum</dt><dd>${studio.location}</dd></div>
        </dl>
      </div>
      <div class="hero-panel">
        <img src="/osware.png" alt="" class="hero-logo" />
        <ul class="hero-stack">
          ${services.map((s) => `<li><span>${s.code}</span>${s.title}</li>`).join('')}
        </ul>
      </div>
    </section>

    <div class="marquee" aria-hidden="true">
      <div class="marquee-track">
        ${Array(2).fill(`${capabilities.join(' · ')} · `).join('')}
      </div>
    </div>

    <section class="section">
      <div class="section-head">
        <div>
          <p class="eyebrow">Hizmet</p>
          <h2>Web, IT, arayüz</h2>
        </div>
      </div>
      <div class="service-grid">
        ${services.map((s) => serviceCard(s)).join('')}
      </div>
    </section>

    <section class="section section-tight">
      <div class="section-head">
        <div>
          <p class="eyebrow">Kanıt</p>
          <h2>Üç canlı ürün</h2>
          <p class="section-note">İkisi Optiviser dönemi, biri Osware üretimi. Hepsi yayında — sahte katalog yok.</p>
        </div>
        <a class="text-btn" href="/isler" data-link="/isler">Tüm işler</a>
      </div>
      <div class="work-grid">
        ${projects.map((p) => workCard(p)).join('')}
      </div>
    </section>

    <section class="split">
      <div class="split-copy">
        <p class="eyebrow">Neden üç kişi</p>
        <h2>Karar ve üretim aynı masada.</h2>
        <p>Ajans katmanı yok. Hesap yöneticisi yok. İş Bumin, Aleyna ve Seda’da durur — ${studio.location}’de, aynı masada. Yazılım, IT, arayüz ve kimlik tek teslimde birleşir.</p>
        <a class="btn btn-ghost" href="/operasyon" data-link="/operasyon">Operasyonu gör</a>
      </div>
      <div class="split-facts">
        ${values
          .map(
            (v) => `
          <article>
            <h3>${v.title}</h3>
            <p>${v.text}</p>
          </article>`,
          )
          .join('')}
      </div>
    </section>
  `
}

function viewWork() {
  const groups = workLines
    .map((line) => {
      const items = projects.filter((p) => p.line === line.id)
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
            ${items.map((p) => workCard(p)).join('')}
          </div>
        </section>`
    })
    .join('')

  return `
    <section class="page-hero">
      <p class="eyebrow">Portföy</p>
      <h1>Canlı işler.</h1>
      <p class="lede">Sahte katalog yok. Optiviser döneminde ürettiğimiz iki ürün ve Osware’in Kiosos’u — üçü de yayında, üçü de açılıp bakılır. Müşteri logosu dizmeyiz.</p>
    </section>
    ${groups}
  `
}

function viewProject(slug) {
  const p = projectBySlug(slug)
  if (!p) return viewNotFound()
  const related = projects.filter((x) => x.slug !== p.slug).slice(0, 3)
  return `
    <article class="case">
      <div class="case-media">
        <img src="${p.image}" alt="${p.alt}" />
      </div>
      <div class="case-info">
        <p class="eyebrow">${p.context}</p>
        <h1>${p.title}</h1>
        <p class="lede">${p.excerpt}</p>
        <dl class="case-meta">
          <div><dt>Durum</dt><dd>${p.tag}</dd></div>
          <div><dt>Kaynak</dt><dd>${p.context}</dd></div>
          <div><dt>Kapsam</dt><dd>${p.services.join(' · ')}</dd></div>
        </dl>
        <p>${p.description}</p>
        <ul class="fact-list">
          ${p.points.map((point) => `<li>${point}</li>`).join('')}
        </ul>
        <aside class="callout">
          <p class="eyebrow">Bu işin bağı</p>
          <p>${p.scope}</p>
        </aside>
        <div class="case-actions">
          <a class="btn" href="${p.url}" target="_blank" rel="noopener noreferrer">Siteyi aç</a>
          <a class="btn btn-ghost" href="/iletisim" data-link="/iletisim">Proje başlat</a>
        </div>
      </div>
    </article>
    <section class="section">
      <div class="section-head">
        <div>
          <p class="eyebrow">Devamı</p>
          <h2>Diğer canlı işler</h2>
        </div>
      </div>
      <div class="work-grid work-grid-2">
        ${related.map((item) => workCard(item)).join('')}
      </div>
    </section>
  `
}

function viewStudio() {
  return `
    <section class="page-hero">
      <p class="eyebrow">Operasyon · ${studio.location}</p>
      <h1>Az kişi.<br>Sıkı hat.</h1>
      <p class="lede">Osware bir vitrin stüdyosu değil. ${studio.founded}’da ${studio.location}’de kuruldu. Web ve IT işini alan, kesen, üreten ve çalışan halde bırakan üç kişilik operasyon grubu. ${originLine()}.</p>
    </section>
    <section class="section">
      <div class="section-head">
        <div>
          <p class="eyebrow">Ne alırız</p>
          <h2>Web, IT, arayüz</h2>
          <p class="section-note">Üç hat. Hepsi aynı teslimde birleşebilir; tek başına da yürür.</p>
        </div>
      </div>
      <div class="service-grid">
        ${services.map((s) => serviceCard(s, { detail: true })).join('')}
      </div>
    </section>
    <section class="section section-tight">
      <div class="section-head">
        <div>
          <p class="eyebrow">Hat</p>
          <h2>Nasıl yürür</h2>
        </div>
      </div>
      <div class="process">
        ${steps
          .map(
            (s, i) => `
          <article class="process-step">
            <span class="code">${String(i + 1).padStart(2, '0')}</span>
            <h3>${s.title}</h3>
            <p>${s.text}</p>
          </article>`,
          )
          .join('')}
      </div>
    </section>
    <section class="section section-tight">
      <aside class="callout">
        <p class="eyebrow">Sınır</p>
        <p>Portföyde logo duvarı yok. Gösterdiğimiz iş ya Optiviser döneminde ürettiğimiz üründür ya Osware’in Kiosos’udur. Üçü de canlıdadır. Uymayan işi baştan söyler, almayız.</p>
        <a class="btn" href="/iletisim" data-link="/iletisim">Proje başlat</a>
      </aside>
    </section>
  `
}

function viewTeam() {
  return `
    <section class="page-hero">
      <p class="eyebrow">Ekip</p>
      <h1>İsimler masada.</h1>
      <p class="lede">Bumin yazılım ve IT, Aleyna grafik tasarım, Seda frontend. Rotasyon yok — iş bu üç isimde durur, ${studio.location}’de. ${originLine()}.</p>
    </section>
    <div class="team-grid">
      ${team
        .map(
          (m) => `
        <article class="team-card">
          <div class="portrait tone-${m.tone}">
            <span aria-hidden="true">${m.name.slice(0, 1)}</span>
            <div class="portrait-meta">
              <p class="eyebrow">${m.role}</p>
              <h2>${m.name}</h2>
            </div>
          </div>
          <p>${m.bio}</p>
          <ul class="tag-list">${m.focus.map((f) => `<li>${f}</li>`).join('')}</ul>
        </article>`,
        )
        .join('')}
    </div>
    <section class="section section-tight">
      <aside class="callout">
        <p class="eyebrow">Tek masa</p>
        <p>Hesap yöneticisi yok. Keşif, üretim ve teslim bu üç isimde kalır. Yazılım ve IT Bumin’de, görsel sistem Aleyna’da, arayüz üretimi Seda’da birleşir. ${studio.location}’de, aynı hatta.</p>
      </aside>
    </section>
  `
}

function viewContact() {
  return `
    <section class="page-hero">
      <p class="eyebrow">İletişim · ${studio.location}</p>
      <h1>İşi doğrudan konuşun.</h1>
      <p class="lede">Web veya IT işi için yazın. ${studio.location} — e-posta, telefon ve WhatsApp. Form yok; mesaj Bumin, Aleyna ve Seda’ya düşer. Uygunsa keşif, değilse net bir hayır.</p>
    </section>
    <div class="contact-channels">
      <a class="channel" href="${mailHref()}">
        <span class="eyebrow">E-posta</span>
        <strong>${studio.email}</strong>
        <span class="text-btn">Yaz</span>
      </a>
      <a class="channel" href="${studio.phoneHref}">
        <span class="eyebrow">Telefon</span>
        <strong>${studio.phone}</strong>
        <span class="text-btn">Ara</span>
      </a>
      <a class="channel" href="${whatsappInquiryHref()}" target="_blank" rel="noopener noreferrer">
        <span class="eyebrow">WhatsApp</span>
        <strong>${studio.phone}</strong>
        <span class="text-btn">Yaz</span>
      </a>
      <div class="channel">
        <span class="eyebrow">Nereden</span>
        <strong>${studio.location}</strong>
        <span class="muted">Kuruluş ${studio.founded}</span>
      </div>
    </div>
    <div class="inquiry">
      <div>
        <h2>İlk mesajda bunlar yeter.</h2>
        <ul class="fact-list">
          ${inquiry.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </div>
      <aside class="inquiry-card">
        <p class="eyebrow">Kim okur</p>
        <ul class="aside-list">
          ${team.map((m) => `<li><strong>${m.name}</strong> · ${m.role}</li>`).join('')}
        </ul>
        <p>Aracı yok. İlk yazıda kapsam yeter.</p>
        <a class="btn btn-invert" href="${mailHref()}">E-posta yaz</a>
      </aside>
    </div>
  `
}

function viewNotFound() {
  return `
    <section class="page-hero">
      <p class="eyebrow">404</p>
      <h1>Bu adres yok.</h1>
      <p class="lede">Bu sayfa Osware’de yok. İşlere dönün.</p>
      <a class="btn" href="/isler" data-link="/isler">İşler</a>
    </section>
  `
}

function renderView() {
  const route = matchRoute(state.path)
  switch (route.name) {
    case 'home':
      return viewHome()
    case 'work':
      return viewWork()
    case 'project':
      return viewProject(route.slug)
    case 'studio':
      return viewStudio()
    case 'team':
      return viewTeam()
    case 'contact':
      return viewContact()
    default:
      return viewNotFound()
  }
}

function render() {
  const route = matchRoute(state.path)
  if (route.name === 'redirect') {
    navigate(route.to, { replace: true })
    return
  }

  const app = document.querySelector('#app')
  applyDocumentMeta(route)
  document.body.classList.toggle('lock', state.menuOpen)

  app.innerHTML = `
    ${renderHeader()}
    <main id="view" class="view">${renderView()}</main>
    ${renderFooter()}
    ${whatsappFab()}
  `
}

function applyDocumentMeta(route) {
  const meta = metaFor(route, state.path)
  document.title = meta.title
  setMeta('meta[name="description"]', meta.description)
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
  const ld = document.head.querySelector('script[type="application/ld+json"]')
  if (!ld) throw new Error('Missing json-ld')
  ld.textContent = jsonLdText(meta)
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
    state.menuOpen = !state.menuOpen
    render()
    return
  }
  if (action === 'close-overlays') {
    state.menuOpen = false
    render()
    return
  }
}

function onKey(event) {
  if (event.key === 'Escape' && state.menuOpen) {
    state.menuOpen = false
    render()
  }
  if (event.key === 'Enter') {
    const link = event.target.closest('[data-link]')
    if (link) {
      event.preventDefault()
      navigate(link.getAttribute('data-link'))
    }
  }
}

window.addEventListener('popstate', () => {
  state.path = readPath()
  state.menuOpen = false
  render()
})

document.addEventListener('click', onClick)
document.addEventListener('keydown', onKey)

render()
