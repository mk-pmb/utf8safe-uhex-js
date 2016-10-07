/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

module.exports = (function setup() {
  var EX = function utf8safe_uhex(tx) {
    return String(tx).replace(EX.unpHighOrReplmChar, EX.uHHHH_sg
      ).replace(EX.unpairedLowSurrogate, EX.uHHHH_sg);
  };

  EX.conv = function (conv) {
    if ((typeof conv) !== 'function') {
      throw new Error('converter must be a function');
    }
    var c = function utf8safe_uhex_converted(tx) { return EX(c.convert(tx)); };
    c.convert = conv;
    return c;
  };

  // Next two RegExps are from package "univeil", for explanation see there.
  EX.unpairedHighSurrogate = /[\uD800-\uDBFF](?![\uDC00-\uDFFF])/g;
  EX.unpairedLowSurrogate = /([\uD800-\uDBFF]|)[\uDC00-\uDFFF]/g;

  // also replace U+FFFD replacement character to help distinguish actual
  // occurrences in data from newly geerated ones.
  EX.unpHighOrReplmChar = new RegExp('()[\\uFFFD' +
    String(EX.unpairedHighSurrogate).slice(2, -2), 'g');


  EX.uHHHH_sg = function (match, badLookbehind) {
    if (badLookbehind) { return match; }
    // since this function is only for surrogates, we can safely
    // assume that toString(16) will produce exactly 4 characters.
    return '\\u' + match.charCodeAt(0).toString(16).toUpperCase();
  };












  return EX;
}());
