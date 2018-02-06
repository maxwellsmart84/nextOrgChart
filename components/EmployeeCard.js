import { Component } from react;
import EmployeeLink from './EmployeeLink';


class EmployeeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: ''}
  }
}
  <div>
      <h1>{props.name}</h1>
      <h2>{props.title}</h2><h2>{props.rank}</h2>
      <h3>{props.supervisorName}</h3>
  </div>
)

export default EmployeeCard;