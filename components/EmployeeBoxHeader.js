import Link from 'next/link'


const linkStyle = {
  marginRight: 15,
}
// figure out how to get rid of this and reuse header component
const EmployeeBoxHeader = (props) => (
  <div>
    <Link href="/">
      <a style={linkstyle}>Back</a>
    </Link>
     <Link ashref={`/employee?supervisorId=${props.supervisorId}`}>
        <a style={linkStyle}>Supervisor</a>
    </Link>
  </div>
)