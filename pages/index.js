import Link from 'next/link';
// import EmployeeNode from '../components/EmployeeNode';
import Header from '../components/Header';
// import Tree from 'react-tree-graph';
import axios from 'axios';
import Tree from '../components/Tree';
import OrgChart from 'react-orgchart';
import { shapeEmployeesOut } from '../api/shapers/employeeShaper';
import { buildTree } from '../api/utility';
import Router from 'next/router';

const apiUrl = 'http://localhost:3000/api'


const initechOrg = {
  id: '1',
  name: "Bill Lumbergh",
  actor: "Gary Cole",
  children: [
    {
      id: '2',
      name: "Peter Gibbons",
      actor: "Ron Livingston",
      children: [
        {
          id: '4',
          name: "And More!!",
          actor: "This is just to show how to build a complex tree with multiple levels of children. Enjoy!"
        }
      ]
    },
    {
      id: '5',
      name: "Milton Waddams",
      actor: "Stephen Root"
    },
    {
      id: '6',
      name: "Bob Slydell",
      actor: "John C. McGi..."
    },
  ]
};

// const EmployeeNode = ({ node }) => {
//   return (
//     <div>
//       <Link as={`employee/${node.name}`} href={`/employee/${node.id}`}>
//         <a>{node.name}</a>
//       </Link>
//       <p>{node.supervisorName}</p>
//     <style jsx>{`
//     a {
//       text-decoration: none;
//     }
//   `}</style>
//   </div>
//   );
// }



export default class extends React.Component {
  static async getInitialProps({ req }) {
    if (req) {
      console.log('SERVER');
      const { db } = req;
      const data = await db.model('Employee').find({});
      const employees = shapeEmployeesOut(data);
      //TODO: need to find the null supervisorId not use index 0
      const treeData = buildTree(employees[0], employees);
      return { treeData, employees };
    }
    const { data } = await axios.get(`${apiUrl}/employee`);
    const employees = [...data]
    const treeTop = employees.find((emp) => emp.supervisorId === null || emp.supervisorId === undefined )
    const treeData = buildTree(treeTop, employees);
    // console.log('TREE CLIENT', treeData);
    return { treeData, employees };
  }

  // async componentDidMount() {
  //   console.log(data)
  //   const data = await fetch('http://localhost/api/employees');
  //   const employees = shapeEmployees(data);
  //   const treeData = buildTree(employees[0], employees)[0];
  //   return { treeData, employees };
  // }
  render() {
    return (
      <div>
        <div>
          <Header url={this.props.url} title={this.props} />
        </div>
        <div id="tree">
          <Tree data={this.props.treeData} />
          {/* <Tree data={this.props.treeData} height={800} width={800} keyProp={} gProps={{ onClick: handleClick() }} svgProps={{transform: 'rotate(90)'}}/> */}
        </div>
      <style jsx global>{`
        #tree {
          padding-top: 20px
        }
        body {
          background: #FFF;
          font: 1rem menlo;
          color: #fsff;
          margin: 0;
          padding: 0;
        }
    `}</style>
      </div>
    )
  }
}

