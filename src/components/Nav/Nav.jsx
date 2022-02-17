import React from 'react';
import { Link } from 'react-router-dom';
import '../../bootstrap-5.1.3-dist/js/bootstrap.js';
import '../../bootstrap-5.1.3-dist/css/bootstrap.css';
import { useState } from 'react';

import './Nav.css';

function Nav() {
  const [homeActive, setHomeActive] = useState(true);
  const [aboutActive, setAboutActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);

  const handleSelectHome = () => {
    setAboutActive(false);
    setHomeActive(true);
    setContactActive(false);
  }

  const handleSelectAbout = () => {
    setAboutActive(true);
    setHomeActive(false);
    setContactActive(false);
  }

  const handleSelectContact = () => {
    setAboutActive(false);
    setHomeActive(false);
    setContactActive(true);
  }

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#" onClick={handleSelectHome}><span id='sh-logo'>SH</span> Compliance & Service Consulting</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-container">
            {homeActive ? 
              <Link className="nav-link active-tab" to="/home">Our Services</Link> 
            : 
              <Link className="nav-link" to="/home" onClick={handleSelectHome}>Our Services</Link>
            }
            {aboutActive ?
              <Link className="nav-link active-tab" to="/about">About</Link>
            :
              <Link className="nav-link" to="/about" onClick={handleSelectAbout}>About</Link>
            }
            {contactActive ?
              <Link className="nav-link active-tab" to="/contact">Contact</Link>
            :
              <Link className="nav-link" to="/contact" onClick={handleSelectContact}>Contact</Link>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
