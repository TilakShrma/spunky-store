import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import Homepage from './components/homepage';
import Shop from './components/shop';
import Header from './components/header';
import SignInAndSignUp from './components/sign-in-and-sign-up';
import Checkout from './components/checkout';

import {auth, createUserProfile} from './utlis/firebase';

import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selectors';

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

    const redirectAfterSignIn = () => (
      this.props.currentUser
      ? <Redirect to='/' />
      : <SignInAndSignUp />
      
    )

    return (
      <div className="App">
      <Header/>
        <Switch>
          <Route component={Homepage} path='/' exact/>
          <Route component={Shop} path='/shop'/>
          <Route path='/signin' render={redirectAfterSignIn} exact/>
          <Route path='/checkout' component={Checkout} exact />
        </Switch>
      </div>
    );
  }
}

/**
 * takes root reducer as param
 * we can also destructure the specific data we need from it
 * i.e. user in this case
 */
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

/**
 * Map dispatch method to each action
 * e.g: if we are setting current user we will call
 * setCurrentUser prop method and it will in turn
 * call dispatch method with SET_CURRENT_USER action
 * call will go to the root reducer initially and from there 
 * reducer which accepts that action type will get hit.
 */
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
