const db = require('../database/models');

exports.getAllQuotes = async (req, res) => {
	try {
		const quotes = await db.Quote.findAll();
		return quotes;
	} catch (error) {
		res.json({ error: 'Error retrieving quotes' });
	}
};

exports.createQuote = async (req, res) => {
	try {
		const { quote } = req.body;
		return await db.Quote.create(quote);
	} catch (error) {
		res.json({ error: 'Error creating quote' });
	}
};
