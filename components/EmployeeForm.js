import { Component } from 'react';
import axios from 'axios';


const apiUrl = '/api'


export default class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      rank: props.rank + 1,
      title: '',
      makeSupervisor: false,
      saveCall: false,
      nameInvalid: false,
      rankInvalid: false,
      titleInvalid: false,
      isNotOwner: props.supervisorId !== 'None',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.supervisor !== undefined || 'None') {
       this.setState({ isNotOwner: true });
    }
    if (nextProps.name !== this.state.name) {
      this.setState({ name: nextProps.name })
    }
    if (nextProps.title !== this.state.title) {
      this.setState({ title: nextProps.title })
    }
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
    const nameRegEx = RegExp('[\w\s.]')
    const titleRegEx = RegExp('[\w\s.][0-9]');

    if (this.state.name === undefined || this.state.name === '' || !stringRegEx.test(this.state.name)) {
        this.setState({ nameInvalid: true })
      }
      else if (!titleRegEx.test(this.state.title)) {
        this.setState ({ titleInvalid: true })
      }
      else if (this.state.rank < this.props.rank) {
        this.setState ({ rankInvalid: true })
      } else {
      const { name, rank, title, makeSupervisor } = this.state;
      const payload = {
        name,
        rank: makeSupervisor ? this.props.rank : rank,
        title,
        //either make them the supervisor of the employee they clicked the box next to or inherit the existing and make them a worker
        supervisorId: makeSupervisor ? this.props.supervisorId : this.props.id,
      }
      const { data } = await axios.post(`${apiUrl}/employee`, payload);
      if (makeSupervisor) {
        await axios.patch(`${apiUrl}/employee/${this.props.id}`, { supervisorId: data.id });
      }
      this.setState({ saveCall: true });
    }
  }

  render() {
    const isMakeSupervisor = this.state.makeSupervisor;
    const dataSaved = this.state.saveCall;
    let savedText = null;
    let nameError = null;
    let rankError = null;
    let titleError = null;

    if (this.state.nameInvalid) {
      nameError = <span className="error">Name Required</span>
    }
    if (this.state.titleInvalid) {
      titleError = <span className="error">Title cannot include special characters</span>
    }
    if (this.state.rankInvalid) {
      rankError = <span className="error">Rank out of bounds</span>
    }
    if (dataSaved) {
      savedText = <p id="saved">Employee Information Updated</p>
    }
    let supervisorHeader = <h3>Employee will be added under: {this.props.name}</h3>
    if (isMakeSupervisor) {
      supervisorHeader = <h3>Employee will be made supervisor of: {this.props.name}</h3>;
    }
    return (
      <div id="formContainer">
        <h1>Add Employee</h1>
        <form onSubmit={this.handleSubmit}>
          {supervisorHeader}
          <label>
            <h3>Name: {this.state.name}</h3>
          </label>
          <input name="name" placeholder="Name" type="text" defaultValue={this.state.name} onChange={event => this.handleChange(event)} />
          <div>
            {nameError}
          </div>
          <label>
            <h3>Title: {this.state.title}</h3>
            <input name="title" placeholder="Title" type="text" value={this.state.title} onChange={event => this.handleChange(event)} />
          </label>
          <div>
            {titleError}
          </div>
          {!this.state.makeSupervisor &&
          <label>
            <h3>Rank: {this.state.rank}</h3>
            <input name="rank" type="number" min={this.props.rank} max="99" placeholder="Rank" value={this.state.rank} onChange={event => this.handleChange(event)} />
          </label>
          }
          <div>
            {rankError}
          </div>
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