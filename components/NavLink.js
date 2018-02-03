import Link from 'next/link';


const NavLink = (props) => (
  <ul>
    <li>
      <Link as='home' href='/'>
        <a>Home</a>
      </Link>
    </li>
    <li>
      <Link as='/csv' href={`/csv`}>
        <a>CSV Import</a>
      </Link>
    </li>
    <li>
      <Link as='/logout' href={`/logout`}>
        <a>Logout</a>
      </Link>
    </li>
  </ul>
)

export default NavLink