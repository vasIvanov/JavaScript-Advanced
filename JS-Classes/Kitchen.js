class Kitchen {
    constructor(budget) {
        this.budget = budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }

    loadProducts(products) {
        for (let product of products) {
            let [productName, productQuantity, productPrice] = product.split(' ');
            if(+productPrice < this.budget) {
                this.budget -= +productPrice ;
                if(!this.productsInStock.hasOwnProperty(productName)) {
                    this.productsInStock[productName] = +productQuantity;
                } else {
                    this.productsInStock[productName] += +productQuantity;
                }
                this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`);
                
            } else {
                this.actionsHistory.push(`There was not enough money to load ${productQuantity} ${productName}`); 
            }
        }
        return this.actionsHistory.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if(!this.menu.hasOwnProperty(meal)){
            this.menu[meal] = {
                products: neededProducts,
                price: price
            };
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
        } else {
            return `The ${meal} is already in the our menu, try something different.`
        }
    }

    showTheMenu() {
        if(Object.keys(this.menu).length === 0) {
            return `Our menu is not ready yet, please come later...`;
        } else {
            let meals = Object.keys(this.menu).length;
            let mealsArray = Object.entries(this.menu);
            let result = [];
            
            
            for (let i = 0; i < meals; i++) {
                result.push(`${mealsArray[i][0]} ${mealsArray[i][1].price}`);
            }
            return result.join('\n').trim();
        }
    }

    makeTheOrder(meal) {
        if(this.menu.hasOwnProperty(meal)) {
            let tempObj = {};
            let productsNeeded = this.menu[meal].products
            for (const prod of productsNeeded) {
                let [name, quant] = prod.split(' ');
                tempObj[name] = quant;
            }
            let arrayNeeded = Object.entries(tempObj).map(e => e[0]);
            let arrayStock = Object.entries(this.productsInStock).map(e => e[0]);
            let flag = true;
            for (let e of arrayNeeded) {
                if(arrayStock.includes(e)) {
                    if(+this.productsInStock[e] < +tempObj[e]) {
                        flag = false
                        return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
                    }
                } else {
                    flag = false;
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`; 
                }
            }
            if(flag) {
                for (let e of arrayNeeded) {
                    this.productsInStock[e] -= tempObj[e];
                }
                this.budget +=  this.menu[meal].price;
                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
            }
        } else {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;  
        }
    }


}
let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());
console.log(kitchen.makeTheOrder('frozenYogurt'));

