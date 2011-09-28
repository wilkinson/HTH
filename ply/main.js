//- JavaScript source code

//- main.js ~~
//
//  This week, we'll take a look at a functional pattern that generalizes
//  key-value iteration over JavaScript objects. This pattern actually serves
//  as a nice vehicle to introduce useful patterns for implementation, but I
//  will try to show some restraint ;-)
//
//                                                      ~~ (c) SRW, 28 Sep 2011

var ply;

ply = function (x, f) {
    "use strict";

 // Assertions

    if ((x instanceof Object) === false) {
        throw new Error('This "ply" function only iterates over objects.');
    }

    if ((typeof f !== 'function') || ((f instanceof Function) === false)) {
        throw new Error('This "ply" function expects data _and_ a function.');
    }

 // Declarations

    var key;

 // Definitions (n/a)

 // Invocations

    for (key in x) {
        if (x.hasOwnProperty(key)) {
            f(key, x[key]);
        }
    }

};

//- vim:set syntax=javascript:
