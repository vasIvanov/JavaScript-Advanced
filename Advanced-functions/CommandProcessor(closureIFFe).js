function solve(array) {
    let clossure =  (function () {
        let initString = '';
    
            return  {
                append: (string) => {initString += string},
                removeStart: (n) => {initString = initString.slice(n)},
                removeEnd: (n) => {initString = initString.slice(0, initString.length - n)},
                print: () => console.log(initString)
            }
        
      
    })();
    for (let string of array) {
        let [command, value] = string.split(' ');
            clossure[command](value);
    }
}


solve(['append 123', 'append 45', 'removeStart 2', 'removeEnd 1', 'print']);
solve([
    'append hello',
 'append again',
 'removeStart 3',
 'removeEnd 4',
 'print'


   
]
)