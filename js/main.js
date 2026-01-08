function goTo(page) {
  window.location.href = page;
}

document.getElementById("chauffeurForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const nom = document.getElementById("nom").value;
  const tel = document.getElementById("tel").value;
  const ville = document.getElementById("ville").value;
  const cin = document.getElementById("cin").value;

  if (!nom || !tel || !ville || !cin) {
    alert("Tous les champs sont obligatoires");
    return;
  }

  alert("Inscription chauffeur réussie");
  window.location.href = "notif-chauffeur.html";
});
