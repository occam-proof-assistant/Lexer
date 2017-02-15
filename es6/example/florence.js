'use strict';

var Example = require('../example'),
    FlorenceLexer = require('../florence/lexer');

var florenceLexer = FlorenceLexer.fromNothing();

class FlorenceExample {
  static run() {
    Example.contentTextAreaOnKeyUp(function() {
      var minimumLinesLength = 2,
          previousLineInComment = false,
          followingLineInComment = false;

      Example.updateTokens(florenceLexer, minimumLinesLength, previousLineInComment, followingLineInComment);
    });

    Example.updateTokens(florenceLexer);
  }
}

module.exports = FlorenceExample;
