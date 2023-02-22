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
nav()