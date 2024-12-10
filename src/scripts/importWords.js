const axios = require('axios');
const pool = require('../config/database');

const importWords = async () => {
    try {
        console.log('Downloading word list...');
        const response = await axios.get(
            'https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json'
        );
        const words = Object.keys(response.data);

        console.log(`Inserting ${words.length} words into the database...`);
        const query = 'INSERT IGNORE INTO words (word) VALUES ?';
        const values = words.map((word) => [word]);

        const [result] = await pool.query(query, [values]);
        console.log(`${result.affectedRows} words added to the database.`);
    } catch (error) {
        console.error('Error importing words:', error.message);
    } finally {
        pool.end();
    }
};

importWords();
