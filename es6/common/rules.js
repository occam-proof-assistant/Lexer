'use strict';

const Rule = require('./rule'),
      arrayUtil = require('../util/array');

class Rules {
  constructor(array) {
    this.array = array;
  }
  
  reduce(callback, initialValue) { return this.array.reduce(callback, initialValue); }

  getRule(depth) {
    const rule = (this.array[depth] || null); ///

    return rule;
  }

  addRule(rule) {
    this.array.unshift(rule); ///
  }
  
  static fromEntries(entries) {
    const significantTokenTypes = significantTokenTypesFromEntries(entries),
          array = significantTokenTypes.map(function(significantTokenType) {
            const regularExpressionPattern = findRegularExpressionPattern(significantTokenType, entries),
                  rule = Rule.fromSignificantTokenTypeAndRegularExpressionPattern(significantTokenType, regularExpressionPattern);
      
            return rule;      
          }),
          rules = new Rules(array);
    
    return rules;
  }
}

module.exports = Rules;

function findRegularExpressionPattern(significantTokenType, entries) {
  const regularExpressionPattern = entries.reduce(function(regularExpressionPattern, entry) {
    if (regularExpressionPattern === null) {
      const entryKeys = Object.keys(entry),
            firstEntryKey = arrayUtil.first(entryKeys),
            entrySignificantTokenType = firstEntryKey;  ///

      if (entrySignificantTokenType === significantTokenType) {
        regularExpressionPattern = entry[significantTokenType];
      }
    }

    return regularExpressionPattern;
  }, null);

  return regularExpressionPattern;
}

function significantTokenTypesFromEntries(entries) {
  const significantTokenTypes = entries.map(function(entry) {
    const entryKeys = Object.keys(entry),
          firstEntryKey = arrayUtil.first(entryKeys),
          significantTokenType = firstEntryKey; ///

    return significantTokenType;
  });

  return significantTokenTypes;
}
