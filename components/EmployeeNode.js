import Link from 'next/link';


const EmployeeNode = ({node}) => {
  return (
    <div id='fml'>
      <Link as={`employee/${node.id}`} href={`/employee/${node.id}`}>
        <a>{node.name}</a>
      </Link>
      <p>{node.actror}</p>
      <p>{node.supervisorName}</p>
    <style jsx>{`
    a {
      text-decoration: none;
    }
  `}</style>
  </div>
  );
}

export default EmployeeNode;