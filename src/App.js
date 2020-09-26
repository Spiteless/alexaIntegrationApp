import React from 'react';
import './App.css';

import routes from './routes.js'
import { withRouter } from 'react-router-dom'


function App(props) {
  return (
    <div className="App">
      <h1>Hello World</h1>    
    </div>
  );
}

export default withRouter(App);
