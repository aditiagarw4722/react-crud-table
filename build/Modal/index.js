"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _wrappers = require("./wrappers");

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var getDisplay = function getDisplay(visible) {
  return visible ? 'block' : 'none';
};

var Modal = /*#__PURE__*/function (_React$Component) {
  _inherits(Modal, _React$Component);

  var _super = _createSuper(Modal);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _super.call(this, props);
    _this.state = {
      visible: false
    };
    _this.showModal = _this.showModal.bind(_assertThisInitialized(_this));
    _this.hideModal = _this.hideModal.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var onInit = this.props.onInit;
      onInit({
        show: this.showModal,
        hide: this.hideModal
      });
    }
  }, {
    key: "showModal",
    value: function showModal() {
      var onDisplay = this.props.onDisplay;

      if (onDisplay) {
        onDisplay();
      }

      this.setState({
        visible: true
      });
    }
  }, {
    key: "hideModal",
    value: function hideModal() {
      this.setState({
        visible: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          trigger = _this$props.trigger,
          title = _this$props.title;
      var visible = this.state.visible;
      var style = {
        display: getDisplay(visible)
      };
      return /*#__PURE__*/_react["default"].createElement("div", null, trigger && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        modifiers: "positive",
        onClick: this.showModal
      }, trigger), /*#__PURE__*/_react["default"].createElement(_wrappers.Container, {
        style: style
      }, /*#__PURE__*/_react["default"].createElement(_wrappers.Container.BG, {
        onClick: this.hideModal
      }), /*#__PURE__*/_react["default"].createElement(_wrappers.Container.Modal, null, title && /*#__PURE__*/_react["default"].createElement(_wrappers.Container.Title, null, title), children)));
    }
  }]);

  return Modal;
}(_react["default"].Component);

Modal.propTypes = {
  title: _propTypes["default"].string,
  onInit: _propTypes["default"].func,
  onDisplay: _propTypes["default"].func,
  children: _propTypes["default"].node,
  trigger: _propTypes["default"].node
};
Modal.defaultProps = {
  onInit: function onInit() {},
  onDisplay: function onDisplay() {},
  title: '',
  children: null,
  trigger: null
};
var _default = Modal;
exports["default"] = _default;