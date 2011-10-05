//- JavaScript source code

//- call-n-apply.js ~~
//
//  By popular demand, we also discussed the basics of the "call" and "apply"
//  function methods using this impromptu code. It originally used "print" to
//  display output because I was in a hurry and just used Spidermonkey, but I
//  don't have time right now to generalize to all possible browsers (!), so I
//  have simply commented out the invocations that logged output.
//
//                                                      ~~ (c) SRW, 05 Oct 2011

(function () {
    'use strict';

    var f, g, y;

    f = function (x) {
        return x + this.val;
    };

    g = function (x, y) {
        return x + y;
    };

    y = {
        val: 5
    };

 // Then, the following calls are equivalent:

    //  print(f.call(y, 3));
    //  print(f.apply(y, [3]));

    //  print(g.call(this, 2, 3));
    //  print(g.apply(this, [2, 3]));

    //  print(g('hello', 3));
    //  print(g.apply(this, ['hello', 3]));

}());

//- vim:set syntax=javascript:
