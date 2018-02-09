import Link from 'next/link';

// I removed this at the last minute but main page nav will go here
const NavLink = (props) => (
  <div>
    <ul>
      {/* <li>
        <Link as='/csv' href={`/csv`}>
          <a></a>
        </Link>
      </li> */}
    </ul>
    <style jsx>{`
      a {
        color: white;
        text-decoration: none;
        font-size: 1.3em;
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
      a:hover {
        color:black
        font-weight: bold
      }
      div {
        width: 100%;
        background-color: #79589F;
        height: 2em;
        display: flex;
      }
    `}</style>
  </div>
)

export default NavLink