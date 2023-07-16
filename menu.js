const menu_toggler = document.querySelector('.menu-toggler');
const menu = document.querySelector('#main_menu');

menu_toggler.addEventListener('click', () => {
    const isVisible = menu.getAttribute('data-visible') === 'true';
    
    if (isVisible) {
        menu_toggler.setAttribute('aria-expanded', false);
        menu.setAttribute('data-visible', false);
    } else {
        menu_toggler.setAttribute('aria-expanded', true);
        menu.setAttribute('data-visible', true);
    }
})