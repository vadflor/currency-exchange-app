import React from 'react'
import './footer.css'
import { Link } from "react-router-dom";

class Footer extends React.Component {
  
  render() {
    return (
      <footer id="footer" className="footer">
        <div className="footer-bottom">
          <div className="container">
            <div className="flex-container">
              <div className="flex-item">
                <h1 className="footer-title"><a href="https://itgid.info">2019 &copy; React. Lite Level</a></h1>
                <p> All Rights Reserved</p>

              </div>
              <div className="flex-item">
                <div className="module-body">
                  <ul className="list-unstyled">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                  </ul>
                </div>
              </div>
              <div className="flex-item">
                <div className="module-body">
                  <ul className="list-unstyled">
                    <li><a href="/" tooltip="Контакты">Contacts</a></li>
                    <li><a href="/">Service Agreement</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-bar">
          <div className="flex-container">
            <div className="flex-item">
              <ul className="link">
              </ul>
            </div>
            <div className="flex-item">
              <div className="clearfix payment-methods">
                <ul>
                  <img src="/skin/default/images/dummy.png" data-toggle="tooltip" data-placement="top"
                    data-original-title="www.webmoney.ru" alt="" />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer