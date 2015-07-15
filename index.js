var regularExpression = /^[a-f0-9]{64}$/i

function isSHA256HexDigest(argument) {
  return (
    typeof argument === 'string' &&
    regularExpression.test(argument) ) }

module.exports = isSHA256HexDigest
