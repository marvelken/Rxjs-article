//Present changes
const { tap, share } = rxjs

const clicks = fromEvent(document, 'click');

const source = clicks.pipe(
  tap(_ => print('Reactive programming made easy!')),
  share()
);

source.subscribe(c => print(`Clicks: ${c.clientX}`));
source.subscribe(c => print(`Clicks: ${c.clientX}`));