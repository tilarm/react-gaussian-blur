'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var style = {
  position: 'absolute',
  overflow: 'hidden',
  width: 0,
  height: 0,
  pointerEvents: 'none'
};

var SvgFilter = function SvgFilter(_ref) {
  var x = _ref.x;
  var y = _ref.y;

  return _react2['default'].createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', version: '1.1', style: style },
    _react2['default'].createElement(
      'defs',
      null,
      _react2['default'].createElement(
        'filter',
        { id: 'svg-blur' },
        _react2['default'].createElement('feGaussianBlur', { 'in': 'SourceGraphic', stdDeviation: x + ',' + y })
      )
    )
  );
};

exports['default'] = SvgFilter;
module.exports = exports['default'];