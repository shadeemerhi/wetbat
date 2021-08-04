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

router.delete('/:id', async(req, res) => {
    try {
        await quoteController.deleteQuote(req, res);
        res.status(200).json({ message: 'Quote successfully deleted' });
    } catch (error) {
        res.json({ error: 'Error deleting quote' });
    }
})

module.exports = router;
