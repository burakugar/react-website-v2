import React from 'react';
import HeroSection from '../../HeroSection';
import HeroSection1 from '../../HeroSection1';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';


function Urunler() {
  return (
    <>
      <HeroSection1 {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
    </>
  );
}

export default Urunler;
