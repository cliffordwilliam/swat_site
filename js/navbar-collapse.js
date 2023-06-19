const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");

navbarToggler.addEventListener("click", function(){
    if (!navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.add("show");
        requestAnimationFrame(function(){
            navbarCollapse.style.height = navbarCollapse.scrollHeight + "px";
        });
    } else {
        navbarCollapse.style.height = navbarCollapse.scrollHeight + "px";
        requestAnimationFrame(function(){
            navbarCollapse.style.removeProperty("height");
        });
    }
});

navbarCollapse.addEventListener("transitionend", function(){
    if (navbarCollapse.offsetHeight === 0) {
        navbarCollapse.classList.remove("show");
    } else {
        navbarCollapse.style.height = "auto"
    }
});