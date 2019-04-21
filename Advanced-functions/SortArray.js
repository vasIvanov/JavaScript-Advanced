function solve(array, method) {
    let ascendingComparator = function (a, b) {
        return a - b;
    };
    
    let descendingComparator = function (a, b) {
        return b - a;
    };
    
    let sortingObject = {
        'asc': ascendingComparator,
        'desc': descendingComparator
    };
    return array.sort(sortingObject[method]);
}



solve([14, 7, 17, 6, 8], 'asc');