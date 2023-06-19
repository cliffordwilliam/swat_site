const dropdownTogglers = document.querySelectorAll(".dropdown-toggler");
const dropdownMenus = document.querySelectorAll(".dropdown-menu");

dropdownTogglers.forEach((dropdownToggler, index) => {
  const dropdownMenu = dropdownMenus[index];

  dropdownToggler.addEventListener("click", function () {
    dropdownMenu.classList.toggle("show");
  });
});