
const texts = [
    "Admin Media Sosial",
    "Fotografer",
    "Model",
    "Konsultasi Bisnis"
];

const twotexts = [
    "Event Management",
    "Desain Grafis"
];
const talents = [
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


const talentsString = JSON.stringify(talents);

localStorage.setItem('talents', talentsString);

const display = localStorage.getItem('talents');

const talents_parse = JSON.parse(talentsString);
// console.log(display)
console.log(talents_parse)





let y = 0;

const containerDiv = document.getElementById("search-rec");
const containerDivTwo = document.getElementById("search-rec-two");
const containerDivCards = document.getElementById("cards-all-loker");
const optsContainerDiv = document.getElementById("opts");
const selectedContainerDiv = document.getElementById("cards-all-loker");
const favoritesContainer = document.getElementById("favorite-cards");

texts.forEach(text => {
    const div = document.createElement("div");
    div.classList.add("search-rec");
    div.textContent = text;
    containerDiv.appendChild(div);
    div.addEventListener("click", () => togglePopup(text));

});

twotexts.forEach(twotext => {
    const div = document.createElement("div");
    div.classList.add("search-rec-two");
    div.textContent = twotext;
    containerDivTwo.appendChild(div);
    div.addEventListener("click", () => togglePopup(twotext));
});

// function redirectToLoker(lokerType) {
//     switch (lokerType) {
//         case "Admin":
//             window.location.href = "Admin-loker.html";
//             break;
//         case "Photography":
//             window.location.href = "Photography-loker.html";
//             break;
//         case "Event":
//             window.location.href = "Event-loker.html";
//             break;
//         case "CopyWriter":
//             window.location.href = "Copywriter-loker.html";
//             break;
//         case "Design":
//             window.location.href = "Design-loker.html";
//             break;
//         case "Consulting":
//             window.location.href = "Consulting-loker.html";
//             break;
//         case "Model":
//             window.location.href = "Model-loker.html";
//             break;
//         default:
//             break;
//     }
// }



function togglePopup(content) {
    // containerDivCards.innerHTML = "";
    const popupDiv = document.createElement("div");
    popupDiv.classList.add("opts");
    popupDiv.textContent = content;
    let similarcont = false;
    const optsChildren = optsContainerDiv.children;
    for (let i = 0; i < optsChildren.length; i++) {
        if (optsChildren[i].textContent === content) {
            similarcont = true;
            break;
        }
    }
    if (similarcont) {
        optsContainerDiv.removeChild(popupDiv);
    } else if (y === 1) {
        containerDivCards.innerHTML = "";
        optsContainerDiv.appendChild(popupDiv);
        popupDiv.style.border = "1px solid black";
        popupDiv.style.borderRadius = "1vw";
        popupDiv.style.padding = "1vw";
        if (content === "Admin Media Sosial") {
            displayTalentsByType(talents, "Admin");
        } else if (content === "Fotografer") {
            displayTalentsByType(talents, "Photography");
        } else if (content === "Model") {
            displayTalentsByType(talents, "Model");
        } else if (content === "Konsultasi Bisnis") {
            displayTalentsByType(talents, "Consulting");
        } else if (content === "Event Management") {
            displayTalentsByType(talents, "Event");
        } else if (content === "Desain Grafis") {
            displayTalentsByType(talents, "Design");
        }
        y = 2;
    }

    else {
        optsContainerDiv.appendChild(popupDiv);
        popupDiv.style.border = "1px solid black";
        popupDiv.style.borderRadius = "1vw";
        popupDiv.style.padding = "1vw";
        popupDiv.style.fontSize = "1vw";

        if (content === "Admin Media Sosial") {
            displayTalentsByType(talents, "Admin");
        } else if (content === "Fotografer") {
            displayTalentsByType(talents, "Photography");
        } else if (content === "Model") {
            displayTalentsByType(talents, "Model");
        } else if (content === "Konsultasi Bisnis") {
            displayTalentsByType(talents, "Consulting");
        } else if (content === "Event Management") {
            displayTalentsByType(talents, "Event");
        } else if (content === "Desain Grafis") {
            displayTalentsByType(talents, "Design");
        }
    }
}

function redirectToDetailPage(talentId) {
    window.location.href = `Detail-Page.html?talentId=${talentId}`;
}

function displayTalentsByType(talents, type) {
    const selectedDiv = document.createElement("div");
    selectedDiv.classList.add("cards-all-loker");

    // <div class = "content" onclick = "redirectToLoker('${talent.type}')">
    talents.forEach((talent) => {
        const favoriteImageSource = talent.favorite === 0 ? "../assets/favorites.png" : "../assets/favoritesyellow.png";
        if (talent.type === type) {
            selectedDiv.innerHTML = `
                <div class = "content" onclick = "redirectToDetailPage(${talent.id})">
                <img src = "${talent.image}"/>
                <div class = "text">
                <div class="judul-loker">
                    <p>${talent.position}</p>
                </div>
                <div class="nama-toko">
                    <p>${talent.employer}</p>
                </div>
                <div class="location">
                    <p>${talent.loc}</p>
                </div>
                <div class="diunggah">
                    <p>${talent.timetamp}</p>
                </div>
                </div>
                </div>
        
                <div class="favorite">
                    <img onclick = "addToFavorites(talents, '${talent.type}')" src="${favoriteImageSource}" />
                </div>
            
            `
            selectedContainerDiv.appendChild(selectedDiv);
        }
    })
}

function addToFavorites(event, talents, type) {
    const favoriteImage = event.target;
    const currentImageSource = favoriteImage.getAttribute("src");
    const isFavorited = currentImageSource.includes("favoritesyellow.png");

    if (isFavorited) {
        favoriteImage.src = "../assets/favorites.png";
        removeFromFavorites(talents, type);
        removeFavoriteCard(type);
    } else {
        // Favorite talent
        favoriteImage.src = "../assets/favoritesyellow.png";
        addToFavoritesList(talents, type);
        addFavoriteCard(talents, type);

        favoriteImage.onclick = function () {
            addToFavorites(event, talents, type);
        };
    }

    function removeFromFavorites(talents, type) {
        talents.forEach(talent => {
            if (talent.type === type) {
                talent.favorite = 0;
            }
        });
    }

    function removeFavoriteCard(type) {
        const favoriteCards = document.querySelectorAll(".favorite-cards");
        favoriteCards.forEach(card => {
            if (card.querySelector(".contentfav").getAttribute("onclick").includes(type)) {
                card.remove();
            }
        });
    }

    function addToFavoritesList(talents, type) {
        talents.forEach(talent => {
            if (talent.type === type) {
                talent.favorite = 1;
            }
        });
    }

    function addFavoriteCard(talents, type) {
        const favDiv = document.createElement("div");
        favDiv.classList.add("favorite-cards");

        talents.forEach(talent => {
            if (talent.type === type) {
                favDiv.innerHTML = `
          <div class="contentfav" onclick="redirectToDetailPage(${talent.id})">
            <img src="${talent.image}"/>
            <div class="text">
              <div class="judul-loker">
                <p>${talent.position}</p>
              </div>
              <div class="nama-toko">
                <p>${talent.employer}</p>
              </div>
              <div class="location">
                <p>${talent.loc}</p>
              </div>
              <div class="diunggah">
                <p>${talent.timetamp}</p>
              </div>
            </div>
          </div>
        `;
                favoritesContainer.appendChild(favDiv);
            }
        });
    }
}

function displayAllTalents(talents) {
    y = 1;
    talents.forEach(talent => {
        const favoriteImageSource = talent.favorite === 0 ? "../assets/favorites.png" : "../assets/favoritesyellow.png";
        const div = document.createElement("div");
        div.classList.add("cards-all-loker");
        if (talent.type === "Admin") {
            div.innerHTML = `
          <div class="content" onclick="redirectToDetailPage(${talent.id})">
            <img src="${talent.image}"/>
            <div class="text">
              <div class="cocok-dengan">
                <img src="../assets/star-cocok.png" alt="">
                <p>Cocok dengan Portofoliomu!</p>
              </div>
              <div class="judul-loker">
                <p>${talent.position}</p>
              </div>
              <div class="nama-toko">
                <p>${talent.employer}</p>
              </div>
              <div class="location">
                <p>${talent.loc}</p>
              </div>
              <div class="diunggah">
                <p>${talent.timetamp}</p>
              </div>
            </div>
          </div>
  
          <div class="favorite">
            <img onclick="addToFavorites(event, talents, '${talent.type}')" src="${favoriteImageSource}" />
          </div>
        `;
        } else {
            div.innerHTML = `
          <div class="content" onclick="redirectToDetailPage(${talent.id})">
            <img src="${talent.image}"/>
            <div class="text">
              <div class="judul-loker">
                <p>${talent.position}</p>
              </div>
              <div class="nama-toko">
                <p>${talent.employer}</p>
              </div>
              <div class="location">
                <p>${talent.loc}</p>
              </div>
              <div class="diunggah">
                <p>${talent.timetamp}</p>
              </div>
            </div>
          </div>
          
          <div class="favorite">
            <img onclick="addToFavorites(event, talents, '${talent.type}')" src="${favoriteImageSource}" />
          </div>
        `;
        }
        containerDivCards.appendChild(div);
    })
}


displayAllTalents(talents);

console.log(y);

const detalLoker = [
    {
        id: 1,
        content: [
            {
                Position: "Instagram Admin: Content and Marketing",
                Durasi: "27 Februari 2022 - 10 Maret 2023",
                Pendaftar: "6/20 Pendaftar",
                Deskripsi: "Sebagai admin Instagram, tanggung jawabnya meliputi mengelola dan memantau akun serta konten, berinteraksi dengan pengguna, dan memastikan kepatuhan terhadap kebijakan dan pedoman platform.",
                Jenis: "Kerja paruh waktu - Remote (20 jam/minggu)",
                Kualifikasi: "Sosial Media Analisis",
                Pengalaman: "Berpengalaman minimal 1 tahun sebagai admin media sosial",
                Author: "Tenue de Attire"
            },

        ],

    },
    {
        id: 2,
        content: [
            {
                Position: "Event Organizer: Rundown and Budgeting",
                Durasi: "1 December 2022 - 31 December 2023",
                Pendaftar: "11/50 Pendaftar",
                Deskripsi: "Sebagai Event Staff, tanggung jawabnya meliputi memastikan acara berlansung sesuai rundown.",
                Jenis: "Kerja paruh waktu - Onsite (5 jam/Hari)",
                Kualifikasi: "Event Staff, Event organizer",
                Pengalaman: "Berpengalaman minimal 1x handle event skala nasional",
                Author: "The Sounds Project",
            }
        ]
    }
]

var left = document.getElementById('body-left-right')
var left_content = document.getElementById('left-content')

function displayByID(talentID) {
    const selectedID = document.createElement("div")
    detalLoker.forEach((desc) => {
        if (talentID === desc.id) {
            selectedID.innerHTML = `<div class="left">
            <div class="header-left">
              <img src="../assets/admin.png" alt="" />
              <div class="text-admin">
                <p id="position">Instagram Admin: Content and Marketing</p>
                <p></p>
              </div>
            </div>
    
            <div class="durasi-waktu">
              <p>Durasi Waktu</p>
            </div>
            <div class="tanggal">
              <p>27 Februari 2022 - 10 Maret 2023</p>
            </div>
    
            <div class="pendaftar">
              <p>6/12 pendaftar</p>
              <img src="../assets/rectangle-pendaftar.png" alt="" />
            </div>
    
            <div class="daftar">
              <p><a href="Msg-Tenue.html">Daftar</a></p>
            </div>
          </div>`
            var temp = left.appendChild(selectedID);
            console.log(temp)
        }
    })
}


displayByID(1)