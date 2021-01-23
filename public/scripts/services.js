// Services
const servicesArrows = document.querySelectorAll('.services__arrow');

function isContainsCls(node, cls) {
    const isContains = node.classList.contains(cls);
    return isContains;
}

function getAndSetHeight(clickNode, dataIdParentNode, dataIdChildNode) {
    const idParentNode = clickNode.dataset[dataIdParentNode];
    const idChildNode = clickNode.dataset[dataIdChildNode];

    const parentNode = document.querySelector(`#${idParentNode}`);
    const childNode = document.querySelector(`#${idChildNode}`);

    if (isContainsCls(clickNode, 'active')) {
        const childNodeHeight = childNode.offsetHeight;
        parentNode.style.height = `${childNodeHeight}px`;
    } else {
        parentNode.style.height = '0';
    }
}

servicesArrows.forEach(arrow => {
    getAndSetHeight(arrow, 'id_parent_node', 'id_child_node');

    arrow.addEventListener('click', event => {
        event.target.classList.toggle('active');
        getAndSetHeight(event.target, 'id_parent_node', 'id_child_node');
    });
});

// https://michalsnik.github.io/aos/
AOS.init();