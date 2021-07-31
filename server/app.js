const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

const { json, urlencoded } = express;
app.use(json());
app.use(urlencoded({ extended: false }));

// Define routes
app.get('/test', (req, res) => {
	res.json({ message: 'YOUR APP IS CONNECTED TO THE BACKEND' });
});

app.use(function (req, res, next) {
	next(createError(404));
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
