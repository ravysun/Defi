import React from 'react';

import './Hero.css';
import Cyrpto from '../Assets/hero-img.png';

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        {/* Left side */}
        <div className="left">
          <p>Buy & Sell Crypto 24/7 using your retirement account</p>
          <h1>Invest in Cryptocurrntcy with Your IRA</h1>
          <p>Buy, Sell, and store hundreds of crytocuurency</p>
          <div className="input-container">
            <input type="email" placeholder="Enter your email" />
            <button className="btn">Learn More</button>
          </div>
        </div>

        {/* Left side */}
        <div className="right">
          <div className="img-container">
            <img src={Cyrpto} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
