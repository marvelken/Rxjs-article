// Simple Observable implementation
function Observable(subscribe) {
    this.subscribe = subscribe;
}

Observable.prototype = {
    subscribe: function(observer) {
        return this.subscribe(observer);
    }
};

// Create an observable that emits values at intervals
function intervalObservable(ms) {
    return new Observable(function(observer) {
        let count = 0;
        const intervalId = setInterval(() => {
            observer.next(count++);
        }, ms);

        // Return a function to clear the interval (this is our unsubscribe)
        return {
            unsubscribe: function() {
                clearInterval(intervalId);
            }
        };
    });
}

// Our print function
function print(val) {
    let element = document.createElement('p');
    element.innerText = val;
    element.style.display = 'flex';
    element.style.height = '100%';
    element.style.justifyContent = 'center';
    element.style.alignItems = 'center';
    document.body.appendChild(element);
}

// Usage
const observable = intervalObservable(1000); // emits a value every 1 second

const subscription = observable.subscribe({
    next: function(value) {
        print(value);
        if (value >= 5) { // Just for this example, we'll unsubscribe after 5 emissions
            subscription.unsubscribe();
            print('Unsubscribed!');
        }
    }
});