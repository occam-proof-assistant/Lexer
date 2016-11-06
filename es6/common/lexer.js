'use strict';

var Line = require('./line'),
    Rules = require('./rules');

class CommonLexer {
  constructor(rules, Line) {
    this.rules = rules;
    this.Line = Line;
  }

  linesFromContent(content, context) {
    var contents = content.split(/\n/),
        lines = contents.map(function(content) {
          var line = this.Line.fromContent(content, context, this.rules);
  
          return line;
        }.bind(this));
  
    return lines;
  }
  
  tokensFromContent(content) {
    var lines = this.linesFromContent(content),
        tokens = lines.reduce(function(tokens, line) {
          var lineTokens = line.getTokens();

          tokens = tokens.concat(lineTokens);

          return tokens;
        }, []);
    
    return tokens;    
  }
  
  static rulesFromGrammar(grammar) { return Rules.fromGrammar(grammar); }

  static significantTokenTypes(grammar) {
    var significantTokenTypes = grammar.map(function(entry) {
      var type = util.typeFromEntry(entry),
          significantTokenType = type;  ///

      return significantTokenType;
    });

    return significantTokenTypes;
  }
}

module.exports = CommonLexer;
