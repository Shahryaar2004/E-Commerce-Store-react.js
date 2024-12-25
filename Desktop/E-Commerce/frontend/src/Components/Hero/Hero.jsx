import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_img from '../Assets/hero_image.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New Arrivals</h2>
        <div className="hero-hand-icon">
          <p>new</p>
          <img src={hand_icon} alt="hand icon" />
          <p>Collection</p>
          <p>For Everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="arrow icon" />
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_img} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
