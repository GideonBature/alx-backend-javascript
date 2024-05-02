const expect = require('chai').expect;

const sinon = require('sinon');

const Utils = require('./utils');

const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {

	it('should call the callback function with SUM, totalAmount and totalShipping', () => {
		const spy = sinon.stub(Utils, 'calculateNumber');
		sendPaymentRequestToApi(100, 20);

		expect(spy.calledWith('SUM', 100, 20)).to.be.true;
		spy.restore();
	});
});
