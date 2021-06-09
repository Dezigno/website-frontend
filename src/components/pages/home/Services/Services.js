import React from 'react';
import HeroSection from '../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data';
import Pricing from '../Pricing';

function Services() {
  return (
    <div className="services-container">
      {/* <Pricing /> */}
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
    </div>
  );
}

export default Services;