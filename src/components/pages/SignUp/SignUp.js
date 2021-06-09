import React from 'react';
import HeroSection from '../home/HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../home/Pricing';

function SignUp() {
  return (
    <div className="signup">
      <HeroSection {...homeObjOne} />
      {/* <HeroSection {...homeObjThree} /> */}
    </div>
  );
}

export default SignUp;