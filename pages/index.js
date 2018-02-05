import Link from 'next/link';
import axios from 'axios';
import Tree from 'react-tree-graph';
import Header from '../components/Header';
import { shapeEmployees } from '../api/shapers/employeeShaper';



const data = {
  name: 'Top Level',
  children: [
    {
      name: 'Level 2: A',
    },
    {
      name: 'Level 2: B',
    },
  ],
}


export default class extends React.Component {
  static async getInitialProps({ req }) {
    if (req) {
      const { db } = req;
      const employees = await db.model('Employee').find({});
      return shapeEmployees(employees);
    }
    const { employees } = await axios.get('http://localhost/api/employees');
    console.log('client get', employees);
    console.log('hitting API', employees);
    return { employees };
  }
  render() {
    return (
      <div>
        <Header url={this.props.url} title={this.props} />
          <Tree data={data} height={400} width={400}/>
      </div>
    )
  }
}

