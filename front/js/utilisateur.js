/*JS : clic sur chauffeur (routing) */
let chauffeurSelectionne = null;

document.querySelectorAll(".chauffeur").forEach(chauffeur => {
  chauffeur.addEventListener("click", () => {
    chauffeurSelectionne = chauffeur.dataset.id;
    alert("Chauffeur sélectionné : " + chauffeurSelectionne);
  });
});
