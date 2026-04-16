// Mobile nav toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.querySelector(".nav__menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("is-open");
      const expanded = menu.classList.contains("is-open");
      toggle.setAttribute("aria-expanded", expanded);
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { menu.classList.remove("is-open"); });
    });
  }
});
