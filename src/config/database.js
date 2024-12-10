const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost", // Substitua com o seu host de banco de dados
  user: "root", // Substitua com o seu usuário de banco de dados
  password: "", // Substitua com a sua senha de banco de dados
  database: "dictionary", // Substitua com o nome do seu banco de dados
});

module.exports = pool;
