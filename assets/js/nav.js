const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuBackdrop = document.getElementById('menu-backdrop');

function setMenuOpen(isOpen) {
  menuBtn.classList.toggle('open', isOpen);
  mobileMenu.classList.toggle('open', isOpen);
  menuBtn.setAttribute('aria-expanded', String(isOpen));

  if (menuBackdrop) {
    menuBackdrop.classList.toggle('opacity-100', isOpen);
    menuBackdrop.classList.toggle('pointer-events-auto', isOpen);
    menuBackdrop.classList.toggle('opacity-0', !isOpen);
    menuBackdrop.classList.toggle('pointer-events-none', !isOpen);
  }

  document.body.classList.toggle('overflow-hidden', isOpen && window.innerWidth < 768);
}

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const willOpen = !mobileMenu.classList.contains('open');
    setMenuOpen(willOpen);
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  if (menuBackdrop) {
    menuBackdrop.addEventListener('click', () => setMenuOpen(false));
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setMenuOpen(false);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) setMenuOpen(false);
  });
}

const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 12) {
      navbar.classList.add('nav-shadow', 'bg-white/90', 'backdrop-blur');
    } else {
      navbar.classList.remove('nav-shadow', 'bg-white/90', 'backdrop-blur');
    }
  });
}

const revealTargets = document.querySelectorAll('.sweep, .fade-up');
if ('IntersectionObserver' in window && revealTargets.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  revealTargets.forEach((el) => observer.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('in-view'));
}
