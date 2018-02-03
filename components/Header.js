import Link from 'next/link';
import EmployeeLink from './EmployeeLink';
import NavLink from './NavLink';


function Header(props) {
  console.log(props)
  return props.url.asPath === '/' ? <NavLink /> : <EmployeeLink />
}

export default Header
