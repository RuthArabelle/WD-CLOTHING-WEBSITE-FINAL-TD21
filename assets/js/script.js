
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider-btn.left');
const btnRight = document.querySelector('.slider-btn.right');

let currentIndex = 1;

btnLeft.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
});

btnRight.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
});
