import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.scss';

const go = () => {
  fetch('http://localhost:6968/oauthlogin', {headers: {'Access-Control-Allow-Origin': '*'}})
  .then(res => res.json())
  .then(data => window.location.href = data.authUri)
  .catch((...res) => console.log('fail', res));
}

const Nav = (props) => {
  return (
    <nav className="nav">
      <Link className="nav__link" to="/settings">Settings</Link>
      <Link className="nav__link" to="/">Home</Link>
      <a className="nav__link" href="javascript:null(0)" onClick={go}>Sign in with Google</a>
    </nav>
  );
}

export default Nav;