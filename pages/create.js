import EmployeeForm from '../components/EmployeeForm';
import Header from '../components/Header';
import axios from 'axios';
import { shapeEmployeesOut, shapeEmployeeOut } from '../api/shapers/employeeShaper';
import { buildTree } from '../api/utility';


const apiUrl = '/api'

export default class extends React.Component {
  static async getInitialProps({ req, query }) {
    if (req) {
      console.log('SERVER GET EMP PAGE');
      const { db } = req;
      const supervisorId = query.id;
      const data = await db.model('Employee').findById(supervisorId);
      const supervisor = shapeEmployeeOut(data);
      return { supervisor };
    }
    const supervisorId = query.id;
    const { data } = await axios.get(`${apiUrl}/employee/${supervisorId}`);
    const supervisor = data;
    return { supervisor };
  }
  render() {
    return (
      <div>
        <Header url={this.props.url} title={this.props.supervisor.name} />
        <EmployeeForm supervisor={this.props.supervisor} />
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