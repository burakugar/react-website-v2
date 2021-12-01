import React from 'react';
import HeroSection from '../../HeroSection';
import HeroSection1 from '../../HeroSection1';
import Recycle from '../../Recycle';
import { homeObjOne, homeObjTwo } from './Data';
import ImageFadeIn from "react-image-fade-in";
import TextTransition, { presets } from "react-text-transition";
import Transition from '../../Transition';
import gif from '../../../we.gif';
import gif2 from '../../../we_3.gif';
import Particles from "react-tsparticles";
function Home() {
  return (
    <> <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 60,
	            "density": {
	                "enable": true,
	                "value_area": 1500
	            }
	        },
	        "line_linked": {
	            "enable": true,
	            "opacity": 0.02
	        },
	        "move": {
	            "direction": "right",
	            "speed": 0.05
	        },
	        "size": {
	            "value": 1
	        },
	        "opacity": {
	            "anim": {
	                "enable": true,
	                "speed": 1,
	                "opacity_min": 0.05
	            }
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onclick": {
	                "enable": true,
	                "mode": "push"
	            }
	        },
	        "modes": {
	            "push": {
	                "particles_nb": 1
	            }
	        }
	    },
	    "retina_detect": true
	}} />

      <Recycle />
      <ImageFadeIn width={640} height={500} opacityTransition={3} src={require('./we_5.png')} style={{display:"block",paddingTop:100,width:"50%",marginLeft:"auto",marginRight:"auto"}}/>
      <HeroSection1 {...homeObjOne} />
      <img src={gif2} alt="loading..."style={{display:"block",paddingTop:100,width:"50%",marginLeft:"auto",marginRight:"auto"}} />
      <HeroSection {...homeObjTwo} />
      <Transition/>
      <img src={gif} alt="loading..." style={{display:"block",paddingTop:100,width:"50%",marginLeft:"auto",marginRight:"auto"}}/>
    </> 
  );
}

export default Home;
