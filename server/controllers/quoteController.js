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

exports.deleteQuote = async (req, res) => {
	try {
		const { id } = req.params;
		return await db.Quote.destroy({
			where: {
				id
			}
		});
	} catch (error) {
		res.json({ error: 'Error deleting quote' });
	}
}
