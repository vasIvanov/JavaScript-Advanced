let assert = require('chai').assert
let rgbToHexColor = require('./RGBtoHex');

describe('rgbToHexColor', function() {
    it('red is not integer', function () {
        assert.equal(rgbToHexColor(1.23, 2, 3), undefined)
    });
    it('green is not integer', function () {
        assert.equal(rgbToHexColor(1, 2.32, 3), undefined)
    });
    it('blue is not integer', function () {
        assert.equal(rgbToHexColor(1, 2, 3.12), undefined)
    });

    it('red is not number', function () {
        assert.equal(rgbToHexColor('1', 2, 3), undefined)
    });
    it('green is not number', function () {
        assert.equal(rgbToHexColor(1, '2', 3), undefined)
    });
    it('blue is not number', function () {
        assert.equal(rgbToHexColor(1, 2, '3'), undefined)
    });

    it('red is not in range', function () {
        assert.equal(rgbToHexColor(-1, 2, 3), undefined)
    });
    it('green is not in range', function () {
        assert.equal(rgbToHexColor(1, -2, 3), undefined)
    });
    it('blue is not in range', function () {
        assert.equal(rgbToHexColor(1, 2, -3), undefined)
    });


    it('red is not in range', function () {
        assert.equal(rgbToHexColor(258, 2, 3), undefined)
    });
    it('green is not in range', function () {
        assert.equal(rgbToHexColor(1, 289, 3), undefined)
    });
    it('blue is not in range', function () {
        assert.equal(rgbToHexColor(1, 2, 300), undefined)
    });

    it('color is valid', function () {
        assert.equal(rgbToHexColor(2, 34, 255), '#0222FF')
    })

    it('all params are invalid', function () {
        assert.equal(rgbToHexColor('1', -1, 3.56), undefined)
    })

});