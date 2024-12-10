# ScriptDictDownload

Este projeto foi desenvolvido como parte de um desafio da **Coodesh**. Ele automatiza o download de um arquivo JSON contendo palavras em inglês, insere essas palavras em um banco de dados MySQL e permite consultas e manipulação dos dados.

## Funcionalidades

- Download automático do arquivo [`words_dictionary.json`](https://github.com/dwyl/english-words/blob/master/words_dictionary.json).
- Processamento e inserção das palavras no banco de dados MySQL.
- Organização eficiente dos dados para fácil consulta e uso.

## Tecnologias Utilizadas

- **Node.js**: Para execução do script principal.
- **MySQL**: Banco de dados utilizado para armazenar as palavras.
- **Axios**: Para realizar o download do arquivo JSON.
- **cors**: Gerencia políticas de compartilhamento de recursos entre origens (CORS).
- **dotenv**: Lê variáveis de ambiente a partir de um arquivo .env.
- **express**: Criação de APIs e rotas.

## Pré-requisitos

Antes de rodar o projeto localmente, você precisará de alguns pré-requisitos:

- **Node.js** (se não tiver, instale [aqui](https://nodejs.org/)).
- **MySQL** (Instale localmente com o [WampServer](https://www.wampserver.com/)).

### Como configurar o WampServer:

1. **Instale o WampServer**: Baixe e instale o [WampServer](https://www.wampserver.com/).
2. **Inicie o WampServer**: Após a instalação, inicie o WampServer e verifique se o ícone do WAMP está verde na barra de tarefas, indicando que o Apache e o MySQL estão funcionando corretamente.
3. **Acesse o phpMyAdmin**: Abra o navegador e vá para `http://localhost/phpmyadmin`. Faça login com as credenciais padrão (usuário: `root`, senha: `''`).

### Criação do Banco de Dados:

Execute o seguinte script SQL no **phpMyAdmin** ou via linha de comando do MySQL para criar o banco de dados `dictionary` e a tabela `words`:

```sql
CREATE DATABASE dictionary;
USE dictionary;
CREATE TABLE words (
    id INT AUTO_INCREMENT PRIMARY KEY,
    word VARCHAR(255) NOT NULL
);
```

## Instalação

### Clone o repositório:

```bash
git clone https://github.com/cleberliim/ScriptDictDownload.git
cd ScriptDictDownload
```

### Instale as dependências:

```bash
npm install
```

### Configuração do banco de dados:

Mudar as credenciais: src/config/database.js

```bash
 const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost", // Substitua com o seu host de banco de dados
  user: "root", // Substitua com o seu usuário de banco de dados
  password: "", // Substitua com a sua senha de banco de dados
  database: "dictionary", // Substitua com o nome do seu banco de dados
});

module.exports = pool;
```

## Uso

Execute o script para baixar e inserir os dados no banco de dados:

```bash
npm start
```

Após a execução, as palavras estarão inseridas na tabela `words` no banco de dados MySQL. Você pode consultar a tabela através do phpMyAdmin ou via comandos MySQL:

```sql
SELECT * FROM words;
```

## Concluido

