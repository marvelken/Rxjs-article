//Former representation
const clicks = Rx.Observable.fromEvent(document, 'click');
const source = clicks.do(_ => print('Reactive programming made easy!'));
const subject = source.multicast(() => new Rx.Subject());
subject.subscribe(c => print(`Clicks: ${c.clientX}`));
subject.subscribe(c => print(`Clicks: ${c.clientX}`));
subject.connect();

