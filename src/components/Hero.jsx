import React from 'react';
import { brand } from './imports';

const Hero = () => {
  return (
    <div className="hero">
      <div className="relative">
        <div className="absolute"></div>
      </div>
      <div className="container">
        <div className="hero__inner">
          <div className="hero__logo">
            <img src={brand} alt="Logo" />
          </div>
          <div className="hero__content">
            <p className="hero__text">
              A private members only collective of 10,000 dedicated NFT
              collectors and artists.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
