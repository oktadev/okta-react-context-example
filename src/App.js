import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';

import logo from './logo.svg';
import './App.css';

import Auth from './Auth';
import LoginButton from './LoginButton';
import ProfilePage from './Profile';

const welcomeUser = ({ user }) => user
  ? `Welcome, ${user.given_name || user.name}!`
  : 'Welcome to React';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            <Auth>{welcomeUser}</Auth>
          </h1>
          <nav className="App-nav">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <LoginButton />
          </nav>
        </header>
        <main className="App-intro">
          <Route exact path="/" component={() => 'Home Page'} />
          <SecureRoute exact path="/profile" component={ProfilePage} />
          <Route path="/implicit/callback" component={ImplicitCallback} />
        </main>
      </div>
    );
  }
}

export default App;
