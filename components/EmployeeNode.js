import Link from 'next/link';


const EmployeeNode = ({node}) => {
  return (
    <div>
      <Link href={`/employee/${node.id}`}>
        <a>{node.name}</a>
      </Link>
    <style jsx>{`
    a {
      text-decoration: none;
    }
  `}</style>
  </div>
  );
}

export default EmployeeNode;