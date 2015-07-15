var isSHA256HexDigest = require('./')

require('tape')(function(t) {
  t.ok(isSHA256HexDigest(new Array(65).join('a')))
  t.ok(isSHA256HexDigest(new Array(65).join('A')))
  t.ok(!isSHA256HexDigest(new Array(64).join('A')))
  t.end() })
