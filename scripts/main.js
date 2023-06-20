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


let observer = new IntersectionObserver(animation, {
    threshold: 0.20 // seberapa jauh sebelum fungsi callback
});
const history = document.querySelectorAll('.brief-his');
const redirect = document.querySelectorAll('.redirect');
history.forEach(element => {
    observer.observe(element);
});
redirect.forEach(e => {
    observer.observe(e);
});

// callback function
function animation(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scrolled');
            entry.target.classList.add('scrolled-page');

            observer.unobserve(entry.target)
        } else {
            entry.target.classList.remove('scrolled');
        }
    });
}



