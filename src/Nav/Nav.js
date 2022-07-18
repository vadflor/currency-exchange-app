import React from 'react'
import './nav.css'
import { Link } from "react-router-dom";

class Nav extends React.Component {

  render() {
    return (
      <div className="header-nav">
        <div className="container">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default Nav