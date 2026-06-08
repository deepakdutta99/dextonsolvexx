/* ==========================================================================
   Dexton Solvexx - Service Page Dynamic Router & SEO Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Read service ID from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  let serviceId = urlParams.get('id');

  // Fallback to default service if none provided or invalid
  if (!serviceId) {
    serviceId = 'offshore-recruitment';
  }

  // Load database from window (declared in services-data.js)
  const database = window.servicesDb;
  
  if (!database || !database[serviceId]) {
    renderErrorState();
    return;
  }

  const serviceData = database[serviceId];
  
  // 1. Execute SEO Head Metadata overrides
  overrideSeoMeta(serviceData);

  // 2. Inject Structured Schema.org JSON-LD data for Google indexation
  injectJsonLdSchema(serviceData);

  // 3. Render HTML content elements
  renderServiceContent(serviceData);

  // 4. Populate Sidebar Related Services
  renderRelatedServices(serviceData, database);
});

/**
 * Dynamically overrides Head SEO, OG, and Twitter Meta tags before browser paint.
 */
function overrideSeoMeta(data) {
  // Page Title
  document.title = data.metaTitle;

  // Meta Description
  let descMeta = document.querySelector('meta[name="description"]');
  if (descMeta) {
    descMeta.setAttribute('content', data.metaDescription);
  }

  // Open Graph
  let ogTitle = document.querySelector('meta[property="og:title"]');
  let ogDesc = document.querySelector('meta[property="og:description"]');
  let ogUrl = document.querySelector('meta[property="og:url"]');
  
  if (ogTitle) ogTitle.setAttribute('content', data.metaTitle);
  if (ogDesc) ogDesc.setAttribute('content', data.metaDescription);
  
  // Canonical Link
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', window.location.href);
}

/**
 * Dynamically injects highly structural JSON-LD schemas (Service + FAQPage) for Google Rich Snippets.
 */
function injectJsonLdSchema(data) {
  // 1. Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": data.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Dexton Solvexx",
      "url": "https://dextonsolvexx.com",
      "email": "partner@dextonsolvexx.com",
      "telephone": "+18005553986",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Suite 800, 100 Corporate Parkway",
        "addressLocality": "New York",
        "addressRegion": "NY",
        "postalCode": "10001",
        "addressCountry": "US"
      }
    },
    "description": data.metaDescription,
    "areaServed": "Worldwide"
  };

  // 2. FAQ Schema
  const faqQuestions = data.faqs.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqQuestions
  };

  // Injections
  const scriptService = document.createElement('script');
  scriptService.type = 'application/ld+json';
  scriptService.text = JSON.stringify(serviceSchema);
  document.head.appendChild(scriptService);

  const scriptFaq = document.createElement('script');
  scriptFaq.type = 'application/ld+json';
  scriptFaq.text = JSON.stringify(faqSchema);
  document.head.appendChild(scriptFaq);
}

/**
 * Render all text copy, lists, timelines, and benefits sections in the DOM.
 */
function renderServiceContent(data) {
  // Breadcrumb
  const breadcrumbActive = document.getElementById('breadcrumb-active');
  if (breadcrumbActive) breadcrumbActive.textContent = data.title;

  // Category Badge
  const categoryBadge = document.getElementById('service-category-badge');
  if (categoryBadge) {
    categoryBadge.textContent = data.category.replace('-', ' ').toUpperCase();
  }

  // Titles
  const mainTitle = document.getElementById('service-title');
  const mainSubtitle = document.getElementById('service-subtitle');
  if (mainTitle) mainTitle.textContent = data.title;
  if (mainSubtitle) mainSubtitle.textContent = data.subtitle;

  // Main Copy
  const intro = document.getElementById('service-intro');
  const narrative = document.getElementById('service-narrative');
  if (intro) intro.textContent = data.intro;
  if (narrative) narrative.innerHTML = data.narrative;

  // Benefits
  const benefitsContainer = document.getElementById('service-benefits-container');
  if (benefitsContainer) {
    benefitsContainer.innerHTML = data.benefits.map(benefit => `
      <div class="glass-card" style="display:flex; align-items:center; gap:20px; padding:1.25rem;">
        <div class="gradient-text stat-number" style="font-size:1.75rem; min-width:140px; margin-bottom:0; font-weight:800;">
          ${benefit.stat}
        </div>
        <div>
          <h4 style="margin-bottom:4px; font-size:1rem; color:var(--text-white);">${benefit.title}</h4>
          <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.4;">${benefit.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // Recruitment Timeline
  const processContainer = document.getElementById('service-process-container');
  if (processContainer) {
    processContainer.innerHTML = data.process.map((step, idx) => `
      <div class="timeline-step">
        <div class="timeline-number">0${idx + 1}</div>
        <div class="timeline-body">
          <h4 style="margin-bottom:4px; color:var(--text-white);">${step.name}</h4>
          <p style="font-size:0.9rem; color:var(--text-secondary);">${step.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // Served Industries tags
  const industriesContainer = document.getElementById('service-industries-container');
  if (industriesContainer) {
    industriesContainer.innerHTML = data.industries.map(ind => `
      <a href="industry-detail.html?id=${ind.toLowerCase().replace(/ /g, '-').replace('&', 'banking')}" class="tab-btn" style="padding:0.4rem 1rem; font-size:0.8rem; margin-bottom:0; text-transform:capitalize;">
        <i class="fas fa-check-circle" style="color:var(--accent); margin-right:6px; font-size:0.8rem;"></i>
        ${ind}
      </a>
    `).join('');
  }

  // Custom FAQs
  const faqContainer = document.getElementById('service-faq-container');
  if (faqContainer) {
    faqContainer.innerHTML = data.faqs.map(faq => `
      <div class="faq-item">
        <div class="faq-question">
          <h4>${faq.q}</h4>
          <i class="fas fa-chevron-down faq-icon-arrow"></i>
        </div>
        <div class="faq-answer">
          <div class="faq-answer-inner">
            ${faq.a}
          </div>
        </div>
      </div>
    `).join('');
    
    // Re-initialize FAQs listeners once injected
    setTimeout(() => {
      if (typeof initFaqs === 'function') {
        initFaqs();
      }
    }, 100);
  }
}

/**
 * Populate Related Services links matching current category.
 */
function renderRelatedServices(currentData, db) {
  const list = document.getElementById('related-services-list');
  if (!list) return;

  // Filter keys by category, excluding active service
  const relatedKeys = Object.keys(db).filter(key => {
    return db[key].category === currentData.category && key !== currentData.id;
  }).slice(0, 4);

  // If too few related in category, add fallback services
  if (relatedKeys.length < 4) {
    Object.keys(db).forEach(key => {
      if (!relatedKeys.includes(key) && key !== currentData.id && relatedKeys.length < 4) {
        relatedKeys.push(key);
      }
    });
  }

  list.innerHTML = relatedKeys.map(key => `
    <li>
      <a href="service-detail.html?id=${db[key].id}" class="footer-link" style="display:flex; align-items:center; gap:8px;">
        <i class="fas fa-caret-right" style="color:var(--accent);"></i>
        ${db[key].title}
      </a>
    </li>
  `).join('');
}

/**
 * Display a premium, user-friendly error state card if service is invalid.
 */
function renderErrorState() {
  const container = document.getElementById('detail-grid-container');
  const main = document.querySelector('main');
  
  if (main) {
    main.innerHTML = `
      <section style="padding: 10rem 0 var(--space-xl); text-align:center;">
        <div class="container" style="max-width: 600px;">
          <div class="glass-card" style="padding:var(--space-lg); border-color:#ef4444;">
            <i class="fas fa-exclamation-triangle" style="font-size:3.5rem; color:#ef4444; margin-bottom:var(--space-sm);"></i>
            <h2 style="margin-bottom:var(--space-sm);">Service Capability Not Found</h2>
            <p style="color:var(--text-secondary); margin-bottom:var(--space-md);">We are unable to resolve the requested recruitment service pipeline parameters. It may be temporarily unavailable or renamed.</p>
            <a href="services.html" class="btn btn-primary">
              <i class="fas fa-arrow-left"></i>
              <span>Return to Services Hub</span>
            </a>
          </div>
        </div>
      </section>
    `;
  }
}
