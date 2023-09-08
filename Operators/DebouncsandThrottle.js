const { fromEvent } = rxjs;
const { throttleTime } = rxjs.operators;

const mouseEvents = fromEvent(document, 'mousemove');

mouseEvents.pipe(
  throttleTime(1000)
).subscribe(e => print(e.type));

function print(val) {
    console.log(val);
}