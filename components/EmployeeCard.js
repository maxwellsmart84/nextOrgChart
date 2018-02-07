import { Component } from 'react';
import EmployeeLink from './EmployeeLink';
import axios from 'axios';


export default class EmployeeCard extends React.Component {
  constructor(props) {
    console.log(props)
    super(props);
    this.state = {
      name: '',
      rank: -1,
      supervisor: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  };

  handleSubmit = async (event) => {
    const { name, rank, supervisorId } = this.state;
    const data = await axios.patch(`http://localhost:3000:employees/?id=${this.props.id}`, { name, rank, supervisorId })
    event.preventDefault();
  }

  render() {
    return (
    <div id="formContainer">
      <form onSubmit={this.handleSubmit}>
        <label>
          <h2>Name:</h2>
          <h3>{this.props.name}</h3>
            <input name="name" placeholder={this.props.name} type="text" value={this.state.name} onChange={event => this.handleChange(event)} />
        </label>
        <label>
          <h2>Rank:</h2>
          <h3>{this.props.rank}</h3>
            <input name="rank" type="text" placeholder={this.props.rank} value={this.state.rank} onChange={event=> this.handleChange(event)} />
        </label>
        <label>
          <h2>Supervisor:</h2>
            <select name="supervisor" type="text" placeholder={this.props.supervisorId || 'None'} value={this.state.supervisor || 'None'} />
        </label>
        <div>
          <button onClick={(e) => this.handleSubmit(e)}>SUBMIT</button>
        </div>
      </form>
      <style global jsx>{`
      #formContainer {
        width: 100%;
        border: black;
        border-style: solid;
        padding-bottom: 5%;
        padding-left: 30%;
      }
      input[type=text] {
        width: 30%;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
      }
      input[type=text]:focus {
        border: 3px solid #555;
      }
      `}
      </style>
    </div>
    )
  }
}