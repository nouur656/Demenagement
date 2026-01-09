// Initialisation Map
const map = L.map('map').setView([33.5731, -7.5898], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const aides = [
    { id: 1, label: "Aide Chargement", price: 100 },
    { id: 2, label: "Emballage Pro", price: 150 }
];

const container = document.getElementById('aides-container');
aides.forEach(a => {
    container.innerHTML += `
        <div style="margin: 10px 0;">
            <input type="checkbox" class="aide-cb" data-price="${a.price}" onchange="calculateTotal()">
            <label>${a.label} (+${a.price} DH)</label>
        </div>
    `;
});

function calculateTotal() {
    let total = 250; // Prix de base chauffeur
    document.querySelectorAll('.aide-cb:checked').forEach(cb => {
        total += parseInt(cb.dataset.price);
    });
    document.getElementById('total-price').innerText = `Total: ${total} DH`;
}

function passerCommande() {
    alert("Commande envoyée ! Redirection...");
    window.location.href = "utilisateur.html";
}