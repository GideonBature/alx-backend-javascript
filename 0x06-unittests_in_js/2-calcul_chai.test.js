const calculateNumber = require('./2-calcul_chai');
const chai = require('chai');
const expect = chai.expect;

describe('calculateNumber', () => {
	// SUM
	it('should return 2 when called with SUM, 1 and 1', () => {
		expect(calculateNumber('SUM', 1, 1)).to.equal(2);
	});
	it('should return 4 when called with SUM, 3 and 1', () => {
		expect(calculateNumber('SUM', 3, 1)).to.equal(4);
	});
	it('should return -2 when called with SUM, 4 and -6', () => {
		expect(calculateNumber('SUM', 4, -6)).to.equal(-2);
	})
	it('should return 0 when called with SUM, 0 and 0', () => {
		expect(calculateNumber('SUM', 0, 0)).to.equal(0);
	})
	it('should return -12 when called with SUM, -10 and -2', () => {
		expect(calculateNumber('SUM', -10, -2)).to.equal(-12);
	})
	it('should return 7 when called with SUM, 5.3 and 2.2', () => {
		expect(calculateNumber('SUM', 5.3, 2.2)).to.equal(7);
	})
	it('should return 9 when called with SUM, 4.8 and 3.6', () => {
		expect(calculateNumber('SUM', 4.8, 3.6)).to.equal(9);
	})

	// SUBTRACT
	it('should return 0 when called with SUBTRACT, 1 and 1', () => {
		expect(calculateNumber('SUBTRACT', 1, 1)).to.equal(0);
	});
	it('should return 2 when called with SUBTRACT, 3 and 1', () => {
		expect(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
	});
	it('should return 10 when called with SUBTRACT, 4 and -6', () => {
		expect(calculateNumber('SUBTRACT', 4, -6)).to.equal(10);
	})
	it('should return 0 when called with SUBTRACT, 0 and 0', () => {
		expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
	})
	it('should return -8 when called with SUBTRACT, -10 and -2', () => {
		expect(calculateNumber('SUBTRACT', -10, -2)).to.equal(-8);
	})
	it('should return 3 when called with SUBTRACT, 5.3 and 2.2', () => {
		expect(calculateNumber('SUBTRACT', 5.3, 2.2)).to.equal(3);
	})
	it('should return 1 when called with SUBTRACT, 4.8 and 3.6', () => {
		expect(calculateNumber('SUBTRACT', 4.8, 3.6)).to.equal(1);
	})

	// DIVIDE
	it('should return 1 when called with DIVIDE, 1 and 1', () => {
		expect(calculateNumber('DIVIDE', 1, 1)).to.equal(1);
	});
	it('should return 3 when called with DIVIDE, 3 and 1', () => {
		expect(calculateNumber('DIVIDE', 3, 1)).to.equal(3);
	});
	it('should return -2 when called with DIVIDE, 12 and -6', () => {
		expect(calculateNumber('DIVIDE', 12, -6)).to.equal(-2);
	})
	it('should return Error when called with DIVIDE, 0 and 0', () => {
		expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
	})
	it('should return 5 when called with DIVIDE, -10 and -2', () => {
		expect(calculateNumber('DIVIDE', -10, -2)).to.equal(5);
	})
	it('should return 3 when called with DIVIDE, 6.3 and 2.2', () => {
		expect(calculateNumber('DIVIDE', 6.3, 2.2)).to.equal(3);
	})
	it('should return 4 when called with DIVIDE, 15.8 and 3.6', () => {
		expect(calculateNumber('DIVIDE', 15.8, 3.6)).to.equal(4);
	})
})
