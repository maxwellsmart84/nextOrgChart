import Link from 'next/link';


const EmployeeNode = ({node}) => {
  return (
    <div>
      <Link href={`/employee?id=${node.id}`}>
        <a id="name">{node.name}</a>
      </Link>
      <Link href={`/create?id=${node.id}`}>
        <a id="plus">&#43;</a>
      </Link>
    <style jsx>{`
    a {
      text-decoration: none;
      color: black;
    }
    #name:hover {
      color: red;
    }
    #plus {
      color: white;
      font-size: 1.5rem;
    }
    #plus:hover {
      color:limegreen
    }
  `}</style>
  </div>
  );
}

export default EmployeeNode;