//Creating an Observable from Promises

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('resolved!');
    }, 1000);
});
const obsvPromise = rxjs.from(promise);
obsvPromise.subscribe(result => print(result));