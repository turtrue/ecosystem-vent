'use strict';

const serviceItems = document.querySelectorAll('.service__item');
const serviceItemContents = document.querySelectorAll('.service__item-content');

function getAndSetNodeHeight(searchNode, getNode, setNode) {
    const height = searchNode.querySelector(getNode).offsetHeight;
    setNode.style.height = `${height}px`;
}

serviceItems.forEach(item => {
    item.addEventListener('click', event => {
        const isItemArrow = event.target.classList.contains('service__arrow');

        if (isItemArrow) {
            event.target.classList.toggle('active');
            const isItemArrowActive =
                event.target.classList.contains('active');

            const serviceItemContent = item.querySelector('.service__item-content');
            serviceItemContent.classList.toggle('active');

            if (isItemArrowActive) {
                getAndSetNodeHeight(item, '.content-h', serviceItemContent);
            } else {
                serviceItemContent.style.height = '0';
            }
        }
    });
});

serviceItemContents.forEach(serviceItemContent => {
    const isItemContentActive = serviceItemContent.classList.contains('active');

    if (isItemContentActive) {
        getAndSetNodeHeight(
            serviceItemContent,
            '.content-h',
            serviceItemContent);
    }
});

// https://michalsnik.github.io/aos/
AOS.init({
    disable: function () {
        var maxWidth = 910;
        return window.innerWidth < maxWidth;
    }
});