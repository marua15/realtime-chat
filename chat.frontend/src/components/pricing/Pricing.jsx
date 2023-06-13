/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import "./Pricing.scss"
import { LazyLoadImage } from "react-lazy-load-image-component";


const Pricing = () => {
  return (
    <section className="pricing" id='price'>
      <div className="container">
        <div className="left">
            <LazyLoadImage src="./img/free.png" alt="" />
        </div>
        <div className="right">
            <h2>Simple and Transparent Pricing</h2>
            <br/>
            <div className="para">
                <p>At our platform, we believe in providing value to our users without any cost. That's why our service is completely free to use, with no hidden charges or limitations.</p>
                <p>With our free plan, you'll get access to all the features and benefits of our platform, enabling you to take your business to new heights without breaking the bank.</p>
            </div>
            <br/>
            <div className="join">
                        <button className="signup-btn">Sign Up for Free</button>

            </div>
        </div>
        
      </div>
    </section>
  );
};

export default Pricing;
