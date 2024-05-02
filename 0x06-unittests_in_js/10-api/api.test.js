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

// Test suite for /available_payments endpoint
describe('Available Payments', function() {
    it('should return a 200 status code and correct body', function(done) {
        request.get('http://localhost:7865/available_payments', function(err, res, body) {
            expect(res.statusCode).to.equal(200);
            expect(body).to.equal(JSON.stringify({
                payment_methods: {
                    credit_cards: true,
                    paypal: false
                }
            }));
            done();
        });
    });
});

// Test suite for POST /login endpoint
describe('Login', function() {
    it('should welcome a valid user', function(done) {
        request.post({
            url: 'http://localhost:7865/login',
            body: JSON.stringify({ userName: 'Alice' }),
            headers: { 'Content-Type': 'application/json' }
        }, function(err, res, body) {
            expect(res.statusCode).to.equal(200);
            expect(body).to.equal('Welcome Alice');
            done();
        });
    });

    it('should return 400 if userName is missing', function(done) {
        request.post({
            url: 'http://localhost:7865/login',
            body: JSON.stringify({}),
            headers: { 'Content-Type': 'application/json' }
        }, function(err, res, body) {
            expect(res.statusCode).to.equal(400);
            expect(body).to.equal('Username is required');
            done();
        });
    });
});
