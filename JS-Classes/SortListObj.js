function solve () {
    let iife = (() => {
        let collection = [];
        let size = 0;
        const sorting = function (array) {
            array.sort((a, b) => {
                return a - b;
            });
            return array;
        }
        const add = function(el)  {
            collection.push(el);
            collection = sorting(collection);
            this.size ++;
        }
        const remove = function(index)  {
            if(index < 0 || index > collection.length){
                throw new RangeError('Index not valid');
            }
            if(collection[index] !== undefined){
                collection.splice(index, 1);
                this.size --;
            }
            
        }
        const get = (index) => {
            if(index < 0 || index > collection.length){
                throw new RangeError('Index not valid');
            }
            return collection[index];
        }

        return {
            add,
            remove,
            get,
            size
        };
    })();
    return iife;
}



let result = solve()
result.remove(0)
console.log(result.size);
