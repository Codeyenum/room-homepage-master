const menuButtons = document.querySelectorAll(".menu-button");
const mobileNav = document.querySelector(".mobile-nav-active");
for (let button of menuButtons) {
    button.addEventListener("click", () => {
        mobileNav.classList.toggle("hide");
    })
}

const sliderButtons = document.querySelectorAll(".slider-button");
const slideImages = document.querySelectorAll(".hero-image-container > img");
const slideTexts = document.querySelectorAll(".hero-content");

let currentSlide = 0;

const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");

previousButton.addEventListener("click", () => {
    if (currentSlide > 0) {
        currentSlide--;
        slideImages.forEach(moveToCurrent)
        slideTexts.forEach(moveToCurrent)
    }
})

nextButton.addEventListener("click", () => {
    if (currentSlide < 2) {
        currentSlide++;
        slideImages.forEach(moveToCurrent)
        slideTexts.forEach(moveToCurrent)
    }
})

function moveToCurrent(item) {
    item.style.transform = `translateX(-${currentSlide * 100}%)`;
}

