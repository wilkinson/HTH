//- JavaScript source code

//- main.js ~~
//
//  This program defines and adds some simple clickable buttons to launch the
//  different Web Worker demos so I don't have to write one page per demo.
//  Then, I tie functions to each button to run the individual demos :-)
//
//                                                      ~~ (c) SRW, 14 Sep 2011

if (HTH.hasOwnProperty("addButton") === false) {
    HTH.addButton = function (name, callback) {
        "use strict";

     // Here, I use a lazy-load pattern to create a reusable form without a
     // (potentially circular) reference in JavaScript to a DOM object.

        document.body.appendChild(document.createElement("form")).id = "lala";

     // Lazy-loads, of course, require a redefinition of the original function.

        HTH.addButton = function (name, callback) {
            var button = document.createElement("input");
            button.type = "button";
            button.value = name;
            button.onclick = callback;
            document.getElementById("lala").appendChild(button);
        };

     // Finally, we complete the pattern by answering the original "question".

        HTH.addButton(name, callback);

    };
}

if (HTH.hasOwnProperty("puts") === false) {
    HTH.puts = function () {
        "use strict";

     // If you aren't familiar with the lazy-load pattern, learn it. In this
     // particular case, I'm using it to avoid repetitive (useless) feature
     // detections by doing it once and for all, which speeds up the code :-)

        if (window.hasOwnProperty("console")) {
            HTH.puts = function () {
                if (arguments.length === 1) {
                    console.log(arguments[0]);
                } else {
                    console.log.apply(console, arguments);
                }
            };
        } else {
            HTH.puts = function () {
                alert(Array.prototype.join.call(arguments, " "));
            };
        }

        HTH.puts.apply(this, arguments);

    };
}

//- Now we can add a bunch of demos really fast, which is important -- we don't
//  want Jonas thinking I'm taking "one single nanosecond" away from Quanah ;-)

HTH.addButton("Hello", function (evt) {
    "use strict";

 // Notice that the callback accepts an event as an argument? It doesn't mean
 // we have to use it, but I don't want to hide anything in a demonstration.

    var bee = new Worker("hello.js");

    bee.onmessage = function (evt) {    //- expects a MessageEvent argument
        HTH.puts(evt);
    };

    bee.onerror = function (evt) {      //- expects an ErrorEvent argument
        HTH.puts(evt);
    };

});

HTH.addButton("Conversation", function (evt) {
    "use strict";

 // Here, we'll do some call-and-answer to the Web Worker.

    var bee = new Worker("conversation.js");

    bee.onmessage = function (evt) {
        if (evt.hasOwnProperty("data")) {
            switch (evt.data) {
            case "Yes. Are you?":
                bee.postMessage("No, I just play one on television.");
                break;
            default:
                bee.postMessage("(echo)");
            }
            HTH.puts(evt.data);
        }
    };

    bee.onerror = function (evt) {
        HTH.puts(evt);
    };

 // Now, let's initiate a conversation and log the first line for clarity.

    HTH.puts("Are you a doctor?");
    bee.postMessage("Are you a doctor?");

});

HTH.addButton("Echo", function (evt) {
    "use strict";

    var bee = new Worker("echo.js?lala=true&lele=false");

    bee.onmessage = function (evt) {
        if (evt.hasOwnProperty("data")) {
            HTH.puts(evt.data);
        } else {
            HTH.puts(evt);
        }
    };

    bee.onerror = function (evt) {
        HTH.puts(evt);
    };

});

//- vim:set syntax=javascript:
