import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';
import './App.css';
import './css/login.css'
import './css/picture.css'
import './css/profPage.css'
import './css/comments.css'

import LogInPage from './components/LogInPage';
import NewAccount from './components/NewAccount';
import Main from './components/Main'



class App extends Component {


  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/CreateAccount' component= { NewAccount } />
          <Route path='/Main' component= { Main } />
          <Route path='/' component= { LogInPage } />
        </Switch>
      </div>
    );
  }
}

export default App;
