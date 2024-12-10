const express = require("express");
const app = express();
const port = 3000;

// Defina suas rotas e lógica aqui
app.get("/", (req, res) => {
  res.send("Servidor rodando!");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
