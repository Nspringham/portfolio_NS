function classToggle() {
  const navs = document.querySelectorAll('.menu-items') 
  navs.forEach(nav => nav.classList.toggle('menu-item-toggle-show'));
}
document.querySelector('.Navbar__Link-toggle').addEventListener('click', classToggle);
