/* ==========================================================================
   Dexton Solvexx - Industry Page Dynamic Router & SEO Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Read industry ID from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  let industryId = urlParams.get('id');

  // Fallback to default industry if none provided
  if (!industryId) {
    industryId = 'information-technology';
  }

  // Load database from window (declared in industries-data.js)
  const database = window.industriesDb;
  
  if (!database || !database[industryId]) {
    renderErrorState();
    return;
  }

  const industryData = database[industryId];
  
  // 1. Execute SEO Head Metadata overrides
  overrideSeoMeta(industryData);

  // 2. Inject Structured Schema.org JSON-LD data for Google indexation
  injectJsonLdSchema(industryData);

  // 3. Render HTML content elements
  renderIndustryContent(industryData);

  // 4. Populate Sidebar Related Industries
  renderRelatedIndustries(industryData, database);
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
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${data.title} Recruitment Services`,
    "description": data.metaDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Dexton Solvexx",
      "url": "https://dextonsolvexx.com",
      "email": "partner@dextonsolvexx.com",
      "telephone": "+18005553986"
    },
    "areaServed": "Worldwide"
  };

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
 * Render all text copy, lists, timelines, and solutions sections in the DOM.
 */
function renderIndustryContent(data) {
  // Breadcrumb
  const breadcrumbActive = document.getElementById('breadcrumb-active');
  if (breadcrumbActive) breadcrumbActive.textContent = data.title;

  // Titles
  const mainTitle = document.getElementById('industry-title');
  const mainSubtitle = document.getElementById('industry-subtitle');
  if (mainTitle) mainTitle.textContent = data.title;
  if (mainSubtitle) mainSubtitle.textContent = data.subtitle;

  // Main Copy
  const intro = document.getElementById('industry-intro');
  const narrative = document.getElementById('industry-narrative');
  if (intro) intro.textContent = data.intro;
  if (narrative) narrative.innerHTML = data.narrative;

  // Sourcing Challenges
  const challengesList = document.getElementById('industry-challenges-list');
  if (challengesList) {
    challengesList.innerHTML = data.challenges.map(chal => `
      <li style="display:flex; align-items:flex-start; gap:10px; font-size:0.95rem; color:var(--text-secondary);">
        <i class="fas fa-exclamation-circle" style="color:#ef4444; margin-top:4px; font-size:0.9rem;"></i>
        <span>${chal}</span>
      </li>
    `).join('');
  }

  // Offshore Solutions
  const solutionsList = document.getElementById('industry-solutions-list');
  if (solutionsList) {
    solutionsList.innerHTML = data.solutions.map(sol => `
      <li style="display:flex; align-items:flex-start; gap:10px; font-size:0.95rem; color:var(--text-white);">
        <i class="fas fa-shield-halved" style="color:var(--accent); margin-top:4px; font-size:0.9rem;"></i>
        <span>${sol}</span>
      </li>
    `).join('');
  }

  // Strategy Block
  const strategyBlock = document.getElementById('industry-strategy-block');
  if (strategyBlock) {
    strategyBlock.innerHTML = `
      <p style="font-weight:600; color:var(--accent); margin-bottom:4px; font-family:'Poppins', sans-serif;">
        <i class="fas fa-lightbulb" style="margin-right:6px;"></i>
        Dexton Solvexx Tactical Approach:
      </p>
      <p style="font-size:0.9rem; line-height:1.5;">${data.strategy}</p>
    `;
  }

  // Recruitment Timeline
  const processContainer = document.getElementById('industry-process-container');
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

  // Custom FAQs
  const faqContainer = document.getElementById('industry-faq-container');
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
 * Populate Related Industries links in Sidebar.
 */
function renderRelatedIndustries(currentData, db) {
  const list = document.getElementById('related-industries-list');
  if (!list) return;

  // Filter keys, excluding active industry
  const relatedKeys = Object.keys(db).filter(key => key !== currentData.id).slice(0, 5);

  list.innerHTML = relatedKeys.map(key => `
    <li>
      <a href="industry-detail.html?id=${db[key].id}" class="footer-link" style="display:flex; align-items:center; gap:8px;">
        <i class="fas fa-chevron-right" style="color:var(--accent); font-size:0.75rem;"></i>
        ${db[key].title}
      </a>
    </li>
  `).join('');
}

/**
 * Display a premium, user-friendly error state card if industry is invalid.
 */
function renderErrorState() {
  const main = document.querySelector('main');
  if (main) {
    main.innerHTML = `
      <section style="padding: 10rem 0 var(--space-xl); text-align:center;">
        <div class="container" style="max-width: 600px;">
          <div class="glass-card" style="padding:var(--space-lg); border-color:#ef4444;">
            <i class="fas fa-exclamation-triangle" style="font-size:3.5rem; color:#ef4444; margin-bottom:var(--space-sm);"></i>
            <h2 style="margin-bottom:var(--space-sm);">Served Sector Not Found</h2>
            <p style="color:var(--text-secondary); margin-bottom:var(--space-md);">We are unable to resolve the requested recruitment industry pipeline parameters. It may be temporarily unavailable or renamed.</p>
            <a href="industries.html" class="btn btn-primary">
              <i class="fas fa-arrow-left"></i>
              <span>Return to Industries Hub</span>
            </a>
          </div>
        </div>
      </section>
    `;
  }
}
