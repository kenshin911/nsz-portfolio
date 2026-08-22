const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = (formData.get('name') || '').toString().trim();
    const email = (formData.get('email') || '').toString().trim();
    const message = (formData.get('message') || '').toString().trim();

    const subject = encodeURIComponent(`New project inquiry from ${name || 'a potential client'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nProject details:\n${message}`
    );

    window.location.href = `mailto:naszjeighallensaguid@gmail.com?subject=${subject}&body=${body}`;
  });
}

/* Scroll-reveal using IntersectionObserver for better performance.
   Adds a small stagger based on element index so items don't all animate at once. */
document.addEventListener('DOMContentLoaded', () => {
  const revealEls = Array.from(document.querySelectorAll('.reveal'));
  if (!revealEls.length) return;

  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const idx = Math.max(0, revealEls.indexOf(el));
      const delay = Math.min(idx * 70, 420);
      el.style.transitionDelay = `${delay}ms`;
      el.classList.add('in-view');
      observer.unobserve(el);

      window.setTimeout(() => {
        el.style.transitionDelay = '';
      }, delay + 900);
    });
  }, { threshold: 0.12 });

  revealEls.forEach((el) => obs.observe(el));
});

// Theme toggle: manages a persistent night mode using a .night-mode class on <html>
(function () {
  const THEME_KEY = 'nsz-theme';
  const toggleId = 'themeToggle';

  function applyTheme(theme) {
    const isDark = theme === 'dark';

    // Apply a top-to-bottom stagger across major sections
    const waveTargets = document.querySelectorAll(
      '.site-header, .hero, #work, #benefits, #pricing, #contact, .site-footer'
    );
    waveTargets.forEach((el, i) => {
      el.classList.remove(
        'theme-wave-0', 'theme-wave-1', 'theme-wave-2',
        'theme-wave-3', 'theme-wave-4', 'theme-wave-5', 'theme-wave-6'
      );
      // force reflow so the class re-triggers transition-delay cleanly
      void el.offsetWidth;
      el.classList.add(`theme-wave-${Math.min(i, 6)}`);
    });

    document.documentElement.classList.toggle('night-mode', isDark);
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    const btn = document.getElementById(toggleId);
    if (btn) {
      btn.setAttribute('aria-pressed', String(isDark));
    }

    // clean up delay classes after the wave finishes so hover states
    // don't inherit a lingering transition-delay
    window.setTimeout(() => {
      waveTargets.forEach((el) => {
        el.classList.remove(
          'theme-wave-0', 'theme-wave-1', 'theme-wave-2',
          'theme-wave-3', 'theme-wave-4', 'theme-wave-5', 'theme-wave-6'
        );
      });
    }, 1200);
  }

  document.addEventListener('DOMContentLoaded', () => {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      applyTheme(saved || (prefersDark ? 'dark' : 'light'));

      const toggle = document.getElementById(toggleId);
      if (!toggle) return;

      toggle.addEventListener('click', () => {
        const currentIsDark = document.documentElement.classList.contains('night-mode');
        const next = currentIsDark ? 'light' : 'dark';
        applyTheme(next);
        try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* ignore */ }
      });
    } catch (e) {
      console.error('Theme init error', e);
    }
  });
})();

// Project detail modal
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

    modalLiveLink.href = card.dataset.url || '#';
    modalLiveLink.style.display = 'inline-flex';

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

  document.querySelectorAll('.project-row').forEach((card) => {
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