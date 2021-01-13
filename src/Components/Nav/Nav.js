import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.scss';

const Nav = (props) => {
  return (
    <nav className="nav">
      <Link className="nav__link" to="/settings">Settings</Link>
      <Link className="nav__link" to="/">Home</Link>
      <Link className="nav__link" to="/login">Sign in with Google</Link>
    </nav>
  );
}

export default Nav;