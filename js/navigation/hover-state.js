// Nav hover effect
document.querySelectorAll('.nav__item').forEach(listEl => {
    listEl.addEventListener('click', () => {
      document.querySelector('.hoverState')?.classList.remove('hoverState');
      listEl.classList.add('hoverState');
    });
  });
  
  // Pagination highlight
  document.querySelectorAll('.pagination__item').forEach(linkEl => {
    linkEl.addEventListener('click', () => {
      document.querySelector('.special')?.classList.remove('special');
      linkEl.classList.add('special');
    });
  });
  
  // Active tab highlight
  document.querySelectorAll('.list__item').forEach(linkEl => {
    linkEl.addEventListener('click', () => {
      document.querySelector('.active')?.classList.remove('active');
      linkEl.classList.add('active');
    });
  });
  