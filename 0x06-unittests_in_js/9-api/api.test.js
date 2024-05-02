const request = require('request');
const expect = require('chai').expect;

describe('Index page', function() {
  it('should return a 200 status code', function(done) {
    request.get('http://localhost:7865/', function(err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct result', function(done) {
    request.get('http://localhost:7865/', function(err, res, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', function() {
  it('should return a 200 status code when :id is a number', function(done) {
    request.get('http://localhost:7865/cart/123', function(err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return a 404 status code when :id is not a number', function(done) {
    request.get('http://localhost:7865/cart/abc', function(err, res, body) {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
