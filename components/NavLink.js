import Link from 'next/link';

const NavLink = (props) => (
  <div>
    <ul>
      <li>
        <Link href='/'>
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
    <style jsx>{`
      a {
        color: white;
        text-decoration: none;
      }
      ul {
        width: 40%;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
      li {
        flex: 1
        align-items:center
      }
      div {
        width: 100%;
        background-color: black;
        height: 2em;
        display: flex;
      }
    `}</style>
  </div>
)

export default NavLink