import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';

function Products() {
  return (
    <div className="products-container">
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
    </div>
  );
}

export default Products;