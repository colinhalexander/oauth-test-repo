import React, { Component } from 'react';

export default class UserPage extends Component {

  state = {
    name: "",
    description: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const request = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(this.state)
    }

    fetch("http://localhost:3000/projects", request)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        this.setState({
          name: "",
          description: ""
        })
      })
  }

  render () {
    const { user } = this.props,
          { name, description } = this.state

    return (
      <div className="user-page">
        <div>
          <img id="user-avatar" src={user.avatar_url} alt="user avatar"/>
          <p>{user.login || "username"}</p>
        </div>
        <p>Name: {user.name}</p>
        <p>Bio: {user.bio}</p>
        <form id="new-repo" onSubmit={this.handleSubmit}>
          <h2>New Repo Form</h2>
          <input 
            value={name}
            name="name"
            placeholder="Name"
            onChange={this.handleChange}
          />
          <input
            value={description}
            name="description"
            placeholder="Description"
            onChange={this.handleChange}
          />
          <input type="submit" value="Create Repo" />
        </form>
      </div>
    )
  }
}