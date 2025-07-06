const assert = require('chai').assert;
const multiply = require('./multiply');

describe('multiply function', function () {
    it('should multiply 1 * 1 = 1', function () {
        assert.equal(multiply(1, 1), 1);

    })

})