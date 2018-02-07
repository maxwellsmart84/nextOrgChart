import EmployeeCard from '../components/EmployeeCard';
import Header from '../components/Header';
import axios from 'axios';
import { shapeEmployeesOut, shapeEmployeeOut } from '../api/shapers/employeeShaper';
import { buildTree } from '../api/utility';

const apiUrl = 'http://localhost:3000/api'

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
      return { employee, supervisor };
    }
    let supervisor = null;
    const employeeId = query.id;
    const { data } = await axios.get(`${apiUrl}/employee/${employeeId}`);
    if (data && data.supervisorId !== null) {
      supervisor = await axios.get(`${apiUrl}/employee/${data.supervisorId}`);
    }
    const employee = data;
    console.log('CLIENT GRAB', employee);
    return { employee, supervisor };
  }

  // handleSubmit = fields => {

  // }

render() {
  return (
      <div>
        <Header url={this.props.url} title={this.props.employee.name} />
        <EmployeeCard url={this.props.url} name={this.props.employee.name} rank={this.props.employee.rank} supervisor={this.props.supervisor || undefined} />
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