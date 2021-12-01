import React, { useState, useEffect } from 'react';
import { Link,Router } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import logo from '../../src/welogo.png';

function Navbar() {
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [button, setButton] = useState(true);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
        }
    };

    window.addEventListener('resize', showButton);
  
    return (
        <div className="navbar">
            <div className="navbar-container container">
              <Link to='/'>
              <img src={logo} alt="Logo" style={{marginLeft:10,width:"90%",height:"100%"}}/> 
              </Link>
           
            
                <div className='menu-icon' onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
                </div>
            <ul className={click? 'nav-menu active': 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Ana Sayfa
                    </Link>
                    </li>
                <li className='nav-item'>
                <Link
                  to='/urunler'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Ürünlerimiz
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/vision'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Vizyon
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/contact-us'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  İletişim
                </Link>
              </li>
                <li className="nav-btn">
                    {button ? (
                        <Link to='/sign-up' className="btn-link">
                            <Button  buttonStyle='btn--outline'
                      buttonSize='btn--large'
                      onClick={closeMobileMenu}> BİR HEROSTATION EDİNİN</Button>
                        </Link>
                    ):(
                    <Router to='/sign-up' className="btn-link" >
                       
                        <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                
                    >
                    </Button> 
                        </Router>
                    )}
                </li>
            </ul>
            </div>
        </div>

    );
}

export default Navbar