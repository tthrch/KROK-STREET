const cartButton = document.querySelector('.cart');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.modal__close');
const catalogButton = document.querySelector('.modal__btn');

cartButton.addEventListener('click', () => {
  modal.classList.add('modal--open');
});

closeButton.addEventListener('click', () => {
  modal.classList.remove('modal--open');
});

catalogButton.addEventListener('click', () => {
  modal.classList.remove('modal--open');

  const catalog = document.querySelector('#katalog');

  setTimeout(() => {
    catalog.scrollIntoView({
      behavior: 'smooth'
    });
  }, 200);
});

const catalogButtons = document.querySelectorAll('a[href="#katalog"]');

catalogButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();

    document.querySelector('#katalog').scrollIntoView({
      behavior: 'smooth'
    });
  });
});
