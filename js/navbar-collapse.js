var navbarToggler = document.querySelector(".navbar-toggler");
var navbarCollapse = document.querySelector(".navbar-collapse");

navbarToggler.addEventListener("click", function(){
    if (!navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.add("show");
        requestAnimationFrame(function(){
            navbarCollapse.style.height = navbarCollapse.scrollHeight + "px";
        });
    } else {
        navbarCollapse.style.removeProperty("height");
    }
})

navbarCollapse.addEventListener("transitionend", function(){
    if (navbarCollapse.offsetHeight === 0) {
        navbarCollapse.classList.remove("show");
    }
})