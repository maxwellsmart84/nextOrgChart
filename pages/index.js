import Link from 'next/link';
import Head from 'next/head';
import Tree from 'react-d3-tree';
import axios from 'axios';

export default class extends React.Component {
  static async getInitialProps () {
    const res = await axios.get('')
  }
}

const Index = () => (
  <Layout>

  </Layout>
)

export default Index