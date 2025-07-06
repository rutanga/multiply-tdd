const assert = require('chai').assert;
const multiply = require('./multiply');

describe('multiply function', function () {
    it('should multiply 1 * 1 = 1', function () {
        assert.equal(multiply(1, 1), 1);

    });

    //adding another test for a function that doesn't return 1
    it('should multiply 2 * 2 = 4', function () {
        assert.equal(multiply(2, 2), 4);
    });

    it('should multiply 3 * 3 = 9', function () {
        assert.equal(multiply(3, 3), 9);
    })

})