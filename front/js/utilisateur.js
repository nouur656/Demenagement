/*JS : clic sur chauffeur (routing) */
let chauffeurSelectionne = null;

document.querySelectorAll(".chauffeur").forEach(chauffeur => {
  chauffeur.addEventListener("click", () => {
    chauffeurSelectionne = chauffeur.dataset.id;
    alert("Chauffeur sélectionné : " + chauffeurSelectionne);
  });
});

/*JS : Sélection des aides */
function getAidesSelectionnees() {
  return Array.from(
    document.querySelectorAll('#aides input[type="checkbox"]:checked')
  ).map(cb => cb.value);
}

/*JS : Commander */
document.getElementById("commander").addEventListener("click", () => {
  if (!chauffeurSelectionne) {
    alert("Veuillez sélectionner un chauffeur");
    return;
  }

  const depart = document.getElementById("depart").value;
  const arrivee = document.getElementById("arrivee").value;
  const aides = getAidesSelectionnees();

  console.log({
    chauffeur: chauffeurSelectionne,
    depart,
    arrivee,
    aides
  });

  alert("Commande prête (voir console)");
});

