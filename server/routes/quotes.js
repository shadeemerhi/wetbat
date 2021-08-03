const router = require('express').Router();
const quoteController = require('../controllers/quoteController');

router.get('/', async (req, res) => {
    try {
        const quotes = await quoteController.getAllQuotes(req, res);
        res.json({ quotes });
    } catch (error) {
        res.json({ error: 'Error retrieving quotes' });
    }
});

router.post('/', async (req, res) => {
    try {
        const quote = await quoteController.createQuote(req, res);
        res.status(200).json({ quote });
    } catch (thing) {
        res.json({ error: 'Error creating quote' });
    }
});

module.exports = router;
