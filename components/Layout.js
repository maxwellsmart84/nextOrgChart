import Header from './Header';
import Head from 'next/head'



const Layout = (props) => (
  <div>
    <Head>
      <title>{props.title}</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width'></meta>
    </Head>
      <Header url={props.url}>
        {props.children}
      </Header>
  </div>
)

export default Layout