import EmployeeCard from '../components/EmployeeCard';
import Header from '../components/Header';
import axios from 'axios';
import { shapeEmployeesOut, shapeEmployeeOut } from '../api/shapers/employeeShaper';
import { buildTree } from '../api/utility';

const apiUrl = 'http://localhost:3000/api'

export default class extends React.Component {
  static async getInitialProps ({ req, query }) {
    if (req) {
      let supervisor = null;
      console.log('SERVER GET EMP PAGE');
      const { db } = req;
      const employeeId = query.id;
      const data = await db.model('Employee').findById(employeeId);
      const employee = shapeEmployeeOut(data);
      if (data && data.supervisorId !== null) {
        // the employee's supervisor feteched from above
        const superData = await db.model('Employee').findById(data.supervisorId);
        supervisor = shapeEmployeeOut(superData);
        return { employee, supervisor };
      }
      return { employee, supervisor };
    }
    let supervisor = null;
    const employeeId = query.id;
    const { data } = await axios.get(`${apiUrl}/employee/${employeeId}`);
    const employee = data;
    if (data && data.supervisorId) {
      const superData = await axios.get(`${apiUrl}/employee/${data.supervisorId}`);
      supervisor = superData.data;
      return { employee, supervisor };
    }
    return { employee, supervisor };
  }


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