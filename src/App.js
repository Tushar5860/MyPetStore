import { useState } from 'react';
import './App.css';
import {
  ProfileCardCollection 
 } from './ui-components';
 import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
 import {
  NavBarHeader 
 } from './ui-components';
 import {
  EditProfile 
 } from './ui-components';
 import {
  MarketingFooterBrand 
 } from './ui-components';

function App() {
  const [showForm , setshowForm] =useState(false);
  const navOverrides = {
    "Contact": {
      style: {
        cursor:"pointer"
      },
      onClick: () => alert("You Are On Contact Window ."),
    },
    "Add Pet": {
      style: {
        cursor:"pointer"
      },
      onClick: () => setshowForm(!showForm),
    },
    "About Us": {
      style: {
        cursor:"pointer"
      },
      onClick: () => alert("About Us."),
    }
  };

  return (
    <div className="App">
      <NavBarHeader width={"100%"} overrides={navOverrides} />
      <header className="App-header">
      {
        showForm &&  ( <EditProfile
          style={{
            textAlign:'left',
            margin:'2rem',
          }} />)
      }
       {
        !showForm && (<ProfileCardCollection />)
      }
      </header>
      <MarketingFooterBrand width={"100%"} />
    </div>
  );
}

export default withAuthenticator(App);
