const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should return 200 OK and render the homepage', async () => {
    const response = await request(app).get('/').expect(200);

    expect(response.type).toMatch(/html/);
    expect(response.text).toContain('Sample Node.js Application');
  });
});

describe('unknown route', () => {
  it('should return 404 Not Found', async () => {
    await request(app).get('/does-not-exist').expect(404);
  });
});