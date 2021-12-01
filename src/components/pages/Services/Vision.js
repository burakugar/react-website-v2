import React from 'react';
import HeroSection1 from '../../HeroSection1';
import { homeObjOne } from './Data';

function Vision() {
  return (
    <>
      <HeroSection1 {...homeObjOne} />
    </>
  );
}

export default Vision;
