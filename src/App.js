import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './components/homepage';
import Shop from './components/shop';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route component={Homepage} path='/' exact/>
        <Route component={Shop} path='/shop' exact/>
      </Switch>
    </div>
  );
}

export default App;
