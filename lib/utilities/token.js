'use strict';

function tokenise(content, Token) {
  var tokensOrContents = [];

  var token = Token.match(content);

  while (token !== null) {
    var index = token.getIndex(),
        contentLength = token.getContentLength(),
        left = index,
        ///
    right = index + contentLength,
        leftContent = content.substring(0, left),
        rightContent = content.substring(right);

    if (leftContent !== '') {
      content = leftContent; ///

      tokensOrContents.push(content);
    }

    tokensOrContents.push(token);

    content = rightContent; ///

    token = Token.match(content);
  }

  if (content !== '') {
    tokensOrContents.push(content);
  }

  return tokensOrContents;
}

module.exports = {
  tokenise: tokenise
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsaXRpZXMvdG9rZW4uanMiXSwibmFtZXMiOlsidG9rZW5pc2UiLCJjb250ZW50IiwiVG9rZW4iLCJ0b2tlbnNPckNvbnRlbnRzIiwidG9rZW4iLCJtYXRjaCIsImluZGV4IiwiZ2V0SW5kZXgiLCJjb250ZW50TGVuZ3RoIiwiZ2V0Q29udGVudExlbmd0aCIsImxlZnQiLCJyaWdodCIsImxlZnRDb250ZW50Iiwic3Vic3RyaW5nIiwicmlnaHRDb250ZW50IiwicHVzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLFNBQVNBLFFBQVQsQ0FBa0JDLE9BQWxCLEVBQTJCQyxLQUEzQixFQUFrQztBQUNoQyxNQUFNQyxtQkFBbUIsRUFBekI7O0FBRUEsTUFBSUMsUUFBUUYsTUFBTUcsS0FBTixDQUFZSixPQUFaLENBQVo7O0FBRUEsU0FBT0csVUFBVSxJQUFqQixFQUF1QjtBQUNyQixRQUFNRSxRQUFRRixNQUFNRyxRQUFOLEVBQWQ7QUFBQSxRQUNNQyxnQkFBZ0JKLE1BQU1LLGdCQUFOLEVBRHRCO0FBQUEsUUFFTUMsT0FBT0osS0FGYjtBQUFBLFFBRW9CO0FBQ2RLLFlBQVFMLFFBQVFFLGFBSHRCO0FBQUEsUUFJTUksY0FBY1gsUUFBUVksU0FBUixDQUFrQixDQUFsQixFQUFxQkgsSUFBckIsQ0FKcEI7QUFBQSxRQUtNSSxlQUFlYixRQUFRWSxTQUFSLENBQWtCRixLQUFsQixDQUxyQjs7QUFPQSxRQUFJQyxnQkFBZ0IsRUFBcEIsRUFBd0I7QUFDdEJYLGdCQUFVVyxXQUFWLENBRHNCLENBQ0U7O0FBRXhCVCx1QkFBaUJZLElBQWpCLENBQXNCZCxPQUF0QjtBQUNEOztBQUVERSxxQkFBaUJZLElBQWpCLENBQXNCWCxLQUF0Qjs7QUFFQUgsY0FBVWEsWUFBVixDQWhCcUIsQ0FnQkc7O0FBRXhCVixZQUFRRixNQUFNRyxLQUFOLENBQVlKLE9BQVosQ0FBUjtBQUNEOztBQUVELE1BQUlBLFlBQVksRUFBaEIsRUFBb0I7QUFDbEJFLHFCQUFpQlksSUFBakIsQ0FBc0JkLE9BQXRCO0FBQ0Q7O0FBRUQsU0FBT0UsZ0JBQVA7QUFDRDs7QUFFRGEsT0FBT0MsT0FBUCxHQUFpQjtBQUNmakI7QUFEZSxDQUFqQiIsImZpbGUiOiJ0b2tlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIHRva2VuaXNlKGNvbnRlbnQsIFRva2VuKSB7XHJcbiAgY29uc3QgdG9rZW5zT3JDb250ZW50cyA9IFtdO1xyXG5cclxuICBsZXQgdG9rZW4gPSBUb2tlbi5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgd2hpbGUgKHRva2VuICE9PSBudWxsKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRva2VuLmdldEluZGV4KCksXHJcbiAgICAgICAgICBjb250ZW50TGVuZ3RoID0gdG9rZW4uZ2V0Q29udGVudExlbmd0aCgpLFxyXG4gICAgICAgICAgbGVmdCA9IGluZGV4LCAvLy9cclxuICAgICAgICAgIHJpZ2h0ID0gaW5kZXggKyBjb250ZW50TGVuZ3RoLFxyXG4gICAgICAgICAgbGVmdENvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZygwLCBsZWZ0KSxcclxuICAgICAgICAgIHJpZ2h0Q29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHJpZ2h0KTtcclxuXHJcbiAgICBpZiAobGVmdENvbnRlbnQgIT09ICcnKSB7XHJcbiAgICAgIGNvbnRlbnQgPSBsZWZ0Q29udGVudDsgIC8vL1xyXG5cclxuICAgICAgdG9rZW5zT3JDb250ZW50cy5wdXNoKGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRva2Vuc09yQ29udGVudHMucHVzaCh0b2tlbik7XHJcblxyXG4gICAgY29udGVudCA9IHJpZ2h0Q29udGVudDsgLy8vXHJcblxyXG4gICAgdG9rZW4gPSBUb2tlbi5tYXRjaChjb250ZW50KTtcclxuICB9XHJcblxyXG4gIGlmIChjb250ZW50ICE9PSAnJykge1xyXG4gICAgdG9rZW5zT3JDb250ZW50cy5wdXNoKGNvbnRlbnQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRva2Vuc09yQ29udGVudHM7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIHRva2VuaXNlXHJcbn07XHJcbiJdfQ==