"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactGtmModule = _interopRequireDefault(require("react-gtm-module"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
// EventTrackerHOC.jsx

// Import TagManager from react-gtm-module

var EventTrackerHOC = function EventTrackerHOC(_ref) {
  var children = _ref.children;
  (0, _react.useEffect)(function () {
    // Initialize TagManager with your GTM ID
    _reactGtmModule["default"].initialize({
      gtmId: ''
    });

    // Track page view when component mounts
    _reactGtmModule["default"].dataLayer({
      dataLayer: {
        event: 'pageview',
        pagePath: window.location.pathname
      }
    });

    // Example: Track button click event
    var handleClick = function handleClick() {
      _reactGtmModule["default"].dataLayer({
        dataLayer: {
          event: 'interaction',
          category: 'User Interaction',
          action: 'Clicked Button',
          label: 'Buy Now'
        }
      });
    };

    // Attach event listener to document for tracking button clicks
    document.addEventListener('click', handleClick);

    // Cleanup function
    return function () {
      document.removeEventListener('click', handleClick);
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children); // Render child components
};
var _default = exports["default"] = EventTrackerHOC;