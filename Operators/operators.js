//Operators examples

const numbers = rxjs.of(20, 200, 3000);
const logNumbers = numbers.pipe(rxjs.operators.map(Math.log));
logNumbers.subscribe(x => print(x));