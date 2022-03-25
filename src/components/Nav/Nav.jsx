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
  const [scheduleActive, setScheduleActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);

  const handleSelectHome = () => {
    window.scrollTo(0, 0);
  }

  const handleSelectServices = () => {
    window.scrollTo(0, 470);
  }

  const handleSelectAbout = () => {
    window.scrollTo(0, 1150);
  }

  const handleSelectSchedule = () => {
    window.scrollTo(0, 1500);
  }

  const handleSelectContact = () => {
    window.scrollTo(0, 2000);
  }

  window.addEventListener('scroll', function(ev) {
    let scroll = window.scrollY;
    // Removes or adds the sticky-top class, depending on scroll distance
    if (scroll >= 420) {
      document.getElementById("navbar").classList.add("sticky-top");
    }
    if (scroll <= 400) {
      document.getElementById("navbar").classList.remove("sticky-top");
    }

    // Switches which nav element is active
    if (scroll <= 400) {
      setHomeActive(true);
      setServicesActive(false);
      setAboutActive(false);
      setScheduleActive(false);
      setContactActive(false);
    } else if (scroll > 400 && scroll < 1000) {
      setHomeActive(false);
      setServicesActive(true);
      setAboutActive(false);
      setScheduleActive(false);
      setContactActive(false);
    } else if (scroll > 1000 && scroll < 1500) {
      setHomeActive(false);
      setServicesActive(false);
      setAboutActive(true);
      setScheduleActive(false);
      setContactActive(false);
    } else if (scroll > 1500 && scroll < 5000) {
      setHomeActive(false);
      setServicesActive(false);
      setAboutActive(false);
      setScheduleActive(true);
      setContactActive(false);
    }

    // switch (scroll) {
    //   case 0:
    //     getActiveNav("home");
    //     break;
    //   case 470:
    //     getActiveNav("services");
    //     break;
    //   case 1150:
    //     getActiveNav("about");
    //     break;
    //   case 1500:
    //     getActiveNav("schedule");
    //     break;
    //   case 2000:
    //     getActiveNav("contact");
    //     break;
    //   default:
    //     break;
    // }
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
                <Link className="nav-link active-tab" onClick={handleSelectAbout} draggable={false}>About</Link>
              :
                <Link className="nav-link" onClick={handleSelectAbout} draggable={false}>About</Link>
              }
              {scheduleActive ?
                <Link className="nav-link active-tab" onClick={handleSelectSchedule} draggable={false}>Schedule</Link>
              :
                <Link className="nav-link" onClick={handleSelectSchedule} draggable={false}>Schedule</Link>
              }

              {/* Make contact dropdown nav with "contact info" and "schedule a consultation" as the options.
                If the user just clicks on the nav element itself instead of a dropdown element, bring them to the
                "contact info". 
              */}
              {contactActive ?
                <Link className="nav-link active-tab" onClick={handleSelectContact} draggable={false}>Contact</Link>
              :
                <Link className="nav-link" onClick={handleSelectContact} draggable={false}>Contact</Link>
              }
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Nav;
