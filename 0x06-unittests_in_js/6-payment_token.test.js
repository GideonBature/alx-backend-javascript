const getPaymentTokenFromAPI = require('./6-payment_token');
const expect = require('chai').expect;

describe('getPaymentTokenFromAPI', () => {

	it('should call the callback function with Successful response from the API', (done) => {
		getPaymentTokenFromAPI(true).then((response) => {
			expect(response.data).to.equal('Successful response from the API');
			done();
		});
	});
})
