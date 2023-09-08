const numbers = rxjs.of(-5, -8, -2, 9, 11, -4, -7, 14);
filterNumbers.pipe(rxjs.operators.first()).subscribe(n => print(n));
filterNumbers.pipe(rxjs.operators.last()).subscribe(n => print(n));