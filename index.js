document.addEventListener('DOMContentLoaded', function() {
const mobileMenu = document.querySelector('.header__mobile-list');
const mobileButton = document.querySelector('.header__button-menu');

mobileButton.addEventListener('click', function() {
    if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
    } else {
        mobileMenu.classList.add('active');
    }
})
});
