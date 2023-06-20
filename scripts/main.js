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


document.getElementById("form-field").addEventListener("submit", (event) => {
    event.preventDefault();
    var username = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var noTLP = document.getElementById('tlp').value;
    var password = document.getElementById('password').value;
    var confirm = document.getElementById('confirm').value;
    var error = document.getElementById("error");

    var user = {
        name: username,
        email: email,
        noTLP: noTLP,
        password: password,
        confirm: confirm,
        occupation: talents,
    }
    if (!username || !email || !noTLP || !password || !confirm) {
        error.textContent = "Field is required";
        // error.style.cssText = "color: red;";
        var inputElements = document.getElementsByTagName("input");
        for (var i = 0; i < inputElements.length; i++) {
            var input = inputElements[i];
            if (!input.value) {
                input.style.borderColor = "red";
            }
            else {
                input.style.borderColor = "";
            }
        }
        return
    } else {
        if (username.length < 4 || username.length > 15) {
        }
    }

    var storedData = localStorage.getItem('user');
    var jsonArray = storedData ? JSON.parse(storedData) : []
    jsonArray.push(user);
    localStorage.setItem('user', JSON.stringify(jsonArray));
    window.location.href = '/View/Home.html'

});



const talents = [
    {
        image: "../assets/admin.png",
        position: "Instagram Admin - Content and Marketing",
        employer: "Tenue de Attire",
        loc: "Jakarta, Indonesia",
        timetamp: "Diunggah 6 hari lalu",
        type: "Admin",
        favorite: 0,
        retCode: 0,
    },
    {
        image: "../assets/event-icomn.png",
        position: "Event Staff - The Sounds Project",
        employer: "The Sounds Project",
        loc: "Jakarta, Indonesia",
        timetamp: "Diunggah 10 hari lalu",
        type: "Event",
        favorite: 0,
        retCode: 0,
    },
    {
        image: "../assets/copywriter-icon.png",
        position: "CopyWriter - Idea and Research",
        employer: "Nappa Millano",
        loc: "Jakarta, Indonesia",
        timetamp: "Diunggah 3 hari lalu",
        type: "CopyWriter",
        favorite: 0,
        retCode: 0,
    },
    {
        image: "../assets/design-icon.png",
        position: "Poster Design - Creative Design",
        employer: "Suasana. Corp",
        loc: "Jakarta, Indonesia",
        timetamp: "Diunggah 1 hari lalu",
        type: "Design",
        favorite: 0,
        retCode: 0,
    },
    {
        image: "../assets/bisnis-icon.png",
        position: "Business Consulting - Marketing",
        employer: "BUKANAGARA Coffee",
        loc: "Jakarta, Indonesia",
        timetamp: "Diunggah 5 jam lalu",
        type: "Consulting",
        favorite: 0,
        retCode: 0,
    },
    {
        image: "../assets/photography-icon.png",
        position: "Catalog - Photography",
        employer: "THNKSOMNIA",
        loc: "Jakarta, Indonesia",
        timetamp: "Diunggah 12 jam lalu",
        type: "Photography",
        favorite: 0
    },
    {
        image: "../assets/model-icon.png",
        position: "Eyewear - Model",
        employer: "Optika Lunet",
        loc: "Jakarta, Indonesia",
        timetamp: "Diunggah 15 jam lalu",
        type: "Model",
        favorite: 0,
        retCode: 0,
    },
];

