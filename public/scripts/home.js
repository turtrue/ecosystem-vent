const menu = document.querySelector('.menu-about');
const menuAboutLinks = document.querySelectorAll('.menu-about__link');
const aboutSlides = document.querySelectorAll('.about__slide');

// Hide menu about links and show one
function hideMenuAboutLinksAndShowOne(e) {
    menuAboutLinks.forEach(link => {
        link.classList.remove('active');
    });
    e.target.classList.add('active');
}

// Hide aboutSlides and show one
function hideAboutSlidesAndShowOne(e) {
    aboutSlides.forEach(slide => {
        slide.classList.remove('active');
    });
    const nextSlide = document.querySelector(`.${e.target.dataset.slide}`);
    nextSlide.classList.add('active');
}

menu.onmouseover = (e) => {
    if (e.target.classList.contains('menu-about__link')) {
        hideMenuAboutLinksAndShowOne(e);
        hideAboutSlidesAndShowOne(e);
    }
}

// https://michalsnik.github.io/aos/
AOS.init();