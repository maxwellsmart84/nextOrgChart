import EmployeeCard from '../components/EmployeeCard';
import Header from '../components/Header';
import axios from 'axios';
import { shapeEmployeesOut, shapeEmployeeOut } from '../api/shapers/employeeShaper';
import { buildTree } from '../api/utility';

export default class extends React.Component {
  static async getInitialProps ({ req, query }) {
    if (req) {
      console.log('SERVER GET EMP PAGE');
      const { db } = req;
      const employeeId = query.id;
      const data = await db.model('Employee').findById(employeeId);
      let supervisor = null;
      console.log(data);
      if (data && data.supervisorId !== null) {
        supervisor = await db.model('Employee').findById(data.supervisorId);
      }
      const employee = shapeEmployeeOut(data);
      //TODO: need to find the null supervisorId not use index 0
      // const treeData = buildTree(employee, employees);
      console.log('EMPLOYEE SERVER', employee)
      return { employee, supervisor };
    }
    const employeeId = query.id;
    const { data } = await axios.get(`http://localhost:3000/api/employee?id=${employeeId}`);
    const employee = data[0];
    return { employee, supervisor };
  }

  // handleSubmit = fields => {

  // }

render() {
  return (
      <div>
        <Header url={this.props.url} title={this.props.employee.name} />
        <EmployeeCard name={this.props.employee.name} rank={this.props.employee.rank} supervisor={this.props.supervisor || undefined} />
        <style jsx global> {`
          body {
            background: #FFF;
            font: 1rem menlo;
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