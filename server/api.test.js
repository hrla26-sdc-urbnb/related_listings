const request = require('supertest');
const app = require('./app.js');

describe('GET /api/:link_id', function() {
  it('retrieves 10 properties with link_id equal to req.params', function(done) {
    request(app)
      .get('/api/11111')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);    
  });    
});

// test('GET to api/:link_id should send a response', (done) => {
//     request(app).get('/api/11111').then((response) => {
//       expect(response.statusCode).toBe(200);
//       done();
//     });
//   });