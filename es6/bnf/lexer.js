'use strict';

const Line = require('./line'),
      entries = require('./entries'),
      specialSymbols = require('./specialSymbols'),
      Rules = require('../common/rules'),
      CommonLexer = require('../common/lexer');

class BNFLexer extends CommonLexer {
  linesFromBNF(bnf) {
    const content = bnf,  ///
          lines = super.linesFromContent(content);

    return lines;
  }

  static fromEntries(entries) {
    const rules = Rules.fromEntries(entries),
          bnfLexer = new BNFLexer(rules, Line);

    return bnfLexer;
  }

  static fromNothing() {
    const bnfLexer = BNFLexer.fromEntries(entries);

    return bnfLexer;
  }
}

module.exports = BNFLexer;

BNFLexer.entries = entries;

BNFLexer.specialSymbols = specialSymbols;
