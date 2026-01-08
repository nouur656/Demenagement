const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Demenagement OK");
});

app.post("/chauffeur", (req, res) => {
  res.json({ message: "Chauffeur reçu", data: req.body });
});

app.post("/aide", (req, res) => {
  res.json({ message: "Aide reçue", data: req.body });
});

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
