import './style.css'
import {
  capabilities,
  nav,
  projects,
  services,
  steps,
  studio,
  team,
  values,
} from './content.js'

const state = {
  path: window.location.pathname,
  menuOpen: false,
}

function projectBySlug(slug) {
  return projects.find((p) => p.slug === slug)
}

function navigate(path, { replace = false } = {}) {
  if (path === state.path && !replace) {
    state.menuOpen = false
    render()
    return
  }
  if (replace) history.replaceState({}, '', path)
  else history.pushState({}, '', path)
  state.path = path
  state.menuOpen = false
  window.scrollTo({ top: 0, behavior: 'instant' })
  render()
}

function matchRoute(path) {
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
    .map((item) => `<a href="${item.href}" target="_blank" rel="noreferrer">${item.name}</a>`)
    .join(' ve ')
  return `Üçümüz ${links} çıkışlıyız.`
}

function contactDetails() {
  return `<p class="contact-details">
    <a href="mailto:${studio.email}">${studio.email}</a>
    <a href="${studio.phoneHref}">${studio.phone}</a>
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
        <p>Kapsamı birlikte keseriz. Uymuyorsa onu da söyleriz.</p>
        <a class="btn btn-invert" href="/iletisim" data-link="/iletisim">İletişime geç</a>
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
          <p class="muted">Web geliştirme ve IT. ${studio.location}. Üç kişi, tek teslim.</p>
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
        </div>
        <a class="text-btn" href="/isler/${p.slug}" data-link="/isler/${p.slug}">İncele</a>
      </div>
    </article>
  `
}

function viewHome() {
  return `
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Operasyon grubu · Web / IT</p>
        <h1>İşleyen sistem<br>üretiriz.</h1>
        <p class="lede">Osware; Bumin, Aleyna ve Seda. ${studio.location} merkezli, web ve IT işini uçtan uca kapatan üç kişilik üretim hattı. ${originLine()}</p>
        <div class="hero-actions">
          <a class="btn" href="/isler" data-link="/isler">İşlere bak</a>
          <a class="btn btn-ghost" href="/iletisim" data-link="/iletisim">Proje başlat</a>
        </div>
        <dl class="hero-meta">
          <div><dt>Ekip</dt><dd>3 kişi</dd></div>
          <div><dt>Alan</dt><dd>Web + IT</dd></div>
          <div><dt>Üs</dt><dd>${studio.location}</dd></div>
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
          <h2>Ne kapatırız</h2>
        </div>
      </div>
      <div class="service-grid">
        ${services
          .map(
            (s) => `
          <article class="service-card">
            <span class="code">${s.code}</span>
            <h3>${s.title}</h3>
            <p>${s.lead}</p>
            <p class="muted">${s.owner}</p>
          </article>`,
          )
          .join('')}
      </div>
    </section>

    <section class="section section-tight">
      <div class="section-head">
        <div>
          <p class="eyebrow">Ürettiğimiz iş</p>
          <h2>Canlı ürünler</h2>
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
  return `
    <section class="page-hero">
      <p class="eyebrow">Portföy</p>
      <h1>İşler</h1>
      <p class="lede">Sahte katalog yok. Optiviser döneminde ürettiğimiz iki ürün ve Osware’in Kiosos’u — üçü de yayında.</p>
    </section>
    <div class="work-grid">
      ${projects.map((p) => workCard(p)).join('')}
    </div>
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
        <p>${p.description}</p>
        <ul class="tag-list">${p.services.map((s) => `<li>${s}</li>`).join('')}</ul>
        <div class="case-actions">
          <a class="btn" href="${p.url}" target="_blank" rel="noopener noreferrer">Siteyi aç</a>
          <a class="btn btn-ghost" href="/isler" data-link="/isler">Tüm işler</a>
        </div>
      </div>
    </article>
    <section class="section">
      <div class="section-head">
        <div>
          <p class="eyebrow">Devamı</p>
          <h2>Aynı hat</h2>
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
      <p class="eyebrow">Operasyon</p>
      <h1>Az kişi.<br>Sıkı hat.</h1>
      <p class="lede">Osware bir vitrin stüdyosu değil. ${studio.location} merkezli; web ve IT işini alan, kesen, üreten ve çalışan halde bırakan bir operasyon grubu. ${originLine()}</p>
    </section>
    <section class="process">
      ${steps
        .map(
          (s, i) => `
        <article class="process-step">
          <span class="code">${String(i + 1).padStart(2, '0')}</span>
          <h2>${s.title}</h2>
          <p>${s.text}</p>
        </article>`,
        )
        .join('')}
    </section>
    <section class="section">
      <div class="value-grid">
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

function viewTeam() {
  return `
    <section class="page-hero">
      <p class="eyebrow">Ekip</p>
      <h1>İsimler masada.</h1>
      <p class="lede">${originLine()} Rotasyon yok. İş Bumin, Aleyna ve Seda’da durur — ${studio.location}.</p>
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
  `
}

function viewContact() {
  return `
    <section class="page-hero">
      <p class="eyebrow">İletişim</p>
      <h1>Şimdi bize ulaşın.</h1>
      <p class="lede">Form yok. Doğrudan yazın veya arayın. ${studio.location} — Bumin, Aleyna, Seda.</p>
    </section>
    <div class="contact-channels">
      <a class="channel" href="mailto:${studio.email}">
        <span class="eyebrow">E-posta</span>
        <strong>${studio.email}</strong>
        <span class="text-btn">Yaz</span>
      </a>
      <a class="channel" href="${studio.phoneHref}">
        <span class="eyebrow">Telefon</span>
        <strong>${studio.phone}</strong>
        <span class="text-btn">Ara</span>
      </a>
      <div class="channel">
        <span class="eyebrow">Üs</span>
        <strong>${studio.location}</strong>
      </div>
    </div>
    <ul class="aside-list contact-team">
      ${team.map((m) => `<li><strong>${m.name}</strong> · ${m.role}</li>`).join('')}
    </ul>
  `
}

function viewNotFound() {
  return `
    <section class="page-hero">
      <p class="eyebrow">404</p>
      <h1>Bu adres yok.</h1>
      <p class="lede">Yanlış hat. İşlere dönün.</p>
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
  const titles = {
    home: 'Osware — web ve IT',
    work: 'İşler — Osware',
    project: `${projectBySlug(route.slug)?.title ?? 'İş'} — Osware`,
    studio: 'Operasyon — Osware',
    team: 'Ekip — Osware',
    contact: 'İletişim — Osware',
    notfound: 'Bulunamadı — Osware',
  }
  document.title = titles[route.name] || titles.notfound
  document.body.classList.toggle('lock', state.menuOpen)

  app.innerHTML = `
    ${renderHeader()}
    <main id="view" class="view">${renderView()}</main>
    ${renderFooter()}
    ${whatsappFab()}
  `
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
  state.path = window.location.pathname
  state.menuOpen = false
  render()
})

document.addEventListener('click', onClick)
document.addEventListener('keydown', onKey)

render()
