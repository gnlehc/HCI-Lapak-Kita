const imgDiv = document.querySelector('.profile-pic-div');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');


imgDiv.addEventListener('mouseenter', function () {
    uploadBtn.style.display = "block";
});


imgDiv.addEventListener('mouseleave', function () {
    uploadBtn.style.display = "none";
});


file.addEventListener('change', function () {
    const choosedFile = this.files[0];

    if (choosedFile) {

        const reader = new FileReader();

        reader.addEventListener('load', function () {
            img.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(choosedFile);
    }
});

// lengkapi profile

document.getElementById('profile-detail').addEventListener('submit', (e) => {
    e.preventDefault()

    var ig = document.getElementById('instagram-username')
    var twt = document.getElementById('twitter-username')
    var fb = document.getElementById('facebook-username')
    var sites = document.getElementById('website-username')


    var sosmed = {
        instagram: ig,
        twitter: twt,
        facebook: fb,
        website: sites
    }

    var sosmedData = localStorage.getItem('sosmed');
    var sosmedArray = sosmedData ? JSON.parse(sosmedData) : [];
    jsonArray.push(sosmed);
    localStorage.setItem('user', JSON.stringify(sosmedArray));
    window.location.href = '/View/profilepage.html';
})

document.addEventListener("DOMContentLoaded", function () {
    var sosmedData = localStorage.getItem('sosmed');
    var sosmedArray = sosmedData ? JSON.parse(sosmedData) : [];

    if (sosmedArray.length > 0) {
        var currentSosmed = sosmedArray[sosmedArray.length - 1];
        var ig = currentSosmed.instagram
        var twt = currentSosmed.twitter
        var fb = currentSosmed.facebook
        var website = currentSosmed.website
        var sosmedElement = document.getElementById("sosmed");
        sosmedElement.innerHTML = `${ig}`;
        sosmedElement.innerHTML = `${twt}`;
        sosmedElement.innerHTML = `${fb}`;
        sosmedElement.innerHTML = `${website}`;
    }
});