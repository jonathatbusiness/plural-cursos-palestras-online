const menuMobile = document.getElementById('menu_mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

}

menuMobile.addEventListener('click', toggleMenu);