import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Security } from '@okta/okta-react';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { AuthProvider } from './Auth';

const oktaConfig = {
  issuer: `${process.env.REACT_APP_OKTA_ORG_URL}/oauth2/default`,
  redirect_uri: `${window.location.origin}/implicit/callback`,
  client_id: process.env.REACT_APP_OKTA_CLIENT_ID,
};

ReactDOM.render(
  <BrowserRouter>
    <Security {...oktaConfig}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Security>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
