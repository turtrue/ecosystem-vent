'use strict';

// Burger menu
const burgerBtn = document.querySelector('#burger-btn');
const burgerMenu = document.querySelector('#burger-menu');

burgerBtn.addEventListener('click', () => {
    document.body.classList.toggle('active');
    burgerMenu.classList.toggle('active');
});

document.body.addEventListener('click', event => {
    if (event.target === document.body) {
        burgerMenu.classList.remove('active');
        document.body.classList.remove('active');
    }
});

// Search
const dataProducts = document.querySelector('#data-products');
const searchInput = document.querySelector('#search-input');
const searchOutput = document.querySelector('#search-output');
const data = dataProducts.dataset.products;
const products = JSON.parse(data).map(product => {
    return {
        name: product.name.toLowerCase(),
        translit: product.translit
    }
});

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
            if (product.name.includes(value)) {
                const node = getLi(product.translit, product.name);
                output.insertAdjacentHTML('beforeend', node);
            }
        });
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