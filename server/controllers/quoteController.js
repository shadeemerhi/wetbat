const db = require('../database/models');

exports.getAllQuotes = async (req, res) => {
    const quotes = await db.Quote.findAll();
    return quotes;
}