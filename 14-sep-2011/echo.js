//- JavaScript source code

//- echo.js ~~
//
//  This program demonstrates call-and-answer from a Web Worker's perspective.
//
//                                                      ~~ (c) SRW, 14 Sep 2011

var worker = this;

worker.onmessage = function (evt) {
    "use strict";

    if (evt.hasOwnProperty("data")) {

        switch (evt.data) {
        case "Are you a doctor?":
            return worker.postMessage("Yes. Are you?");
        default:
            return worker.postMessage(evt.data);
        }

    }

};

//- vim:set syntax=javascript:
