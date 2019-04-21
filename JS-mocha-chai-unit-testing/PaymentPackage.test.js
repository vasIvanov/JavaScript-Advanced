let PaymentPackage = require('./PaymentPackage');
let assert = require('chai').assert;

describe('testing Payment Package', () => {
    describe('test constructor', () => {
        it('should return string with name and value params setted', () => {
            let payPackage = new PaymentPackage('Ivan', 2)
            
            assert.equal(payPackage.toString(), 'Package: Ivan\n- Value (excl. VAT): 2\n- Value (VAT 20%): 2.4');
        });
        it('should throw error with name non-string', () => {
            let result = function () {
                let payPackage = new PaymentPackage(2, 2);
            }
            assert.throw(result, 'Name must be a non-empty string');
        });
        it('should throw error with value non-number', () => {
            let result = function () {
                let payPackage = new PaymentPackage('ivan', '2');
            }
            assert.throw(result, 'Value must be a non-negative number');
        });
    });

    describe('test VAT getter and setter', () => {
        it('should change VAT correctly', () => {
            let payPackage = new PaymentPackage('Ivan', 2);
            payPackage.VAT = 16;
            let expected = 16;
            assert.equal(payPackage.VAT, expected);
        });
        it('should throw error witn non-number VAT value', () => {
            let payPackage = new PaymentPackage('Ivan', 2);
            let result = function() {
                payPackage.VAT = '16';
            }
            assert.throw(result, 'VAT must be a non-negative number');
        });
        it('should throw error with negative VAT value', () => {
            let payPackage = new PaymentPackage('Ivan', 2);
            let result = function() {
                payPackage.VAT = -5;
            }
            assert.throw(result, 'VAT must be a non-negative number');
        });
    });

    describe('test active getter and setter', () => {
        it('should change active value', () => {
            let payPackage = new PaymentPackage('Ivan', 2);
            payPackage.VAT = 16
            payPackage.active = false;
            let expected = 'Package: Ivan (inactive)\n- Value (excl. VAT): 2\n- Value (VAT 16%): 2.32';
            assert.equal(payPackage.toString(), expected);
        });
    });
});