'use strict';

const form = document.querySelector('#form');
const navSelect = document.querySelector('#nav-select');
const formButton = document.querySelector('#form-button');
let nodeCounter = 0;

function nodeCreate(action) {
    switch (action) {
        case 'TEXT_BLOCK':
            const textBlock = getTextBlock();
            createNodeBlock(textBlock);
            break;
        case 'TITLE':
            const title = getTitle();
            createNodeBlock(title);
            break;
        case 'LIST':
            const list = getList();
            createNodeBlock(list);
            break;
        case 'IMG_BLOCK':
            const imgBlock = getImgBlock();
            createNodeBlock(imgBlock);
            break;
        case 'IMG_AND_I_BLOCK':
            const imgAndIBlock = getImgAndIBlock();
            createNodeBlock(imgAndIBlock);
            break;
        default:
            console.log('Default');
    }
}

function nodeDuplicate(elem, node) {
    elem.insertAdjacentHTML('beforebegin', node);
}

function nodeDelete(nodeId, parentId, classCounter) {
    const parentNode = document.getElementById(parentId);
    const childNodes = parentNode.querySelectorAll(classCounter);
    const childNodesLength = childNodes.length;
    if (childNodesLength === 1) {
        parentNode.remove();
        return;
    }
    const node = document.getElementById(nodeId);
    node.remove();
}

function createNodeBlock(nodeBlock) {
    formButton.insertAdjacentHTML('beforebegin', nodeBlock);
    navSelect.options[0].selected = 'selected';
}

navSelect.addEventListener('change', () => {
    const index = navSelect.options.selectedIndex;
    const value = navSelect.options[index].value;

    switch (value) {
        case 'TEXT_BLOCK':
            nodeCreate('TEXT_BLOCK');
            break;
        case 'TITLE':
            nodeCreate('TITLE');
            break;
        case 'LIST':
            nodeCreate('LIST');
            break;
        case 'IMG_BLOCK':
            nodeCreate('IMG_BLOCK');
            break;
        case 'IMG_AND_I_BLOCK':
            nodeCreate('IMG_AND_I_BLOCK');
            break;
        default:
            console.log('Default');
    }
});

function getTextBlock() {
    nodeCounter++;
    return `
        <div id='text-block-${nodeCounter}' class='mb-5 remove'>
            <p class='text-center'>Текстовый блок</p>
            <div id='paragraph-${nodeCounter}' class='mb-3 counter'>
                <div class='d-flex justify-content-between'>
                    <label class='form-label'>p</label>
                    <span onclick='nodeDelete("paragraph-${nodeCounter}", "text-block-${nodeCounter}", ".counter")'>x</span>
                </div>
                <textarea class='form-control' type='text' rows='3' name='${nodeCounter}' required></textarea>
                <input type='hidden' name='types' value='paragraph'>
            </div>
            <b onclick='nodeDuplicate(this, getParagraph(${nodeCounter}, "text-block-${nodeCounter}"))'>+</b>
        </div>
    `;
}

function getParagraph(name, parentId) {
    nodeCounter++;
    return `
        <div id='paragraph-${nodeCounter}' class='mb-3 counter'>
            <div class='d-flex justify-content-between'>
                <label class='form-label'>p</label>
                <span onclick='nodeDelete("paragraph-${nodeCounter}", "${parentId}", ".counter")'>x</span>
            </div>
            <textarea class='form-control' type='text' rows='3' name='${name}' required></textarea>
        </div>
    `;
}

function getTitle() {
    nodeCounter++;
    return `
        <div id='title-${nodeCounter}' class='mb-5 remove'>
            <p class='text-center'>Заголовок</p>
            <div class='d-flex justify-content-between counter'>
                <label class='form-label'>h3</label>
                <span onclick='nodeDelete(${null}, "title-${nodeCounter}", ".counter")'>x</span>
            </div>
            <input class='form-control mb-2' type='text' name=${nodeCounter}>
            <input type='hidden' name='types' value='title'>
        </div>
    `;
}

function getList() {
    nodeCounter++;
    return `
        <ul id='list-${nodeCounter}' class='mb-5 remove'>
            <p class='text-center'>Список</p>
            <li id='li-${nodeCounter}' class='mb-3 counter'>
                <div class='d-flex justify-content-between'>
                    <label class='form-label'>li</label>
                    <span onclick='nodeDelete(id="li-${nodeCounter}", "list-${nodeCounter}", ".counter")'>x</span>
                </div>
                <textarea class='form-control' type='text' rows='1' name=${nodeCounter} required></textarea>
                <input type='hidden' name='types' value='list'>
            </li>
            <b onclick='nodeDuplicate(this, getListItem(${nodeCounter}, "list-${nodeCounter}"))'>+</b>
        </ul>
    `;
}

function getListItem(name, parentId) {
    nodeCounter++;
    return `
        <li id='li-${nodeCounter}' class='mb-3 counter'>
            <div class='d-flex justify-content-between'>
                <label class='form-label'>li</label>
                <span onclick='nodeDelete(id="li-${nodeCounter}", "${parentId}", ".counter")'>x</span>
            </div>
            <textarea class='form-control' type='text' rows='1' name=${name} required></textarea>
        </li>
    `;
}

function getImgBlock() {
    nodeCounter++;
    return `
        <div id='img-block-${nodeCounter}' class='mb-5 remove'>
            <p class='text-center'>Изображения</p>
            <div id='img-${nodeCounter}' class='mb-3 counter'>
                <div class='d-flex justify-content-between'>
                    <label class='form-label'>img</label>
                    <span onclick='nodeDelete(id="img-${nodeCounter}", "img-block-${nodeCounter}", ".counter")'>x</span>
                </div>
                <input class='form-control' type='file' name='${nodeCounter}' required>
                <input type='hidden' name='types' value='images'>
            </div>
            <b onclick='nodeDuplicate(this, getImg(${nodeCounter}, "img-block-${nodeCounter}"))'>+</b>
        </div>
    `;
}

function getImg(name, parentId) {
    nodeCounter++;
    return `
        <div id='img-${nodeCounter}' class='mb-3 counter'>
            <div class='d-flex justify-content-between'>
                <label class='form-label'>img</label>
                <span onclick='nodeDelete(id="img-${nodeCounter}", "${parentId}", ".counter")'>x</span>
            </div>
            <input class='form-control' type='file' name='${name}' required>
        </div>
    `;
}

function getImgAndIBlock() {
    nodeCounter++;
    return `
        <div id='img-and-i-block-${nodeCounter}' class='mb-5 remove'>
            <p class='text-center'>Изображения с подписью</p>
            <div id='img-and-i-${nodeCounter}' class='mb-3 counter'>
                <div class='d-flex justify-content-between'>
                    <label class='form-label'>img</label>
                    <span onclick='nodeDelete(id="img-and-i-${nodeCounter}", "img-and-i-block-${nodeCounter}", ".counter")'>x</span>
                </div>
                <input class='form-control mb-3' type='file' name='${nodeCounter}' required>
                <label class='form-label'>i</label>
                <input class='form-control' type='text' name='${nodeCounter}' required>
                <input type='hidden' name='types' value='images-and-i'>
            </div>
            <b onclick='nodeDuplicate(this, getImgAndI(${nodeCounter}, "img-and-i-block-${nodeCounter}"))'>+</b>
        </div>
    `;
}

function getImgAndI(name, parentId) {
    nodeCounter++;
    return `
        <div id='img-and-i-${nodeCounter}' class='mb-3 counter'>
            <div class='d-flex justify-content-between'>
                <label class='form-label'>img</label>
                <span onclick='nodeDelete("img-and-i-${nodeCounter}", "${parentId}", ".counter")'>x</span>
            </div>
            <input class='form-control mb-3' type='file' name='${name}' required>
            <label class='form-label'>i</label>
            <input class='form-control' type='text' name='${name}' required>
        </div>
    `;
}

const formCheckProduct = document.querySelector('#form-check-product');
const formCheckSubcategory = document.querySelector('#form-check-subcategory');
const formTitle = document.querySelector('#form-title');

formCheckProduct.addEventListener('click', () => {
    formTitle.textContent = 'Создать продукт';
    navSelect.removeAttribute('disabled');
});

formCheckSubcategory.addEventListener('click', () => {
    formTitle.textContent = 'Создать подкатегорию';
    navSelect.setAttribute('disabled', 'disabled');
    document.querySelectorAll('.remove').forEach(node => node.remove());
});

const newCategory = document.querySelector('#new-category');
const newCategoryButton = document.querySelector('#new-category-button');
const formSelect = document.querySelector('#form-select');

newCategoryButton.addEventListener('click', event => {
    event.preventDefault();
    let value = newCategory.value.trim();

    if (!value) return;

    value = value[0].toUpperCase() + value.slice(1);
    const option = `<option value='${value}'>${value}</option>`;
    formSelect.insertAdjacentHTML('beforeend', option);
    newCategory.value = '';
});