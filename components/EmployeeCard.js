import { Component } from 'react';
import EmployeeLink from './EmployeeLink';
import axios from 'axios';

const apiUrl = 'http://localhost:3000/api'

export default class EmployeeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      rank: props.rank,
      supervisor: props.supervisor || null,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    })
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { name, rank, supervisorId } = this.state;
    const payload = {
      name: name || undefined,
      rank: rank || undefined,
      supervisorId: supervisorId || undefined,
    }
    try {
      const { data } = await axios.patch(`${apiUrl}/employee/${this.props.url.query.id}`, payload)
    }catch(err) {
      console.log(err)
    }
  }

  render() {
    return (
    <div id="formContainer">
      <form onSubmit={this.handleSubmit}>
        <label>
          <h2>Name:</h2>
          <h3>{this.state.name}</h3>
            <input name="name" placeholder={this.props.name} type="text" value={this.state.name} onChange={event => this.handleChange(event)} />
        </label>
        <label>
          <h2>Rank:</h2>
          <h3>{this.state.rank}</h3>
            <input name="rank" type="text" placeholder={this.props.rank} value={this.state.rank} onChange={event=> this.handleChange(event)} />
        </label>
        <label>
          <h2>Supervisor:</h2>
            <select name="supervisor" type="text" placeholder={this.props.supervisorId || 'None'} onChange={this.state.supervisor || 'None'} />
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