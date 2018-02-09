import Link from 'next/link';
// import EmployeeNode from '../components/EmployeeNode';
import Header from '../components/Header';
// import Tree from 'react-tree-graph';
import axios from 'axios';
import Tree from '../components/Tree';
import OrgChart from 'react-orgchart';
import { shapeEmployeesOut } from '../api/shapers/employeeShaper';
import { buildTree } from '../api/utility';
import Router from 'next/router';

const apiUrl = '/api'

export default class extends React.Component {
  static async getInitialProps({ req }) {
    if (req) {
      const { db } = req;
      const data = await db.model('Employee').find({});
      const employees = shapeEmployeesOut(data);
      const treeData = buildTree(employees)[0];
      return { treeData, employees };
    }
    const { data } = await axios.get(`${apiUrl}/employee`);
    const employees = [...data]
    const treeData = buildTree(employees)[0];
    return { treeData, employees };
  }

  render() {
    return (
      <div>
        <div>
          <Header url={this.props.url} title={this.props} />
        </div>
        <div id="tree">
          <Tree url={this.props.url} data={this.props.treeData} />
          {/* <Tree data={this.props.treeData} height={800} width={800} keyProp={} gProps={{ onClick: handleClick() }} svgProps={{transform: 'rotate(90)'}}/> */}
        </div>
      <style jsx global>{`
        #tree {
          padding-top: 20px
        }
        body {
          background: #FFF;
          font-size: 1rem;
          font-family: menlo, Helvetica
          color: #fsff;
          margin: 0;
          padding: 0;
        }
    `}</style>
      </div>
    )
  }
}

