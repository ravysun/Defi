import React from 'react';

import Crypto from '../Assets/trade.png';
import './Signup.css';

function Signup() {
  return (
    <div className="signup">
      <div className="container">
        {/* Left */}
        <div className="left">
          <img src={Crypto} alt="" />
        </div>
        {/* Right */}
        <div className="right">
          <h2>Earn passive income with crypto.</h2>
          <p>
            Earn up to 12% annual rewards on 30+ digital assets. Simply hold
          </p>
          <div className="input-container">
            <input type="email" placeholder="Enter your email" />
            <button className="btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
