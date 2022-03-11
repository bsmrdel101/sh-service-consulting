import React from 'react';
import { Link } from 'react-router-dom';
import '../../bootstrap-5.1.3-dist/js/bootstrap.js';
import '../../bootstrap-5.1.3-dist/css/bootstrap.css';
import { useState } from 'react';

import './Nav.css';

function Nav() {
  const [homeActive, setHomeActive] = useState(true);
  const [servicesActive, setServicesActive] = useState(false);
  const [aboutActive, setAboutActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);

  // const servicesView = () => {
  //   let element = document.getElementById("section-one"); 

  //   element.scrollIntoView();
  // }

  const handleSelectHome = () => {
    setAboutActive(false);
    setHomeActive(true);
    setContactActive(false);
    setServicesActive(false);

    window.scrollTo(0, 0);
  }

  const handleSelectServices = () => {
    setAboutActive(false);
    setHomeActive(false);
    setContactActive(false);
    setServicesActive(true);

    window.scrollTo(0, 470);
  }

  const handleSelectAbout = () => {
    setAboutActive(true);
    setHomeActive(false);
    setContactActive(false);
    setServicesActive(false);
  }

  const handleSelectContact = () => {
    setAboutActive(false);
    setHomeActive(false);
    setContactActive(true);
    setServicesActive(false);
  }

  window.addEventListener('scroll', function(ev) {
    console.log(window.scrollY);
    if (window.scrollY >= 420) {
      document.getElementById("navbar").classList.add("sticky-top");
    }
    if (window.scrollY <= 400) {
      document.getElementById("navbar").classList.remove("sticky-top");
    }
  });

  return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light" id='navbar'>
        <div class="container-fluid">
          <a class="navbar-brand" href="#" onClick={handleSelectHome} draggable={false}><span id='sh-logo'>SH</span> Compliance & Service Consulting</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-container">
              {homeActive ? 
                <Link className="nav-link active-tab" onClick={handleSelectHome} draggable={false}>Home</Link> 
              : 
                <Link className="nav-link" onClick={handleSelectHome} draggable={false}>Home</Link>
              }
              {servicesActive ? 
                <Link className="nav-link active-tab" draggable={false}>Services</Link> 
              : 
                <Link className="nav-link" onClick={handleSelectServices} draggable={false}>Services</Link>
              }
              {aboutActive ?
                <Link className="nav-link active-tab" to="/about" draggable={false}>About</Link>
              :
                <Link className="nav-link" to="/about" onClick={handleSelectAbout} draggable={false}>About</Link>
              }
              {contactActive ?
                <Link className="nav-link active-tab" to="/contact" draggable={false}>Contact</Link>
              :
                <Link className="nav-link" to="/contact" onClick={handleSelectContact} draggable={false}>Contact</Link>
              }
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Nav;
