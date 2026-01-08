/* Navigation entre pages (toutes dans /html) */
function goTo(page) {
  window.location.href = page;
}

/* Inscription chauffeur */
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

  alert("Inscription chauffeur réussie");

  /* redirection correcte (même dossier html) */
  window.location.href = "notif-chauffeur.html";
});

/* Notifications chauffeur */
let prix = 300;

function changePrice(val) {
  prix += val;
  if (prix < 0) prix = 0;

  const prixEl = document.getElementById("prix");
  if (prixEl) {
    prixEl.innerText = prix;
  }
}

function acceptCommande() {
  alert("Commande acceptée avec succès");
}

function cancelCommande() {
  alert("Commande annulée");
}
