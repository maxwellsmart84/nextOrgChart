import Link from 'next/link';

const EmployeeLink = (props) => (
  <div>
    <ul>
      <li>
        <Link href='/'>
          <a>Back</a>
        </Link>
      </li>
        <li>
          <Link href={`/employee?id=${props.supervisorId}`}>
            <a>Supervisor</a>
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
      #search {
        background-color: gray;
      }
      div {
        width: 100%;
        background-color: black;
        height: 2em;
        display: flex;
      }
    `}
    </style>
  </div>
)

export default EmployeeLink