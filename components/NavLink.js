import Link from 'next/link';

const NavLink = (props) => (
  <div>
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
    <input id='search' title="search"></input>
    <style jsx>{`
      a {
        flex: 1;
        color: white;
        text-decoration: none;
      }
      ul {
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
      li {
        flex: 1
        align-items:center
      }
      #search {
        flex: 1
        background-color: gray;
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