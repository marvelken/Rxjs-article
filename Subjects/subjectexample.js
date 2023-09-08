const subject = new rxjs.Subject();
subject.subscribe(val => print(`Observer A: ${val}`));
subject.subscribe(val => print(`Observer B: ${val}`));
subject.next('semaphore');