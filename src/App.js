import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import GitHubLogin from './components/GitHubLogin'
import LandingPage from './components/LandingPage'
import UserPage from './components/UserPage'

class App extends Component {
  
  state = {
    user: {}
  }

  setUser = (user) => {
    this.setState({ user })
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <Route
            path="/login"
            render={ (routerProps) => <LandingPage {...routerProps} setUser={this.setUser}/> }
          />
          <Route path="/user" render={() => <UserPage user={this.state.user} />} />
          <Route exact path="/" component={GitHubLogin} />
        </div>
      </Router>
    );
  }
}

export default App;
