const {expect} = require('chai');
const request = require('request');

describe('GET /', () => {
  it('should return 200', (done) => {
    request('http://localhost:7865', (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('should return Welcome to the payment system', (done) => {
    request('http://localhost:7865', (err, res) => {
      expect(res.body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
describe('GET /cart/:id', () => {
  it('should return 200', (done) => {
    request('http://localhost:7865/cart/12', (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('should return Payment methods for cart 12', (done) => {
    request('http://localhost:7865/cart/12', (err, res) => {
      expect(res.body).to.equal('Payment methods for cart 12');
      done();
    });
  });
  it('should return 404', (done) => {
    request('http://localhost:7865/cart/hello', (err, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  }
  );
});
describe('GET /available_payments', () => {
  it('should return 200', (done) => {
    request('http://localhost:7865/available_payments', (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('should return Payment methods for cart 12', (done) => {
    request('http://localhost:7865/available_payments', (err, res) => {
      expect(res.body).to.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
      done();
    });
  });
}
);
describe('POST /login', () => {
  it('should return 200', (done) => {
    request.post('http://localhost:7865/login', (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('should return Payment methods for cart 12', (done) => {
    request.post('http://localhost:7865/login', (err, res) => {
      expect(res.body).to.equal('Welcome undefined');
      done();
    });
  });
}
);
