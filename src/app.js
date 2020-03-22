const cors = require('cors');
const express = require('express');

const newsRouter = require('./routes/news');
const { handleErrors, handle404Error } = require('./utils/errorHandler');

const app = express();

app.use(cors());

app.use('/news', newsRouter);

app.get('/', (req, res) => res.send('Hello from my project!'));

app.use(handle404Error);

app.use(handleErrors);

module.exports = app;
