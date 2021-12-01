import React from 'react';
import HeroSection from '../../HeroSection';
import HeroSection1 from '../../HeroSection1';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Contact from '../../Contact';
function SignUp() {
  return (
    <>
      <HeroSection1 {...homeObjOne} />
      <Contact/>
    </>
  );
}

export default SignUp;
