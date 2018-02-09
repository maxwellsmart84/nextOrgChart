import Link from 'next/link';


const EmployeeNodeStatic = ({ node }) => {
  return (
    <div>
      <Link href={`/create?id=${node.id}`}>
        <a id="plus">&#43;</a>
      </Link>
      <span id="name">{node.name}</span>
      <span id={node.rank} className="rank">{node.rank}</span>
      <div>
        <span id="title">{node.title}</span>
      </div>
      <style jsx>{`
    .rank {
      background: black;
      border-radius: 0.8em;
      -moz-border-radius: 0.8em;
      -webkit-border-radius: 0.8em;
      color: #ffffff;
      display: inline-block;
      font-weight: bold;
      line-height: 1.6em;
      text-align: center;
      width: 1.3em;
      font-weight: bold;
    }
    a {
      text-decoration: none;
      color: black;
      font-weight: bold;
    }
    span {
      color: black;
    }
    #name {
      padding-left: 5px;
      padding-right: 5px;
      font-weight: bold;
    }
    #plus {
      color: #cccccc;
      font-size: 1.5rem;
      text-align: center;
    }
    #plus:hover {
      color:limegreen
    }
    #title {
      font-size:.8rem
    }
  `}</style>
    </div>
  );
}

export default EmployeeNodeStatic;