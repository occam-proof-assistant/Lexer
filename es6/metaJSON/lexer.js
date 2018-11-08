'use strict';

const entries = require('./entries'),
      CommonLexer = require('../common/lexer');

class MetaJSONLexer extends CommonLexer {
  tokeniseComments(tokensOrContents, inComment) {}

  tokeniseSinglyQuotedStringLiterals(tokensOrContents) {}

  reTokeniseMiddleOfCommentTokens(tokensOrContents) {}

  static fromEntries(entries) { return CommonLexer.fromEntries(MetaJSONLexer, entries); }

  static fromNothing() { return CommonLexer.fromNothing(MetaJSONLexer); }
}

Object.assign(MetaJSONLexer, {
  entries
});

module.exports = MetaJSONLexer;
