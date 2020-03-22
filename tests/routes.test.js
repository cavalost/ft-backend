const request = require('supertest');
const app = require('../src/app');

describe('News', () => {
    it('should get the news', async () => {
        let res = await request(app)
            .get('/news?search=hello');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('news');

        let { indexCount, news } = res.body;
        expect(indexCount > 0).toEqual(news.length > 0);

        res = await request(app)
            .get('/news?search=asdfasdf');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('news');

        ({ indexCount, news } = res.body);
        expect(indexCount > 0).toEqual(news.length > 0);
    });

    it('should get error when no text to search', async () => {
        let res = await request(app)
            .get('/news');
        expect(res.statusCode).toEqual(500);
        expect(res.body).toHaveProperty('error');
        expect(res.body.error).toEqual('You have to provide a text to search!');

        res = await request(app)
            .get('/news?search=');
        expect(res.statusCode).toEqual(500);
        expect(res.body).toHaveProperty('error');
        expect(res.body.error).toEqual('You have to provide a text to search!');

        res = await request(app)
            .get('/news?search=%20');
        expect(res.statusCode).toEqual(500);
        expect(res.body).toHaveProperty('error');
        expect(res.body.error).toEqual('You have to provide a text to search!');
    });
});

describe('Error 404', () => {
    it('should throw an error', async () => {
        const res = await request(app)
            .get('/season');
        expect(res.statusCode).toEqual(404);
        expect(res.body).toHaveProperty('error');
        expect(res.body.error).toEqual('Not Found');
    });
});
