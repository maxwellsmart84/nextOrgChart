import EmployeeCard from '../components/EmployeeCard';
import Header from '../components/Header';
import axios from 'axios';
import { shapeEmployeesOut, shapeEmployeeOut } from '../api/shapers/employeeShaper';
import { buildTree } from '../api/utility';
import Tree from '../components/Tree'

const apiUrl = '/api'

export default class extends React.Component {
  static async getInitialProps ({ req, query }) {
    if (req) {
      let supervisor =null;
      let treeData = null;
      const { db } = req;

      const employeeId = query.id;
      const employeeData = await db.model('Employee').findById(employeeId);
      const employee = shapeEmployeeOut(employeeData);

      const workerData = await db.model('Employee').find({ supervisorId: employee.id });
      const workers = shapeEmployeesOut(workerData);

      if (workerData.length !== 0) {
        const rawData = [employee, ...workers]
        treeData = buildTree(rawData)[0]
        console.log(treeData)
      }

      if (employee && employee.supervisorId !== 'None') {
        // the employee's supervisor feteched from above
        const superData = await db.model('Employee').findById(employee.supervisorId);
        supervisor = shapeEmployeeOut(superData);
      }
      return { employee, treeData, supervisor };
    }
    let supervisor = null;
    let treeData = null;

    const employeeId = query.id;
    const { data } = await axios.get(`${apiUrl}/employee/${employeeId}`);
    const employee = data;

    const workerData = await axios.get(`${apiUrl}/employee/workers/${employeeId}`)
    const workers = workerData.data;

    if (workers.length !== 0) {
      const rawData = [employee, ...workers]
      treeData = buildTree(rawData)[0]
    }

    if (employee && employee.supervisorId !== 'None') {
      const superData = await axios.get(`${apiUrl}/employee/${employee.supervisorId}`);
      supervisor = superData.data;
    }
    return { employee, treeData, supervisor };
  }


render() {
  console.log(this.props.treeData);
  return (
      <div>
        <Header url={this.props.url} title={this.props.employee.name} />
        <div id="employeeContainer">
          <div className="left">
            <div id="form">
              <EmployeeCard url={this.props.url} name={this.props.employee.name} title={this.props.employee.title} rank={this.props.employee.rank} supervisor={this.props.supervisor || undefined} />
            </div>
          </div>
          {this.props.treeData &&
          <div className="right">
            <div id="tree">
              <Tree url={this.props.url} data={this.props.treeData} />
            </div>
          </div>
          }
        </div>
        <style jsx global> {`
          #employeeContainer {
            width:100%;
            display: block;
          }
          .left{
            width: 50%;
            float: left;
          }
          .right {
            width: 50%;
            float: right;
          }
          #form {
            width: 60%;
            padding-left: 15%;
          }
          #tree {
            padding-top: 5%;
            width: 100%;
            float: right;
            margin-right: 10%;
          }
          body {
            background: #FFF;
            font-size: 1rem;
            font-family: menlo, Helvetica
            color: #fsff;
            margin: 0;
            padding: 0;
          }
        `}
        </style>
      </div>
    )
  }
}