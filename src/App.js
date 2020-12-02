import React from 'react';
import './App.css';

import routes from './routes.js'
import {Switch, Route, withRouter} from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Auth from './Components/Auth/Auth';


function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/login" component={Auth}/>
      </Switch>
    </div>
  );
}

export default withRouter(App);
