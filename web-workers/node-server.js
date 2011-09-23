//- JavaScript source code

//- node-server.js ~~
//
//  This program defines a very simple webserver for http://localhost over port
//  80 by using Node.js. I'm not using anything fancy here, but it really helps
//  to illustrate the difference in running a Web Worker over HTTP instead of
//  "file:". I wrote and tested this with Node.js v.0.5.8-pre, as compiled from
//  its GitHub sources on Mac OS X 10.6.8.
//
//                                                      ~~ (c) SRW, 21 Sep 2011

(function () {
    "use strict";

 // Declarations

    var fs, http, path, url;

 // Definitions

    fs = require("fs");
    http = require("http");
    path = require("path");
    url = require("url");

 // Invocations

    http.createServer(function (request, response) {

        var resource = url.parse(request.url, true);

        fs.readFile(resource.href.slice(1), function (err, data) {
            if (err) {
                console.error(err);
            } else {
                switch (path.extname(resource.href)) {
                case ".html":
                    response.writeHead(200, {
                        "Content-Type": "text/html; charset=utf-8",
                        "encoding":     "utf8"
                    });
                    break;
                case ".js":
                    response.writeHead(200, {
                        "Content-Type": "text/javascript; charset=utf-8",
                        "encoding":     "utf8"
                    });
                    break;
                default:
                    response.writeHead(200, {
                        "Content-Type": "text/plain; charset=utf-8",
                        "encoding":     "utf8"
                    });
                }
                response.end(data, "utf8");
            }
        });

    }).listen(1337, "127.0.0.1");

    console.log("Serving demo from http://127.0.0.1:1337/index.html ...");

}());

//- vim:set syntax=javascript:
