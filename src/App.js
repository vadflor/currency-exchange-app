import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './About/About';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Rate from './Rate/Rate';


class App extends React.Component {

  render() {
    return (

      <BrowserRouter>
        <Header/>
        <div className="container">
          <main>
          <Routes>
            <Route path="/" element={<Rate />} />
            <Route path="/about" element={<About />} />
          </Routes>
            
          </main>
        </div>

        <div className="container" id="cookie_info">
          <div className="site-content">
            <div className="well">We use cookies on our website to collect technical information.<br/>
                In particular, in order to personalize the operation of the site, we process the IP address of the region of your location.&nbsp;
                <button className="btn btn-primary btn-sm">OK</button></div>
          </div>
        </div>


        <Footer />

      </BrowserRouter>
    );
  }
}

export default App;
