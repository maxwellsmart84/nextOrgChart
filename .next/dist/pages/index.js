'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _reactD3Tree = require('react-d3-tree');

var _reactD3Tree2 = _interopRequireDefault(_reactD3Tree);

var _reactNoSsr = require('react-no-ssr');

var _reactNoSsr2 = _interopRequireDefault(_reactNoSsr);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/pages/index.js?entry';


var myTreeData = [{
  name: 'Top Level',
  attributes: {
    keyA: 'val A',
    keyB: 'val B',
    keyC: 'val C'
  },
  children: [{
    name: 'Level 2: A',
    attributes: {
      keyA: 'val A',
      keyB: 'val B',
      keyC: 'val C'
    }
  }, {
    name: 'Level 2: B'
  }]
}];

var treeStyle = {
  width: '50em',
  height: '20em'
};

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',

    // static async getInitialProps() {

    //   // const res = await axios.get('')
    //   return;
    // }
    value: function render() {
      return _react2.default.createElement(_Layout2.default, { url: this.props.url, title: this.props, __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_reactNoSsr2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_reactD3Tree2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      })));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJIZWFkIiwiVHJlZSIsIk5vU1NSIiwiYXhpb3MiLCJMYXlvdXQiLCJteVRyZWVEYXRhIiwibmFtZSIsImF0dHJpYnV0ZXMiLCJrZXlBIiwia2V5QiIsImtleUMiLCJjaGlsZHJlbiIsInRyZWVTdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwicHJvcHMiLCJ1cmwiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFFUCxBQUFPLEFBQVk7Ozs7Ozs7OztBQUduQixJQUFNO1FBQ0osQUFDUSxBQUNOOztVQUFZLEFBQ0osQUFDTjtVQUZVLEFBRUosQUFDTjtVQUxKLEFBRWMsQUFHSixBQUVSO0FBTFksQUFDVjs7VUFLQSxBQUNRLEFBQ047O1lBQVksQUFDSixBQUNOO1lBRlUsQUFFSixBQUNOO1lBTkksQUFDUixBQUVjLEFBR0o7QUFISSxBQUNWO0FBSEosQUFDRSxHQUZNO1VBUmQsQUFBbUIsQUFDakIsQUFPWSxBQVNSLEFBQ1E7QUFEUixBQUNFO0FBakJOLEFBQ0UsQ0FGZTs7QUF3Qm5CLElBQU07U0FBWSxBQUNULEFBQ1A7VUFGRixBQUFrQixBQUVSO0FBRlEsQUFDaEI7Ozs7Ozs7Ozs7OztTQUtBOztBQUVBOztBQUNBO0FBQ0E7OzZCQUNTLEFBQ1A7NkJBQ0UsQUFBQyxrQ0FBTyxLQUFLLEtBQUEsQUFBSyxNQUFsQixBQUF3QixLQUFLLE9BQU8sS0FBcEMsQUFBeUM7b0JBQXpDO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7O29CQUFEO3NCQUhOLEFBQ0UsQUFDRSxBQUNFLEFBSVA7QUFKTztBQUFBOzs7OztFQVZtQixnQkFBTSxBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIn0=