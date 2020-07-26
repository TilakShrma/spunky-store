import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './components/homepage';
import Shop from './components/shop';
import Header from './components/header';
import SignInAndSignOut from './components/sign-in-and-sign-out';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route component={Homepage} path='/' exact/>
        <Route component={Shop} path='/shop' exact/>
        <Route component={SignInAndSignOut} path='/signin' exact/>
      </Switch>
    </div>
  );
}

export default App;
