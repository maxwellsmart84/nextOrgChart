import Link from 'next/link';


const EmployeeNode = ({node}) => {
  return (
      <div>
        <Link href={`/create?id=${node.id}`}>
          <a id="plus">&#43;</a>
        </Link>
        <Link href={`/employee?id=${node.id}`}>
          <a id="name">{node.name}</a>
        </Link>
        <span id='rank'>{node.rank}</span>
    <style jsx>{`
    #rank {
      background: #cccccc;
      border-radius: 0.8em;
      -moz-border-radius: 0.8em;
      -webkit-border-radius: 0.8em;
      color: #ffffff;
      display: inline-block;
      font-weight: bold;
      line-height: 1.6em;
      margin-right: 5px;
      text-align: center;
      width: 1.3em;
    }
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