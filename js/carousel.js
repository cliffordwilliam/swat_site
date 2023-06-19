function initializeCarousel(carouselId, isAuto = false) {
    const carouselContainer = document.querySelector(`#${carouselId} .carousel-container`);
    const carouselItems = document.querySelectorAll(`#${carouselId} .carousel-item`);
    const nextButton = document.querySelector(`#${carouselId} .next-button`);
    const prevButton = document.querySelector(`#${carouselId} .prev-button`);
  
    let oldIndex = 0;
    let currentIndex = 0;
    const itemCount = carouselItems.length;
    let isTransitioning = false;
    let autoplayInterval;
    let isAutoplay = isAuto;
  
    nextButton.addEventListener("click", function() {
      if (isTransitioning) {
        return;
      }
      oldIndex = currentIndex;
      currentIndex = (currentIndex + 1) % itemCount;
      updateCarousel("slide-left");
    });
  
    prevButton.addEventListener("click", function() {
      if (isTransitioning) {
        return;
      }
      oldIndex = currentIndex;
      currentIndex = (currentIndex - 1 + itemCount) % itemCount;
      updateCarousel("slide-right");
    });
  
    function updateCarousel(transitionClass) {
      stopAutoplay();
      isTransitioning = true;
      carouselContainer.classList.toggle(transitionClass);
      carouselItems[oldIndex].classList.remove("lead");
      carouselItems[currentIndex].classList.add("lead", "show");
    }
  
    carouselContainer.addEventListener("transitionend", function() {
      isTransitioning = false;
      carouselContainer.classList.remove("slide-left", "slide-right");
      carouselItems[oldIndex].classList.remove("show");
      if (isAutoplay) {
        startAutoplay();
      }
    });
  
    function startAutoplay() {
      autoplayInterval = setInterval(() => {
        oldIndex = currentIndex;
        currentIndex = (currentIndex + 1) % itemCount;
        updateCarousel("slide-left");
      }, 3000);
    }
  
    function stopAutoplay() {
      clearInterval(autoplayInterval);
    }
  
    if (isAutoplay) {
      startAutoplay();
    }
  }
  
  initializeCarousel("carousel1", true);
  initializeCarousel("carousel2");
  initializeCarousel("carousel3", true);
  