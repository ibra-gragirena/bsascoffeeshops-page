let burguerMenu = document.querySelector('.burguer-menu');
let menuMobile = document.querySelector('.menu-mobile');
let closeMobile = document.querySelector('.close-menu')

burguerMenu.addEventListener('click', toggleMenus);
closeMobile.addEventListener('click', toggleMenus);

function toggleMenus() {
    menuMobile.classList.toggle('hidden');
    closeMobile.classList.toggle('inactive');
    burguerMenu.classList.toggle('inactive');
}
