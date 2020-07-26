import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './components/homepage';
import Shop from './components/shop';
import Header from './components/header';
import SignInAndSignOut from './components/sign-in-and-sign-up';

import {auth} from './utlis/firebase';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user})
    })
  }

  componentWillUnmount() {
    // stop current session 
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
      <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route component={Homepage} path='/' exact/>
          <Route component={Shop} path='/shop' exact/>
          <Route component={SignInAndSignOut} path='/signin' exact/>
        </Switch>
      </div>
    );
  }
}

export default App;
