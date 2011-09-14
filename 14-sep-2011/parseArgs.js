//- JavaScript source code

//- parseArgs.js ~~
//
//  This program treats URL query parameters as the browser-based analog to
//  command-line arguments. Because it relies only on features from ES3, it
//  should run correctly in all browsers and Web Workers. Having said that, of
//  course, immediately implies that one of you will break it with your crusty
//  old browser. If you succeed, congratulations -- you are a dinosaur and need
//  to upgrade to something modern like Chrome 12+, Firefox 4+, Safari 5+, or
//  IE9+. (Don't get me started on Opera -- y'all know how angry I can be ;-)
//
//                                                      ~~ (c) SRW, 14 Sep 2011

//- NOTE: As in the other programs shown here, I will employ a convention that
//  non-standard functionality be implemented only as methods and properties of
//  a global Function object called "HTH" which is defined in "HTH.js".

if (HTH.hasOwnProperty("parseArgs") === false) {

    HTH.parseArgs = function () {
        "use strict";

     // Declarations

        var i, n, pattern, x, y;

     // Definitions

     // Here, we define a regular expression that assumes full key=val pairs
     // to keep things simple -- it's not gonna handle SPARQL, trust me ;-)

        pattern = /(.*)[=](.*)/g;       //- assume full key=val pairs

     // The first character is always a "?" character that we don't want.

        x = location.search.slice(1).split('&');

        y = {};

        n = x.length;

     // Invocations

        for (i = 0; i < n; i += 1) {
            x[i].replace(pattern, function (matches, key, val) {
                switch (val) {
                case "true":
                    y[key] = true;
                    break;
                case "false":
                    y[key] = false;
                    break;
                default:
                    y[key] = (isNaN(val * 1)) ? val : (val * 1);
                }
            });
        }

        return y;

    };

}

//- vim:set syntax=javascript:
