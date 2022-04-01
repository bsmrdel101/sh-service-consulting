import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';

import HomePage from '../HomePage/HomePage';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          {/* <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route> */}

          <Route
            exact
            path="/home"
          >
            <HomePage />
          </Route>

          {/* <Route
            exact
            path="/contact"
          >
            <ContactPage />
          </Route> */}

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <div className='container'>
              <h1>404</h1>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
