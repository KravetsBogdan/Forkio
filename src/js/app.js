import * as flsFunctions from './modules/functions.js';

flsFunctions.isWebp();


function nav() {
    let btn = document.querySelector('.header__nav-btn');
    let nav = document.querySelector('.header__nav-list');
    let spanBtn = document.querySelector('.header__nav-line');

    document.addEventListener('click', (event) => {
        console.log(event.target);
        if (event.target === btn || event.target === spanBtn) {
            nav.classList.toggle('header__nav-list--active');
            spanBtn.classList.toggle('header__nav-line--active')
        }
        else {
            nav.classList.remove('header__nav-list--active')
            spanBtn.classList.remove('header__nav-line--active')
        }

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