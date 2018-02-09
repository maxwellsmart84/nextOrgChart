import { Component } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Router from 'next/router';

const apiUrl = '/api'

export default class EmployeeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      rank: props.rank,
      title: props.title,
      saveCall: false,
      nameInvalid: false,
      isNotOwner: this.props.supervisor && this.props.supervisor.id !== 'None',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
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

  handleSubmit = async (event) => {
    event.preventDefault();
    if (this.state.name === undefined || this.state.name === '') {
      this.setState({ nameInvalid: true })
    } else {
      const { name, rank, title } = this.state;
      const payload = {
        name,
        rank,
        title,
      }
      await axios.patch(`${apiUrl}/employee/${this.props.url.query.id}`, payload);
      this.setState({ saveCall: true });
    }
  }

  handleDelete = async (event) => {
    event.preventDefault();
    await axios.delete(`${apiUrl}/employee/${this.props.url.query.id}`);
    Router.push('/');
  }

  render() {
    const dataSaved = this.state.saveCall;
    let savedText = null;
    let nameError = null;

    if (this.state.nameInvalid) {
      nameError = <span className="error">Name Required</span>
    }
    if (dataSaved) {
      savedText = <span id="savedText">Employee Information Updated</span>
    }
    return (
    <div id="formContainer">
      <h1>Edit Employee</h1>
        <h3>Supervisor: {this.props.supervisor ? this.props.supervisor.name : 'None'}</h3>
      <form onSubmit={this.handleSubmit}>
        <label>
        <h3>Name: {this.props.name}</h3>
        </label>
        <input name="name" placeholder="Name" type="text" value={this.state.name} onChange={event => this.handleChange(event)} />
        <div>
          {nameError}
        </div>
        <label>
          <h3>Title: {this.props.title}</h3>
        </label>
        <input name="title" placeholder="Title" type="text" value={this.state.title} onChange={event => this.handleChange(event)} />
        <label>
          <h3>Rank: {this.state.rank}</h3>
        </label>
        <input name="rank" type="number" min={this.props.supervisor ? this.props.supervisor.rank : 0} max="99" placeholder="Rank" value={this.state.rank} onChange={event=> this.handleChange(event)} />
      </form>
        <div id="buttonBlock">
          <button id="save" onClick={(e) => this.handleSubmit(e)}>SAVE</button>
          {this.state.isNotOwner &&
          <button id="delete" onClick={(e) => this.handleDelete(e)}>DELETE</button>
          }
        </div>
        {savedText}
        <br />
      <style global jsx>{`
      .error {
        color:red;
        font-size:.8em;
        padding-left 2px;
      }
      #savedText {
        color:limegreen;
        margin-left: 12px;
      }
      #buttonBlock {
        padding-top:20px;
        margin-left: -10%
      }
      a {
        text-decoration: none;
        color: black
      }
      a:hover {
        color:#79589F;
      }
      input {
        width: 100%;
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
        cursor: pointer;
        border: none;
        color: white;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
      }
      #save {
        margin-bottom: 20px
      }
      #save:hover {
        background-color: #79589F;
      }
      #delete {
        background-color: #D11F33
      }
      `}
      </style>
    </div>
    )
  }
}