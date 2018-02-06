import EmployeeCard from '../components/EmployeeCard';
import Header from '../components/Header';
import axios from 'axios';
import { shapeEmployees } from '../api/shapers/employeeShaper';
import { buildTree } from '../api/utility';

export default class extends React.Component {
  static async getInitialProps ({ query, db }) {
    if (req) {
      console.log('SERVER GET');
      const { db } = req;
      const data = await db.model('Employee').find({});
      const employees = shapeEmployees(data);
      //TODO: need to find the null supervisorId not use index 0
      const treeData = buildTree(employees[0], employees);
      console.log(treeData.id);
      return { treeData };
    }
    console.log('CLIENT GET')
    const data = await axios.get(`http://localhost/api/employees?id=${query.id}`);
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