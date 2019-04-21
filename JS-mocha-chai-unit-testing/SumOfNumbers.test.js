let assert = require('chai').assert;
const sum = require('./SumOfNumbers');

describe('sum', function () {
    it('checks if sum is correct', function() {
        assert.equal(sum([1, 2, 3, 4]), 10)
    });
    it('is number', function() {
        assert.equal(typeof(sum([1, 2, 3, 4])), 'number')
    });
    it('is undifined', function (){
        assert.equal(typeof(sum(['1', '2', '3', '4'])), 'number')
    });
    
    
});