import Link from 'next/link';
import axios from 'axios';
import EmployeeNode from '../components/EmployeeNode';
import Header from '../components/Header';
import Tree from 'react-tree-graph';
import { shapeEmployees } from '../api/shapers/employeeShaper';
import { buildTree } from '../api/utility';
import Router from 'next/router';



const initechOrg = {
  name: "Bill Lumbergh",
  gProps: {

  },
  children: [
    {
      name: "Peter Gibbons",
      children: [
        {
          name: "And More!!",
        }
      ]
    },
    {
      name: "Milton Waddams",
    },
    {
      name: "Bob Slydell",
    },
  ]
};

const handleClick = () => {
  Router.push('/employee');
}


export default class extends React.Component {
  static async getInitialProps({ req }) {
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
        <div>
          <Header url={this.props.url} title={this.props} />
        </div>
        <div>
          <Tree data={initechOrg} height={800} width={800} gProps={{ onClick: handleClick }} svgProps={{transform: 'rotate(90)'}}/>
        </div>
      <style jsx global>{`
        body {
          background: #FFF;
          font: 1rem menlo;
          color: #fsff;
          margin: 0;
          padding: 0;
        }
        .node circle {
          fill: white;
          stroke: black;
        }
        g text{
          transform: rotate(-90deg)
        }
        path.link {
          fill: none;
          stroke: black;
        }
    `}</style>
      </div>
    )
  }
}

