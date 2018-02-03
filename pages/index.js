import Link from 'next/link';
import NoSSR from 'react-no-ssr';
import axios from 'axios';
import Tree from 'react-d3-tree';
import Header from '../components/Header';



const data = [
  {
    name: 'Top Level',
    attributes: {
      keyA: 'val A',
      keyB: 'val B',
      keyC: 'val C',
    },
    children: [
      {
        name: 'Level 2: A',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
      },
      {
        name: 'Level 2: B',
      },
    ],
  },
];

const treeStyle = {
  width: '50em',
  height: '20em'
}

export default class extends React.Component {
  // static async getInitialProps() {

  //   // const res = await axios.get('')
  //   return;
  // }
  render() {
    return (
      <div>
        <Header url={this.props.url} title={this.props} />
        <NoSSR>
          <Tree data={data} />
        </NoSSR>
      </div>
    )
  }
}

