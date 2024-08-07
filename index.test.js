const request = require('supertest');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    msg: "Hello World"
  });
});

describe('GET /', () => {
  it('should return 200 OK and a JSON message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ msg: "Hello World" });
  });
});