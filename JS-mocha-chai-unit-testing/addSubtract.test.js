let assert = require('chai').assert
let createCalculator = require('./addSubtract');

describe('createCalculator', function () {
    it('gets value', function () {
        assert.equal(createCalculator().get(), 0)
    });

    it('checks add property', function () {
        assert.equal(createCalculator().hasOwnProperty('add'), true)
    });

    it('checks subtract property', function () {
        assert.equal(createCalculator().hasOwnProperty('subtract'), true)
    });

    it('checks get property', function () {
        assert.equal(createCalculator().hasOwnProperty('get'), true)
    });

    it('gets value', function () {
        assert.equal(createCalculator().get(), 0)
    });

    it('checks return type', function () {
        assert.equal(typeof(createCalculator()), 'object')
    });
    it('add value', function () {
        let obj = createCalculator();
        obj.add(1);
        let result = obj.get();
        assert.equal(result, 1)
    });   
    it('add string value', function () {
        let obj = createCalculator();
        obj.add('2');
        let result = obj.get();
        assert.equal(result, 2)
    })
    it('subtract value', function () {
        let obj = createCalculator();
        obj.subtract('2');
        let result = obj.get();
        assert.equal(result, -2)
    })
    it('add incorect value', function () {
        let obj = createCalculator();
        obj.add('dasd');
        let result = obj.get();
        assert.equal(result.toString(), 'NaN')
    })
    it('sub incorect value', function () {
        let obj = createCalculator();
        obj.subtract('dasd');
        let result = obj.get();
        assert.equal(result.toString(), 'NaN')
    })
});