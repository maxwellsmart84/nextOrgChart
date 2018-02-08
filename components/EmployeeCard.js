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
      title: props.title,
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
          <h3>Name: {this.state.name}</h3>
          <input name="name" placeholder="Name" type="text" value={this.state.name} onChange={event => this.handleChange(event)} />
        </label>
        <label>
          <h3>Title: {this.state.title}</h3>
          <input title="title" placeholder="Title" type="text" value={this.state.title} onChange={event => this.handleChange(event)} />
        </label>
        <label>
          <h3>Rank:{this.state.rank}</h3>
          <input name="rank" type="number" min={this.props.supervisor ? this.props.supervisor.rank : 0} max="100" placeholder="Rank" value={this.state.rank} onChange={event=> this.handleChange(event)} />
        </label>
          <h3>Supervisor: {this.props.supervisor ? this.props.supervisor.name : 'None'}</h3>
        <div>
          <div>
            <button onClick={(e) => this.handleSubmit(e)}>SUBMIT</button>
          </div>
        </div>
      </form>
      <style global jsx>{`
      #rank: {

      }
      a {
        text-decoration: none;
        color: black
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
        background-color: black
        margin-left: 10%;
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