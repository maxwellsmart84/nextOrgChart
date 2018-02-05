import Link from 'next/link';
import Head from 'next/head';
import EmployeeLink from './EmployeeLink';
import NavLink from './NavLink';

function Header(props) {
  <div>
    <Head>
      <title>{props.title}</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width'></meta>
      <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'/>
    </Head>
    <style jsx global>{`
      font: menlo;
    `}
    </style>
  </div>
  return props.url.asPath === '/' ? <NavLink /> : <EmployeeLink />
}

export default Header
