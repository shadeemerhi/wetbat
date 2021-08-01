const router = require('express').Router();

const db = require('../database/models');
const quoteController = require('../controllers/quoteController');

router.get('/', async (req, res) => {
    const quotes = await quoteController.getAllQuotes();
    console.log('BACK AFTER CONTROLLER', quotes);
    res.json({ quotes });
});

module.exports = router;
