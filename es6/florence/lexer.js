'use strict';

var Line = require('./line'),
    Context = require('./context'),
    grammar = require('./grammar'),
    Rules = require('../common/rules');

var rules = Rules.fromGrammar(grammar);

class Lexer {
  static linesFromContent(content, context) {
    context = context || new Context(false);  ///

    var contents = content.split(/\n/),
        lines = contents.map(function(content) {
          var line = Line.fromContent(content, context, rules);

          return line;
        });

    return lines;
  }

  static tokensFromContent(content, context) {
    var lines = Lexer.linesFromContent(content, context),
        tokens = lines.reduce(function(tokens, line) {
          var lineTokens = line.getTokens();

          tokens = tokens.concat(lineTokens);

          return tokens;
        }, []);

    return tokens;
  }
}

module.exports = Lexer;