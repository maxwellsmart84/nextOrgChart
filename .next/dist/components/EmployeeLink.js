'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/components/EmployeeLink.js';


var EmployeeLink = function EmployeeLink(props) {
  return _react2.default.createElement('div', {
    className: 'jsx-1904842371',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement('ul', {
    className: 'jsx-1904842371',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('li', {
    className: 'jsx-1904842371',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('a', {
    className: 'jsx-1904842371',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, 'Back'))), _react2.default.createElement('li', {
    className: 'jsx-1904842371',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_link2.default, { href: '/employee?id=' + props.supervisorId, __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('a', {
    className: 'jsx-1904842371',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, 'Supervisor')))), _react2.default.createElement(_style2.default, {
    styleId: '1904842371',
    css: 'a.jsx-1904842371{color:white;text-decoration:none;}ul.jsx-1904842371{width:40%;list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}li.jsx-1904842371{-webkit-flex:1;-ms-flex:1;flex:1;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#search.jsx-1904842371{background-color:gray;}div.jsx-1904842371{width:100%;background-color:black;height:2em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVMaW5rLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCZ0IsQUFHcUIsQUFJRixBQVFWLEFBR3NCLEFBR1gsVUFiSyxDQWNPLENBbEJGLFVBZXZCLElBVmUsT0FKZixBQVdELENBT2MsV0FDRSx1REFkTSxtQkFlckIsT0FUQSxtRUFMNkIseUdBQzdCIiwiZmlsZSI6ImNvbXBvbmVudHMvRW1wbG95ZWVMaW5rLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IEVtcGxveWVlTGluayA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8dWw+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgIDxhPkJhY2s8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZW1wbG95ZWU/aWQ9JHtwcm9wcy5zdXBlcnZpc29ySWR9YH0+XHJcbiAgICAgICAgICAgIDxhPlN1cGVydmlzb3I8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICBhIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIHVsIHtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgfVxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgZmxleDogMVxyXG4gICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlclxyXG4gICAgICB9XHJcbiAgICAgICNzZWFyY2gge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICAgIH1cclxuICAgICAgZGl2IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICBoZWlnaHQ6IDJlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB9XHJcbiAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1wbG95ZWVMaW5rIl19 */\n/*@ sourceURL=components/EmployeeLink.js */'
  }));
};

exports.default = EmployeeLink;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVMaW5rLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJFbXBsb3llZUxpbmsiLCJwcm9wcyIsInN1cGVydmlzb3JJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLGVBQWUsU0FBZixBQUFlLGFBQUEsQUFBQyxPQUFEO3lCQUNuQixjQUFBO2VBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsY0FBQTtlQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBO2VBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLEFBQUMsZ0NBQUssTUFBTixBQUFXO2dCQUFYO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBO2VBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUhOLEFBQ0UsQUFDRSxBQUNFLEFBR0YsMkJBQUEsY0FBQTtlQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxBQUFDLGdDQUFLLHdCQUFzQixNQUE1QixBQUFrQztnQkFBbEM7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBVFYsQUFDRSxBQU1JLEFBQ0UsQUFDRTthQVRWO1NBRG1CLEFBQ25CO0FBQUE7QUFERixBQTRDQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJFbXBsb3llZUxpbmsuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUifQ==