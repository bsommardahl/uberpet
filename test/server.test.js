const server = require('../src/server');

test('endpoint test | POST /subscribe | empty payload -> 400 Bad Request', (done) => {
  const request = {
    method: 'GET',
    url: '/rooms',
    payload: {}
  };

  server.inject(request)
    .then(response => {
      expect(response.statusCode).toBe(501);
      done();
    });
});