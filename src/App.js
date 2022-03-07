import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <h1>Hello {user.username}</h1>
          <header>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>We now have Auth!</h1>
          </header>
        </div>
      )}
    </Authenticator>

  );
}

export default withAuthenticator(App);