// https://michalsnik.github.io/aos/
AOS.init({
    disable: function () {
        var maxWidth = 910;
        return window.innerWidth < maxWidth;
    }
});