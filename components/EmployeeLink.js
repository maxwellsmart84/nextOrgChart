import Link from 'next/link';

const EmployeeLink = (props) => (
  <div>
    <ul>
      <li>
        <Link href='/'>
          <a>Back</a>
        </Link>
      </li>
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
      #search {
        background-color: gray;
      }
      div {
        width: 100%;
        background-color: #79589F;
        height: 2em;
        display: flex;
      }
      a:hover {
        color:black
        font-weight: bold
      }
    `}
    </style>
  </div>
)

export default EmployeeLink