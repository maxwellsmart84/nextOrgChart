import EmployeeLink from './EmployeeLink';


const EmployeeCard = (props) => (
  <div>
      <h1>{props.name}</h1>
      <h2>{props.title}</h2><h2>{props.rank}</h2>
      <h3>{props.supervisorName}</h3>
  </div>
)

export default EmployeeCard;