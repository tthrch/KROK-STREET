let products = [
    { name: `Кросівки Vortex Runner`, category: `Кросівки`, price: 2399, inStock: true, priceWithDiscount: 2399, info: `Легкі бігові кросівки з рельєфною підошвою — тримають зчеплення на будь-якому асфальті.`, imgLink: `./imgs/katalog/vortex-runner.webp` },
    { name: `Кросівки Midnight Court`, category: `Кросівки`, price: 2299, inStock: true, priceWithDiscount: 1899, info: `Темні силуетні кросівки з динамічним дизайном для нічних прогулянок та активного дня.`, imgLink: `./imgs/katalog/midnight-court-runner.webp` },
    { name: `Кросівки Lime Pulse`, category: `Кросівки`, price: 2199, inStock: false, priceWithDiscount: 2199, info: `Чорна основа з яскравими неоновими акцентами — додає динаміки кожному кроку.`, imgLink: `./imgs/katalog/lime-pulse.webp` },
    { name: `Кросівки Steel Frame`, category: `Кросівки`, price: 2650, inStock: true, priceWithDiscount: 2650, info: `Технологічний дизайн із масивними елементами — надійний захист та стритстаيل у кожній деталі.`, imgLink: `./imgs/katalog/steel-frame.webp` },

    { name: `Худі Blockletter`, category: `Худі`, price: 1450, inStock: true, priceWithDiscount: 1450, info: `Оверсайз худі з цупкої бавовни та акцентним графічним принтом у стилі вуличної культури.`, imgLink: `./imgs/katalog/blockletter.webp` },
    { name: `Худі Cloudwash`, category: `Худі`, price: 1590, inStock: true, priceWithDiscount: 1590, info: `Текстурне худі з ефектом вареної тканини — унікальний візерунок та максимальний затишок.`, imgLink: `./imgs/katalog/cloud-wash.webp` },
    { name: `Худі Night Signal`, category: `Худі`, price: 1690, inStock: false, priceWithDiscount: 1690, info: `Мінімалістичне чорне худі з фірмовою деталлю на грудях для стриманих щоденних образів.`, imgLink: `./imgs/katalog/night-signal.webp` },
    { name: `Худі Concrete`, category: `Худі`, price: 1380, inStock: true, priceWithDiscount: 1380, info: `Світло-сірий база-худі з м'яким флісовим начісом — ідеальний вибір для холодної погоди.`, imgLink: `./imgs/katalog/concrete.webp` },

    { name: `Кепка Low Arc`, category: `Кепки`, price: 599, inStock: true, priceWithDiscount: 599, info: `Класична бейсболка зі вигнутим козирком та вишитим написом для щоденного захисту від сонця.`, imgLink: `./imgs/katalog/low-arc.webp` },
    { name: `Кепка Fieldwork`, category: `Кепки`, price: 649, inStock: true, priceWithDiscount: 649, info: `Лаконічна кепка з виразною вишивкою — міцна тканина та комфортна посадкова форма.`, imgLink: `./imgs/katalog/fieldwork.webp` },
    { name: `Кепка Nightshade`, category: `Кепки`, price: 620, inStock: false, priceWithDiscount: 620, info: `Тракер із сітчастою спинкою для кращої вентиляції та контрастним логотипом спереду.`, imgLink: `./imgs/katalog/nightshade.webp` },
    { name: `Кепка Sunline`, category: `Кепки`, price: 549, inStock: true, priceWithDiscount: 549, info: `Чорна кепка з яскравій деталізованій вишивці у вигляді сонця — гарний акцент у кежуал-цибулі.`, imgLink: `./imgs/katalog/sunline.webp` },

    { name: `Футболка Base Tee`, category: `Футболки`, price: 490, inStock: true, priceWithDiscount: 490, info: `Базова чорна футболка з преміальної бавовни з невеликим контрастним лого на грудях.`, imgLink: `./imgs/katalog/base-tee.webp` },
    { name: `Футболка Blockprint`, category: `Футболки`, price: 590, inStock: true, priceWithDiscount: 590, info: `Футболка з великим авторським графічним принтом спереду — для тих, хто любить виділятися.`, imgLink: `./imgs/katalog/blockprint.webp` },
    { name: `Футболка Skyline`, category: `Футболки`, price: 540, inStock: false, priceWithDiscount: 540, info: `Вулична футболка з міським фотопринтом та якісним друком, що не вицвітає.`, imgLink: `./imgs/katalog/skyline.webp` },
    { name: `Футболка Mono Logo`, category: `Футболки`, price: 470, inStock: true, priceWithDiscount: 470, info: `Мінімалістичний дизайн із витонченим вишитим логотипом — універсальна основа для будь-якого аутфіту.`, imgLink: `./imgs/katalog/monologo.webp` }
];

let body = document.getElementsByTagName(`body`) [0];
let elements = document.getElementsByClassName(`katalog__product`);
let productButton = document.getElementsByClassName(`product__button`);
let productPrice = document.getElementsByClassName(`product__price`);
let katalogProductsNumber = document.querySelector(`.katalog__productsNumber`);
let productModal = document.querySelector(`.products__modal`);
let productCountMinus = document.querySelector(`.numberMinus`);
let productCountPlus = document.querySelector(`.numberPlus`);
let productNumber = document.querySelector(`.number`);
let productSize = document.querySelectorAll(`.sizeSelect__size`);
let productCurrentSize
let productCount = 1;
let productsNumber = 16;

for (let i = 0; i < elements.length; i++) {
    productButton[i].addEventListener("click", () => {
        openModal(i);
    });
}

katalogProductsNumber.textContent = `${products.length} товарів`;


for (let i = 0; i < products.length; i++) {
    if (products[i].inStock === false) {
        let outStockAlert = document.createElement(`span`);
        elements[i].append(outStockAlert);
        outStockAlert.textContent = `Не має в наявності`;
        outStockAlert.setAttribute(`class`, `outStock__alert`);

        productButton[i].style.color = `#2C2C31`;
        productButton[i].style.borderColor = `#2C2C31`;
        productButton[i].style.cursor = `not-allowed`;
        productButton[i].textContent = `Не має в наявності`;
    }

    if (products[i].priceWithDiscount !== products[i].price) {
        let discountAlert = document.createElement(`span`);
        elements[i].append(discountAlert);
        discountAlert.setAttribute(`class`, `discount__alert`);
        discountAlert.textContent = `Знижка`;


        let priceBeforeDiscount = document.createElement(`span`);
        productPrice[i].append(priceBeforeDiscount);
        priceBeforeDiscount.setAttribute(`id`, `product__price__outDiscount`);

        priceBeforeDiscount.textContent = formatPrice(products[i].price);
    }
}

// modal

productCountMinus.addEventListener(`click`,() => {
    if (productCount !== 1) {
        productCount -= 1;
        productNumber.textContent = productCount;
    }
});

productCountPlus.addEventListener(`click`,() => {
    productCount += 1;
    productNumber.textContent = productCount;
});

for (let i = 0; i < productSize.length; i++) {
    productSize[i].addEventListener("click", () => {
        for (let j = 0; j < productSize.length; j++) {
            productSize[j].removeAttribute("id");
        }

        productSize[i].setAttribute("id", "active__size");
        productCurrentSize = productSize[i].textContent;
    });
}
//  functions

function formatPrice(price) {
    let str = String(price);

    if (str.length >= 4) {
        let thousands = str[0];
        let last = str.slice(-3);
        return `${thousands} ${last} ₴`;
    }

    return `${str} ₴`;
}

let categoryFilter = `all`;

function selectCategory(category) {
    let categoryButtons = document.getElementsByClassName(`category`);
    let targetCategory = ``;
    let activeElementIndex = 0;
    productsNumber = 16;

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
            targetCategory = 'all';
            activeElementIndex = 0;
            break;
    }

    categoryFilter = targetCategory;


    for (let i = 0; i < categoryButtons.length; i++) {
        categoryButtons[i].removeAttribute('id');
    }

    categoryButtons[activeElementIndex].setAttribute('id', 'active__category');

    for (let i = 0; i < products.length; i++) {
        if (targetCategory === `all` || products[i].category === targetCategory) {
            elements[i].style.display = `flex`;
        } else {
            elements[i].style.display = `none`;
            productPrice = productsNumber--;
        }
    }

    if (isActive) {
        onlyInStock();
    }


    setProductsCount(productsNumber);
}


let isActive = false;

function onlyInStock() {
    let circle = document.querySelector(`.circle`);
    let katalog__products = document.querySelector(`.katalog__products`);

    productsNumber = 0;

    if (isActive === false) {
        isActive = true;
        circle.style.alignSelf = `flex-end`;
        circle.setAttribute(`id`, `active__swich`);

        for (let i = 0; i < elements.length; i++) {
            if ((categoryFilter === `all` || products[i].category === categoryFilter) && products[i].inStock) {
                elements[i].style.display = `flex`;
                productsNumber++;
            } else {
                elements[i].style.display = `none`;
            }
        }

        setProductsCount(productsNumber);
    }
    else {
        isActive = false;
        circle.removeAttribute(`id`);
        circle.style.alignSelf = `flex-start`;

        for (let i = 0; i < elements.length; i++) {
            if (categoryFilter === `all` || products[i].category === categoryFilter) {
                elements[i].style.display = `flex`;
                productsNumber++;
            } else {
                elements[i].style.display = `none`;
            }
        }

        setProductsCount(productsNumber);
    }

    if (categoryFilter !== `all`) {
        katalog__products.style.justifyContent = `left`;
    }
}

function setProductsCount(number) {
    if (number === 1) {
        katalogProductsNumber.textContent = `${number} товар`
    }

    else if (number >= 5) {
        katalogProductsNumber.textContent = `${number} товарів`;
    }

    else {
        katalogProductsNumber.textContent = `${number} товари`;
    }

}

let currentSort = `default`;

function costFilter(value) {
    currentSort = value;

    let indexes = [];
    for (let i = 0; i < products.length; i++) {
        indexes.push(i);
    }

    switch (value) {
        case `toExpensvive`:
            indexes.sort((a, b) => products[a].priceWithDiscount - products[b].priceWithDiscount);
            break;
        case `toCheep`:
            indexes.sort((a, b) => products[b].priceWithDiscount - products[a].priceWithDiscount);
            break;
        case `default`:
            break;
    }

    for (let i = 0; i < indexes.length; i++) {
        elements[indexes[i]].style.order = i;
    }
}

function resetFilters() {
    if (isActive) {
        onlyInStock();
    }

    if (categoryFilter !== `all`) {
        selectCategory(`all`);
    }

    if (currentSort !== `default`) {
        costFilter(`default`);
    }
}

let isOpen = false;
function openModal(index) {
    let modalBacdrop = document.querySelector(`.backdrop`);
    let modalImg = document.querySelector(`.modal__img`);
    let modalCategory = document.querySelector(`.modal__category`);
    let modalTitle = document.querySelector(`.products__modal .modal__title`);
    let modalInfo = document.querySelector(`.modal__info`);
    let modalPrice = document.querySelector(`.modal__price`);
    let modalOutStock = document.querySelector(`.modal__outStock`);
    let sizes = {
        other: [ `XS`, `S`, `M`, `L`, `XL` ],
        shoes: [ 40, 41, 42, 43, 44 ]
    };

    if (index === "close") {
        modalBacdrop.style.display = "none";
        body.style.overflow = "visible";
        isOpen = false;
        for (let j = 0; j < productSize.length; j++) {
            productSize[j].removeAttribute("id");
        }

        productSize[0].setAttribute("id", "active__size");
        productCurrentSize = `none`;

        return;
    }

    if (products[index].inStock === false) {
        modalOutStock.style.display = `flex`;
    } else {
        modalOutStock.style.display = `none`;
    }

    if (isOpen === false) {
        modalBacdrop.style.display = "flex";
        body.style.overflow = "hidden";
        isOpen = true;
    }

    else {
        modalBacdrop.style.display = `none`;
        body.style.overflow = `visible`;
        isOpen = false;
    }

    if (index !== `close`) {
        modalImg.setAttribute(`src`, products[index].imgLink)
        modalCategory.textContent = `URBN · ${products[index].category}`;
        modalTitle.textContent = products[index].name;
        modalInfo.textContent = products[index].info;
        modalPrice.textContent = formatPrice(products[index].priceWithDiscount);
        productCount = 1;
        productNumber.textContent = productCount;

        if (products[index].price !== products[index].priceWithDiscount) {
            let modalPriceBeforeDiscount = document.createElement(`span`);
            modalPrice.append(modalPriceBeforeDiscount);
            modalPriceBeforeDiscount.setAttribute(`id`, `modal__price__outDiscount`);
            modalPriceBeforeDiscount.textContent = formatPrice(products[index].price);
        }
    }

    if (products[index].category !== `Кросівки`) {
        for (let i = 0; i < productSize.length; i++) {
            productSize[i].textContent = sizes.other[i];
        }
    }

    else {
        for (let i = 0; i < productSize.length; i++) {
            productSize[i].textContent = sizes.shoes[i];
        }
    }
}