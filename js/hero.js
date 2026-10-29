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


// search
let searchInput = document.querySelector(`.search`);

searchInput.addEventListener(`keydown`, (event) => {
    if (event.key === `Enter`) {
        searchProduct();
    }
});

function searchProduct() {
    let text = searchInput.value.toLowerCase().trim();
    let foundIndex = -1;

    for (let i = 0; i < products.length; i++) {
        let name = products[i].name.toLowerCase();

        if (name.includes(text)) {
            foundIndex = i;
            break;
        }
    }

    if (text === `` || foundIndex === -1) {
        alert(`Товар не знайдено`);
        return;
    }

    if (isOpen === true) {
        openModal(`close`);
    }

    resetFilters();

    document.querySelector(`#katalog`).scrollIntoView({
        behavior: `smooth`
    });

    searchInput.value = ``;

    setTimeout(() => {
        openModal(foundIndex);
    }, 300);
}
