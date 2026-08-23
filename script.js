const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const submitBtn = document.getElementById('submitBtn');

if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = (formData.get('name') || '').toString().trim();
    const email = (formData.get('email') || '').toString().trim();
    const business = (formData.get('business') || '').toString().trim();
    const message = (formData.get('message') || '').toString().trim();
    const accessKey = (formData.get('access_key') || '').toString().trim();

    if (formStatus) {
      formStatus.className = 'form-status';
      formStatus.style.display = 'none';
      formStatus.textContent = '';
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
    }

    // If an access key is configured, send directly via API
    if (accessKey && accessKey !== 'YOUR_ACCESS_KEY_HERE') {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData,
        });
        const result = await response.json();

        if (result.success) {
          if (formStatus) {
            formStatus.className = 'form-status success';
            formStatus.textContent = `Thank you, ${name || 'there'}! Your inquiry has been sent. I'll get back to you within 24 hours.`;
          }
          contactForm.reset();
          return;
        } else {
          throw new Error(result.message || 'Submission failed');
        }
      } catch (err) {
        console.warn('Direct submission error, falling back to mailto:', err);
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Start my project';
        }
      }
    }

    // Graceful fallback to mailto if no key configured or offline
    const subject = encodeURIComponent(`New project inquiry from ${name || 'a potential client'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nBusiness: ${business || 'n/a'}\n\nProject details:\n${message}`
    );

    if (formStatus) {
      formStatus.className = 'form-status success';
      formStatus.textContent = 'Opening your email client to send your inquiry...';
    }

    window.location.href = `mailto:naszjeighallensaguid@gmail.com?subject=${subject}&body=${body}`;

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Start my project';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const revealEls = Array.from(document.querySelectorAll('.reveal'));
  if (!revealEls.length) return;

  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const idx = Math.max(0, revealEls.indexOf(el));
      const delay = Math.min(idx * 60, 360);
      el.style.transitionDelay = `${delay}ms`;
      el.classList.add('in-view');
      observer.unobserve(el);

      window.setTimeout(() => {
        el.style.transitionDelay = '';
      }, delay + 800);
    });
  }, { threshold: 0.12 });

  revealEls.forEach((el) => obs.observe(el));
});

(function () {
  const menuToggle = document.getElementById('menuToggle');
  const siteNav = document.getElementById('siteNav');
  if (!menuToggle || !siteNav) return;

  function setOpen(open) {
    document.body.classList.toggle('nav-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  menuToggle.addEventListener('click', () => {
    setOpen(!document.body.classList.contains('nav-open'));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });
})();

(function () {
  const THEME_KEY = 'nsz-theme';
  const toggleId = 'themeToggle';

  function applyTheme(theme) {
    const isDark = theme === 'dark';
    document.documentElement.classList.toggle('night-mode', isDark);
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    const btn = document.getElementById(toggleId);
    if (btn) btn.setAttribute('aria-pressed', String(isDark));
  }

  document.addEventListener('DOMContentLoaded', () => {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      applyTheme(saved || (prefersDark ? 'dark' : 'light'));

      const toggle = document.getElementById(toggleId);
      if (!toggle) return;

      toggle.addEventListener('click', () => {
        const next = document.documentElement.classList.contains('night-mode') ? 'light' : 'dark';
        applyTheme(next);
        try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* ignore */ }
      });
    } catch (e) {
      console.error('Theme init error', e);
    }
  });
})();

(function () {
  const modal = document.getElementById('projectModal');
  if (!modal) return;

  const closeBtn = document.getElementById('modalClose');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalStatus = document.getElementById('modalStatus');
  const modalTools = document.getElementById('modalTools');
  const modalLiveLink = document.getElementById('modalLiveLink');

  function openModal(card) {
    modalImage.src = card.dataset.image || '';
    modalImage.alt = card.dataset.title || '';
    modalTitle.textContent = card.dataset.title || '';
    modalDescription.textContent = card.dataset.description || '';
    modalStatus.textContent = card.dataset.status || '';
    modalTools.textContent = card.dataset.tools || '';

    const url = card.dataset.url || '';
    if (url) {
      modalLiveLink.href = url;
      modalLiveLink.style.display = 'inline-flex';
    } else {
      modalLiveLink.removeAttribute('href');
      modalLiveLink.style.display = 'none';
    }

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.case-study').forEach((card) => {
    if (!card.dataset.title) return;
    card.addEventListener('click', () => openModal(card));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(card);
      }
    });
  });

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });
})();

(function () {
  const lightbox = document.getElementById('shotLightbox');
  if (!lightbox) return;

  const img = document.getElementById('shotLightboxImg');
  const cap = document.getElementById('shotLightboxCap');
  const closeBtn = document.getElementById('shotLightboxClose');

  function openShot(button) {
    img.src = button.dataset.shot || '';
    img.alt = button.querySelector('img')?.alt || '';
    cap.textContent = button.dataset.caption || '';
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeShot() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    img.removeAttribute('src');
  }

  document.querySelectorAll('.shot-open').forEach((button) => {
    button.addEventListener('click', () => openShot(button));
  });

  closeBtn.addEventListener('click', closeShot);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeShot();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) closeShot();
  });
})();
