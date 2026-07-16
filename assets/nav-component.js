class VanguardNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<!-- ============ SKIP LINK ============ -->
<a href="#main" class="btn" style="position:absolute;left:-9999px;top:0;z-index:200;background:var(--navy);color:#fff" onfocus="this.style.left='10px';this.style.top='10px'" onblur="this.style.left='-9999px'">Skip to content</a>

<!-- ============ UTILITY BAR ============ -->
<div class="utilbar">
  <div class="container">
    <a href="apply.html">Apply</a>
    <a href="portal.html">Portal Login</a>
    <a href="mailto:info@vstemacad.org">Contact</a>
    <a href="get-involved.html#sponsor" class="donate">Sponsor a Student</a>
  </div>
</div>

<!-- ============ MAIN NAV ============ -->
<header>
<nav class="nav" id="nav" aria-label="Primary">
  <div class="container">
    <a href="home.html" class="brand" aria-label="Vanguard STEM Academy home">
      <img src="assets/vanguard-logo-transparent.png" alt="Vanguard STEM Academy crest logo">
    </a>
    <ul class="navlinks desktop-only">
      <li><a href="home.html" aria-current="page">Home</a></li>
      <li><a href="leadership.html">The Leadership Team</a></li>
      <li>
        <a href="programs.html">Programs <svg class="caret" viewBox="0 0 12 12"><path d="M2 4l4 4 4-4"/></svg></a>
        <div class="dropdown" role="menu">
          <a href="programs.html#coaching" role="menuitem"><strong>Individual Coaching</strong><span>Students &amp; professionals</span></a>
          <a href="academy.html" role="menuitem"><strong>Youth STEM Academy</strong><span>Grades 8&ndash;12</span></a>
          <a href="programs.html#bi" role="menuitem"><strong>Business Intelligence Academy</strong><span>Adults &amp; professionals</span></a>
          <a href="programs.html#mentorship" role="menuitem"><strong>Executive Mentorship</strong><span>Fireside chats &amp; panels</span></a>
          <a href="programs.html#workforce" role="menuitem"><strong>Corporate &amp; Workforce Training</strong><span>Organizations</span></a>
          <a href="programs.html#ai" role="menuitem"><strong>AI Innovation Academy</strong><span>Coming soon</span></a>
        </div>
      </li>
      <li>
        <a href="academy.html">The Academy <svg class="caret" viewBox="0 0 12 12"><path d="M2 4l4 4 4-4"/></svg></a>
        <div class="dropdown" role="menu">
          <a href="academy.html#overview" role="menuitem"><strong>Overview</strong><span>Who it serves &amp; the model</span></a>
          <a href="academy.html#experiences" role="menuitem"><strong>Signature Experiences</strong><span>Consulting capstones</span></a>
          <a href="academy.html#cohorts" role="menuitem"><strong>Future Cohorts</strong><span>Learning pathways</span></a>
          <a href="apply.html" role="menuitem"><strong>Apply</strong><span>Admissions steps</span></a>
        </div>
      </li>
      <li><a href="apply.html">Apply to the Academy</a></li>
      <li>
        <a href="impact.html">OUR IMPACT <svg class="caret" viewBox="0 0 12 12"><path d="M2 4l4 4 4-4"/></svg></a>
        <div class="dropdown" role="menu">
          <a href="impact.html#metrics" role="menuitem"><strong>Metrics</strong><span>By the numbers</span></a>
          <a href="impact.html#stories" role="menuitem"><strong>Success Stories</strong><span>Student outcomes</span></a>
          <a href="impact.html#recognition" role="menuitem"><strong>Recognition</strong><span>Honors &amp; invitations</span></a>
        </div>
      </li>
      <li><a href="get-involved.html">Get Involved</a></li>
    </ul>
    <div style="display:flex;align-items:center;gap:.7rem">
      <button class="search-btn" id="searchOpen" aria-label="Open search">
        <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
      </button>
      <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
    </div>
  </div>
</nav>
</header>

<!-- ============ MOBILE PANEL ============ -->
<div class="overlay-dim" id="dim"></div>
<aside class="mobile-panel" id="mobilePanel" aria-label="Mobile menu">
  <div class="mp-head">
    <img src="assets/footer-badge.png" alt="Vanguard STEM Academy" style="height:52px;width:auto;border-radius:8px">
    <button class="mp-close" id="mpClose" aria-label="Close menu">&times;</button>
  </div>
  <ul class="mp-links">
    <li><a href="home.html">Home</a></li>
    <li><a href="leadership.html">The Leadership Team</a></li>
    <li>
      <button class="msub" aria-expanded="false">Programs <svg class="caret" viewBox="0 0 12 12"><path d="M2 4l4 4 4-4"/></svg></button>
      <div class="sub">
        <a href="programs.html#coaching">Individual Coaching</a>
        <a href="academy.html">Youth STEM Academy</a>
        <a href="programs.html#bi">Business Intelligence Academy</a>
        <a href="programs.html#mentorship">Executive Mentorship</a>
        <a href="programs.html#workforce">Corporate &amp; Workforce Training</a>
        <a href="programs.html#ai">AI Innovation Academy</a>
      </div>
    </li>
    <li>
      <button class="msub" aria-expanded="false">The Academy <svg class="caret" viewBox="0 0 12 12"><path d="M2 4l4 4 4-4"/></svg></button>
      <div class="sub">
        <a href="academy.html#overview">Overview</a>
        <a href="academy.html#experiences">Signature Experiences</a>
        <a href="academy.html#cohorts">Future Cohorts</a>
        <a href="apply.html">Apply</a>
      </div>
    </li>
    <li><a href="apply.html">Apply to the Academy</a></li>
    <li>
      <button class="msub" aria-expanded="false">OUR IMPACT <svg class="caret" viewBox="0 0 12 12"><path d="M2 4l4 4 4-4"/></svg></button>
      <div class="sub">
        <a href="impact.html#metrics">Metrics</a>
        <a href="impact.html#stories">Success Stories</a>
        <a href="impact.html#recognition">Recognition</a>
      </div>
    </li>
    <li><a href="get-involved.html">Get Involved</a></li>
  </ul>
  <div class="mp-util">
    <a href="portal.html" class="btn btn-secondary">Login / Portal</a>
    <a href="apply.html" class="btn btn-gold">Apply to the Academy</a>
  </div>
  <div style="margin-top:1.4rem;display:flex;flex-wrap:wrap;gap:.4rem 1rem;font-size:.8rem">
    <a href="mailto:info@vstemacad.org" style="color:#9fb0c6">Contact</a>
    <a href="get-involved.html#sponsor" style="color:var(--gold-light)">Sponsor a Student</a>
  </div>
</aside>

<!-- ============ SEARCH OVERLAY ============ -->
<div class="search-overlay" id="searchOverlay" role="dialog" aria-modal="true" aria-label="Search">
  <button class="sc-close" id="scClose" aria-label="Close search">&times;</button>
  <div class="sc-inner">
    <p class="eyebrow center">Search Vanguard</p>
    <form onsubmit="return false">
      <input type="search" id="searchInput" placeholder="Search programs, impact, people…" aria-label="Search the site">
    </form>
    <div class="sc-suggest">
      <a href="academy.html">The Academy</a>
      <a href="programs.html#coaching">Coaching</a>
      <a href="impact.html">Our Impact</a>
      <a href="get-involved.html">Partner With Us</a>
      <a href="leadership.html">Leadership</a>
    </div>
  </div>
</div>
    `;
    this.initScripts();
  }

  initScripts() {
    /* ============ NAV SCROLL SHADOW ============ */
    const nav = this.querySelector('#nav');
    // applyPill and toTop might be outside this component, so we still query document for them
    const applyPill = document.getElementById('applyPill');
    const toTop = document.getElementById('toTop');
    const hero = document.querySelector('.hero');
    function onScroll() {
      const y = window.scrollY;
      if (nav) nav.classList.toggle('scrolled', y > 20);
      const heroBottom = hero ? hero.offsetHeight : 600;
      const past = y > heroBottom - 100;
      if (applyPill) applyPill.classList.toggle('show', past);
      if (toTop) toTop.classList.toggle('show', y > 700);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ============ MOBILE MENU ============ */
    const hamburger = this.querySelector('#hamburger');
    const mobilePanel = this.querySelector('#mobilePanel');
    const dim = this.querySelector('#dim');
    const mpClose = this.querySelector('#mpClose');

    function openMenu() {
      if (mobilePanel) mobilePanel.classList.add('open');
      if (dim) dim.classList.add('show');
      if (hamburger) {
        hamburger.classList.add('open');
        hamburger.setAttribute('aria-expanded', 'true');
      }
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      if (mobilePanel) mobilePanel.classList.remove('open');
      if (dim) dim.classList.remove('show');
      if (hamburger) {
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
      document.body.style.overflow = '';
    }

    if (hamburger) hamburger.addEventListener('click', () => mobilePanel.classList.contains('open') ? closeMenu() : openMenu());
    if (mpClose) mpClose.addEventListener('click', closeMenu);
    if (dim) dim.addEventListener('click', closeMenu);

    this.querySelectorAll('.msub').forEach(btn => {
      btn.addEventListener('click', () => {
        const sub = btn.nextElementSibling;
        const open = sub.classList.contains('open');
        this.querySelectorAll('.mp-links .sub').forEach(s => s.classList.remove('open'));
        this.querySelectorAll('.msub').forEach(b => b.classList.remove('open'));
        if (!open) {
          sub.classList.add('open');
          btn.classList.add('open');
        }
        btn.setAttribute('aria-expanded', String(!open));
      });
    });
    this.querySelectorAll('.mobile-panel a').forEach(a => a.addEventListener('click', closeMenu));

    /* ============ SEARCH OVERLAY ============ */
    const searchOverlay = this.querySelector('#searchOverlay');
    const searchInput = this.querySelector('#searchInput');
    const searchOpen = this.querySelector('#searchOpen');
    const scClose = this.querySelector('#scClose');

    function closeSearch() {
      if (searchOverlay) searchOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    if (searchOpen) searchOpen.addEventListener('click', () => {
      searchOverlay.classList.add('open');
      setTimeout(() => { if (searchInput) searchInput.focus(); }, 200);
      document.body.style.overflow = 'hidden';
    });
    if (scClose) scClose.addEventListener('click', closeSearch);

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        closeSearch();
        closeMenu();
      }
    });

    // Auto-update active page state in desktop + mobile nav
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    this.querySelectorAll('.navlinks > li > a, .mp-links > li > a').forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }
}
customElements.define('vanguard-nav', VanguardNav);
