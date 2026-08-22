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
      // compute a small stagger based on index (clamped)
      const idx = Math.max(0, revealEls.indexOf(el));
      const delay = Math.min(idx * 70, 420);
      el.style.transitionDelay = `${delay}ms`;
      el.classList.add('in-view');
      observer.unobserve(el);
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
    // set both class and attribute for compatibility with different CSS approaches
    document.documentElement.classList.toggle('night-mode', isDark);
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    const btn = document.getElementById(toggleId);
    if (btn) {
      btn.setAttribute('aria-pressed', String(isDark));
        // keep icon-only button; SVG visibility handled via CSS based on aria-pressed
    }
  }

  // Apply on load (try saved preference, then OS preference, then default to light)
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
      // graceful failure: do nothing
      console.error('Theme init error', e);
    }
  });
})();
