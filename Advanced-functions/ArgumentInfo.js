function solve() {
    let summary = {};
    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        let type = typeof(obj);
        console.log(`${type}: ${obj}`);
        if(!summary[type]){
            summary[type] = 1;
        } else {
            summary[type]++;
        }
    }
    let sortedTypes = [];
    for (let key in summary) {
       sortedTypes.push([key, summary[key]]);
    }
    sortedTypes = sortedTypes.sort((a, b) => {
        return b[1] - a[1];
    })
    for (const iterator of sortedTypes) {
        console.log(`${iterator[0]} = ${iterator[1]}`);
        
    }
    
}

solve('cat', 42, function () { console.log('Hello world!'); })