const menuToggle = document.querySelector('#menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');

menuToggle?.addEventListener('click', () => {
  const willOpen = mobileMenu.hidden;
  mobileMenu.hidden = !willOpen;
  menuToggle.setAttribute('aria-expanded', String(willOpen));
  menuToggle.setAttribute('aria-label', willOpen ? 'Close menu' : 'Open menu');
  menuToggle.querySelector('.menu-icon').textContent = willOpen ? '×' : '☰';
});

mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.hidden = true;
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Open menu');
    const icon = menuToggle?.querySelector('.menu-icon');
    if (icon) icon.textContent = '☰';
  });
});

const filterButtons = document.querySelectorAll('[data-filter]');
const ballCards = document.querySelectorAll('.ball-card');
const emptyFilter = document.querySelector('#empty-filter');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle('is-active', item === button));
    let visibleCount = 0;
    ballCards.forEach((card) => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.hidden = !show;
      if (show) visibleCount += 1;
    });
    if (emptyFilter) emptyFilter.hidden = visibleCount !== 0;
  });
});
