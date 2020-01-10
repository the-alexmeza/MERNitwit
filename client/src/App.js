import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import PostTwit from './components/PostTwit';
import EditTwit from './components/EditTwit';
import TwitFeed from './components/TwitFeed';

import logo from './logo.svg'; // TODO: get new logo
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <img src={logo} width="60" height="60" alt="logo" />
          </a>
          <Link to="/" className="navbar-brand">MERNi-Twit</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/post" className="nav-link">Post</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <br />
        <div className="container">
          <Route exact path="/" component={TwitFeed} />
          <Route path="/edit/:id" component={EditTwit} />
          <Route path="/post" component={PostTwit} />
        </div>
        <br />
        <br />
        <footer>
          <center>
            <p>footer text</p>
          </center>
        </footer>
      </Router>
    );
  }
}

export default App;
