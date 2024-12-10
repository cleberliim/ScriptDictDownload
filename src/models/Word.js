const pool = require("../config/database");

const Word = {
  async findPaginated(search, limit, offset) {
    const query = `
            SELECT word FROM words
            WHERE word LIKE ?
            LIMIT ? OFFSET ?
        `;
    const [rows] = await pool.query(query, [`${search}%`, limit, offset]);
    return rows.map((row) => row.word);
  },

  async count(search) {
    const query = `SELECT COUNT(*) AS total FROM words WHERE word LIKE ?`;
    const [[{ total }]] = await pool.query(query, [`${search}%`]);
    return total;
  },
};

module.exports = Word;
