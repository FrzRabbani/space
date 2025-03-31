// Nav Hover

const listItemEl = document.querySelectorAll('.nav__item');

listItemEl.forEach(listEl => {
  listEl.addEventListener('click', () => {
     document.querySelector('.hoverState')?.classList.remove('hoverState');
     listEl.classList.add('hoverState');
  });
});


// pagination
const linkElList = document.querySelectorAll('.pagination__item');
console.log(linkElList);
 
linkElList.forEach(linkEl => {
   linkEl.addEventListener('click', () => {
      document.querySelector('.special')?.classList.remove('special');
      linkEl.classList.add('special');
   });
});

const btnElList = document.querySelectorAll('.list__item');
console.log(btnElList);

btnElList.forEach(linkEl => {
   linkEl.addEventListener('click', () => {
      document.querySelector('.active')?.classList.remove('active');
      linkEl.classList.add('active');
   });
});
