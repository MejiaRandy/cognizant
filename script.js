/* Visual interactions only. Form delivery uses the native HTML POST. */
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');

function setMenuOpen(open) {
  nav.classList.toggle('open', open);
  toggle.classList.toggle('active', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
}

toggle.addEventListener('click', () => {
  setMenuOpen(toggle.getAttribute('aria-expanded') !== 'true');
});
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => setMenuOpen(false));
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false);
    toggle.focus();
  }
});
document.addEventListener('click', event => {
  if (!nav.contains(event.target) && !toggle.contains(event.target)) setMenuOpen(false);
});
const desktopMenu = window.matchMedia('(min-width: 851px)');
desktopMenu.addEventListener('change', event => {
  if (event.matches) setMenuOpen(false);
});

// Content is visible by default, even if JavaScript is unavailable.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reduceMotion.matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });
  document.querySelectorAll('.reveal').forEach(item => {
    if (item.getBoundingClientRect().top > window.innerHeight) {
      item.classList.add('will-reveal');
      observer.observe(item);
    }
  });
}

// Carry the program choice into the contact form.
const programSelect = document.querySelector('#contact-program');
document.querySelectorAll('.program-card').forEach(card => {
  card.querySelector('a').addEventListener('click', () => {
    programSelect.value = card.querySelector('h3').textContent.trim();
  });
});
