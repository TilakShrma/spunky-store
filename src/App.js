import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';

import Homepage from './components/homepage';
import Shop from './components/shop';
import Header from './components/header';
import SignInAndSignOut from './components/sign-in-and-sign-up';

import {auth, createUserProfile} from './utlis/firebase';

import {setCurrentUser} from './redux/user/user.actions';

import './App.css';

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            })
        });

        
      } else {
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount() {
    // stop current session 
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
      <Header/>
        <Switch>
          <Route component={Homepage} path='/' exact/>
          <Route component={Shop} path='/shop' exact/>
          <Route component={SignInAndSignOut} path='/signin' exact/>
        </Switch>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
})

export default connect(null, mapDispatchToProps)(App);
