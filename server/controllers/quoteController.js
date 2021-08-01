const db = require('../database/models');

exports.getAllQuotes = async (req, res) => {
    const quotes = await db.Quote.findAll();
    console.log('HERE AT THE CONTROLLER', quotes);

    return quotes;
}