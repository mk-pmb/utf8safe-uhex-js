
<!--#echo json="package.json" key="name" underline="=" -->
utf8safe-uhex
=============
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Hex-escape (\uHHHH) those UCS-2 characters that cannot be encoded as UTF-8,
and the replacement character, to help you distinguish verbatim occurrences
from freshly discarded data.
<!--/#echo -->



Usage
-----
trom [test.js](test.js):

<!--#include file="test.js" start="  //#+" stop="  //#-" code="javascript" -->
<!--#verbatim lncnt="7" -->
```javascript
  var utf8safe_uhex = require('utf8safe-uhex'),
    orig = "\uD83D\uDC15\u2771" + "\uDC15" + "\uD83D" + "\u2770\uD83D\uDC04",
    expect = noSpace("🐕  ❱  \\u  DC15  \\u  D83D  ❰  🐄"),
    actual = utf8safe_uhex(orig);
  expectStrictEqual(actual, expect);
```
<!--/#include -->




<!--#toc stop="scan" -->


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
