const db = require('../database/models');

exports.getAllQuotes = async (req, res) => {
    const quotes = await db.Quote.findAll();
    return quotes;
}

exports.createQuote = async (req, res) => {
    const { quote } = req.body;
    return await db.Quote.create(quote);
}