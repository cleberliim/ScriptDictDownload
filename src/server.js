const app = require("./app"); // Importa as configurações do Express

// Definindo a porta diretamente no código
const PORT = 3000; // Ou qualquer outra porta que preferir

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
