import React, { createContext, Component } from 'react';
import { withAuth } from '@okta/okta-react';

const AuthContext = createContext({
  user: null,
  isAuthenticated: null,
});

export default AuthContext.Consumer;

class AuthController extends Component {
  state = {
    user: null,
    isAuthenticated: null,
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  componentDidMount() {
    this.checkAuthentication();
  }

  async checkAuthentication() {
    const isAuthenticated = await this.props.auth.isAuthenticated();
    if (isAuthenticated !== this.state.isAuthenticated) {
      const user = await this.props.auth.getUser();
      this.setState({ isAuthenticated, user });
    }
  }

  render() {
    return (
      <AuthContext.Provider value={this.state}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export const AuthProvider = withAuth(AuthController);
