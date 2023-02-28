import * as flsFunctions from './modules/functions.js';

flsFunctions.isWebp();

function nav() {
    let btn = document.querySelector('.header__nav-btn');
    btn.addEventListener('click', () => {
        let nav = document.querySelector('.header__nav-list');
        nav.classList.toggle('header__nav-list--active');
        let line = document.querySelector('.header__nav-line');
        line.classList.toggle('header__nav-line--active');
    })
}
nav();

function transition() {
    const anchors = document.querySelectorAll('a[href*="#"]');
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()
            const blockID = anchor.getAttribute('href').substr(1)
            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        });
    }
}
transition();