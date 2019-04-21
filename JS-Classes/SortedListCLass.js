class SortedList {
    constructor() {
        this.collection = [];
        this.size = 0
    }

    add(el) {
        this.collection.push(el);
        this.size ++;
        this.collection.sort((a, b) => {
            return a - b;
        })
    }

    remove(index) {
        if(index >= 0 && index < this.collection.length){
            if(this.collection[index] !== undefined) {
                this.collection.splice(index, 1);
                this.size --;
            }
        }
    }

    get (index) {
        if(index < 0 || index < this.collection.length) {
            return this.collection[index];
        }
    }
}