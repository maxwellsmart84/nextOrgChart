'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _EmployeeNode = require('./EmployeeNode');

var _EmployeeNode2 = _interopRequireDefault(_EmployeeNode);

var _reactOrgchart = require('react-orgchart');

var _reactOrgchart2 = _interopRequireDefault(_reactOrgchart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/components/Tree.js';


var Tree = function Tree(props) {
    return _react2.default.createElement('div', {
        className: 'jsx-3462170081',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement(_reactOrgchart2.default, { tree: props.data, NodeComponent: _EmployeeNode2.default, __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }), _react2.default.createElement(_style2.default, {
        styleId: '3462170081',
        css: '.reactOrgChart{margin:2px;}.reactOrgChart .orgNodeChildGroup .node{border:solid 1px #000000;display:inline-block;padding:4px;width:100px;}.reactOrgChart .orgNodeChildGroup .nodeCell{text-align:center;}.reactOrgChart .orgNodeChildGroup .nodeGroupCell{vertical-align:top;}.reactOrgChart .orgNodeChildGroup .nodeGroupLineVerticalMiddle{height:25px;width:50%;border-right:2px solid #000;}.reactOrgChart .nodeLineBorderTop{border-top:solid 2px #000;}.reactOrgChart table{border-collapse:collapse;border:none;margin:0 auto;}.reactOrgChart td{padding:0;}.reactOrgChart table.nodeLineTable{width:100%;}.reactOrgChart table td.nodeCell{width:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVHJlZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPd0IsQUFHb0IsQUFJZ0IsQUFPUCxBQUlDLEFBSVAsQUFNYyxBQUlELEFBTWYsQUFJQyxBQUlELFVBUGQsQUFRQSxDQTNDQSxBQXVDQSxDQXBCYyxNQVJkLENBSUEsR0FLZ0MsR0FoQlAsQUF5QlQsQ0FKaEIsV0FLa0IsU0F6QkYsSUFnQmhCLENBVUEsT0F6QmdCLFlBQ2hCIiwiZmlsZSI6ImNvbXBvbmVudHMvVHJlZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF4d2VsbGtyYXVzZS9Eb2N1bWVudHMvcHJvamVjdHMvYXRsYXRsRXZhbC9vcmdDaGFydFJlYWN0Tm9kZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFbXBsb3llZU5vZGUgZnJvbSAnLi9FbXBsb3llZU5vZGUnO1xuaW1wb3J0IE9yZ0NoYXJ0IGZyb20gJ3JlYWN0LW9yZ2NoYXJ0JztcblxuXG5jb25zdCBUcmVlID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPE9yZ0NoYXJ0IHRyZWU9e3Byb3BzLmRhdGF9IE5vZGVDb21wb25lbnQ9eyBFbXBsb3llZU5vZGUgfS8+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+IHtgXG4gICAgICAucmVhY3RPcmdDaGFydCB7XG4gICAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgfVxuXG4gICAgICAucmVhY3RPcmdDaGFydCAub3JnTm9kZUNoaWxkR3JvdXAgLm5vZGUge1xuICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICMwMDAwMDA7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICB9XG5cbiAgICAgIC5yZWFjdE9yZ0NoYXJ0IC5vcmdOb2RlQ2hpbGRHcm91cCAubm9kZUNlbGwge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLnJlYWN0T3JnQ2hhcnQgLm9yZ05vZGVDaGlsZEdyb3VwIC5ub2RlR3JvdXBDZWxsIHtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgfVxuXG4gICAgICAucmVhY3RPcmdDaGFydCAub3JnTm9kZUNoaWxkR3JvdXAgLm5vZGVHcm91cExpbmVWZXJ0aWNhbE1pZGRsZSB7XG4gICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzAwMDtcbiAgICAgIH1cblxuICAgICAgLnJlYWN0T3JnQ2hhcnQgLm5vZGVMaW5lQm9yZGVyVG9wIHtcbiAgICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAycHggIzAwMDtcbiAgICAgIH1cblxuICAgICAgLnJlYWN0T3JnQ2hhcnQgdGFibGUge1xuICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgfVxuXG4gICAgICAucmVhY3RPcmdDaGFydCB0ZCB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgLnJlYWN0T3JnQ2hhcnQgdGFibGUubm9kZUxpbmVUYWJsZSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIC5yZWFjdE9yZ0NoYXJ0IHRhYmxlIHRkLm5vZGVDZWxsIHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgfVxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFRyZWU7Il19 */\n/*@ sourceURL=components/Tree.js */'
    }));
};

exports.default = Tree;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVHJlZS5qcyJdLCJuYW1lcyI6WyJFbXBsb3llZU5vZGUiLCJPcmdDaGFydCIsIlRyZWUiLCJwcm9wcyIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPOzs7Ozs7Ozs7QUFHUCxJQUFNLE9BQU8sU0FBUCxBQUFPLEtBQUEsQUFBQyxPQUFEOzJCQUNYLGNBQUE7bUJBQUE7O3NCQUFBO3dCQUFBLEFBQ0U7QUFERjtBQUFBLEtBQUEsa0JBQ0UsQUFBQyx5Q0FBUyxNQUFNLE1BQWhCLEFBQXNCLE1BQXRCLEFBQTRCLEFBQWdCO3NCQUE1Qzt3QkFERixBQUNFO0FBQUE7O2lCQURGO2FBRFcsQUFDWDtBQUFBO0FBREYsQUF1REE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiVHJlZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF4d2VsbGtyYXVzZS9Eb2N1bWVudHMvcHJvamVjdHMvYXRsYXRsRXZhbC9vcmdDaGFydFJlYWN0Tm9kZSJ9