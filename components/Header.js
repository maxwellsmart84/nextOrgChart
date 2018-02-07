import Link from 'next/link';
import Head from 'next/head';
import EmployeeLink from './EmployeeLink';
import NavLink from './NavLink';

function Header(props) {
  <div>
    <Head>
      <title>{props.title}</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width'></meta>
    </Head>
  </div>
  return props.url.asPath === '/' ? <NavLink /> : <EmployeeLink url={props.url} />
}

export default Header
