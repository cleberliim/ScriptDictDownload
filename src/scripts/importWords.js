const axios = require("axios"); // Para fazer requisições HTTP
const pool = require("../config/database"); // Importando a pool de conexões do banco de dados

const importWords = async () => {
  try {
    console.log("Downloading word list...");
    // Requisição para obter a lista de palavras da API externa
    const response = await axios.get(
      "https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json"
    );
    const words = Object.keys(response.data); // Pegando as chaves (palavras) do JSON

    console.log(`Inserting ${words.length} words into the database...`);
    const query = "INSERT IGNORE INTO words (word) VALUES ?"; // Query para inserir palavras no banco
    const values = words.map((word) => [word]); // Convertendo as palavras para o formato adequado

    // Executando a query de inserção
    const [result] = await pool.query(query, [values]);
    console.log(`${result.affectedRows} words added to the database.`);
  } catch (error) {
    console.error("Error importing words:", error.message);
  } finally {
    pool.end(); // Finalizando a conexão com o banco
  }
};

importWords(); // Chamando a função para executar o script
