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

// New test suite for the /cart/:id endpoint
describe('Cart page', function() {
    it('should return a 200 status code for a valid numeric id', function(done) {
        request.get('http://localhost:7865/cart/123', function(err, res, body) {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it('should return the correct response for a valid numeric id', function(done) {
        request.get('http://localhost:7865/cart/123', function(err, res, body) {
            expect(body).to.include('Payment methods for cart 123');
            done();
        });
    });

    it('should return a 400 status code for an invalid id (non-numeric)', function(done) {
        request.get('http://localhost:7865/cart/abc', function(err, res, body) {
            expect(res.statusCode).to.equal(400);
            done();
        });
    });

    it('should return the correct error message for an invalid id', function(done) {
        request.get('http://localhost:7865/cart/abc', function(err, res, body) {
            expect(body).to.equal('Invalid cart ID, must be a number');
            done();
        });
    });
});
