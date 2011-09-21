//- JavaScript source code

//- lala.js ~~
//
//  This demo was written during the lab presentation today to illustrate the
//  use of a Web Worker directly from a browser's developer console. Either of
//  the two ways shown will work correctly :-)
//
//                                                      ~~ (c) SRW, 21 Sep 2011

//var worker = this;
//worker.postMessage(Object.getOwnPropertyNames(worker));

postMessage(Object.getOwnPropertyNames(this))

//- vim:set syntax=javascript:
