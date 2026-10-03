const filterButtons = document.querySelectorAll<HTMLButtonElement>('[data-filter]');
const ballCards = document.querySelectorAll<HTMLElement>('.ball-card');
const emptyFilter = document.querySelector<HTMLElement>('#empty-filter');

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
