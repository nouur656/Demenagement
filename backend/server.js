const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

/* Middlewares */
app.use(cors());
app.use(express.json());

/* ===============================
   SERVIR LES FICHIERS FRONTEND
   =============================== */

/*
  On sert tout le projet depuis la racine :
  - /css  → dossier css
  - /js   → dossier js
  - /assets → dossier assets
*/
app.use(express.static(path.join(__dirname, "..")));

/* ===============================
   PAGE D’ACCUEIL
   =============================== */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../html/index.html"));
});

/* ===============================
   API (BACKEND)
   =============================== */

/* Chauffeur */
app.post("/chauffeur", (req, res) => {
  console.log("Chauffeur reçu :", req.body);
  res.json({
    success: true,
    message: "Chauffeur enregistré avec succès",
    data: req.body
  });
});

/* Aide */
app.post("/aide", (req, res) => {
  console.log("Aide reçue :", req.body);
  res.json({
    success: true,
    message: "Aide enregistrée avec succès",
    data: req.body
  });
});

/* ===============================
   LANCEMENT DU SERVEUR
   =============================== */
const PORT = 3000;
app.listen(PORT, () => {
  console.log("SERVER.JS BIEN LANCÉ");
  console.log(`Serveur actif sur http://localhost:${PORT}`);
});
app.get("/chauffeur.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../html/chauffeur.html"));
});
