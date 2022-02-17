import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title"><span>SH</span> Compliance & Service Consulting</h2>
      </Link>
      <div>
        <Link className="navLink" to="/home">
          Home
        </Link>

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
