import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <nav className="App-nav">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
          </nav>
        </header>
        <main className="App-intro">
          <Route exact path="/" component={() => 'Home Page'} />
          <SecureRoute exact path="/profile" component={() => 'Profile page'} />
          <Route path="/implicit/callback" component={ImplicitCallback} />
        </main>
      </div>
    );
  }
}

export default App;
