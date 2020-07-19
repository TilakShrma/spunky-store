import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './components/homepage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route component={Homepage} path='/' exact/>
      </Switch>
    </div>
  );
}

export default App;
