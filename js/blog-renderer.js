/* ==========================================================================
   Dexton Solvexx - Blog Page Dynamic Router & SEO Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Read article ID from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  let blogId = urlParams.get('id');

  // Fallback to default article if none provided
  if (!blogId) {
    blogId = 'future-of-rpo';
  }

  // Load database from window (declared in blog-data.js)
  const database = window.blogDb;
  
  if (!database || !database[blogId]) {
    renderErrorState();
    return;
  }

  const blogData = database[blogId];
  
  // 1. Execute SEO Head Metadata overrides
  overrideSeoMeta(blogData);

  // 2. Inject Structured Schema.org JSON-LD data for Google indexation
  injectJsonLdSchema(blogData);

  // 3. Render HTML content elements
  renderBlogContent(blogData);
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
 * Dynamically injects highly structural JSON-LD schemas (BlogPosting) for Google Rich Snippets.
 */
function injectJsonLdSchema(data) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": data.title,
    "description": data.metaDescription,
    "author": {
      "@type": "Person",
      "name": data.author,
      "jobTitle": data.role
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dexton Solvexx",
      "url": "https://dextonsolvexx.com"
    },
    "datePublished": "2026-05-18",
    "mainEntityOfPage": window.location.href
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
}

/**
 * Render all text copy, author profiles, and articles in the DOM.
 */
function renderBlogContent(data) {
  // Breadcrumb
  const breadcrumbActive = document.getElementById('breadcrumb-active');
  if (breadcrumbActive) breadcrumbActive.textContent = data.title;

  // Category Badge
  const categoryBadge = document.getElementById('blog-category-badge');
  if (categoryBadge) {
    categoryBadge.textContent = data.category.toUpperCase();
  }

  // Title
  const mainTitle = document.getElementById('blog-title');
  if (mainTitle) mainTitle.textContent = data.title;

  // Author details
  const authorAvatar = document.getElementById('blog-author-avatar');
  const authorName = document.getElementById('blog-author-name');
  const authorMeta = document.getElementById('blog-author-meta');
  
  if (authorAvatar) {
    // Generate avatar initials from name
    const initials = data.author.split(' ').map(n => n[0]).join('');
    authorAvatar.textContent = initials;
  }
  if (authorName) authorName.textContent = data.author;
  if (authorMeta) {
    authorMeta.innerHTML = `${data.role} &bull; ${data.date}`;
  }

  // Article Content
  const intro = document.getElementById('blog-intro');
  const content = document.getElementById('blog-content');
  
  if (intro) intro.textContent = data.intro;
  if (content) {
    content.innerHTML = data.content;
    
    // Format paragraph stylings dynamically
    const paragraphs = content.querySelectorAll('p');
    paragraphs.forEach(p => {
      p.style.marginBottom = '1.25rem';
      p.style.fontSize = '1.02rem';
      p.style.lineHeight = '1.8';
    });

    const headers = content.querySelectorAll('h2');
    headers.forEach(h => {
      h.style.color = 'var(--text-white)';
      h.style.fontSize = '1.38rem';
      h.style.marginTop = 'var(--space-md)';
      h.style.marginBottom = 'var(--space-xs)';
      h.style.fontFamily = "'Poppins', sans-serif";
      h.style.fontWeight = '700';
    });
  }

  // Update Author Biography details based on author name
  const authorDesc = document.getElementById('blog-author-description');
  if (authorDesc) {
    if (data.author.includes('Elena')) {
      authorDesc.innerHTML = `<strong>Elena Rostova</strong> is the VP of Global Talent Strategy at Dexton Solvexx. She has over 15 years of operational experience advising high-growth software corporations on remote work compliance, cross-border workforce optimization, and global hiring frameworks.`;
    } else if (data.author.includes('Marcus')) {
      authorDesc.innerHTML = `<strong>Marcus Vance</strong> is the Senior Director of Tech Sourcing at Dexton Solvexx. With a decade of dedicated engineering recruitment background, Marcus leads our technical vetting strategies, talent mapping portfolios, and global developer sourcing sprints.`;
    } else if (data.author.includes('Sarah')) {
      authorDesc.innerHTML = `<strong>Sarah Jenkins</strong> serves as the CFO of Dexton Solvexx. Specializing in international tax advisory, EOR payroll models, and workforce efficiency analytics, Sarah provides strategic cost optimization guides for scaling multinational corporations.`;
    }
  }
}

/**
 * Display a premium, user-friendly error state card if article is invalid.
 */
function renderErrorState() {
  const main = document.querySelector('main');
  if (main) {
    main.innerHTML = `
      <section style="padding: 10rem 0 var(--space-xl); text-align:center;">
        <div class="container" style="max-width: 600px;">
          <div class="glass-card" style="padding:var(--space-lg); border-color:#ef4444;">
            <i class="fas fa-exclamation-triangle" style="font-size:3.5rem; color:#ef4444; margin-bottom:var(--space-sm);"></i>
            <h2 style="margin-bottom:var(--space-sm);">Article Insight Not Found</h2>
            <p style="color:var(--text-secondary); margin-bottom:var(--space-md);">We are unable to resolve the requested resource center article parameters. It may be temporarily unavailable or archived.</p>
            <a href="blog.html" class="btn btn-primary">
              <i class="fas fa-arrow-left"></i>
              <span>Return to Resource Hub</span>
            </a>
          </div>
        </div>
      </section>
    `;
  }
}
