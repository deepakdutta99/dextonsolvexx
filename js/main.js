/* ==========================================================================
   Dexton Solvexx - Global JavaScript Controller
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inject Reusable Header and Footer components
  injectHeader();
  injectFooter();

  // 2. Initialize Navigation and Sticky Header behaviors
  initNavigation();

  // 3. Initialize Scroll-Reveal animations using IntersectionObserver
  initScrollReveal();

  // 4. Initialize Forms and toast alert controllers
  initForms();
  
  // 5. Initialize Accordion FAQs (if present on the page)
  initFaqs();
});

/**
 * Dynamically injects the premium 4D Header component into '#header-root'.
 */
function injectHeader() {
  const headerRoot = document.getElementById('header-root');
  if (!headerRoot) return;

  const currentPath = window.location.pathname;
  const isDetailPath = currentPath.includes('service-detail.html') || currentPath.includes('industry-detail.html') || currentPath.includes('blog-detail.html');
  const pathPrefix = isDetailPath ? '' : ''; // Dynamic relative links if needed

  headerRoot.innerHTML = `
    <header class="header-wrapper">
      <div class="header-container">
        <!-- 4D Premium Logo -->
        <a href="index.html" class="logo-container">
          <div class="logo-main">
            <span class="logo-icon-4d"></span>
            Dexton Solvexx
          </div>
          <div class="logo-tagline">Global Talent. Smarter Workforce.</div>
        </a>

        <!-- Mobile hamburger menu icon -->
        <div class="hamburger" id="hamburger-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <!-- Desktop Main Menu -->
        <ul class="nav-menu" id="nav-links">
          <li class="nav-item"><a href="index.html" class="nav-link" id="nav-home">Home</a></li>
          <li class="nav-item"><a href="about.html" class="nav-link" id="nav-about">About Us</a></li>
          
          <!-- Services Mega Menu -->
          <li class="nav-item has-mega-menu">
            <a href="services.html" class="nav-link" id="nav-services">Services <i class="fas fa-chevron-down" style="font-size:0.75rem; margin-left:2px;"></i></a>
            <div class="mega-menu">
              <div class="mega-grid">
                <div>
                  <div class="mega-col-title">Offshore & Staffing</div>
                  <ul class="mega-list">
                    <li><a href="service-detail.html?id=offshore-recruitment" class="mega-list-link">Offshore Recruitment</a></li>
                    <li><a href="service-detail.html?id=remote-staffing" class="mega-list-link">Remote Staffing Solutions</a></li>
                    <li><a href="service-detail.html?id=contract-staffing" class="mega-list-link">Contract Staffing</a></li>
                    <li><a href="service-detail.html?id=permanent-staffing" class="mega-list-link">Permanent Staffing</a></li>
                    <li><a href="service-detail.html?id=virtual-employee" class="mega-list-link">Virtual Employees</a></li>
                  </ul>
                </div>
                <div>
                  <div class="mega-col-title">Tech & Specialized</div>
                  <ul class="mega-list">
                    <li><a href="service-detail.html?id=it-recruitment" class="mega-list-link">IT Recruitment Services</a></li>
                    <li><a href="service-detail.html?id=tech-talent" class="mega-list-link">Tech Talent Hiring</a></li>
                    <li><a href="service-detail.html?id=engineering-recruitment" class="mega-list-link">Engineering Recruitment</a></li>
                    <li><a href="service-detail.html?id=healthcare-staffing" class="mega-list-link">Healthcare Staffing</a></li>
                    <li><a href="service-detail.html?id=finance-recruitment" class="mega-list-link">Finance & Accounting</a></li>
                  </ul>
                </div>
                <div>
                  <div class="mega-col-title">Enterprise RPO</div>
                  <ul class="mega-list">
                    <li><a href="service-detail.html?id=rpo-services" class="mega-list-link">Recruitment Process Outsourcing (RPO)</a></li>
                    <li><a href="service-detail.html?id=dedicated-recruiter" class="mega-list-link">Dedicated Recruiters</a></li>
                    <li><a href="service-detail.html?id=startup-hiring" class="mega-list-link">Startup Hiring Solutions</a></li>
                    <li><a href="service-detail.html?id=enterprise-workforce" class="mega-list-link">Enterprise Workforce</a></li>
                    <li><a href="service-detail.html?id=offshore-dev-team" class="mega-list-link">Offshore Dev Teams</a></li>
                  </ul>
                </div>
                <div>
                  <div class="mega-col-title">Consulting & Tech</div>
                  <ul class="mega-list">
                    <li><a href="service-detail.html?id=recruitment-consulting" class="mega-list-link">Recruitment Consulting</a></li>
                    <li><a href="service-detail.html?id=recruitment-automation" class="mega-list-link">Recruitment Automation</a></li>
                    <li><a href="service-detail.html?id=ai-recruitment" class="mega-list-link">AI Recruitment Solutions</a></li>
                    <li><a href="service-detail.html?id=talent-mapping" class="mega-list-link">Talent Mapping Services</a></li>
                    <li><a href="service-detail.html?id=workforce-management" class="mega-list-link">Workforce Management</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <!-- Industries Mega Menu -->
          <li class="nav-item has-mega-menu">
            <a href="industries.html" class="nav-link" id="nav-industries">Industries <i class="fas fa-chevron-down" style="font-size:0.75rem; margin-left:2px;"></i></a>
            <div class="mega-menu" style="padding: 2rem 0;">
              <div class="mega-grid">
                <div>
                  <div class="mega-col-title">Technology & Media</div>
                  <ul class="mega-list">
                    <li><a href="industry-detail.html?id=information-technology" class="mega-list-link">Information Technology</a></li>
                    <li><a href="industry-detail.html?id=saas-startups" class="mega-list-link">SaaS & Startups</a></li>
                    <li><a href="industry-detail.html?id=telecommunications" class="mega-list-link">Telecommunications</a></li>
                  </ul>
                </div>
                <div>
                  <div class="mega-col-title">Healthcare & Sciences</div>
                  <ul class="mega-list">
                    <li><a href="industry-detail.html?id=healthcare" class="mega-list-link">Healthcare</a></li>
                    <li><a href="industry-detail.html?id=pharmaceutical" class="mega-list-link">Pharmaceutical</a></li>
                    <li><a href="industry-detail.html?id=education" class="mega-list-link">Education</a></li>
                  </ul>
                </div>
                <div>
                  <div class="mega-col-title">Finance & Professional</div>
                  <ul class="mega-list">
                    <li><a href="industry-detail.html?id=finance-banking" class="mega-list-link">Finance & Banking</a></li>
                    <li><a href="industry-detail.html?id=legal" class="mega-list-link">Legal</a></li>
                    <li><a href="industry-detail.html?id=hospitality" class="mega-list-link">Hospitality</a></li>
                  </ul>
                </div>
                <div>
                  <div class="mega-col-title">Industrial & Trade</div>
                  <ul class="mega-list">
                    <li><a href="industry-detail.html?id=engineering" class="mega-list-link">Engineering</a></li>
                    <li><a href="industry-detail.html?id=manufacturing" class="mega-list-link">Manufacturing</a></li>
                    <li><a href="industry-detail.html?id=logistics" class="mega-list-link">Logistics & Supply Chain</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li class="nav-item"><a href="process.html" class="nav-link" id="nav-process">Recruitment Process</a></li>
          <li class="nav-item"><a href="careers.html" class="nav-link" id="nav-careers">Careers</a></li>
          <li class="nav-item"><a href="blog.html" class="nav-link" id="nav-blog">Blog</a></li>
          <li class="nav-item"><a href="contact.html" class="nav-link" id="nav-contact">Contact Us</a></li>
        </ul>

        <!-- Navigation Button CTA -->
        <a href="contact.html" class="btn btn-primary header-btn">
          <span>Book Consultation</span>
          <i class="fas fa-calendar-alt"></i>
        </a>
      </div>
    </header>
  `;

  // Highlight Active Link in Navigation
  highlightActiveLink();
}

/**
 * Dynamically injects the premium Footer component into '#footer-root'.
 */
function injectFooter() {
  const footerRoot = document.getElementById('footer-root');
  if (!footerRoot) return;

  footerRoot.innerHTML = `
    <footer class="footer-wrapper">
      <div class="container">
        <div class="footer-grid">
          <!-- Column 1: Brand Info & Socials -->
          <div>
            <a href="index.html" class="logo-container" style="margin-bottom: 1rem;">
              <div class="logo-main" style="font-size: 1.35rem;">
                <span class="logo-icon-4d" style="width:20px; height:20px;"></span>
                Dexton Solvexx
              </div>
              <div class="logo-tagline" style="font-size: 0.58rem; letter-spacing: 1px;">Global Talent. Smarter Workforce.</div>
            </a>
            <p class="footer-description">
              Dexton Solvexx is a premier global offshore staffing and Recruitment Process Outsourcing (RPO) partner. We connect high-growth enterprises and tech startups worldwide with elite offshore talent, optimizing staffing efficiency while lowering overhead.
            </p>
            <div class="social-links">
              <a href="#" class="social-icon facebook" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social-icon instagram" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
              <a href="#" class="social-icon twitter" aria-label="Twitter X"><i class="fab fa-twitter"></i></a>
              <a href="#" class="social-icon linkedin" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          <!-- Column 2: Quick Links -->
          <div>
            <h4 class="footer-title">Quick Links</h4>
            <ul class="footer-list">
              <li><a href="index.html" class="footer-link">Home</a></li>
              <li><a href="about.html" class="footer-link">About Us</a></li>
              <li><a href="services.html" class="footer-link">Our Services</a></li>
              <li><a href="industries.html" class="footer-link">Industries Served</a></li>
              <li><a href="blog.html" class="footer-link">Latest Insights</a></li>
              <li><a href="contact.html" class="footer-link">Contact Us</a></li>
            </ul>
          </div>

          <!-- Column 3: Popular Services -->
          <div>
            <h4 class="footer-title">Popular Services</h4>
            <ul class="footer-list">
              <li><a href="service-detail.html?id=offshore-recruitment" class="footer-link">Offshore Recruitment</a></li>
              <li><a href="service-detail.html?id=it-recruitment" class="footer-link">IT Recruitment Services</a></li>
              <li><a href="service-detail.html?id=executive-search" class="footer-link">Executive Search</a></li>
              <li><a href="service-detail.html?id=remote-staffing" class="footer-link">Remote Staffing</a></li>
              <li><a href="service-detail.html?id=rpo-services" class="footer-link">RPO Services</a></li>
              <li><a href="service-detail.html?id=international-hiring" class="footer-link">Global Hiring</a></li>
            </ul>
          </div>

          <!-- Column 4: Contact Info -->
          <div>
            <h4 class="footer-title">Contact Info</h4>
            <div class="footer-contact-item">
              <i class="fas fa-envelope"></i>
              <div>
                <p style="color:var(--text-white); font-weight:600;">Email Us</p>
                <a href="mailto:partner@dextonsolvexx.com" style="color:var(--text-secondary);">partner@dextonsolvexx.com</a>
              </div>
            </div>
            <div class="footer-contact-item">
              <i class="fas fa-phone-alt"></i>
              <div>
                <p style="color:var(--text-white); font-weight:600;">Call Offices</p>
                <a href="tel:+18005553986" style="color:var(--text-secondary);">+1 (800) 555-DXTN (3986)</a>
              </div>
            </div>
            <div class="footer-contact-item">
              <i class="fas fa-map-marker-alt"></i>
              <div>
                <p style="color:var(--text-white); font-weight:600;">Headquarters</p>
                <p style="color:var(--text-secondary); line-height:1.4;">Suite 800, 100 Corporate Parkway,<br>New York, NY 10001, USA</p>
              </div>
            </div>
            <div class="footer-contact-item" style="margin-bottom:0;">
              <i class="far fa-clock"></i>
              <div>
                <p style="color:var(--text-white); font-weight:600;">Business Hours</p>
                <p style="color:var(--text-secondary);">Monday - Friday: 24 Hours (Global Support)</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer Bottom & Legal Credits -->
        <div class="footer-bottom">
          <p class="copyright">
            &copy; 2026 Dexton Solvexx. All rights reserved. Empowering Global Staffing Solutions.
          </p>
          <div class="footer-legal-links">
            <a href="privacy.html" class="footer-legal-link">Privacy Policy</a>
            <a href="terms.html" class="footer-legal-link">Terms & Conditions</a>
            <a href="disclaimer.html" class="footer-legal-link">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
    <div class="toast-container" id="toast-container"></div>
  `;
}

/**
 * Adds dynamic scrolling and mobile interactions to the navigation menu.
 */
function initNavigation() {
  const header = document.querySelector('.header-wrapper');
  const hamburger = document.getElementById('hamburger-menu');
  const navMenu = document.getElementById('nav-links');

  if (!header) return;

  // Add scroll handler to make navigation sticky with background blur
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  });

  // Trigger scroll immediately in case page was refreshed halfway down
  if (window.scrollY > 50) {
    header.classList.add('header-scrolled');
  }

  // Toggle mobile hamburger menu
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
      
      // Animate hamburger bars to 'X' shape
      const bars = hamburger.querySelectorAll('span');
      if (hamburger.classList.contains('active')) {
        bars[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
      } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
      }
    });

    // Support toggleable sub-menus for Mobile layout
    const hasDropdowns = navMenu.querySelectorAll('.has-mega-menu');
    hasDropdowns.forEach(dropdown => {
      const link = dropdown.querySelector('.nav-link');
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault(); // Stop direct navigation on click
          dropdown.classList.toggle('active');
        }
      });
    });
  }
}

/**
 * Scans URL and highlights the current page's link in navigation.
 */
function highlightActiveLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  
  // Clear any existing active class
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    link.style.color = '';
  });

  if (currentPath === 'index.html') {
    const homeLink = document.getElementById('nav-home');
    if (homeLink) homeLink.style.color = 'var(--accent)';
  } else if (currentPath.includes('about')) {
    const aboutLink = document.getElementById('nav-about');
    if (aboutLink) aboutLink.style.color = 'var(--accent)';
  } else if (currentPath.includes('services')) {
    const srvLink = document.getElementById('nav-services');
    if (srvLink) srvLink.style.color = 'var(--accent)';
  } else if (currentPath.includes('industries')) {
    const indLink = document.getElementById('nav-industries');
    if (indLink) indLink.style.color = 'var(--accent)';
  } else if (currentPath.includes('process')) {
    const prcLink = document.getElementById('nav-process');
    if (prcLink) prcLink.style.color = 'var(--accent)';
  } else if (currentPath.includes('careers')) {
    const carLink = document.getElementById('nav-careers');
    if (carLink) carLink.style.color = 'var(--accent)';
  } else if (currentPath.includes('blog')) {
    const blgLink = document.getElementById('nav-blog');
    if (blgLink) blgLink.style.color = 'var(--accent)';
  } else if (currentPath.includes('contact')) {
    const conLink = document.getElementById('nav-contact');
    if (conLink) conLink.style.color = 'var(--accent)';
  }
}

/**
 * Initializes IntersectionObserver to fire fade-in-up animations.
 */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length === 0) return;

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Reveal only once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(element => {
    revealObserver.observe(element);
  });
}

/**
 * Handles standard corporate contact forms submissions and toast alerts.
 */
function initForms() {
  const contactForms = document.querySelectorAll('.contact-inquiry-form');
  const newsletterForms = document.querySelectorAll('.newsletter-footer-form');

  contactForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Collect inputs (for mock validation)
      const name = form.querySelector('[name="name"]')?.value || 'User';
      const email = form.querySelector('[name="email"]')?.value || '';
      
      // Perform minor visual submit animation
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Processing Request...`;

        setTimeout(() => {
          showToast(`Thank you, ${name}! Your consultation inquiry has been successfully transmitted. Our onboarding partners will email you within 4 hours.`, 'success');
          form.reset();
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }, 1200);
      }
    });
  });

  if (newsletterForms) {
    newsletterForms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = form.querySelector('input[type="email"]');
        if (emailInput) {
          showToast(`Subscription successful! Key offshore recruitment insights will arrive at ${emailInput.value} weekly.`, 'success');
          form.reset();
        }
      });
    });
  }
}

/**
 * Initializes FAQ Accordion collapsibles.
 */
function initFaqs() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close other open FAQ elements
      document.querySelectorAll('.faq-item').forEach(innerItem => {
        innerItem.classList.remove('active');
        const ans = innerItem.querySelector('.faq-answer');
        if (ans) ans.style.maxHeight = '0px';
      });

      if (!isActive) {
        item.classList.add('active');
        const answer = item.querySelector('.faq-answer');
        if (answer) {
          const inner = answer.querySelector('.faq-answer-inner');
          answer.style.maxHeight = inner.offsetHeight + 'px';
        }
      }
    });
  });
}

/**
 * Renders a premium glowing toast message in the bottom-right corner.
 * @param {string} message - Message text.
 * @param {string} type - 'success' | 'error' | 'info'
 */
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let icon = '<i class="fas fa-check-circle" style="color:var(--accent);"></i>';
  if (type === 'error') icon = '<i class="fas fa-exclamation-triangle" style="color:#ef4444;"></i>';
  if (type === 'info') icon = '<i class="fas fa-info-circle" style="color:var(--primary);"></i>';

  toast.innerHTML = `
    ${icon}
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Remove toast after 5 seconds
  setTimeout(() => {
    toast.style.transform = 'translateY(50px)';
    toast.style.opacity = '0';
    toast.style.transition = 'all 0.4s ease';
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 4500);
}
window.showToast = showToast; // Expose globally for dynamic renderers
