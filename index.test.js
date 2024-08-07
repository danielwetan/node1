const request = require('supertest');
const app = require('./index'); // Assuming your index.js exports the app

describe('GET /', () => {
  it('responds with json containing "Hello Word"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ msg: "Hello Word" });
  });
});