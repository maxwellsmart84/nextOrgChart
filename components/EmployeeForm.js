import { Component } from 'react';
import axios from 'axios';


const apiUrl = '/api'


export default class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: undefined,
      rank: this.props.employee.rank + 1,
      title: '',
      employee: this.props.employee,
      makeSupervisor: false,
      saveCall: false,
      nameInvalid: false,
      isNotOwner: this.props.employee.supervisorId !== 'None',
    }

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
    this.setState({ makeSupervisor: event.target.checked });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    if (this.state.name === undefined || this.state.name === '') {
      this.setState({ nameInvalid: true })
      } else {
      const { name, rank, title, makeSupervisor } = this.state;
      const payload = {
        name,
        rank: makeSupervisor ? this.props.employee.rank - 1 : rank,
        title,
        //either make them the supervisor of the employee they clicked the box next to or inherit the existing and make them a worker
        supervisorId: makeSupervisor ? this.props.employee.supervisorId : this.props.employee.id,
      }

      const { data } = await axios.post(`${apiUrl}/employee`, payload);
      this.setState({ saveCall: true });
    }
  }

  render() {
    const isMakeSupervisor = this.state.makeSupervisor;
    const dataSaved = this.state.saveCall;
    let savedText = null;
    let nameError = null;

    if (this.state.nameInvalids) {
      nameError = <span className="error">Name Required</span>
    }
    if (dataSaved) {
      savedText = <p id="saved">Employee Information Updated</p>
    }
    let supervisorHeader = <h3>Employee will be added under: {this.state.employee.name}</h3>
    if (isMakeSupervisor) {
      supervisorHeader = <h3>Employee will be made supervisor of: {this.state.employee.name}</h3>;
    }
    return (
      <div id="formContainer">
        <h1>Add Employee</h1>
        <form onSubmit={this.handleSubmit}>
          {supervisorHeader}
          <label>
            <h3>Name: {this.state.name}</h3>
            <input name="name" placeholder="Name" type="text" defaultValue={this.state.name} onChange={event => this.handleChange(event)} />
          </label>
          <div>
            {nameError}
          </div>
          <label>
            <h3>Title: {this.state.title}</h3>
            <input name="title" placeholder="Title" type="text" value={this.state.title} onChange={event => this.handleChange(event)} />
          </label>
          <label>
            <h3>Rank: {this.state.rank}</h3>
            <input name="rank" type="number" min={this.props.employee.rank} max="99" placeholder="Rank" value={this.state.rank} onChange={event => this.handleChange(event)} />
          </label>
          {this.state.isNotOwner &&
            <div id="checkboxBlock">
              <h3>Make New Supervisor</h3>
              <input name="makeSupervisor" type="checkbox" checked={!!this.state.makeSupervisor} onClick={event => this.handleClick(event)} />
            </div>
          }
          <div>
            <button onClick={(e) => this.handleSubmit(e)}>SAVE</button>
            {savedText}
          </div>
        </form>
        <style global jsx>{`
        .error {
          color:red;
          font-size:.8em;
          padding-left 2px;
        }
        #saved {
          color:limegreen
          padding-left: 20px;
        }
        #checkboxBlock {
          display: block;
          width:40%;
          padding-bottom: 40px;
          padding-top: 20px;
        }
        #checkboxBloc h3 {
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
        input {
          width: 30%;
          padding: 12px 20px;
          margin: 8px 0;
          box-sizing: border-box;
        }
        input:focus {
          border: 3px solid #555;
        }
        button {
          background-color: black;
          cursor: pointer;
          border: none;
          color: white;
          padding: 10px 20px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
        }
        button:hover {
          background-color: #79589F;
        }
      `}
        </style>
      </div>
    )
  }
}