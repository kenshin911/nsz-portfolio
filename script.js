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
