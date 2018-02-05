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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _EmployeeNode = require('../components/EmployeeNode');

var _EmployeeNode2 = _interopRequireDefault(_EmployeeNode);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _reactTreeGraph = require('react-tree-graph');

var _reactTreeGraph2 = _interopRequireDefault(_reactTreeGraph);

var _employeeShaper = require('../api/shapers/employeeShaper');

var _utility = require('../api/utility');

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/pages/index.js?entry';


var initechOrg = {
  name: "Bill Lumbergh",
  gProps: {},
  children: [{
    name: "Peter Gibbons",
    children: [{
      name: "And More!!"
    }]
  }, {
    name: "Milton Waddams"
  }, {
    name: "Bob Slydell"
  }]
};

var handleClick = function handleClick() {
  _index2.default.push('/employee');
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
        className: 'jsx-3016298705',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-3016298705',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement(_Header2.default, { url: this.props.url, title: this.props, __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-3016298705',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement(_reactTreeGraph2.default, { data: initechOrg, height: 800, width: 800, gProps: { onClick: handleClick }, svgProps: { transform: 'rotate(90)' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      })), _react2.default.createElement(_style2.default, {
        styleId: '3016298705',
        css: 'body{background:#FFF;font:1rem menlo;color:#fsff;margin:0;padding:0;}.node circle{fill:white;stroke:black;}g text{-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);}path.link{fill:none;stroke:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1FeUIsQUFHMkIsQUFPTCxBQUtkLEFBRWEsVUFDRyxDQVBBLEtBUEcsT0FlbEIsQ0FQQSxRQVBjLFlBQ0gsU0FDQyxVQUNaLHdCQU9BIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgRW1wbG95ZWVOb2RlIGZyb20gJy4uL2NvbXBvbmVudHMvRW1wbG95ZWVOb2RlJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IFRyZWUgZnJvbSAncmVhY3QtdHJlZS1ncmFwaCc7XG5pbXBvcnQgeyBzaGFwZUVtcGxveWVlcyB9IGZyb20gJy4uL2FwaS9zaGFwZXJzL2VtcGxveWVlU2hhcGVyJztcbmltcG9ydCB7IGJ1aWxkVHJlZSB9IGZyb20gJy4uL2FwaS91dGlsaXR5JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5cblxuY29uc3QgaW5pdGVjaE9yZyA9IHtcbiAgbmFtZTogXCJCaWxsIEx1bWJlcmdoXCIsXG4gIGdQcm9wczoge1xuXG4gIH0sXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgbmFtZTogXCJQZXRlciBHaWJib25zXCIsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJBbmQgTW9yZSEhXCIsXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiTWlsdG9uIFdhZGRhbXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiQm9iIFNseWRlbGxcIixcbiAgICB9LFxuICBdXG59O1xuXG5jb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgUm91dGVyLnB1c2goJy9lbXBsb3llZScpO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSB9KSB7XG4gICAgaWYgKHJlcSkge1xuICAgICAgY29uc29sZS5sb2coJ1NFUlZFUicpO1xuICAgICAgY29uc3QgeyBkYiB9ID0gcmVxO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGRiLm1vZGVsKCdFbXBsb3llZScpLmZpbmQoe30pO1xuICAgICAgY29uc3QgZW1wbG95ZWVzID0gc2hhcGVFbXBsb3llZXMoZGF0YSk7XG4gICAgICAvL1RPRE86IG5lZWQgdG8gZmluZCB0aGUgbnVsbCBzdXBlcnZpc29ySWQgbm90IHVzZSBpbmRleCAwXG4gICAgICBjb25zdCB0cmVlRGF0YSA9IGJ1aWxkVHJlZShlbXBsb3llZXNbMF0sIGVtcGxveWVlcyk7XG4gICAgICBjb25zb2xlLmxvZyh0cmVlRGF0YS5pZCk7XG4gICAgICByZXR1cm4geyB0cmVlRGF0YSB9O1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnQ0xJRU5UIEdFVCcpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdC9hcGkvZW1wbG95ZWVzJyk7XG4gICAgY29uc3QgZW1wbG95ZWVzID0gc2hhcGVFbXBsb3llZXMoZGF0YSk7XG4gICAgY29uc3QgdHJlZURhdGEgPSBidWlsZFRyZWUoZW1wbG95ZWVzWzBdLCBlbXBsb3llZXMpWzBdO1xuICAgIGNvbnNvbGUubG9nKHRyZWVEYXRhKTtcbiAgICByZXR1cm4geyB0cmVlRGF0YSB9O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SGVhZGVyIHVybD17dGhpcy5wcm9wcy51cmx9IHRpdGxlPXt0aGlzLnByb3BzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8VHJlZSBkYXRhPXtpbml0ZWNoT3JnfSBoZWlnaHQ9ezgwMH0gd2lkdGg9ezgwMH0gZ1Byb3BzPXt7IG9uQ2xpY2s6IGhhbmRsZUNsaWNrIH19IHN2Z1Byb3BzPXt7dHJhbnNmb3JtOiAncm90YXRlKDkwKSd9fS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICAgICAgICBmb250OiAxcmVtIG1lbmxvO1xuICAgICAgICAgIGNvbG9yOiAjZnNmZjtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgICAubm9kZSBjaXJjbGUge1xuICAgICAgICAgIGZpbGw6IHdoaXRlO1xuICAgICAgICAgIHN0cm9rZTogYmxhY2s7XG4gICAgICAgIH1cbiAgICAgICAgZyB0ZXh0e1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZylcbiAgICAgICAgfVxuICAgICAgICBwYXRoLmxpbmsge1xuICAgICAgICAgIGZpbGw6IG5vbmU7XG4gICAgICAgICAgc3Ryb2tlOiBibGFjaztcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4iXX0= */\n/*@ sourceURL=pages/index.js?entry */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJheGlvcyIsIkVtcGxveWVlTm9kZSIsIkhlYWRlciIsIlRyZWUiLCJzaGFwZUVtcGxveWVlcyIsImJ1aWxkVHJlZSIsIlJvdXRlciIsImluaXRlY2hPcmciLCJuYW1lIiwiZ1Byb3BzIiwiY2hpbGRyZW4iLCJoYW5kbGVDbGljayIsInB1c2giLCJwcm9wcyIsInVybCIsIm9uQ2xpY2siLCJ0cmFuc2Zvcm0iLCJyZXEiLCJjb25zb2xlIiwibG9nIiwiZGIiLCJtb2RlbCIsImZpbmQiLCJkYXRhIiwiZW1wbG95ZWVzIiwidHJlZURhdGEiLCJpZCIsImdldCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFTLEFBQXNCOztBQUMvQixBQUFTLEFBQWlCOztBQUMxQixBQUFPOzs7Ozs7Ozs7QUFJUCxJQUFNO1FBQWEsQUFDWCxBQUNOO1VBRmlCLEFBRVQsQUFHUjs7VUFDRSxBQUNRLEFBQ047O1lBSE0sQUFDUixBQUVZLEFBQ1IsQUFDUTtBQURSLEFBQ0UsS0FGTTtBQUZaLEFBQ0UsR0FGTTtVQUFBLEFBU1IsQUFDUTtBQURSLEFBQ0U7VUFmTixBQUFtQixBQUtQLEFBWVIsQUFDUTtBQURSLEFBQ0U7QUFsQmEsQUFDakI7O0FBc0JGLElBQU0sY0FBYyxTQUFkLEFBQWMsY0FBTSxBQUN4QjtrQkFBQSxBQUFPLEtBQVAsQUFBWSxBQUNiO0FBRkQ7Ozs7Ozs7Ozs7Ozs7NkJBd0JXLEFBQ1A7NkJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLGtDQUFPLEtBQUssS0FBQSxBQUFLLE1BQWxCLEFBQXdCLEtBQUssT0FBTyxLQUFwQyxBQUF5QztvQkFBekM7c0JBRkosQUFDRSxBQUNFLEFBRUY7QUFGRTsyQkFFRixjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLDBDQUFLLE1BQU4sQUFBWSxZQUFZLFFBQXhCLEFBQWdDLEtBQUssT0FBckMsQUFBNEMsS0FBSyxRQUFRLEVBQUUsU0FBM0QsQUFBeUQsQUFBVyxlQUFlLFVBQVUsRUFBQyxXQUE5RixBQUE2RixBQUFZO29CQUF6RztzQkFMSixBQUlFLEFBQ0U7QUFBQTs7aUJBTEo7YUFERixBQUNFLEFBNkJIO0FBN0JHOzs7Ozs7WUFwQjJCLEEsVyxBQUFBOzs7Ozs7OztxQixBQUN6Qjs7O0FBQ0Y7O3dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ0o7QSxxQkFBTyxBLEksQUFBUDs7dUJBQ1csR0FBQSxBQUFHLE1BQUgsQUFBUyxZQUFULEFBQXFCLEtBQXJCLEEsQUFBMEI7O21CQUF2QztBLGlDQUNBO0EsNkJBQVksb0MsQUFBQSxBQUFlLEFBQ2pDO0FBQ007O0EsNEJBQVcsd0JBQVUsV0FBVixBQUFVLEFBQVUsSUFBcEIsQUFBd0IsQSxBQUN6Qzs7d0JBQUEsQUFBUSxJQUFJLFVBQVosQUFBcUI7aURBQ2QsRUFBRSxVQUFGLEE7O21CQUVUO3dCQUFBLEFBQVEsSUFBUixBQUFZOzt1QkFDTyxnQkFBQSxBQUFNLElBQU4sQUFBVSxBOzttQkFBdkI7QSxnQ0FDQTtBLDRCQUFZLG9DQUFBLEFBQWUsQSxBQUMzQjtBLDJCQUFXLHdCQUFVLFVBQVYsQUFBVSxBQUFVLElBQXBCLEFBQXdCLFdBQXhCLEEsQUFBbUMsQUFDcEQ7O3dCQUFBLEFBQVEsSUFBUixBQUFZO2lEQUNMLEVBQUUsVUFBRixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBakJrQixnQkFBTSxBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIn0=