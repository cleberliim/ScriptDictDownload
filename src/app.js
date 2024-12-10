const express = require("express");
const app = express();
const cors = require("cors"); // Se precisar lidar com CORS

// Configuração do middleware
app.use(cors()); // Para permitir requisições de outros domínios
app.use(express.json()); // Para lidar com requisições JSON

// Rota de exemplo
app.get("/", (req, res) => {
  res.send("Bem-vindo ao backend do dicionário!");
});

// Rota para importar palavras (usa o script)
const importWords = require("./scripts/importWords");
app.get("/import-words", async (req, res) => {
  try {
    await importWords();
    res.status(200).send("Palavras importadas com sucesso!");
  } catch (error) {
    res.status(500).send("Erro ao importar palavras.");
  }
});

module.exports = app;
