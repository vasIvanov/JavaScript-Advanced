(function () {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.skip = function (n) {
        return this.slice(n)
    };

    Array.prototype.take = function (n) {
        let newArr = [];
        for (let i = 0; i < n; i++) {
            newArr.push(this[i]);
        }
        return newArr;
    };

    Array.prototype.sum = function () {
        let arraySum = this.reduce((a, b) => a + b);
        return arraySum;
    };

    Array.prototype.average = function () {
        let arraySum = this.reduce((a, b) => a + b);
        return arraySum / this.length;
    }
})();