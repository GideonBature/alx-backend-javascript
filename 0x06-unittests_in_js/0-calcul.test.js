const assert = require('assert');

const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
	it('should return 2 when called with 1 and 1', () => {
		assert.strictEqual(calculateNumber(1, 1), 2);
	});
	it('should return 4 when called with 3 and 1', () => {
		assert.strictEqual(calculateNumber(3, 1), 4);
	});
	it('should return -2 when called with 4 and -6', () => {
		assert.strictEqual(calculateNumber(4, -6), -2);
	})
	it('should return 0 when called with 0 and 0', () => {
		assert.strictEqual(calculateNumber(0, 0), 0);
	})
	it('should return -12 when called with -10 and -2', () => {
		assert.strictEqual(calculateNumber(-10, -2), -12);
	})
	it('should return 7 when called with 5.3 and 2.2', () => {
		assert.strictEqual(calculateNumber(5.3, 2.2), 7);
	})
	it('should return 9 when called with 4.8 and 3.6', () => {
		assert.strictEqual(calculateNumber(4.8, 3.6), 9);
	})
})
