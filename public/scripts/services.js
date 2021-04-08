'use strict';

const serviceItemTitles = document.querySelectorAll('.service__item-title');

function showContent(node, isInit = false) {
    const arrow = node.querySelector('.service__item-arrow');
    const parent = node.parentNode;
    const content = parent.querySelector('.service__item-content');
    const height = parent.querySelector('.content-h').offsetHeight;
    const isActive = arrow.classList.contains('active');

    if (isInit) {
        if (isActive) content.style.height = `${height}px`;
        return;
    }

    isActive
        ? content.style.height = '0'
        : content.style.height = `${height}px`;

    arrow.classList.toggle('active');
}

serviceItemTitles.forEach(title => {
    showContent(title, true);
    title.addEventListener('click', () => showContent(title));
});

// https://michalsnik.github.io/aos/
AOS.init({
    disable: function () {
        var maxWidth = 910;
        return window.innerWidth < maxWidth;
    }
});