/*********************************
 * Navigation entre pages
 *********************************/
function goTo(page) {
  window.location.href = page;
}

/*********************************
 * INSCRIPTION CHAUFFEUR
 *********************************/
document.getElementById("chauffeurForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const nom = document.getElementById("nom").value.trim();
  const tel = document.getElementById("tel").value.trim();
  const ville = document.getElementById("ville").value.trim();
  const cin = document.getElementById("cin").value.trim();

  if (!nom || !tel || !ville || !cin) {
    alert("Tous les champs sont obligatoires");
    return;
  }

  // Sauvegarde locale (simulation backend)
  localStorage.setItem(
    "chauffeur",
    JSON.stringify({ nom, tel, ville, cin })
  );

  alert("Inscription chauffeur réussie");

  window.location.href = "notif-chauffeur.html";
});

/*********************************
 * NOTIFICATIONS CHAUFFEUR
 *********************************/
let prix = 300;

function changePrice(val) {
  prix += val;
  if (prix < 0) prix = 0;

  const prixEl = document.getElementById("prix");
  if (prixEl) {
    prixEl.innerText = prix;
  }
}

// Afficher le nom du chauffeur si disponible
document.addEventListener("DOMContentLoaded", () => {
  const chauffeur = JSON.parse(localStorage.getItem("chauffeur"));
  const chauffeurEl = document.getElementById("chauffeurName");

  if (chauffeur && chauffeurEl) {
    chauffeurEl.innerText = chauffeur.nom;
  }
});

function acceptCommande() {
  localStorage.setItem("commandeStatus", "acceptée");
  alert("Commande acceptée. Le client a été notifié.");

  disableActions();
}

function cancelCommande() {
  localStorage.setItem("commandeStatus", "refusée");
  alert("Commande refusée.");

  disableActions();
}

function disableActions() {
  document.querySelectorAll("button").forEach(btn => {
    btn.disabled = true;
    btn.style.opacity = "0.6";
    btn.style.cursor = "not-allowed";
  });
}

/*********************************
 * NOTIFICATIONS AIDE
 *********************************/
function acceptAide() {
  alert("Vous avez accepté la demande d’aide.");
}

function refuseAide() {
  alert("Vous avez refusé la demande d’aide.");
}
