const axios = require("axios");

const fetchWords = async () => {
  try {
    const response = await axios.get(
      "https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json"
    );
    return Object.keys(response.data); // Retorna as palavras como um array
  } catch (error) {
    console.error("Error fetching words from API:", error.message);
    throw error; // Lança o erro para ser tratado em outro lugar
  }
};

module.exports = { fetchWords };
