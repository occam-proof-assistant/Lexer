"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nonSignificant = _interopRequireDefault(require("../../../../../common/token/nonSignificant"));

var _types = require("../../../../../common/types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MiddleOfMultiLineCommentToken = /*#__PURE__*/function (_NonSignificantToken) {
  _inherits(MiddleOfMultiLineCommentToken, _NonSignificantToken);

  var _super = _createSuper(MiddleOfMultiLineCommentToken);

  function MiddleOfMultiLineCommentToken() {
    _classCallCheck(this, MiddleOfMultiLineCommentToken);

    return _super.apply(this, arguments);
  }

  _createClass(MiddleOfMultiLineCommentToken, [{
    key: "clone",
    value: function clone(startPosition, endPosition) {
      return _get(_getPrototypeOf(MiddleOfMultiLineCommentToken.prototype), "clone", this).call(this, MiddleOfMultiLineCommentToken, startPosition, endPosition);
    }
  }, {
    key: "isInComment",
    value: function isInComment() {
      var inComment = true;
      return inComment;
    }
  }], [{
    key: "match",
    value: function match(content) {
      return _nonSignificant["default"].match(MiddleOfMultiLineCommentToken, content);
    }
  }, {
    key: "fromContent",
    value: function fromContent(content) {
      return _nonSignificant["default"].fromContent(MiddleOfMultiLineCommentToken, content);
    }
  }]);

  return MiddleOfMultiLineCommentToken;
}(_nonSignificant["default"]);

exports["default"] = MiddleOfMultiLineCommentToken;

_defineProperty(MiddleOfMultiLineCommentToken, "type", _types.middleOfMultiLineCommentType);

_defineProperty(MiddleOfMultiLineCommentToken, "regularExpression", /^(?:.+?(?=###)|.+$)/);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZU9mLmpzIl0sIm5hbWVzIjpbIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiaW5Db21tZW50IiwiY29udGVudCIsIk5vblNpZ25pZmljYW50VG9rZW4iLCJtYXRjaCIsImZyb21Db250ZW50IiwibWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLDZCOzs7Ozs7Ozs7Ozs7OzBCQUNiQyxhLEVBQWVDLFcsRUFBYTtBQUFFLHNHQUFtQkYsNkJBQW5CLEVBQWtEQyxhQUFsRCxFQUFpRUMsV0FBakU7QUFBZ0Y7OztrQ0FFdEc7QUFDWixVQUFNQyxTQUFTLEdBQUcsSUFBbEI7QUFFQSxhQUFPQSxTQUFQO0FBQ0Q7OzswQkFNWUMsTyxFQUFTO0FBQUUsYUFBT0MsMkJBQW9CQyxLQUFwQixDQUEwQk4sNkJBQTFCLEVBQXlESSxPQUF6RCxDQUFQO0FBQTJFOzs7Z0NBRWhGQSxPLEVBQVM7QUFBRSxhQUFPQywyQkFBb0JFLFdBQXBCLENBQWdDUCw2QkFBaEMsRUFBK0RJLE9BQS9ELENBQVA7QUFBaUY7Ozs7RUFmdERDLDBCOzs7O2dCQUF0Q0wsNkIsVUFTTFEsbUM7O2dCQVRLUiw2Qix1QkFXUSxxQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uU2lnbmlmaWNhbnRUb2tlbiBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50XCI7XG5cbmltcG9ydCB7IG1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY29tbW9uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIGV4dGVuZHMgTm9uU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgaXNJbkNvbW1lbnQoKSB7XG4gICAgY29uc3QgaW5Db21tZW50ID0gdHJ1ZTtcblxuICAgIHJldHVybiBpbkNvbW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgdHlwZSA9IG1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFR5cGU7XG5cbiAgc3RhdGljIHJlZ3VsYXJFeHByZXNzaW9uID0gL14oPzouKz8oPz0jIyMpfC4rJCkvO1xuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLm1hdGNoKE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50KE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxufVxuIl19