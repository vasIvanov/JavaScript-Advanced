let manager = (function () {
    const ingridientObj = {
        protein:0,
        carbohydrate:0,
        fat:0,
        flavour:0
    };
    const recipesObj = {
        'apple': {carbohydrate:1, flavour:2},
        'coke': {carbohydrate: 10, flavour: 20},
        'burger': {carbohydrate: 5, fat: 7, flavour:3},
        'omelet': {protein: 5, fat: 1, flavour: 1},
        'cheverme':{protein: 10, carbohydrate:10, fat:10, flavour:10}
    }

    const prepareRecipe = (recipe, neededQuantity) => {
        const neededIngrid = Object.entries(recipesObj[recipe]);

        // validate needed ingrid
        for (const [ing, quan] of neededIngrid) {
            const ingridStored = ingridientObj[ing] * neededQuantity;
            if (quan > ingridStored) {
                return `Error: not enough ${ing} in stock`
            }
        }

        for (const [ing, quant] of neededIngrid) {
            ingridientObj[ing] -=  quant * neededQuantity;
        }

        return 'Success';
    }

    return function (input) {
        const tokens = input.split(' ');
        const command = tokens[0];

        switch(command){
            case 'restock':
            ingridientObj[tokens[1]] += Number(tokens[2])
                return 'Success';
            case 'prepare':
                return prepareRecipe([tokens[1]], Number(tokens[2]));
            case 'report':
                return Object.entries(ingridientObj).map((kvp) => `${kvp[0]}=${kvp[1]}`).join(' ');
                
        }
    }
})();

console.log(manager("restock protein 100"));
console.log(manager("restock carbohydrate 100"));
console.log(manager("restock fat 100"));
console.log(manager("restock flavour 100"));
console.log(manager("report"));
console.log(manager("prepare omelet 2"));
console.log(manager("report"));
console.log(manager("prepare omelet 1"));
console.log(manager("report"));

