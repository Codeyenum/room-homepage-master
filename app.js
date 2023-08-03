const menuButtons = document.querySelectorAll(".menu-button");
const mobileNav = document.querySelector(".mobile-nav-active");
for (let button of menuButtons) {
    button.addEventListener("click", () => {
        mobileNav.classList.toggle("hide");
    })
}

const sliderButtons = document.querySelectorAll(".slider-button");
const slides = document.querySelectorAll(".hero-image-container > img");
const slideContents = document.querySelectorAll(".hero-content");

let currentSlide = 0;

for (let button of sliderButtons) {
    button.addEventListener("click", () => {
        if (button.classList.contains("previous")) {
            previousSlide()
        } else {
            nextSlide()
        }
    })
}

function previousSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        slides.forEach((slide) => {
            slide.style.transform = `translateX(-${currentSlide * 100}%)`;
        });
        slideContents.forEach((content) => {
            content.style.transform = `translateX(-${currentSlide * 100}%)`;
        });
    }
}

function nextSlide() {
    if (currentSlide < 2) {
        currentSlide++;
        slides.forEach((slide) => {
            slide.style.transform = `translateX(-${currentSlide * 100}%)`;
        });
        slideContents.forEach((content) => {
            content.style.transform = `translateX(-${currentSlide * 100}%)`;
        });
    }

}
