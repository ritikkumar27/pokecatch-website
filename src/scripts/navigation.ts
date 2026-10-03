const menuToggle = document.querySelector<HTMLButtonElement>('#menu-toggle');
const mobileMenu = document.querySelector<HTMLElement>('#mobile-menu');

if (menuToggle && mobileMenu) {
  const setMenuOpen = (isOpen: boolean) => {
    mobileMenu.hidden = !isOpen;
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    const icon = menuToggle.querySelector('.menu-icon');
    if (icon) icon.textContent = isOpen ? '×' : '☰';
  };

  menuToggle.addEventListener('click', () => setMenuOpen(mobileMenu.hidden === true));
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });
}
