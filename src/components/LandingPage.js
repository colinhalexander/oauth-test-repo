import React, { Component } from 'react';

export default class LandingPage extends Component {

  componentDidMount() {
    const code = window.location.search.split("=")[1],
          request = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ code })
          }

    fetch(`http://localhost:3000/oauth`, request)
      .then(response => response.json())
      .then(response => {
        this.props.history.replace("/user")
        this.props.setUser(response.user)
      })
  }

  render() {
    return (
      <div className="landing-page">
        <h2>Authorizing...</h2>
      </div>
    )
  }
}