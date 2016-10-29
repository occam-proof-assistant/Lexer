'use strict';

var lexers = {
  'BNFLexer': require('./lib/bnf/lexer'),
  'BasicLexer': require('./lib/basic/lexer'),
  'GallinaLexer': require('./lib/gallina/lexer'),
  'FlorenceLexer': require('./lib/florence/lexer'),
  'ErrorToken': require('./lib/common/token/error'),
  'SignificantToken': require('./lib/common/token/significant'),
  'IncludeDirectiveToken': require('./lib/florence/token/includeDirective'),
  'specialSymbols': require('./lib/specialSymbols')
};

module.exports = lexers;
