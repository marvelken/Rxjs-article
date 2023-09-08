// Your print function
function print(val) {
    let element = document.createElement('p');
    element.innerText = val;
    document.body.appendChild(element);
}

// Create an Observable that will throw an error
const source = rxjs.throwError('This is an error!');

// Catch the error and return a new Observable
const example = source.pipe(
    rxjs.operators.catchError(val => {
        print(`Caught error: ${val}`);
        return rxjs.of(`I caught: ${val}`);
    })
);

// Subscribe to the example Observable
example.subscribe(val => print(val));

// Create an Observable that emits a value then throws an error
const source2 = rxjs.concat(rxjs.of('Hello'), rxjs.throwError('This is an error!'));

// Retry the Observable twice
const example2 = source2.pipe(
    rxjs.operators.retry(2)
);

// Subscribe to the example2 Observable
example2.subscribe(
    val => print(val),
    err => print(`Caught error: ${err}`)
);