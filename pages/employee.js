import EmployeeCard from '../components/EmployeeCard';
import Header from '../components/Header';
import axios from 'axios';
import { shapeEmployees } from '../api/shapers/employeeShaper';
import { buildTree } from '../api/utility';

export default class extends React.Component {
  static async getInitialProps ({ req }) {
    if (req) {
      console.log('SERVER');
      const { db } = req;
      const data = await db.model('Employee').find({});
      const employees = shapeEmployees(data);
      //TODO: need to find the null supervisorId not use index 0
      const treeData = buildTree(employees[0], employees);
      console.log(treeData.id);
      return { treeData };
    }
    console.log('CLIENT GET')
    const data = await axios.get('http://localhost/api/employees');
    const employees = shapeEmployees(data);
    const treeData = buildTree(employees[0], employees)[0];
    console.log(treeData);
    return { treeData };
  }
render() {
  return (
      <div>
          <Header url={this.props.url} title={this.props} />
          <EmployeeCard />
      </div>
    )
  }
}