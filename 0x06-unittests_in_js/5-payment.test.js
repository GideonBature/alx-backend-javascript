const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('sendPaymentRequestToApi', () => {
	beforeEach(() => {
		spy = sinon.spy(console, 'log');
	});
	afterEach(() => {
		spy.restore();
	});

	it('should call the callback function with SUM, totalAmount and totalShipping', () => {
		sendPaymentRequestToApi(100, 20);
		spy.calledWith('The total is: 120');
		spy.calledOnce;
	});

	it('should call the callback function with SUBTRACT, totalAmount and totalShipping', () => {
		sendPaymentRequestToApi(100, 20);
		spy.calledWith('The total is: 80');
		spy.calledOnce;
	});
	
});
