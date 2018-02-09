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
      const employeeData = await db.model('Employee').findById(employeeId);
      const employee = shapeEmployeeOut(employeeData);
      return { employee };
    }
    const employeeId = query.id;
    console.log(query.id);
    const { data } = await axios.get(`${apiUrl}/employee/${employeeId}`);
    console.log('CLIENT DATA', data);
    const employee = data;
    return { employee };
  }
  render() {
    return (
      <div>
        <Header url={this.props.url} title={this.props.employee} />
        <EmployeeForm rank={this.props.employee.rank} name={this.props.employee.name} id={this.props.employee.id} supervisorId={this.props.employee.supervisorId} />
        <style jsx global> {`
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