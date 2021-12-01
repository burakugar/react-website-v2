import React from 'react';
import HeroSection1 from '../../HeroSection1';
import { homeObjOne, homeObjTwo} from './Data';

function Services() {
  return (
    <>
      <HeroSection1 {...homeObjOne} />
      <div>
      <HeroSection1 {...homeObjTwo} />
        </div>
    </>
  );
}

export default Services;
