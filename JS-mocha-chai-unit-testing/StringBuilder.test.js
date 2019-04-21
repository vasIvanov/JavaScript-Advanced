const StringBuilder = require('./StringBuilder');
const assert = require('chai').assert;
const expect = require('chai').expect
describe('test String Builder', () => {
    let sb;
    beforeEach(() => {
        sb = new StringBuilder();
    });

    describe('test constructor', () => {
        it('should return empty string', () => {
            assert.equal(sb.toString(), '');
        });
        it('return  string with the correct data', () => {
            sb = new StringBuilder('Test');
            let expected = 'Test';
            assert.equal(sb.toString(), expected);
        });
        it('throw error with non-string param', () => {
            let result = function () {
                let sb = new StringBuilder(21)
            }
            expect(result).to.throw(TypeError);
        });
    });

    describe('test append function', () => {
        it('should append correctly with new SB', () => {
            sb.append('test12');
            let expected = 'test12';
            assert.equal(sb.toString(), expected);
        });
        it('should append at the end of the string', () => {
            sb = new StringBuilder('Test');
            sb.append('123');
            let expected = 'Test123';
            assert.equal(sb.toString(), expected);
        });
        it('throw error with non-string param', () => {
            sb = new StringBuilder('Test');
            let result = function () {
                sb.append(123);
            }
            assert.throw(result, 'Argument must be string');
        });
    });

    describe('test prepend functionality', () => {
        it('should prepend correctly with new SB', () => {
            sb.prepend('123');
            let expected = '123';
            assert.equal(sb.toString(), expected);
        });
        it('should prepend at the beggining of the string', () => {
            sb = new StringBuilder('test');
            sb.prepend('123');
            let expected = '123test';
            assert.equal(sb.toString(), expected);
        });
        it('should throw error with non-string param', () => {
            sb = new StringBuilder('test');
            let result = function () {
                sb.prepend(123);
            }
            assert.throw(result, 'Argument must be string');
        });
    });

    describe('test insertAt functionality', () => {
        it('insert correctly at start index', () => {
            sb = new StringBuilder('tt');
            sb.insertAt('es', 1);
            let expected = 'test';
            assert.equal(sb.toString(), expected);
        });
        it('throw error with non-string first param', () => {
            sb = new StringBuilder('tt');
            let result = function() {
                sb.insertAt(1, 2);
            }
            assert.throw(result, 'Argument must be string');
        });
        it('insert at end if the index is out of range', () => {
            sb = new StringBuilder('tt');
            sb.insertAt('e', 5);
            let expected = 'tte';
            assert.equal(sb.toString(), expected);
        });
    });

    describe('test remove functionality', () => {
        it('removes corretly from start index with lenght', () => {
            sb = new StringBuilder('test');
            sb.remove(1, 2);
            let expected = 'tt';
            assert.equal(sb.toString(), expected);
        });
        it('do not remove anything if the start index is out of range', () => {
            sb = new StringBuilder('test');
            sb.remove(6, 1);
            let expected = 'test';
            assert.equal(sb.toString(), expected);
        });
    });

    describe('test static method', () => {
        it('should throw error', () => {
            let result = function () {
                StringBuilder._vrfyParam(1);
            }
            assert.throw(result, 'Argument must be string');
        });
    });

    describe('test toString method', () => {
        it('should return joined array', () => {
            sb._stringArray = ['1', '2'];
            let expected = '12';
            assert.equal(sb.toString(), expected);
        });
    });
});
