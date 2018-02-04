import Link from 'next/link';
import axios from 'axios';
import Tree from 'react-tree-graph';
import Header from '../components/Header';



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
  // static async getInitialProps() {

  //   // const res = await axios.get('')
  //   return;
  // }
  render() {
    return (
      <div>
        <Header url={this.props.url} title={this.props} />
          <Tree data={data} height={400} width={400}/>
      </div>
    )
  }
}

