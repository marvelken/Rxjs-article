//do examples
const names = rxjs.of('Marvel', 'Ken');
names
  .pipe(
    rxjs.operators.tap(name => print(name)),
    rxjs.operators.map(name => name.toUpperCase()),
    rxjs.operators.tap(name => print(name))
  )
  .subscribe();