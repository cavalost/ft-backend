const request = require('supertest');
const app = require('../src/app');

describe('Error 404', () => {
    it('should throw an error', async () => {
        const res = await request(app)
            .get('/season');
        expect(res.statusCode).toEqual(404);
        expect(res.body).toHaveProperty('error');
        expect(res.body.error).toEqual('Not Found');
    });
});
