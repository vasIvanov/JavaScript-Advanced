class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }

    increase(length) {
        this.innerLength += length;

    }

    decrease(length) {
        if(this.innerLength - length < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength = this.innerLength - length;
        }

    }

    toString() {
        let j = 0
        let result = ''
        for (j = 0; j < this.innerLength; j++) {
            if(this.innerString[j] === undefined) {
                break;
            }
            result +=  this.innerString[j];
           
        }
       
        for (let i = this.innerLength; i < this.innerString.length; i++) {
            result += '.';
        }

        if(this.innerLength === 0) {
            return '...'
        } else
        return result;
    }


}
let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test


