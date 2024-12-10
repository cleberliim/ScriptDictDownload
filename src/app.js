const express = require("express");
const dictionaryRoutes = require("./routes/dictionary");

const app = express();

app.use(express.json());
app.use("/api", dictionaryRoutes);

module.exports = app;
