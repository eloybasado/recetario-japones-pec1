import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-list');

if (menuButton && nav) {
  const closeMenu = function () {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menú principal');
    nav.classList.remove('is-open');
  };

  menuButton.addEventListener('click', function () {
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isExpanded));
    menuButton.setAttribute('aria-label', isExpanded ? 'Abrir menú principal' : 'Cerrar menú principal');
    nav.classList.toggle('is-open');
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  window.addEventListener('resize', function () {
    if (window.matchMedia('(min-width: 48rem)').matches) {
      closeMenu();
    }
  });
}

GLightbox({
  selector: '.glightbox',
});
