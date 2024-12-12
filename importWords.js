const fs = require("fs");
const { MongoClient } = require("mongodb");

(async () => {
  const filePath = "./words_dictionary.json"; // Caminho do arquivo local
  const mongoUri = "mongodb://localhost:27017"; // URI do MongoDB local
  const dbName = "dictionary-api"; // Nome do banco de dados
  const collectionName = "words"; // Nome da coleção

  try {
    console.log("Lendo o arquivo JSON local...");
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

    if (typeof data !== "object") {
      console.error("Os dados lidos não são válidos.");
      return;
    }

    console.log("Conectando ao MongoDB...");
    const client = new MongoClient(mongoUri);
    await client.connect();
    console.log("Conexão estabelecida.");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    console.log("Inserindo dados no MongoDB...");
    const formattedData = Object.entries(data).map(([word, exists]) => ({
      word,
      exists,
    }));
    await collection.insertMany(formattedData);

    console.log("Dados inseridos com sucesso!");
    await client.close();
  } catch (error) {
    console.error("Erro:", error.message);
  }
})();
