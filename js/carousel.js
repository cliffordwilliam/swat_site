const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');
const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');

let oldIndex = 0;
let currentIndex = 0;
const itemCount = carouselItems.length;

nextButton.addEventListener("click", function(){
    carouselContainer.style.flexDirection = 'row';
    oldIndex = currentIndex;
    currentIndex = (currentIndex + 1) % itemCount;

    carouselItems[oldIndex].style.order = '0';
    carouselItems[currentIndex].style.order = '1';

    carouselItems[currentIndex].classList.add("active");
    carouselContainer.style.transform = "translateX(-100%)";
    carouselContainer.style.transition = 'transform .6s ease-in-out';
});

prevButton.addEventListener("click", function(){
    carouselContainer.style.flexDirection = 'row-reverse';
    oldIndex = currentIndex;
    currentIndex = (currentIndex - 1 + itemCount) % itemCount;

    carouselItems[oldIndex].style.order = '0';
    carouselItems[currentIndex].style.order = '1';

    carouselItems[currentIndex].classList.add("active");
    carouselContainer.style.transform = "translateX(100%)";
    carouselContainer.style.transition = 'transform .6s ease-in-out';
});

carouselContainer.addEventListener("transitionend", function(){
    carouselItems[oldIndex].classList.remove("active");
    carouselContainer.style.transform = "translateX(0%)";
    carouselContainer.style.transition = 'none';
});
