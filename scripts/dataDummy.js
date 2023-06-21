var username = document.getElementById('name').value;
var email = document.getElementById('email').value;
var noTLP = document.getElementById('tlp').value;
var password = document.getElementById('password').value;
var confirm = document.getElementById('confirm').value;

var user = {
    name: username,
    email: email,
    noTLP: noTLP,
    password: password,
    confirm: confirm,
    occupation: [{

    }, ...user, position]
};


console.log(user)


const position = [
    {
        id: 0,
        image: "../assets/admin.png",
        position: "Instagram Admin - Content and Marketing",
        employer: "Tenue de Attire",
        loc: "Jakarta, Indonesia",
        timetamp: "Diunggah 6 hari lalu",
        type: "Admin",
        favorite: 0,
        isRegistered: 0,
    },
    {
        id: 1,
        image: "../assets/event-icomn.png",
        position: "Event Staff - The Sounds Project",
        employer: "The Sounds Project",
        loc: "Jakarta, Indonesia",
        timetamp: "Diunggah 10 hari lalu",
        type: "Event",
        favorite: 0,
        isRegistered: 0,
    },
    {
        id: 2,
        image: "../assets/copywriter-icon.png",
        position: "CopyWriter - Idea and Research",
        employer: "Nappa Millano",
        loc: "Jakarta, Indonesia",
        timetamp: "Diunggah 3 hari lalu",
        type: "CopyWriter",
        favorite: 0,
        isRegistered: 0,
    },
    {
        id: 3,
        image: "../assets/design-icon.png",
        position: "Poster Design - Creative Design",
        employer: "Suasana. Corp",
        loc: "Jakarta, Indonesia",
        timetamp: "Diunggah 1 hari lalu",
        type: "Design",
        favorite: 0,
        isRegistered: 0,
    },
    {
        id: 4,
        image: "../assets/bisnis-icon.png",
        position: "Business Consulting - Marketing",
        employer: "BUKANAGARA Coffee",
        loc: "Jakarta, Indonesia",
        timetamp: "Diunggah 5 jam lalu",
        type: "Consulting",
        favorite: 0,
        isRegistered: 0,
    },
    {
        id: 5,
        image: "../assets/photography-icon.png",
        position: "Catalog - Photography",
        employer: "THNKSOMNIA",
        loc: "Jakarta, Indonesia",
        timetamp: "Diunggah 12 jam lalu",
        type: "Photography",
        favorite: 0,
        isRegistered: 0,
    },
    {
        id: 6,
        image: "../assets/model-icon.png",
        position: "Eyewear - Model",
        employer: "Optika Lunet",
        loc: "Jakarta, Indonesia",
        timetamp: "Diunggah 15 jam lalu",
        type: "Model",
        favorite: 0,
        isRegistered: 0,
    },
];


var storedUser = localStorage.getItem('user');
var loker = localStorage.getItem('talent')
console.log(storedUser)
