'use strict';

const entries = require('./entries'),
      Rules = require('../common/rules'),
      CommonLexer = require('../common/lexer'),
      specialSymbols = require('./specialSymbols'),
      CommentTokens = require('./tokens/comment'),
      EndOfLineTokens = require('./tokens/endOfLine'),
      WhitespaceTokens = require('../common/tokens/whitespace'),
      StringLiteralTokens = require('../common/tokens/stringLiteral'),
      RegularExpressionTokens = require('../common/tokens/regularExpression');

class BNFLexer extends CommonLexer {
  significantTokensFromBNF(bnf) {
    const content = bnf,  ///
          tokens = super.tokensFromContent(content),
          significantTokens = significantTokensFromTokens(tokens);

    return significantTokens;
  }

  static fromEntries(entries) {
    const rules = Rules.fromEntries(entries),
          bnfLexer = new BNFLexer(rules, EndOfLineTokens, CommentTokens, WhitespaceTokens, StringLiteralTokens, RegularExpressionTokens);

    return bnfLexer;
  }

  static fromNothing() { return BNFLexer.fromEntries(entries); }
}

Object.assign(BNFLexer, {
  entries: entries,
  specialSymbols: specialSymbols
});

module.exports = BNFLexer;

function significantTokensFromTokens(tokens) {
  const significantTokens = tokens.reduce(function(significantTokens, token) {
    const tokenSignificant = token.isSignificant();

    if (tokenSignificant) {
      const significantToken = token; ///

      significantTokens.push(significantToken);
    }

    return significantTokens;
  }, []);

  return significantTokens;
}
