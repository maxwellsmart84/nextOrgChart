import { Component } from 'react';
import axios from 'axios';


const apiUrl = '/api'


export default class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      rank: this.props.supervisor.rank + 1,
      title: '',
      supervisor: this.props.supervisor,
      makeSupervisor: false
    }
    console.log(this.state)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    })
  };

  handleClick = (event) => {
    console.log(event.target.checked)
    this.setState({ makeSupervisor: event.target.checked });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { name, rank, makeSupervisor } = this.state;
    const payload = {
      name,
      rank: makeSupervisor ? rank -1 : rank,
      //either make them the supervisor of the employee they clicked the box next to or inherit the existing and make them a worker
      supervisorId: makeSupervisor ? this.props.supervisor.supervisorId : this.props.supervisor.id,
    }
    console.log(payload)
    const { data } = await axios.post(`${apiUrl}/employee`, payload)
  }

  render() {
    const isMakeSupervisor = this.state.makeSupervisor;
    let supervisorHeader = <h3>Employee will be added under: {this.state.supervisor.name}</h3>
    if (isMakeSupervisor) {
      supervisorHeader = null;
    }
    return (
      <div id="formContainer">
        <h1>Add Employee</h1>
        <form onSubmit={this.handleSubmit}>
          {supervisorHeader}
          <label>
            <h3>Name: {this.state.name}</h3>
            <input name="name" placeholder="Name" type="text" value={this.state.name} onChange={event => this.handleChange(event)} />
          </label>
          <label>
            <h3>Title: {this.state.title}</h3>
            <input name="title" placeholder="Title" type="text" value={this.state.title} onChange={event => this.handleChange(event)} />
          </label>
          <div className="block">
            <h3>Make New Supervisor</h3>
            <input name="makeSupervisor" type="checkbox" checked={!!this.state.makeSupervisor} onClick={event => this.handleClick(event)} />
          </div>
          <div>
            <button onClick={(e) => this.handleSubmit(e)}>SUBMIT</button>
          </div>
        </form>
        <style global jsx>{`
        .block {
          display: block;
          width:40%;
          padding-bottom: 40px;
          padding-top: 20px;
        }
        .block h3 {
          display: inline
          margin-right: 10px
        }
        input[type=checkbox] {
          display: inline-block
        }
          #formContainer {
            width: 100%;
            padding-bottom: 5%;
            margin-left: 20%;
            margin-right: 20%;
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
            margin-left: 10%;
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