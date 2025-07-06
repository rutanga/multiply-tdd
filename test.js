const assert = require('chai').assert;
const multiply = require('./multiply');

describe('multiply function', function () {
    it('should multiply 1 * 1 = 1', function () {
        assert.equal(multiply(1, 1), 1);

    });

    //adding other tests for a functions that doesn't return 1
    it('should multiply 2 * 2 = 4', function () {
        assert.equal(multiply(2, 2), 4);
    });

    it('should multiply 3 * 3 = 9', function () {
        assert.equal(multiply(3, 3), 9);
    })

    it('should multiply 4 * 4 = 16', function () {
        assert.equal(multiply(4, 4), 16)
    })

    it('should multiply 5 * 6 = 30', function () {
        assert.equal(multiply(5, 6), 30)
    })

    it('should multiply 23 * 45 = 1035', function () {
        assert.equal(multiply(23, 45), 1035)
    })

})