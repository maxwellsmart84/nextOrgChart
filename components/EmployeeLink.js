import Link from 'next/link';

const EmployeeLink = (props) => (
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
)

export default EmployeeLink