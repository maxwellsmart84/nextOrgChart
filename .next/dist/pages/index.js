'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactTreeGraph = require('react-tree-graph');

var _reactTreeGraph2 = _interopRequireDefault(_reactTreeGraph);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _employeeShaper = require('../api/shapers/employeeShaper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/pages/index.js?entry';


var data = {
  name: 'Top Level',
  children: [{
    name: 'Level 2: A'
  }, {
    name: 'Level 2: B'
  }]
};

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement(_Header2.default, { url: this.props.url, title: this.props, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), _react2.default.createElement(_reactTreeGraph2.default, { data: data, height: 400, width: 400, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req;

        var db, _employees, _ref3, employees;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!req) {
                  _context.next = 6;
                  break;
                }

                db = req.db;
                _context.next = 4;
                return db.model('Employee').find({});

              case 4:
                _employees = _context.sent;
                return _context.abrupt('return', (0, _employeeShaper.shapeEmployees)(_employees));

              case 6:
                _context.next = 8;
                return _axios2.default.get('http://localhost/api/employees');

              case 8:
                _ref3 = _context.sent;
                employees = _ref3.employees;

                console.log('client get', employees);
                console.log('hitting API', employees);
                return _context.abrupt('return', { employees: employees });

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJheGlvcyIsIlRyZWUiLCJIZWFkZXIiLCJzaGFwZUVtcGxveWVlcyIsImRhdGEiLCJuYW1lIiwiY2hpbGRyZW4iLCJwcm9wcyIsInVybCIsInJlcSIsImRiIiwibW9kZWwiLCJmaW5kIiwiZW1wbG95ZWVzIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQXNCOzs7Ozs7O0FBSS9CLElBQU07UUFBTyxBQUNMLEFBQ047O1VBQVUsQUFDUixBQUNRO0FBRFIsQUFDRSxHQUZNO1VBRlosQUFBYSxBQUVELEFBSVIsQUFDUTtBQURSLEFBQ0U7QUFQTyxBQUNYOzs7Ozs7Ozs7Ozs7OzZCQXdCUyxBQUNQOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQyxrQ0FBTyxLQUFLLEtBQUEsQUFBSyxNQUFsQixBQUF3QixLQUFLLE9BQU8sS0FBcEMsQUFBeUM7b0JBQXpDO3NCQURGLEFBQ0UsQUFDRTtBQURGOzBCQUNFLEFBQUMsMENBQUssTUFBTixBQUFZLE1BQU0sUUFBbEIsQUFBMEIsS0FBSyxPQUEvQixBQUFzQztvQkFBdEM7c0JBSE4sQUFDRSxBQUVJLEFBR1A7QUFITzs7Ozs7OztZLEFBZnVCLFdBQUEsQTs7Ozs7Ozs7cUJBQ3pCLEE7OztBQUNNOztBLHFCLEFBQU8sSSxBQUFQOzt1QkFDZ0IsR0FBQSxBQUFHLE1BQUgsQUFBUyxZQUFULEFBQXFCLEtBQXJCLEFBQTBCLEE7O21CQUE1QztBO2lEQUNDLG9DQUFBLEEsQUFBZTs7Ozt1QkFFSSxnQkFBQSxBQUFNLElBQU4sQUFBVSxBOzs7aUNBQTlCO0Esa0NBQUEsQSxBQUNSOzt3QkFBQSxBQUFRLElBQVIsQUFBWSxjQUFaLEFBQTBCLEFBQzFCO3dCQUFBLEFBQVEsSUFBUixBQUFZLGVBQVosQUFBMkI7aURBQ3BCLEVBQUUsV0FBRixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBVmtCLGdCQUFNLEEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUifQ==