"use strict";
exports.__esModule = true;
var point_1 = require("./point");
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}
doSomething();
function log(message) {
    console.log(message);
}
var message = 'Hello World';
log(message);
var pt = new point_1.Point(5, 7);
pt.draw();
