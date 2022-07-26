const menuMobile = document.getElementById('menu_mobile');

function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', 'active');
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }

}

menuMobile.addEventListener('click', toggleMenu);
menuMobile.addEventListener('touchstart', toggleMenu);

//carousel
