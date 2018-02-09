import Link from 'next/link';
import Header from '../components/Header';
import axios from 'axios';
import Tree from '../components/Tree';
import EmployeeForm from '../components/EmployeeForm';
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
        {this.props.treeData &&
        <div id="tree">
          <Tree url={this.props.url} data={this.props.treeData} />
        </div>
        }
        {!this.props.treeData &&
        <div>
          <EmployeeForm employee={''} />
        </div>
        }
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

