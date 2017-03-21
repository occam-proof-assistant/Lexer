'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    Textarea = easy.Textarea;

var Example = require('../example'),
    BasicLexer = require('../basic/lexer');

var terminalSymbolsRegExpPatternTextarea,
    terminalSymbolsRegExpPatternTextareaSelector = 'textarea#terminalSymbolsRegExpPattern',
    terminalSymbolsRegExpPattern = '\\+|\\-|\\*|\\/|\\(|\\)|\\d+';

var lexer = null;

var BasicExample = function () {
  function BasicExample() {
    _classCallCheck(this, BasicExample);
  }

  _createClass(BasicExample, null, [{
    key: 'run',
    value: function run() {
      terminalSymbolsRegExpPatternTextarea = new Textarea(terminalSymbolsRegExpPatternTextareaSelector);

      var terminalSymbolsRegExpPatternTextareaValue = terminalSymbolsRegExpPattern; ///

      terminalSymbolsRegExpPatternTextarea.setValue(terminalSymbolsRegExpPatternTextareaValue);

      terminalSymbolsRegExpPatternTextarea.onChange(function () {
        update();
      });

      Example.contentTextareaOnKeyUp(function () {
        update();
      });

      update();
    }
  }]);

  return BasicExample;
}();

module.exports = BasicExample;

function update() {
  updateLexer();

  if (lexer !== null) {
    Example.updateTokens(lexer);
  } else {
    Example.clearTokens();
  }
}

function updateLexer() {
  var terminalSymbolsRegExpPatternInputValue = terminalSymbolsRegExpPatternTextarea.getValue(),
      terminalSymbolsRegExpPattern = terminalSymbolsRegExpPatternInputValue,
      ///
  terminalSymbolsRegExpPatternIsValid = regExpPatternIsValid(terminalSymbolsRegExpPattern);

  if (terminalSymbolsRegExpPatternIsValid) {
    var terminalSymbolsRegExp = new RegExp(terminalSymbolsRegExpPattern),
        grammar = [{ terminalSymbol: terminalSymbolsRegExp }];

    lexer = BasicLexer.fromGrammar(grammar);

    terminalSymbolsRegExpPatternTextarea.removeClass('error');
  } else {
    terminalSymbolsRegExpPatternTextarea.addClass('error');

    lexer = null;
  }
}

function regExpPatternIsValid(regExpPattern) {
  var valid = true;

  try {
    new RegExp(regExpPattern);
  } catch (error) {
    valid = false;
  }

  return valid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9iYXNpYy5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIlRleHRhcmVhIiwiRXhhbXBsZSIsIkJhc2ljTGV4ZXIiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dGFyZWEiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dGFyZWFTZWxlY3RvciIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJsZXhlciIsIkJhc2ljRXhhbXBsZSIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYVZhbHVlIiwic2V0VmFsdWUiLCJvbkNoYW5nZSIsInVwZGF0ZSIsImNvbnRlbnRUZXh0YXJlYU9uS2V5VXAiLCJtb2R1bGUiLCJleHBvcnRzIiwidXBkYXRlTGV4ZXIiLCJ1cGRhdGVUb2tlbnMiLCJjbGVhclRva2VucyIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFZhbHVlIiwiZ2V0VmFsdWUiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSXNWYWxpZCIsInJlZ0V4cFBhdHRlcm5Jc1ZhbGlkIiwidGVybWluYWxTeW1ib2xzUmVnRXhwIiwiUmVnRXhwIiwiZ3JhbW1hciIsInRlcm1pbmFsU3ltYm9sIiwiZnJvbUdyYW1tYXIiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwicmVnRXhwUGF0dGVybiIsInZhbGlkIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLE1BQVIsQ0FBWDtBQUFBLElBQ0lDLFdBQVdGLEtBQUtFLFFBRHBCOztBQUdBLElBQUlDLFVBQVVGLFFBQVEsWUFBUixDQUFkO0FBQUEsSUFDSUcsYUFBYUgsUUFBUSxnQkFBUixDQURqQjs7QUFHQSxJQUFJSSxvQ0FBSjtBQUFBLElBQ0lDLCtDQUErQyx1Q0FEbkQ7QUFBQSxJQUVJQyw2REFGSjs7QUFJQSxJQUFJQyxRQUFRLElBQVo7O0lBRU1DLFk7Ozs7Ozs7MEJBQ1M7QUFDWEosNkNBQXVDLElBQUlILFFBQUosQ0FBYUksNENBQWIsQ0FBdkM7O0FBRUEsVUFBSUksNENBQTRDSCw0QkFBaEQsQ0FIVyxDQUdtRTs7QUFFOUVGLDJDQUFxQ00sUUFBckMsQ0FBOENELHlDQUE5Qzs7QUFFQUwsMkNBQXFDTyxRQUFyQyxDQUE4QyxZQUFXO0FBQ3ZEQztBQUNELE9BRkQ7O0FBSUFWLGNBQVFXLHNCQUFSLENBQStCLFlBQVc7QUFDeENEO0FBQ0QsT0FGRDs7QUFJQUE7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUJQLFlBQWpCOztBQUVBLFNBQVNJLE1BQVQsR0FBa0I7QUFDaEJJOztBQUVBLE1BQUlULFVBQVUsSUFBZCxFQUFvQjtBQUNsQkwsWUFBUWUsWUFBUixDQUFxQlYsS0FBckI7QUFDRCxHQUZELE1BRU87QUFDTEwsWUFBUWdCLFdBQVI7QUFDRDtBQUNGOztBQUVELFNBQVNGLFdBQVQsR0FBdUI7QUFDckIsTUFBSUcseUNBQXlDZixxQ0FBcUNnQixRQUFyQyxFQUE3QztBQUFBLE1BQ0lkLCtCQUErQmEsc0NBRG5DO0FBQUEsTUFDNEU7QUFDeEVFLHdDQUFzQ0MscUJBQXFCaEIsNEJBQXJCLENBRjFDOztBQUlBLE1BQUllLG1DQUFKLEVBQXlDO0FBQ3ZDLFFBQUlFLHdCQUF3QixJQUFJQyxNQUFKLENBQVdsQiw0QkFBWCxDQUE1QjtBQUFBLFFBQ0ltQixVQUFVLENBQ1IsRUFBRUMsZ0JBQWlCSCxxQkFBbkIsRUFEUSxDQURkOztBQUtBaEIsWUFBUUosV0FBV3dCLFdBQVgsQ0FBdUJGLE9BQXZCLENBQVI7O0FBRUFyQix5Q0FBcUN3QixXQUFyQyxDQUFpRCxPQUFqRDtBQUNELEdBVEQsTUFTTztBQUNMeEIseUNBQXFDeUIsUUFBckMsQ0FBOEMsT0FBOUM7O0FBRUF0QixZQUFRLElBQVI7QUFDRDtBQUNGOztBQUVELFNBQVNlLG9CQUFULENBQThCUSxhQUE5QixFQUE2QztBQUMzQyxNQUFJQyxRQUFRLElBQVo7O0FBRUEsTUFBSTtBQUNGLFFBQUlQLE1BQUosQ0FBV00sYUFBWDtBQUNELEdBRkQsQ0FHQSxPQUFPRSxLQUFQLEVBQWM7QUFDWkQsWUFBUSxLQUFSO0FBQ0Q7O0FBRUQsU0FBT0EsS0FBUDtBQUNEIiwiZmlsZSI6ImJhc2ljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICBUZXh0YXJlYSA9IGVhc3kuVGV4dGFyZWE7XG5cbnZhciBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpLFxuICAgIEJhc2ljTGV4ZXIgPSByZXF1aXJlKCcuLi9iYXNpYy9sZXhlcicpO1xuXG52YXIgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRhcmVhLFxuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI3Rlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4nLFxuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSBgXFxcXCt8XFxcXC18XFxcXCp8XFxcXC98XFxcXCh8XFxcXCl8XFxcXGQrYDtcblxudmFyIGxleGVyID0gbnVsbDtcblxuY2xhc3MgQmFzaWNFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRhcmVhU2VsZWN0b3IpO1xuXG4gICAgdmFyIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYVZhbHVlID0gdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybjsgLy8vXG5cbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dGFyZWEuc2V0VmFsdWUodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRhcmVhVmFsdWUpO1xuXG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRhcmVhLm9uQ2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgdXBkYXRlKCk7XG4gICAgfSk7XG5cbiAgICBFeGFtcGxlLmNvbnRlbnRUZXh0YXJlYU9uS2V5VXAoZnVuY3Rpb24oKSB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9KTtcblxuICAgIHVwZGF0ZSgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzaWNFeGFtcGxlO1xuXG5mdW5jdGlvbiB1cGRhdGUoKSB7XG4gIHVwZGF0ZUxleGVyKCk7XG5cbiAgaWYgKGxleGVyICE9PSBudWxsKSB7XG4gICAgRXhhbXBsZS51cGRhdGVUb2tlbnMobGV4ZXIpO1xuICB9IGVsc2Uge1xuICAgIEV4YW1wbGUuY2xlYXJUb2tlbnMoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMZXhlcigpIHtcbiAgdmFyIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFZhbHVlID0gdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0gdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0VmFsdWUsICAvLy9cbiAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5Jc1ZhbGlkID0gcmVnRXhwUGF0dGVybklzVmFsaWQodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybik7XG5cbiAgaWYgKHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5Jc1ZhbGlkKSB7XG4gICAgdmFyIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCA9IG5ldyBSZWdFeHAodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiksXG4gICAgICAgIGdyYW1tYXIgPSBbXG4gICAgICAgICAgeyB0ZXJtaW5hbFN5bWJvbCA6IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCB9XG4gICAgICAgIF07XG5cbiAgICBsZXhlciA9IEJhc2ljTGV4ZXIuZnJvbUdyYW1tYXIoZ3JhbW1hcik7XG5cbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dGFyZWEucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gIH0gZWxzZSB7XG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRhcmVhLmFkZENsYXNzKCdlcnJvcicpO1xuXG4gICAgbGV4ZXIgPSBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlZ0V4cFBhdHRlcm5Jc1ZhbGlkKHJlZ0V4cFBhdHRlcm4pIHtcbiAgdmFyIHZhbGlkID0gdHJ1ZTtcblxuICB0cnkge1xuICAgIG5ldyBSZWdFeHAocmVnRXhwUGF0dGVybik7XG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgdmFsaWQgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZDtcbn1cbiJdfQ==