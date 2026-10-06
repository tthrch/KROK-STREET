let products = [
    { name: `Кросівки Vortex Runner`, category: `Кросівки`, price: 2399, inStock: true, priceWithDiscount: 2399, info: `Легкі бігові кросівки з рельєфною підошвою — тримають зчеплення на будь-якому асфальті.`, imgLink: `` },
    { name: `Кросівки Midnight Court`, category: `Кросівки`, price: 2299, inStock: true, priceWithDiscount: 1899, info: `Темні силуетні кросівки з динамічним дизайном для нічних прогулянок та активного дня.`, imgLink: `` },
    { name: `Кросівки Lime Pulse`, category: `Кросівки`, price: 2199, inStock: false, priceWithDiscount: 2199, info: `Чорна основа з яскравими неоновими акцентами — додає динаміки кожному кроку.`, imgLink: `` },
    { name: `Кросівки Steel Frame`, category: `Кросівки`, price: 2650, inStock: true, priceWithDiscount: 2650, info: `Технологічний дизайн із масивними елементами — надійний захист та стритстаيل у кожній деталі.`, imgLink: `` },

    { name: `Худі Blockletter`, category: `Худі`, price: 1450, inStock: true, priceWithDiscount: 1450, info: `Оверсайз худі з цупкої бавовни та акцентним графічним принтом у стилі вуличної культури.`, imgLink: `` },
    { name: `Худі Cloudwash`, category: `Худі`, price: 1590, inStock: true, priceWithDiscount: 1590, info: `Текстурне худі з ефектом вареної тканини — унікальний візерунок та максимальний затишок.`, imgLink: `` },
    { name: `Худі Night Signal`, category: `Худі`, price: 1690, inStock: false, priceWithDiscount: 1690, info: `Мінімалістичне чорне худі з фірмовою деталлю на грудях для стриманих щоденних образів.`, imgLink: `` },
    { name: `Худі Concrete`, category: `Худі`, price: 1380, inStock: true, priceWithDiscount: 1380, info: `Світло-сірий база-худі з м'яким флісовим начісом — ідеальний вибір для холодної погоди.`, imgLink: `` },

    { name: `Кепка Low Arc`, category: `Кепки`, price: 599, inStock: true, priceWithDiscount: 599, info: `Класична бейсболка зі вигнутим козирком та вишитим написом для щоденного захисту від сонця.`, imgLink: `` },
    { name: `Кепка Fieldwork`, category: `Кепки`, price: 649, inStock: true, priceWithDiscount: 649, info: `Лаконічна кепка з виразною вишивкою — міцна тканина та комфортна посадкова форма.`, imgLink: `` },
    { name: `Кепка Nightshade`, category: `Кепки`, price: 620, inStock: false, priceWithDiscount: 620, info: `Тракер із сітчастою спинкою для кращої вентиляції та контрастним логотипом спереду.`, imgLink: `` },
    { name: `Кепка Sunline`, category: `Кепки`, price: 549, inStock: true, priceWithDiscount: 549, info: `Чорна кепка з яскравій деталізованій вишивці у вигляді сонця — гарний акцент у кежуал-цибулі.`, imgLink: `` },

    { name: `Футболка Base Tee`, category: `Футболки`, price: 490, inStock: true, priceWithDiscount: 490, info: `Базова чорна футболка з преміальної бавовни з невеликим контрастним лого на грудях.`, imgLink: `` },
    { name: `Футболка Blockprint`, category: `Футболки`, price: 590, inStock: true, priceWithDiscount: 590, info: `Футболка з великим авторським графічним принтом спереду — для тих, хто любить виділятися.`, imgLink: `` },
    { name: `Футболка Skyline`, category: `Футболки`, price: 540, inStock: false, priceWithDiscount: 540, info: `Вулична футболка з міським фотопринтом та якісним друком, що не вицвітає.`, imgLink: `` },
    { name: `Футболка Mono Logo`, category: `Футболки`, price: 470, inStock: true, priceWithDiscount: 470, info: `Мінімалістичний дизайн із витонченим вишитим логотипом — універсальна основа для будь-якого аутфіту.`, imgLink: `` }
];

let elements = document.getElementsByClassName(`katalog__product`);
let productButton = document.getElementsByClassName(`product__button`);
let productPrice = document.getElementsByClassName(`product__price`);
let katalogProductsNumber = document.querySelector(`.katalog__productsNumber`);
let productModal = document.querySelector(`.product__modal`);
let productsNumber = 16;

katalogProductsNumber.textContent = `${products.length} товарів`;

function formatPrice(price) {
    let str = String(price);

    if (str.length >= 4) {
        let thousands = str[0];
        let last = str.slice(-3);
        return `${thousands} ${last} ₴`;
    }

    return `${str} ₴`;
}

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

//  functions

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

function costFilter(value) {
}

function resetFilters() {
    if (isActive) {
        onlyInStock();
    }

    if (categoryFilter !== `all`) {
        selectCategory(`all`);
    }
}

function openModal(index) {
    let isOpen = false;


}