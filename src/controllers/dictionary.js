const Word = require("../models/Word");

const getWords = async (req, res) => {
  const { search = "", limit = 10, page = 1 } = req.query;
  const offset = (page - 1) * limit;

  const results = await Word.findPaginated(search, parseInt(limit), offset);
  const totalDocs = await Word.count(search);

  res.status(200).json({
    results,
    totalDocs,
    page: parseInt(page),
    totalPages: Math.ceil(totalDocs / limit),
    
    hasNext: page < Math.ceil(totalDocs / limit),
    hasPrev: page > 1,
  });
};

module.exports = { getWords };
