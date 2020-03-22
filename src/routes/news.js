const { Router } = require('express');

const { getNews } = require('../services/news');

const router = Router();

router.get('/', async (req, res, next) => {
    const { search, maxResults = 100, offset = 0 } = req.query;
    if (!search || !search.trim()) next(new Error('You have to provide a text to search!'));
    try {
        const response = await getNews(
            search.trim(),
            parseInt(maxResults, 10),
            parseInt(offset, 10)
        );
        return res.json(response);
    } catch (error) {
        return next(new Error(error));
    }
});

module.exports = router;
