import React from 'react';
import './Footer.css';
import Contact from '../../Contact';
import { Button } from '../../Button';
import { Link,Route } from 'react-router-dom';
import { SignupForm } from '../../SignupForm';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        
        <p className='footer-subscription-heading'>
          Herostation ile ilgili en son haber ve gelişmeleri almak için mail listemize üye olun.
        </p>
        
        <p className='footer-subscription-text'>
          Üyeliğinizi istediğiniz her an sonlandırabilirsiniz.
        </p>
        <SignupForm />
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Hakkımızda</h2>
            <Link to='/urunler'>Ürünlerimiz</Link>
            <Link to='/'>İnsan Kaynakları</Link>
            <Link to='/vision'>Vizyon</Link>
          </div>
          
          <div className='footer-link-items'>
            <h2>Bize Ulaşın</h2>
            <Link to='/contact-us'>İletişim</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Sosyal Medya</h2>
            <a href="https://www.instagram.com/werecycle.official/" target="_blank">Instagram</a>
            <a href="https://www.linkedin.com/company/weyourrecyclepartner/" target="_blank">LinkedIn</a>
            <a href="https://www.youtube.com/channel/UCG_Bq_3GTzCSd9DasJxPfLg" target="_blank">Youtube</a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              WE
            </Link>
          </div>
          <small className='website-rights'>WE © 2020</small>
          <div className='social-icons'>
            <a href="https://www.instagram.com/werecycle.official/" > <FaInstagram size={40} color="blue"/></a>
            <a href="https://www.youtube.com/channel/UCG_Bq_3GTzCSd9DasJxPfLg" > <FaYoutube size={40} color="blue"/></a>
            <a href="https://www.linkedin.com/company/weyourrecyclepartner/" > <FaLinkedin size={40} color="blue"/></a>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Footer;
