'use strict';

var lexers = {
  'BNFLexer': require('./lib/bnf/lexer'),
  'BasicLexer': require('./lib/basic/lexer'),
  'CommonLexer': require('./lib/common/lexer'),
  'FlorenceLexer': require('./lib/florence/lexer'),
  'CommonLine': require('./lib/common/line'),
  'Tokens': require('./lib/common/tokens'),
  'StringToken': require('./lib/common/token/significant/string'),
  'EndOfLineToken': require('./lib/common/token/significant/endOfLine'),
  'WhitespaceToken': require('./lib/common/token/significant/whitespace'),
  'SignificantToken': require('./lib/common/token/significant'),
  'NonSignificantToken': require('./lib/common/token/nonSignificant')
};

module.exports = lexers;
