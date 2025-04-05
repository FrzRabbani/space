const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".nav__toggler");

navToggle?.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");
  const isVisible = visibility === 'true';

  primaryNav.setAttribute("data-visible", !isVisible);
  navToggle.setAttribute("aria-expanded", !isVisible);
});
