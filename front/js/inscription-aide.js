// Prévisualisation de la photo de profil
document.getElementById('photo-profile').addEventListener('change', function(e) {
    const reader = new FileReader();
    reader.onload = function() {
        const preview = document.getElementById('profile-preview');
        preview.innerHTML = `<img src="${reader.result}">`;
    }
    reader.readAsDataURL(e.target.files[0]);
});

// Gestion de la soumission du formulaire
document.getElementById('form-aide').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Récupération des données
    const aideData = {
        nom: document.getElementById('nom').value,
        tel: document.getElementById('telephone').value,
        ville: document.getElementById('ville').value,
        cin: document.getElementById('cin-number').value
    };

    console.log("Données de l'aide enregistrées :", aideData);

    // Simulation d'envoi et redirection vers la page 7
    alert("Inscription réussie !");
    window.location.href = "page7.html"; // Remplace par le nom exact de ta page 7
});