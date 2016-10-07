/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';


var dog = '\uD83D\uDC15', cow = '\uD83D\uDC04', excl = '\u2757',
  ogco = dog[1] + cow[0],
  yeahRight = 'Hind of ' + dog + ' + head of ' + cow + ' = ' + ogco + excl,
  uhex = require('utf8safe-uhex'), eq = require('assert').deepStrictEqual;

eq(uhex(yeahRight), "Hind of 🐕 + head of 🐄 = \\uDC15\\uD83D❗");

function noSpace(s) { return s.replace(/\s+/g, ''); }

(function readmeDemo(expectStrictEqual) {
  //#+
  var utf8safe_uhex = require('utf8safe-uhex'),
    orig = "\uD83D\uDC15\u2771" + "\uDC15" + "\uD83D" + "\u2770\uD83D\uDC04",
    expect = noSpace("🐕  ❱  \\u  DC15  \\u  D83D  ❰  🐄"),
    actual = utf8safe_uhex(orig);
  expectStrictEqual(actual, expect);
  //#-
}(eq));


console.log('+OK test passed');
