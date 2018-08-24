import React from 'react';
import { withAuth } from '@okta/okta-react';

import Auth from './Auth';

export default withAuth(({ auth }) => (
  <Auth>
    {({ isAuthenticated }) => {
      if (isAuthenticated === null) return null;

      return (
        <a onClick={() => isAuthenticated ? auth.logout() : auth.login()}>
          {isAuthenticated ? 'Logout' : 'Login'}
        </a>
      );
    }}
  </Auth>
));
