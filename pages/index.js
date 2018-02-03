import Link from 'next/link';
import Head from 'next/head';
import Tree from 'react-d3-tree';
import NoSSR from 'react-no-ssr';
import axios from 'axios';

import Layout from '../components/Layout'


const myTreeData = [
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
      <Layout url={this.props.url} title={this.props}>
        <NoSSR>
          <Tree />
        </NoSSR>
      </Layout>
    )
  }
}

