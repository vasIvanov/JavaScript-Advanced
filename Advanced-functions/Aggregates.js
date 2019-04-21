function solve(array) {
    console.log(`Sum = ${array.reduce((a, b) => a + b, 0)}`);
    console.log(`Min = ${Math.min(...array)}`);
    console.log(`Max = ${Math.max(...array)}`);
    console.log(`Product = ${array.reduce((a, b) => a * b, 1)}`);
    console.log(`Join = ${array.reduce((a, b) => a + b, '')}`);
}

solve([2, 3, 10, 5])