import { Point } from './point';

function doSomething() {
    for (var i=0; i<5; i++) {
        console.log(i);
    }
    console.log('Finally: '+ i)
}

doSomething();

function log(message) {
    console.log(message);
}
var message = 'Hello World';
log(message);

let pt = new Point(5, 7);
pt.draw();