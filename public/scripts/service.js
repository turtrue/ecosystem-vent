// Services
const serviceItems = document.querySelectorAll('.service__item');
const serviceItemContents =
    document.querySelectorAll('.service__item-content');

// In the search area for a node 'searchNode', gets the height of the node 'getNode' using the selector and sets it to the node 'setNode'
function getAndSetNodeHeight(searchNode, getNode, setNode) {
    const height = searchNode.querySelector(getNode).offsetHeight;
    setNode.style.height = `${height}px`;
}

// Clicking on the arrow toggle the 'active' class to it
// Toggle the 'active' class to the service__item-content and displays it
// Determining the height of the content and assigning it to a service__item-content
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

// When the page is loaded, it checks if the service__item-content contains an 'active' class
// If so, determines the height of the content and assigns it to the service__item-content
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