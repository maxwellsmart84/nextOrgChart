import { Component } from 'react';
import axios from 'axios';


const apiUrl = 'http://localhost:3000/api'


export default class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      rank: this.props.supervisor.rank + 1,
      supervisor: this.props.supervisor,
      makeSupervisor: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value,
    })
  };

  handleClick = (event) => {
    event.preventDefault();
    this.setState({ makeSupervisor: e.target.checked });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { name, rank, makeSupervisor } = this.state;
    const payload = {
      name: name || undefined,
      rank: makeSupervisor ? rank -1 : rank,
      //either make them the supervisor of the employee they clicked the box next to or inherit the existing and make them a worker
      supervisorId: makeSupervisor ? this.props.supervisor.supervisorId : this.props.supervisor.id,
    }
    console.log(payload)
    const { data } = await axios.post(`${apiUrl}/employee`, payload)
  }

  render() {
    return (
      <div id="formContainer">
        <h1>Add Employee</h1>
        <form onSubmit={this.handleSubmit}>
          <h2>Employee will be added under:</h2>
          <h3>{this.state.supervisor.name}</h3>
          <label>
            <h2>Name:</h2>
            <h3>{this.state.name}</h3>
            <input name="name" placeholder='Name' type="text" value={this.state.name} onChange={event => this.handleChange(event)} />
          </label>
          <label>
            <h3>Make New Supervisor</h3>
            <input name="makeSupervisor" type="checkbox" value={this.state.makeSupervisor} onclick={event => this.handleClick(event)} />
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
      button {
        background-color: black
        border: none;
        color: white;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
      }
      `}
        </style>
      </div>
    )
  }
}