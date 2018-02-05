import EmployeeNode from './EmployeeNode';
import OrgChart from 'react-orgchart';


const Tree = (props) => (
  <div>
    <OrgChart tree={props.data} NodeComponent={ EmployeeNode }/>
    <style jsx global> {`
      .reactOrgChart {
        margin: 2px;
      }

      .reactOrgChart .orgNodeChildGroup .node {
          border: solid 1px #000000;
          display: inline-block;
          padding: 4px;
          width: 100px;
      }

      .reactOrgChart .orgNodeChildGroup .nodeCell {
          text-align: center;
      }

      .reactOrgChart .orgNodeChildGroup .nodeGroupCell {
          vertical-align: top;
      }

      .reactOrgChart .orgNodeChildGroup .nodeGroupLineVerticalMiddle {
          height: 25px;
          width: 50%;
          border-right: 2px solid #000;
      }

      .reactOrgChart .nodeLineBorderTop {
          border-top: solid 2px #000;
      }

      .reactOrgChart table {
          border-collapse: collapse;
          border: none;
          margin: 0 auto;
      }

      .reactOrgChart td {
          padding: 0;
      }

      .reactOrgChart table.nodeLineTable {
          width: 100%;
      }

      .reactOrgChart table td.nodeCell {
          width: 50%;
      }
    `}
    </style>
  </div>
)

export default Tree;