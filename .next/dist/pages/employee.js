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

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

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
        className: 'jsx-3557637588',
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
      }), _react2.default.createElement(_style2.default, {
        styleId: '3557637588',
        css: 'body{background:#FFF;font:1rem menlo;color:#fsff;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2VtcGxveWVlLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCNEIsQUFHNkIsZ0JBQ0EsZ0JBQ0osWUFDSCxTQUNDLFVBQ1oiLCJmaWxlIjoicGFnZXMvZW1wbG95ZWUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRW1wbG95ZWVDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvRW1wbG95ZWVDYXJkJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHNoYXBlRW1wbG95ZWVzIH0gZnJvbSAnLi4vYXBpL3NoYXBlcnMvZW1wbG95ZWVTaGFwZXInO1xuaW1wb3J0IHsgYnVpbGRUcmVlIH0gZnJvbSAnLi4vYXBpL3V0aWxpdHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHsgcmVxIH0pIHtcbiAgICBpZiAocmVxKSB7XG4gICAgICBjb25zb2xlLmxvZygnU0VSVkVSJyk7XG4gICAgICBjb25zdCB7IGRiIH0gPSByZXE7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZGIubW9kZWwoJ0VtcGxveWVlJykuZmluZCh7fSk7XG4gICAgICBjb25zdCBlbXBsb3llZXMgPSBzaGFwZUVtcGxveWVlcyhkYXRhKTtcbiAgICAgIC8vVE9ETzogbmVlZCB0byBmaW5kIHRoZSBudWxsIHN1cGVydmlzb3JJZCBub3QgdXNlIGluZGV4IDBcbiAgICAgIGNvbnN0IHRyZWVEYXRhID0gYnVpbGRUcmVlKGVtcGxveWVlc1swXSwgZW1wbG95ZWVzKTtcbiAgICAgIGNvbnNvbGUubG9nKHRyZWVEYXRhLmlkKTtcbiAgICAgIHJldHVybiB7IHRyZWVEYXRhIH07XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdDTElFTlQgR0VUJylcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0L2FwaS9lbXBsb3llZXMnKTtcbiAgICBjb25zdCBlbXBsb3llZXMgPSBzaGFwZUVtcGxveWVlcyhkYXRhKTtcbiAgICBjb25zdCB0cmVlRGF0YSA9IGJ1aWxkVHJlZShlbXBsb3llZXNbMF0sIGVtcGxveWVlcylbMF07XG4gICAgY29uc29sZS5sb2codHJlZURhdGEpO1xuICAgIHJldHVybiB7IHRyZWVEYXRhIH07XG4gIH1cbnJlbmRlcigpIHtcbiAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkZXIgdXJsPXt0aGlzLnByb3BzLnVybH0gdGl0bGU9e3RoaXMucHJvcHN9IC8+XG4gICAgICAgIDxFbXBsb3llZUNhcmQgLz5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+IHtgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgICAgICAgICAgZm9udDogMXJlbSBtZW5sbztcbiAgICAgICAgICAgIGNvbG9yOiAjZnNmZjtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59Il19 */\n/*@ sourceURL=pages/employee.js?entry */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2VtcGxveWVlLmpzIl0sIm5hbWVzIjpbIkVtcGxveWVlQ2FyZCIsIkhlYWRlciIsImF4aW9zIiwic2hhcGVFbXBsb3llZXMiLCJidWlsZFRyZWUiLCJwcm9wcyIsInVybCIsInJlcSIsImNvbnNvbGUiLCJsb2ciLCJkYiIsIm1vZGVsIiwiZmluZCIsImRhdGEiLCJlbXBsb3llZXMiLCJ0cmVlRGF0YSIsImlkIiwiZ2V0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFTLEFBQXNCOztBQUMvQixBQUFTLEFBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBcUJqQixBQUNQOzZCQUNJLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQyxrQ0FBTyxLQUFLLEtBQUEsQUFBSyxNQUFsQixBQUF3QixLQUFLLE9BQU8sS0FBcEMsQUFBeUM7b0JBQXpDO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLEFBQUM7O29CQUFEO3NCQUZGLEFBRUU7QUFBQTtBQUFBO2lCQUZGO2FBREosQUFDSSxBQWVIO0FBZkc7Ozs7OztZLEFBcEI0QixXQUFBLEE7Ozs7Ozs7O3FCQUMxQixBOzs7QUFDRjs7d0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDSjtBLHFCQUFPLEEsSSxBQUFQOzt1QkFDVyxHQUFBLEFBQUcsTUFBSCxBQUFTLFlBQVQsQUFBcUIsSyxBQUFyQixBQUEwQjs7bUJBQXZDO0EsaUNBQ0E7QSw2QkFBWSxvQyxBQUFBLEFBQWUsQUFDakM7QUFDTTs7QSw0QkFBVyx3QkFBVSxXQUFWLEFBQVUsQUFBVSxJQUFwQixBQUF3QixBQUN6QyxBOzt3QkFBQSxBQUFRLElBQUksVUFBWixBQUFxQjtpREFDZCxFQUFFLFVBQUYsQTs7bUJBRVQ7d0JBQUEsQUFBUSxJQUFSLEFBQVk7O3VCQUNPLGdCQUFBLEFBQU0sSUFBTixBQUFVLEE7O21CQUF2QjtBLGdDQUNBO0EsNEJBQVksb0NBQUEsQUFBZSxBLEFBQzNCO0EsMkJBQVcsd0JBQVUsVUFBVixBQUFVLEFBQVUsSUFBcEIsQUFBd0IsV0FBeEIsQUFBbUMsQSxBQUNwRDs7d0JBQUEsQUFBUSxJQUFSLEFBQVk7aURBQ0wsRUFBRSxVQUFGLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFqQmtCLGdCQUFNLEEiLCJmaWxlIjoiZW1wbG95ZWUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUifQ==