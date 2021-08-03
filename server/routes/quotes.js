const router = require('express').Router();
const quoteController = require('../controllers/quoteController');

router.get('/', async (req, res) => {
	const quotes = await quoteController.getAllQuotes();
	res.json({ quotes });
});

router.post('/', async (req, res) => {
    try {
        const quote = await quoteController.createQuote(req);
        res.status(200).json({ quote });
    } catch (thing) {
        res.json({ error: 'Error creating quote' });
    }
});

module.exports = router;
