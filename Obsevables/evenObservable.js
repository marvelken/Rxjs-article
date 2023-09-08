//creating an Observable from Events
const { fromEvent } = rxjs;

const clicks = rxjs.Observable.fromEvent(document, 'click');

clicks.subscribe(click => console.log(click));