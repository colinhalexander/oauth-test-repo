import React, { Component } from 'react';

export default class GitHubLogin extends Component {

  getQueryString = () => {
    const params = new URLSearchParams()
    
    params.set("client_id", "13cc21a5bfa754f597ce")
    params.set("scope", "user repo")

    return params.toString()
  }

  render() {
    return (
      <div className="github-login">
        <a href={`https://github.com/login/oauth/authorize?${this.getQueryString()}`} id="go-to-github">Authorize GitHub</a>
      </div>
    )
  }
}