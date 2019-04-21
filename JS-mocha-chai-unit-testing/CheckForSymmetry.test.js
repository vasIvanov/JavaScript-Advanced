let assert = require('chai').assert;
const isSymmetric = require('./CheckForSymmetry');

describe('isSymmetric', function () {
    it('input is incorect', function (){
        assert.equal(isSymmetric(''), false)
    });
    it('is symetric', function () {
        assert.equal(isSymmetric([1, 2, 1]), true)
    });
    it('is not symetric', function () {
        assert.equal(isSymmetric([1, 2, 3]), false)
    });
    it('empty array', function () {
        assert.equal(isSymmetric([]), true)
    });
    
    it('only 1 elements', function () {
        assert.equal(isSymmetric([1]), true)
    });
});

