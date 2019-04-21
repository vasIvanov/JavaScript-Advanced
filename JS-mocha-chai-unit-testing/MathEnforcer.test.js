let assert = require('chai').assert;
let mathEnforcer  = require('./MathEnforcer');

describe('addFive', function() {
    it('should return undefined with NaN', function() {
        let num = 'five';
        let addFive = mathEnforcer.addFive;
        assert.equal(addFive(num), undefined);
    });
    it('should return correct number with correct input', function () {
        let num = 2;
        let addFive = mathEnforcer.addFive;
        assert.equal(addFive(num), 7);
    });
});

describe('subtractTen', function () {
    it('should return undefined with NaN', function () {
        let num = 'five';
        let subtractTen = mathEnforcer.subtractTen;
        assert.equal(subtractTen(num), undefined);
    });
    it('should return correct number with correct input', function() {
        let num = 5;
        let subtractTen = mathEnforcer.subtractTen;
        assert.equal(subtractTen(num), -5);
    });
});

describe('sum', function () {
    it('return undefined with NaN first parameter', function () {
        let num1 = 'one';
        let num2 = 3;
        let sum = mathEnforcer.sum;
        assert.equal(sum(num1, num2), undefined);
    });
    it('return undefined with NaN second parameter', function () {
        let num1 = 1;
        let num2 = 'three';
        let sum = mathEnforcer.sum;
        assert.equal(sum(num1, num2), undefined);
    });
    it('return correct sum with correct parameters', function () {
        let num1 = 1;
        let num2 = 3;
        let sum = mathEnforcer.sum;
        assert.equal(sum(num1, num2), 4);
    });
    it('return undefined with no second parameters', function () {
        let sum = mathEnforcer.sum;
        assert.equal(sum(), undefined);
    });
    it('return undefined with no second parameter', function () {
        let num1 = 1;
        let sum = mathEnforcer.sum;
        assert.equal(sum(num1), undefined);
    });
});
