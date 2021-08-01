const createError = require('http-errors');
const express = require('express');
require('dotenv').config();

// Express instance
const app = express();

// Express configuration
const { json, urlencoded } = express;
app.use(json());
app.use(urlencoded({ extended: false }));

// Route registration
app.use('/api', require('./routes'));

app.use(function (req, res, next) {
	next(createError(404));
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
