const hamburgerIcon = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

function closeHamburgerMenu() {
    hamburgerIcon.classList.remove('fa-times');
    hamburgerIcon.classList.add('fa-bars');
    navMenu.classList.toggle('show-nav');
}

function toggleHamburgerColor() {
    hamburgerIcon.classList.toggle('white');
}

hamburgerIcon.addEventListener('click', () => {
    toggleHamburgerColor();
    if (navMenu.classList.contains('show-nav')) {
        closeHamburgerMenu();
    } else {
        hamburgerIcon.classList.remove('fa-bars');
        hamburgerIcon.classList.add('fa-times');
        navMenu.classList.add('show-nav');
    }
});



