var shops = [
    {   
        image: "../assets/tenue-logo.jpg",
        name: "Tenue de Attire",
        type: "Sedang Aktif",
        greeting: "Halo, apakah kamu tertarik untuk bekerja sama dengan kami? Kami memerlukan...",
        arrow: "../assets/arrow-pesan.png"
    },
    {
        image: "../assets/tsp-logo.jpg",
        name: "The Sounds Project",
        type: "Tidak Aktif",
        greeting: "Halo, apakah kamu tertarik untuk bekerja sama dengan kami? Kami memerlukan...",
        arrow: "../assets/arrow-pesan.png"
    },
    {
        image: "../assets/nappamilano.jpg",
        name: "Nappa Milano",
        type: "Sedang Aktif",
        greeting: "Halo, apakah kamu tertarik untuk bekerja sama dengan kami? Kami memerlukan...",
        arrow: "../assets/arrow-pesan.png"
    },
    {
        image: "../assets/suasanacorp.png",
        name: "Suasana Corp",
        type: "Sedang Aktif",
        greeting: "Halo, apakah kamu tertarik untuk bekerja sama dengan kami? Kami memerlukan...",
        arrow: "../assets/arrow-pesan.png"
    },
    {
        image: "../assets/bukanagara.jpg",
        name: "BUKANAGARA Coffee",
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
        case "Tenue de Attire":
            window.location.href = "Msg-Tenue.html";
            break;
        case "The Sounds Project":
            window.location.href = "Msg-tsp.html";
            break;
        case "Nappa Milano":
            window.location.href = "Msg-nappa.html";
            break;
        case "Suasana Corp":
            window.location.href = "Msg-suasana.html";
            break;
        case "BUKANAGARA Coffee":
            window.location.href = "Msg-bukanagara.html";
            break;
        default:
            break;
    }
}
