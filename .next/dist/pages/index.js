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

var _reactNoSsr = require('react-no-ssr');

var _reactNoSsr2 = _interopRequireDefault(_reactNoSsr);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactD3Tree = require('react-d3-tree');

var _reactD3Tree2 = _interopRequireDefault(_reactD3Tree);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/pages/index.js?entry';


var data = [{
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
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement(_Header2.default, { url: this.props.url, title: this.props, __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), _react2.default.createElement(_reactNoSsr2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_reactD3Tree2.default, { data: data, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      })));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJOb1NTUiIsImF4aW9zIiwiVHJlZSIsIkhlYWRlciIsImRhdGEiLCJuYW1lIiwiYXR0cmlidXRlcyIsImtleUEiLCJrZXlCIiwia2V5QyIsImNoaWxkcmVuIiwidHJlZVN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJwcm9wcyIsInVybCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7Ozs7Ozs7QUFJbkIsSUFBTTtRQUNKLEFBQ1EsQUFDTjs7VUFBWSxBQUNKLEFBQ047VUFGVSxBQUVKLEFBQ047VUFMSixBQUVjLEFBR0osQUFFUjtBQUxZLEFBQ1Y7O1VBS0EsQUFDUSxBQUNOOztZQUFZLEFBQ0osQUFDTjtZQUZVLEFBRUosQUFDTjtZQU5JLEFBQ1IsQUFFYyxBQUdKO0FBSEksQUFDVjtBQUhKLEFBQ0UsR0FGTTtVQVJkLEFBQWEsQUFDWCxBQU9ZLEFBU1IsQUFDUTtBQURSLEFBQ0U7QUFqQk4sQUFDRSxDQUZTOztBQXdCYixJQUFNO1NBQVksQUFDVCxBQUNQO1VBRkYsQUFBa0IsQUFFUjtBQUZRLEFBQ2hCOzs7Ozs7Ozs7Ozs7U0FLQTs7QUFFQTs7QUFDQTtBQUNBOzs2QkFDUyxBQUNQOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQyxrQ0FBTyxLQUFLLEtBQUEsQUFBSyxNQUFsQixBQUF3QixLQUFLLE9BQU8sS0FBcEMsQUFBeUM7b0JBQXpDO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsdUNBQUssTUFBTixBQUFZO29CQUFaO3NCQUpOLEFBQ0UsQUFFRSxBQUNFLEFBSVA7QUFKTzs7Ozs7O0VBWG1CLGdCQUFNLEEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUifQ==