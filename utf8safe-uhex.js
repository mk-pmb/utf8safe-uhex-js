/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

module.exports = (function setup() {
  var EX = function utf8safe_uhex(tx) {
    return String(tx).replace(EX.unpairedLowSurrogate, EX.uHHHH_sg
      ).replace(EX.unpairedHighSurrogate, EX.uHHHH_sg);
  };

  EX.conv = function (conv) {
    if ((typeof conv) !== 'function') {
      throw new Error('converter must be a function');
    }
    var c = function utf8safe_uhex_converted(tx) { return EX(c.convert(tx)); };
    c.convert = conv;
    return c;
  };

  // RegExps from package "univeil", for explanation see there.
  EX.unpairedHighSurrogate = /()[\uD800-\uDBFF](?![\uDC00-\uDFFF])/g;
  EX.unpairedLowSurrogate = /([\uD800-\uDBFF]|)[\uDC00-\uDFFF]/g;


  EX.uHHHH_sg = function (match, badLookbehind) {
    if (badLookbehind) { return match; }
    // since this function is only for surrogates, we can safely
    // assume that toString(16) will produce exactly 4 characters.
    return '\\u' + match.charCodeAt(0).toString(16).toUpperCase();
  };












  return EX;
}());
