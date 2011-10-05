//- JavaScript source code

//- main.js ~~
//
//  This week, I am demonstrating the so-called "lazy-load" pattern, which is
//  actually useful both for performance and for encapsulation :-)
//
//                                                      ~~ (c) SRW, 05 Oct 2011

var lazy, unary, variadic;

lazy = function () {
    'use strict';
    lazy = function () {
        return 'Hello world!';
    };
    return lazy();
};

unary = function (x) {
    'use strict';
    unary = function (x) {
        return 'Hello, ' + x;
    };
    return unary(x);
};

variadic = function () {
    'use strict';
    variadic = function () {
        var i, n, y;
        n = arguments.length;
        y = [];
        for (i = 0; i < n; i += 1) {
         // Note also that this is a "map" pattern :-)
            y[i] = unary(arguments[i]);
        }
        return y.join('\n');
    };
    return variadic.apply(this, arguments);
};

//- vim:set syntax=javascript:
