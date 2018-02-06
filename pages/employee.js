import EmployeeCard from '../components/EmployeeCard';
import Header from '../components/Header';
import axios from 'axios';
import { shapeEmployees, shapeEmployee } from '../api/shapers/employeeShaper';
import { buildTree } from '../api/utility';

export default class extends React.Component {
  static async getInitialProps ({ req, query }) {
    if (req) {
      console.log('SERVER GET EMP PAGE');
      const { db } = req;
      const employeeId = query.id;
      const data = await db.model('Employee').findById(employeeId);
      const employee = shapeEmployee(data);
      //TODO: need to find the null supervisorId not use index 0
      // const treeData = buildTree(employee, employees);
      console.log('EMPLOYEE SERVER', employee)
      return { employee };
    }
    const employeeId = query.id;
    const { data } = await axios.get(`http://localhost:3000/api/employee?id=${employeeId}`);
    const employee = data[0];
    return { employee };
  }
render() {
  return (
      <div>
        <Header url={this.props.url} title={this.props.employee.name} />
        <EmployeeCard name={this.props.employee.name}/>
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