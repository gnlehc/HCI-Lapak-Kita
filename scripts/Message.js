var shops = [
    {   
        image: "../assets/cookies.png",
        name: "cO.Okies",
        type: "Sedang Aktif",
        greeting: "Halo, apakah kamu tertarik untuk bekerja sama dengan kami? Kami memerlukan...",
        arrow: "../assets/arrow-pesan.png"
    },
    {
        image: "../assets/mrdearby.png",
        name: "Mr. Dearby",
        type: "Tidak Aktif",
        greeting: "Halo, apakah kamu tertarik untuk bekerja sama dengan kami? Kami memerlukan...",
        arrow: "../assets/arrow-pesan.png"
    },
    {
        image: "../assets/lalafood.png",
        name: "Lala Food",
        type: "Sedang Aktif",
        greeting: "Halo, apakah kamu tertarik untuk bekerja sama dengan kami? Kami memerlukan...",
        arrow: "../assets/arrow-pesan.png"
    },
    {
        image: "../assets/ichillin.png",
        name: "iChillin",
        type: "Sedang Aktif",
        greeting: "Halo, apakah kamu tertarik untuk bekerja sama dengan kami? Kami memerlukan...",
        arrow: "../assets/arrow-pesan.png"
    },
    {
        image: "../assets/iscream.png",
        name: "I SCREAM",
        type: "Sedang Aktif",
        greeting: "Halo, apakah kamu tertarik untuk bekerja sama dengan kami? Kami memerlukan...",
        arrow: "../assets/arrow-pesan.png"
    },

];

var shopContainer = document.getElementById("shop-container");

    shops.forEach(function(shop) {
        var shopElement = document.createElement("div");
        shopElement.innerHTML = `
            <div class="shop-info">
                <div class="images">
                    <img src="${shop.image}" alt="Shop Image">
                </div>

                <div class="text-shop-info">
                    <p>${shop.name}</p>
                    <div class="type-activity">
                        ${shop.type === "Sedang Aktif" ? '<div class="circle green"></div>' : '<div class="circle grey"></div>'}
                        <p>${shop.type}</p>
                    </div>
                    <div class = "greeting">
                        <p>${shop.greeting}</p>
                    </div>
                </div>

                <div class="arrow" onclick="redirectToShop('${shop.name}')">
                    <img src = "${shop.arrow}" alt="arrow">
                </div>
            </div>
        `;
        shopContainer.appendChild(shopElement);
    });

function redirectToShop(shopName) {
    switch (shopName) {
        case "cO.Okies":
            window.location.href = "Cookies.html";
            break;
        case "Mr. Dearby":
            window.location.href = "MrDearby.html";
            break;
        case "Lala Food":
            window.location.href = "lalafood-page.html";
            break;
        case "iChillin":
            window.location.href = "ichillin-page.html";
            break;
        case "I SCREAM":
            window.location.href = "iscream-page.html";
            break;
        default:
            break;
    }
}
