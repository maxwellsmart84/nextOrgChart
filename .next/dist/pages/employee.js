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

var _EmployeeCard = require('../components/EmployeeCard');

var _EmployeeCard2 = _interopRequireDefault(_EmployeeCard);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _employeeShaper = require('../api/shapers/employeeShaper');

var _utility = require('../api/utility');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/pages/employee.js?entry';


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
          lineNumber: 28
        }
      }, _react2.default.createElement(_Header2.default, { url: this.props.url, title: this.props, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), _react2.default.createElement(_EmployeeCard2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req;

        var db, _data, _employees, _treeData, data, employees, treeData;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!req) {
                  _context.next = 10;
                  break;
                }

                console.log('SERVER');
                db = req.db;
                _context.next = 5;
                return db.model('Employee').find({});

              case 5:
                _data = _context.sent;
                _employees = (0, _employeeShaper.shapeEmployees)(_data);
                //TODO: need to find the null supervisorId not use index 0

                _treeData = (0, _utility.buildTree)(_employees[0], _employees);

                console.log(_treeData.id);
                return _context.abrupt('return', { treeData: _treeData });

              case 10:
                console.log('CLIENT GET');
                _context.next = 13;
                return _axios2.default.get('http://localhost/api/employees');

              case 13:
                data = _context.sent;
                employees = (0, _employeeShaper.shapeEmployees)(data);
                treeData = (0, _utility.buildTree)(employees[0], employees)[0];

                console.log(treeData);
                return _context.abrupt('return', { treeData: treeData });

              case 18:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2VtcGxveWVlLmpzIl0sIm5hbWVzIjpbIkVtcGxveWVlQ2FyZCIsIkhlYWRlciIsImF4aW9zIiwic2hhcGVFbXBsb3llZXMiLCJidWlsZFRyZWUiLCJwcm9wcyIsInVybCIsInJlcSIsImNvbnNvbGUiLCJsb2ciLCJkYiIsIm1vZGVsIiwiZmluZCIsImRhdGEiLCJlbXBsb3llZXMiLCJ0cmVlRGF0YSIsImlkIiwiZ2V0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQVMsQUFBc0I7O0FBQy9CLEFBQVMsQUFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFxQmpCLEFBQ1A7NkJBQ0ksY0FBQTs7b0JBQUE7c0JBQUEsQUFDSTtBQURKO0FBQUEsT0FBQSxrQkFDSSxBQUFDLGtDQUFPLEtBQUssS0FBQSxBQUFLLE1BQWxCLEFBQXdCLEtBQUssT0FBTyxLQUFwQyxBQUF5QztvQkFBekM7c0JBREosQUFDSSxBQUNBO0FBREE7MEJBQ0EsQUFBQzs7b0JBQUQ7c0JBSFIsQUFDSSxBQUVJLEFBR1A7QUFITztBQUFBOzs7Ozs7WSxBQXRCd0IsVyxBQUFBOzs7Ozs7OztxQixBQUMxQjs7O0FBQ0Y7O3dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ0o7QSxxQkFBTyxBLElBQVAsQTs7dUJBQ1csR0FBQSxBQUFHLE1BQUgsQUFBUyxZQUFULEFBQXFCLEtBQXJCLEFBQTBCLEE7O21CQUF2QztBLGlDQUNBO0EsNkJBQVksb0MsQUFBQSxBQUFlLEFBQ2pDO0FBQ007O0EsNEJBQVcsd0JBQVUsV0FBVixBQUFVLEFBQVUsSUFBSSxBLEFBQXhCLEFBQ2pCOzt3QkFBQSxBQUFRLElBQUksVUFBWixBQUFxQjtpREFDZCxFQUFFLFVBQUYsQTs7bUJBRVQ7d0JBQUEsQUFBUSxJQUFSLEFBQVk7O3VCQUNPLGdCQUFBLEFBQU0sSUFBTixBQUFVLEE7O21CQUF2QjtBLGdDQUNBO0EsNEJBQVksb0NBQWUsQSxBQUFmLEFBQ1o7QSwyQkFBVyx3QkFBVSxVQUFWLEFBQVUsQUFBVSxJQUFwQixBQUF3QixXQUF4QixBQUFtQyxBLEFBQ3BEOzt3QkFBQSxBQUFRLElBQVIsQUFBWTtpREFDTCxFQUFFLFVBQUYsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWpCa0IsZ0JBQU0sQSIsImZpbGUiOiJlbXBsb3llZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF4d2VsbGtyYXVzZS9Eb2N1bWVudHMvcHJvamVjdHMvYXRsYXRsRXZhbC9vcmdDaGFydFJlYWN0Tm9kZSJ9