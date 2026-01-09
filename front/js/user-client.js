const driversData = [
    { id: 1, name: "Ahmed Express", rating: 5, type: "meme-ville", img: "https://i.pravatar.cc/150?u=1", price: 200 },
    { id: 2, name: "Yassine Transport", rating: 4, type: "ville-to-ville", img: "https://i.pravatar.cc/150?u=2", price: 550 },
    { id: 3, name: "Sami Colis", rating: 5, type: "colis", img: "https://i.pravatar.cc/150?u=3", price: 120 },
    { id: 4, name: "Karim Déménage", rating: 4, type: "meme-ville", img: "https://i.pravatar.cc/150?u=4", price: 300 },
    { id: 5, name: "Omar Fret", rating: 5, type: "ville-to-ville", img: "https://i.pravatar.cc/150?u=5", price: 600 },
    { id: 6, name: "Driss Livraison", rating: 3, type: "colis", img: "https://i.pravatar.cc/150?u=6", price: 90 }
];

function renderDrivers(filter = 'all') {
    const container = document.getElementById('driver-list');
    if(!container) return;
    container.innerHTML = '';

    const filtered = filter === 'all' ? driversData : driversData.filter(d => d.type === filter);

    filtered.forEach(driver => {
        container.innerHTML += `
            <div class="driver-card">
                <img src="${driver.img}" class="avatar">
                <h3>${driver.name}</h3>
                <div style="color:#f59e0b; margin-bottom:10px;">${"⭐".repeat(driver.rating)}</div>
                <p>À partir de <strong>${driver.price} DH</strong></p>
                <button onclick="selectDriver(${driver.id})" class="btn-primary">Choisir</button>
            </div>
        `;
    });
}

// Filtres
document.querySelectorAll('.btn-filter').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.btn-filter').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderDrivers(e.target.dataset.type);
    });
});

function selectDriver(id) {
    window.location.href = `details-chauffeur.html?id=${id}`;
}

renderDrivers();

function initAides() {
    const container = document.getElementById('aides-container');
    container.innerHTML = ''; // Khawi l'container
    
    aidesData.forEach(aide => {
        container.innerHTML += `
            <div class="aide-item" onclick="toggleCheckbox('${aide.id}')">
                <div class="aide-info">${aide.name}</div>
                <div style="display: flex; align-items: center;">
                    <span class="aide-price">+${aide.price} DH</span>
                    <input type="checkbox" id="check-${aide.id}" class="aide-cb" 
                           data-price="${aide.price}" onchange="updatePrice()">
                </div>
            </div>`;
    });
}

// Bach fach t-cliqui f ay blassa f l'card, l'checkbox t-t-cocha
function toggleCheckbox(id) {
    const cb = document.getElementById(`check-${id}`);
    cb.checked = !cb.checked;
    updatePrice();
}