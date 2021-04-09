'use strict';

// Burger menu
const body = document.body;
const burgerBtn = document.querySelector('#burger-btn');
const burgerMenu = document.querySelector('#burger-menu');

burgerBtn.addEventListener('click', () => {
    body.classList.toggle('active');
    burgerMenu.classList.toggle('active');
});

body.addEventListener('click', event => {
    if (event.target === body) {
        burgerMenu.classList.remove('active');
        body.classList.remove('active');
    }
});

// Search products
const dataProducts = document.querySelector('#data-products');
const searchInput = document.querySelector('#search-input');
const searchOutput = document.querySelector('#search-output');
const data = dataProducts.dataset.products;

/* Формируется новый массив продукции в котором имена продуктов приводятся к нижнему регистру */
const products = JSON.parse(data).map(product => {
    return {
        name: product.name.toLowerCase(),
        translit: product.translit
    }
});

// Сортировка продукции в алфавитном порядке
products.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
});

function getLi(link, value) {
    return `
        <li>
            <a href='/products/${link}'>${value}</a>
        </li>
    `;
}

function searchProduct(value, output, data) {
    value = value.trim();
    value = value.toLowerCase();

    while (output.firstChild) {
        output.removeChild(output.firstChild);
    }

    if (value) {
        data.forEach(product => {
            product.name.split(' ').forEach(word => {
                const letters = word.slice(0, value.length);

                if (letters === value) {
                    const node = getLi(product.translit, product.name);
                    output.insertAdjacentHTML('beforeend', node);
                }
            });
        });
    }

    if (window.matchMedia('(max-width: 768px)').matches) {
        output.firstChild
            ? body.classList.add('overflow-hidden')
            : body.classList.remove('overflow-hidden')
    }
}

searchInput.addEventListener('paste', event => {
    const value = event.target.value;
    searchProduct(value, searchOutput, products);
});

searchInput.addEventListener('input', event => {
    const value = event.target.value;
    searchProduct(value, searchOutput, products);
});