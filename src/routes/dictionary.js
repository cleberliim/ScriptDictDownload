const express = require("express");
const { getWords } = require("../controllers/dictionary");
const cache = require("../middleware/cache");

const router = express.Router();

router.get(
  "/entries/en",
  cache((req) => `words:${JSON.stringify(req.query)}`),
  getWords
);

module.exports = router;
