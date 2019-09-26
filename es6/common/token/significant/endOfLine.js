'use strict';

const types = require('../../types'),
      SignificantToken = require('../../token/significant');

const { endOfLineType } = types;

class EndOfLineSignificantToken extends SignificantToken {
  asHTML() {
    const html = '\n';  ///
    
    return html;
  }

  clone(startPosition, endPosition) { return super.clone(EndOfLineSignificantToken, startPosition, endPosition); }

  static fromMatch(match) { return NonSignificantToken.fromMatch(EndOfLineSignificantToken, match); }

  static fromContent(content) { return SignificantToken.fromContent(EndOfLineSignificantToken, content); }

  static fromWithinContent(content) { return SignificantToken.fromWithinContent(EndOfLineSignificantToken, content); }

  static positionWithinContent(content) { return SignificantToken.positionWithinContent(EndOfLineSignificantToken, content); }
}

const type = endOfLineType, ///
      regularExpression = /\r\n|\r|\n/;

Object.assign(EndOfLineSignificantToken, {
  type,
  regularExpression
});

module.exports = EndOfLineSignificantToken;
