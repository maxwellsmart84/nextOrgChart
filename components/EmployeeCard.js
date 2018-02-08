import { Component } from 'react';
import axios from 'axios';
import Link from 'next/link';

const apiUrl = 'http://localhost:3000/api'

export default class EmployeeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      rank: props.rank,
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
    const { name, rank } = this.state;
    const payload = {
      name,
      rank,
    }
    console.log('PAYLOAD', payload)
    await axios.patch(`${apiUrl}/employee/${this.props.url.query.id}`, payload)
    alert('Employee Updated')
  }

  render() {
    return (
    <div id="formContainer">
      <h1>Edit Employee</h1>
      <form onSubmit={this.handleSubmit}>
        <label>
          <h2>Name:</h2>
          <h3>{this.state.name}</h3>
            <input name="name" placeholder="Name" type="text" value={this.state.name} onChange={event => this.handleChange(event)} />
        </label>
        <div>
          <h1>Rank: {this.state.rank}</h1>
        </div>
        <label>
            <input name="rank" type="number" min={this.props.supervisor ? this.props.supervisor.rank : 0} max="100" placeholder="Rank" value={this.state.rank} onChange={event=> this.handleChange(event)} />
        </label>
        <h2>Supervisor:</h2>
          <h3>{ this.props.supervisor ? this.props.supervisor.name : 'None'}</h3>
        <div>
          <button onClick={(e) => this.handleSubmit(e)}>SUBMIT</button>
        </div>
      </form>
      <style global jsx>{`
      a {
        text-decoration: none;
        color: black
      }
      #formContainer {
        width: 100%;
        border: black;
        border-style: solid;
        padding-bottom: 5%;
        padding-left: 30%;
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
      `}
      </style>
    </div>
    )
  }
}