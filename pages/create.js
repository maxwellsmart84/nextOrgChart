import EmployeeForm from '../components/EmployeeForm';
import Header from '../components/Header';
import axios from 'axios';
import { shapeEmployeesOut, shapeEmployeeOut } from '../api/shapers/employeeShaper';
import { buildTree } from '../api/utility';


const apiUrl = '/api'

export default class extends React.Component {
  static async getInitialProps({ req, query }) {
    if (req) {
      const { db } = req;
      const employeeId = query.id;
      const employee = await db.model('Employee').findById(employeeId);
      const supervisor = shapeEmployeeOut(data);
      return { employee };
    }
    const employeeId = query.id;
    const { data } = await axios.get(`${apiUrl}/employee/${employeeId}`);
    const employee = data;
    return { employee };
  }
  render() {
    return (
      <div>
        <Header url={this.props.url} title={this.props.employee.name} />
        <EmployeeForm employee={this.props.employee} />
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