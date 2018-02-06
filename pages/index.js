import Link from 'next/link';
import axios from 'axios';
// import EmployeeNode from '../components/EmployeeNode';
import Header from '../components/Header';
// import Tree from 'react-tree-graph';
import Tree from '../components/Tree';
import OrgChart from 'react-orgchart';
import { shapeEmployees } from '../api/shapers/employeeShaper';
import { buildTree } from '../api/utility';
import Router from 'next/router';



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
      const employees = shapeEmployees(data);
      //TODO: need to find the null supervisorId not use index 0
      const treeData = buildTree(employees[0], employees);
      console.log(treeData);
      return { treeData, employees };
    }
    const data = await axios.get('http://localhost/api/employees');
    const employees = shapeEmployees(data);
    const treeData = buildTree(employees[0], employees)[0];
    return { treeData, employees };
  }
  render() {
    console.log(this.props.employees)
    // const handleClick = (props) => {
    //   Router.push(`/employee?id=${this.props.employee.id}`, `/employee/${id}`);
    // }
    return (
      <div>
        <div>
          <Header url={this.props.url} title={this.props} />
        </div>
        <div>
          <Tree data={initechOrg} />
          {/* <Tree data={this.props.treeData} height={800} width={800} keyProp={} gProps={{ onClick: handleClick() }} svgProps={{transform: 'rotate(90)'}}/> */}
        </div>
      <style jsx global>{`
        body {
          background: #FFF;
          font: 1rem menlo;
          color: #fsff;
          margin: 0;
          padding: 0;
        }
        // .node circle {
        //   fill: white;
        //   stroke: black;
        // }
        // g text{
        //   transform: rotate(-90deg)
        // }
        // path.link {
        //   fill: none;
        //   stroke: black;
        // }

    `}</style>
      </div>
    )
  }
}

