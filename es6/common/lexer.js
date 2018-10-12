'use strict';

const Rules = require('./rules'),
      CommentTokens = require('./tokens/comment'),
      WhitespaceTokens = require('./tokens/whitespace'),
      SignificantTokens = require('./tokens/significant'),
      StringLiteralTokens = require('./tokens/stringLiteral'),
      MiddleOfCommentTokens = require('./tokens/middleOfComment'),
      RegularExpressionTokens = require('./tokens/regularExpression'),
      NonSignificantEndOfLineTokens = require('../common/tokens/endOfLine/nonSignificant');

class CommonLexer {
  constructor(rules) {
    this.rules = rules;
  }
  
  getRules() {
    return this.rules;
  }

  tokenise(content) {
    const tokensOrContents = [content]; ///

    this.tokeniseEndOfLines(tokensOrContents);

    this.tokeniseStringLiterals(tokensOrContents);

    this.tokeniseComments(tokensOrContents);

    this.reTokeniseMiddleOfCommentTokens(tokensOrContents);

    this.tokeniseRegularExpressions(tokensOrContents);

    this.tokeniseWhitespace(tokensOrContents);

    this.tokeniseSignificantContent(tokensOrContents);

    const tokens = tokensOrContents;  ///

    return tokens;
  }

  tokeniseComments(tokensOrContents) { CommentTokens.tokenise(tokensOrContents); }

  tokeniseWhitespace(tokensOrContents) { WhitespaceTokens.tokenise(tokensOrContents); }

  tokeniseEndOfLines(tokensOrContents) { NonSignificantEndOfLineTokens.tokenise(tokensOrContents); }

  tokeniseStringLiterals(tokensOrContents) { StringLiteralTokens.tokenise(tokensOrContents); }

  tokeniseSignificantContent(tokensOrContents) { SignificantTokens.tokenise(tokensOrContents, this.rules) }

  tokeniseRegularExpressions(tokensOrContents) { RegularExpressionTokens.tokenise(tokensOrContents); }

  reTokeniseMiddleOfCommentTokens(tokensOrContents) { MiddleOfCommentTokens.reTokenise(tokensOrContents); }

  static fromNothing(Class) {
    const { entries } = Class,
          rules = Rules.fromEntries(entries),
          lexer = new Class(rules);

    return lexer;
  }

  static fromEntries(Class, entries) {
    const rules = Rules.fromEntries(entries),
          lexer = new Class(rules);

    return lexer;
  }
}

module.exports = CommonLexer;
