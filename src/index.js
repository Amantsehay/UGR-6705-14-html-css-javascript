

const sections = document.querySelectorAll('.section-main');
const navBtns = document.querySelectorAll('.control');
const sectionBtns = document.querySelectorAll('.controls');
const allSections = document.querySelectorAll('.main-content');


function changePageFocus(){
    for (let i = 0; i < navBtns.length; i++) {        
        navBtns[i].addEventListener('click', function(){
        const currBtn = document.querySelector('.active-btn');
        currBtn.classList.remove('active-btn');
        this.classList.add('active-btn');
        });
    }



    const themeBtn = document.querySelector('.theme-btn');

    themeBtn.addEventListener('click', function(){
        const element = document.querySelector('body');
        element.classList.toggle('ligth-theme');
});

}



changePageFocus();

document.addEventListener('DOMContentLoaded', function() {
    const sectionBtns = document.querySelectorAll('.control');
    const sections = document.querySelectorAll('.section-main');
    function handleControlClick(event) {
        const targetId = event.currentTarget.getAttribute('data-id');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });

            sections.forEach((s) => {
                s.classList.remove('active-section');
            });

            targetSection.classList.add('active-section');

            sectionBtns.forEach((btn) => {
                btn.classList.remove('active-btn');
            });
            event.currentTarget.classList.add('active-btn');
        }
    }

    sectionBtns.forEach((btn) => {
        btn.addEventListener('click', handleControlClick);
    });
});




document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".mySwiper", {
        cssMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
    });
});

// Listener for theme button



document.querySelector('.hamburger-icon').addEventListener('click', function() {
    this.classList.toggle('open')});