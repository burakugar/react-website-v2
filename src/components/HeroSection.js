import React from 'react';
import './HeroSection.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import TextAnimation from 'react-animate-text';

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) {
  return (
    <> 
    
      <div style={{paddingTop:10}}
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                 <TextAnimation charInterval="40" >
                 <h1 className={lightText ? 'heading' : 'heading dark'} >
                    {headline}
                  </h1>
                   </TextAnimation> 
                <TextAnimation charInterval="10" type="backspace">
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
              
                >
                  {description}
                </p>
                </TextAnimation>
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src={img} alt={alt} className='home__hero-img' />
              </div>
            </div>
            <Link to='/sign-up' >
                  <Button buttonSize='btn--large'buttonColor='blue'  >
                    {buttonLabel}
                  </Button>
                  
                </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
