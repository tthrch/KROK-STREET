let products = [
    { name: `Кросівки Vortex Runner`, category: `Кросівки`, price: 2399, inStock: true, priceWithDiscount: 2239 },
    { name: `Кросівки Midnight Court`, category: `Кросівки`, price: 2299, inStock: true, priceWithDiscount: 1899 },
    { name: `Кросівки Lime Pulse`, category: `Кросівки`, price: 2199, inStock: false, priceWithDiscount: 2199 },
    { name: `Кросівки Steel Frame`, category: `Кросівки`, price: 2650, inStock: true, priceWithDiscount: 2650 },

    { name: `Худі Blockletter`, category: `Худі`, price: 1450, inStock: true, priceWithDiscount: 1450 },
    { name: `Худі Cloudwash`, category: `Худі`, price: 1590, inStock: true, priceWithDiscount: 1590 },
    { name: `Худі Night Signal`, category: `Худі`, price: 1690, inStock: false, priceWithDiscount: 1690 },
    { name: `Худі Concrete`, category: `Худі`, price: 1380, inStock: true, priceWithDiscount: 1380 },

    { name: `Кепка Low Arc`, category: `Кепки`, price: 599, inStock: true, priceWithDiscount: 599 },
    { name: `Кепка Fieldwork`, category: `Кепки`, price: 649, inStock: true, priceWithDiscount: 649 },
    { name: `Кепка Nightshade`, category: `Кепки`, price: 620, inStock: false, priceWithDiscount: 620 },
    { name: `Кепка Sunline`, category: `Кепки`, price: 549, inStock: true, priceWithDiscount: 549 },

    { name: `Футболка Base Tee`, category: `Футболки`, price: 490, inStock: true, priceWithDiscount: 490 },
    { name: `Футболка Blockprint`, category: `Футболки`, price: 590, inStock: true, priceWithDiscount: 590 },
    { name: `Футболка Skyline`, category: `Футболки`, price: 540, inStock: false, priceWithDiscount: 540 },
    { name: `Футболка Mono Logo`, category: `Футболки`, price: 470, inStock: true, priceWithDiscount: 470 }
];

function selectCategory(category) {
    let elements = document.getElementsByClassName(`katalog__product`);
    let categoryButtons = document.getElementsByClassName(`category`);
    let targetCategory = ``;
    let activeElementIndex = 0; 

    switch (category) {
        case `sneakers`:
            targetCategory = `Кросівки`;
            activeElementIndex = 1;
            break;
        case `hoodies`:
            targetCategory = `Худі`;
            activeElementIndex = 2;
            break;
        case 'caps':
            targetCategory = `Кепки`;
            activeElementIndex = 3;
            break;
        case 't-shirts':
            targetCategory = `Футболки`;
            activeElementIndex = 4;
            break;
        case `all`:
        default:
            targetCategory = 'all';
            activeElementIndex = 0;
            break;
    }

    for (let i = 0; i < categoryButtons.length; i++) {
        categoryButtons[i].removeAttribute('id');
    }

    categoryButtons[activeElementIndex].setAttribute('id', 'active__category');

    for (let i = 0; i < products.length; i++) {
        if (targetCategory === `all` || products[i].category === targetCategory) {
            elements[i].style.display = `flex`;
        } else {
            elements[i].style.display = `none`;
        }
    }
}

