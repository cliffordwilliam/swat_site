const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');
const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');

let oldIndex = 0;
let currentIndex = 0;
const itemCount = carouselItems.length;
isTransitioning = false

nextButton.addEventListener("click", function(){
    if (isTransitioning) {
        return;
    }
    oldIndex = currentIndex;
    currentIndex = (currentIndex + 1) % itemCount;
    updateCarousel("slide-left");
});

prevButton.addEventListener("click", function(){
    if (isTransitioning) {
        return;
    }
    oldIndex = currentIndex;
    currentIndex = (currentIndex - 1 + itemCount) % itemCount;
    updateCarousel("slide-right");
});

function updateCarousel(transitionClass) {
    isTransitioning = true;
    carouselContainer.classList.toggle(transitionClass);
    carouselItems[oldIndex].classList.remove("lead")
    carouselItems[currentIndex].classList.add("lead", "show");
}

carouselContainer.addEventListener("transitionend", function(){
    isTransitioning = false;
    carouselContainer.classList.remove("slide-left", "slide-right");
    carouselItems[oldIndex].classList.remove("show");
});
