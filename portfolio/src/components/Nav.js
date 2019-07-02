import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';

class Nav extends Component {
  render = () => {
    return (
      <header className="App-header">
      <Router>
        <div>
        <nav className="navbar navbar-expand-lg navbar fixed-top">
        <Link to="/" className="navbar-brand">
        <i class="fa fa-empire fa-3x">Welcome!</i>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact"className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/Portfolio" className="nav-link">Portfolio</Link>
            </li> 
          </ul>
        </div>
      </nav>
        </div>
        <div>
        <Route exact path="/" component={About}/>
        <Route exact path="/Contact" component={Contact}/>
        <Route exact path="/Portfolio" component={Portfolio}/>
        </div>
      </Router>
    </header>
    )
  }
}

export default Nav;