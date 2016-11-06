'use strict';

var util = require('../util'),
    EndOfLineToken = require('../common/token/endOfLine'),
    WhitespaceToken = require('../common/token/whitespace'),
    EndOfCommentToken = require('./token/endOfComment'),
    StartOfCommentToken = require('./token/startOfComment'),
    MiddleOfCommentToken = require('./token/middleOfComment');

class NonSignificantTokens {
  static pass(content, context, line) {
    var nonSignificantTokenOrSignificantContents = [],
        remainingContent,
        commentToken,
        commentTokenLength;

    while (content !== '') {
      var contentLength = content.length,
          inComment = context.isInComment();

      var startOfCommentTokenPosition = StartOfCommentToken.position(content),
          endOfCommentTokenPosition = EndOfCommentToken.position(content);

      if (!inComment) {
        if (startOfCommentTokenPosition === 0) {
          context.setInComment(true);

          commentToken = StartOfCommentToken.fromContent(content, line);

          commentTokenLength = commentToken.getLength();

          remainingContent = content.substring(commentTokenLength);

          content = remainingContent;

          nonSignificantTokenOrSignificantContents.push(commentToken);

          continue;
        }
      } else {
        var previousCommentToken = nonSignificantTokenOrSignificantContents.pop(),
            middleOfCommentTokenLength = util.minBarMinusOne(endOfCommentTokenPosition, contentLength);

        if (false) {

        } else if (endOfCommentTokenPosition === 0) {
          context.setInComment(false);

          commentToken = EndOfCommentToken.fromContent(content, line);

          commentTokenLength = commentToken.getLength();

          remainingContent = content.substring(commentTokenLength);
        } else {
          remainingContent = content.substring(middleOfCommentTokenLength);

          content = content.substring(0, middleOfCommentTokenLength);

          commentToken = MiddleOfCommentToken.fromContent(content, line);
        }

        commentToken = (previousCommentToken === undefined) ?
                         commentToken :
                           previousCommentToken.merge(commentToken);

        content = remainingContent;

        nonSignificantTokenOrSignificantContents.push(commentToken);

        continue;
      }

      var whitespaceTokenPosition = WhitespaceToken.position(content);

      if (whitespaceTokenPosition === 0) {
        var whitespaceToken = WhitespaceToken.fromContent(content, line),
            whitespaceTokenLength = whitespaceToken.getLength();

        content = content.substring(whitespaceTokenLength);

        nonSignificantTokenOrSignificantContents.push(whitespaceToken);

        continue;
      }

      var significantContentLength = util.minBarMinusOne(startOfCommentTokenPosition, whitespaceTokenPosition, contentLength),
          significantContent = content.substring(0, significantContentLength); 

      remainingContent = content.substring(significantContentLength);

      content = remainingContent;

      nonSignificantTokenOrSignificantContents.push(significantContent);

      continue;
    }
    
    var endOfLineToken = EndOfLineToken.fromNothing(line);
    
    nonSignificantTokenOrSignificantContents.push(endOfLineToken);

    return nonSignificantTokenOrSignificantContents;
  }
}

module.exports = NonSignificantTokens;
