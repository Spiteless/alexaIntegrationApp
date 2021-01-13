import React from 'react';
import './App.css';

import {Switch, Route, withRouter} from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Auth from './Components/Auth/Auth';
import Settings from './Components/Settings/Settings';
import Nav from './Components/Nav/Nav';

function App(props) {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/login" component={Auth}/>
        <Route path="/settings" component={Settings}/>
      </Switch>
    </div>
  );
}

export default withRouter(App);
