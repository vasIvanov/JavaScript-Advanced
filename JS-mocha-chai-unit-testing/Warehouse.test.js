const Warehouse = require('./Warehouse');
const assert = require('chai').assert;
const expect = require('chai').expect
describe('test Warehouse class', () => {
    let warehouse;
    beforeEach(() => {
        warehouse = new Warehouse(50);
    })

    describe('test constructor', () => {
        it('throw error message when init with 0', () => {
            let result = function () {
                warehouse = new Warehouse(0);
            }
            let expect = `Invalid given warehouse space`;
            

            assert.throw(result, expect);
        })
        it('throw error message when init with 1', () => {
            let result = function () {
                warehouse = new Warehouse(-1);
            }
            let expect = `Invalid given warehouse space`;
            

            assert.throw(result, expect);
        });
        it('is inctanced correctly', () => {
            warehouse = new Warehouse(2);
            assert.equal(warehouse.capacity, 2);
        })
    });

    describe('test addProduct', () => {
        it('print error msg its full', () => {
            let result = function () {
                warehouse = new Warehouse(1);
                warehouse.addProduct('Food', 'Pizza', 2);
            }
            
            let expect = `There is not enough space or the warehouse is already full`;
            assert.throw(result, expect);
        });

        it('add food product correctly', () => {
            warehouse = new Warehouse(3);
            
            
            assert.equal(warehouse.addProduct('Food', 'Pizza', 1).toString(), { Pizza: 1 }.toString());
        });
        it('add  2 foods properly', () => {
                warehouse = new Warehouse(3);
                let result = warehouse.addProduct('Food', 'Pizza', 1);
                result = warehouse.addProduct('Food', 'Chips', 1);
                
            
           
            assert.equal(result.toString(), { Pizza: 1, Chips: 1 }.toString())
        });
        it('add  same food twice properly', () => {
            warehouse = new Warehouse(3);
            let result = warehouse.addProduct('Food', 'Pizza', 1);
            result = warehouse.addProduct('Food', 'Pizza', 1);
            
        
       
        assert.equal(result.toString(), { Pizza: 2}.toString())
        });

      

    });

    describe('test orderProduct', () => {
        it('test sorting', () => {
            warehouse = new Warehouse(3);
            warehouse.addProduct('Food', 'Pizza', 1);
            warehouse.addProduct('Food', 'Chips', 2);
            assert.equal(warehouse.orderProducts('Food'), { Chips: 2, Pizza: 1 }.toString());
        });

      
    });

    describe('test occupiedCapatiy', () => {
        it('returns already occupied place', () => {
            warehouse = new Warehouse(3);
            warehouse.addProduct('Drink', 'Water', 1);
            assert.equal(warehouse.occupiedCapacity(), 1);
        });
    });

    describe('test revision', () => {
        it('Returns a string in which we print all products of each type', () => {
            warehouse = new Warehouse(3);
            warehouse.addProduct('Drink', 'Water', 1);
            warehouse.addProduct('Food', 'Chips', 2);
            let expect = `Product type - [Food]\n- Chips 2\nProduct type - [Drink]\n- Water 1`
            assert.equal(warehouse.revision(), expect);
        });
        it('Return msg is empty', () => {
            warehouse = new Warehouse(3);
            assert.equal(warehouse.revision(), 'The warehouse is empty');
        });
    });

    describe('test scrapeAProduct', () => {
        it('return msg product do not exist', () => {
            let result = function () {
                warehouse = new Warehouse(3);
                warehouse.addProduct('Drink', 'Water', 1);
                warehouse.scrapeAProduct('Pizza', 2);
            }
            assert.throw(result, 'Pizza do not exist');
        });
        it('scrape product correctly', () => {
            warehouse = new Warehouse(4);
            warehouse.addProduct('Drink', 'Water', 1);
            warehouse.addProduct('Food', 'Pizza', 3);
            assert.equal(warehouse.scrapeAProduct('Pizza', 1).toString(), { Pizza: 2 }.toString());

        });
        it('reset product quantity', () => {
            warehouse = new Warehouse(4);
            warehouse.addProduct('Food', 'Pizza', 3);
            assert.equal(warehouse.scrapeAProduct('Pizza', 4), { Pizza: 0 }.toString());
        })
    })
});