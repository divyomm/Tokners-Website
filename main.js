//change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

ScrollReveal({ distance: '60px' });
ScrollReveal().reveal('.header__left', { origin: 'left' });
ScrollReveal().reveal('.header__right', { origin: 'right' });

ScrollReveal().reveal('.cat-1', { origin: 'left' });
ScrollReveal().reveal('.cat-2', { origin: 'right' });

ScrollReveal().reveal('.category__image1', { origin: 'top' });
ScrollReveal().reveal('.category__image2', { origin: 'top' });

ScrollReveal().reveal('.category__summary-left', { origin: 'left' });
ScrollReveal().reveal('.category__summary-right', { origin: 'right' });

ScrollReveal().reveal('.progress', { origin: 'top' });
ScrollReveal().reveal('.progress__lists', { origin: 'top' });

ScrollReveal().reveal('.about__left', { origin: 'left' });
ScrollReveal().reveal('.about__right', { origin: 'right' });

ScrollReveal().reveal('.animate__h1', { origin: 'top' });

ScrollReveal().reveal('.body__image5', { origin: 'left' });
ScrollReveal().reveal('.body__image6', { origin: 'right' });