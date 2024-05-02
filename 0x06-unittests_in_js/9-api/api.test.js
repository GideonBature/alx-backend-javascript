const request = require('request');
const expect = require('chai').expect;

describe('Index page', function() {
  // ... (same as before)
});

describe('Cart page', function() {
  it('should return a 200 status code when :id is a number', function(done) {
    request.get('http://localhost:7865/cart/12', function(err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return a 404 status code when :id is not a number', function(done) {
    request.get('http://localhost:7865/cart/hello', function(err, res, body) {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
