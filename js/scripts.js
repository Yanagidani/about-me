document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menuIcon');
    const menu = document.getElementById('menu');


    menuIcon.addEventListener('click', () => {
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });
});


// script.js
let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;


function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}


function nextSlide() {
    showSlide(currentSlide + 1);
}


function prevSlide() {
    showSlide(currentSlide - 1);
}


// Optional: Auto-slide every 3 seconds
setInterval(nextSlide, 3000);


// タッチ操作のサポート
let startX = 0;
let endX = 0;


slides.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
});


slides.addEventListener('touchend', (event) => {
    endX = event.changedTouches[0].clientX;
    if (startX - endX > 50) {
        nextSlide(); // 左スワイプ
    } else if (endX - startX > 50) {
        prevSlide(); // 右スワイプ
    }
});
