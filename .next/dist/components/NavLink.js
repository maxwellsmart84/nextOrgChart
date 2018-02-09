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

var _jsxFileName = '/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/components/NavLink.js';


// I removed this at the last minute but main page nav will go here
var NavLink = function NavLink(props) {
  return _react2.default.createElement('div', {
    className: 'jsx-238771655',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('ul', {
    className: 'jsx-238771655',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: '238771655',
    css: 'a.jsx-238771655{color:white;text-decoration:none;font-size:1.3em;}ul.jsx-238771655{width:40%;list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}li.jsx-238771655{-webkit-flex:1;-ms-flex:1;flex:1;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}a.jsx-238771655:hover{color:black;font-weight:bold;}div.jsx-238771655{width:100%;background-color:#79589F;height:2em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2TGluay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZZ0IsQUFHcUIsQUFLRixBQVFWLEFBSUEsQUFHVyxVQWRLLENBZVMsQ0FwQkosQUFpQnhCLGNBWGdCLEdBV2YsSUFoQmtCLEFBWW5CLEdBUWMsV0FDRSxFQXBCZixtREFLcUIscUJBZ0JyQixLQVZBLG1FQUw2Qix5R0FDN0IiLCJmaWxlIjoiY29tcG9uZW50cy9OYXZMaW5rLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbi8vIEkgcmVtb3ZlZCB0aGlzIGF0IHRoZSBsYXN0IG1pbnV0ZSBidXQgbWFpbiBwYWdlIG5hdiB3aWxsIGdvIGhlcmVcclxuY29uc3QgTmF2TGluayA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8dWw+XHJcbiAgICAgIHsvKiA8bGk+XHJcbiAgICAgICAgPExpbmsgYXM9Jy9jc3YnIGhyZWY9e2AvY3N2YH0+XHJcbiAgICAgICAgICA8YT48L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2xpPiAqL31cclxuICAgIDwvdWw+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgfVxyXG4gICAgICB1bCB7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIH1cclxuICAgICAgbGkge1xyXG4gICAgICAgIGZsZXg6IDFcclxuICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXJcclxuICAgICAgfVxyXG4gICAgICBhOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjpibGFja1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkXHJcbiAgICAgIH1cclxuICAgICAgZGl2IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk1ODlGO1xyXG4gICAgICAgIGhlaWdodDogMmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2TGluayJdfQ== */\n/*@ sourceURL=components/NavLink.js */'
  }));
};

exports.default = NavLink;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2TGluay5qcyJdLCJuYW1lcyI6WyJMaW5rIiwiTmF2TGluayIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7Ozs7OztBQUVQO0FBQ0EsSUFBTSxVQUFVLFNBQVYsQUFBVSxRQUFBLEFBQUMsT0FBRDt5QkFDZCxjQUFBO2VBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUE7ZUFDRTs7Z0JBQUE7a0JBREYsQUFDRTtBQUFBO0FBQUE7YUFERjtTQURjLEFBQ2Q7QUFBQTtBQURGLEFBd0NBOztrQkFBQSxBQUFlIiwiZmlsZSI6Ik5hdkxpbmsuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUifQ==