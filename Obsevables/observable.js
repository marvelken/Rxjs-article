const observable = rxjs.Observable.create(observer => {
    observer.next('semaphore');
});
// Subscribe to the Observable
observable.subscribe(val => print(val));