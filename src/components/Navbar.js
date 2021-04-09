import React, { useState, useEffect } from 'react'
import { Link as routerLink} from 'react-router-dom'
import { Button } from './Button'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Link, animateScroll as scroll } from "react-scroll";

import logo from './images/dezigno_white_logo.png'

import './assets/CSS/Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
      window.addEventListener('resize', showButton);
      return (
          window.removeEventListener('resize', showButton)
        )
    }, []);

    const scrollToTop = () => {
      scroll.scrollToTop();
    };

    const clickLogo = () => {
      closeMobileMenu();
      scrollToTop()
    };
  
  
    return (
      <>
        <IconContext.Provider value={{ color: '#1c2237' }}>
          <nav className='navbar'>
            <div className='navbar-container container'>
              <Link to='/' className='navbar-logo' onClick={clickLogo}>
                {/* <img className="navbar-icon" src={logo} alt=s"dezigno logo"></img> */}
                <b>DEZIGNO</b>
              </Link>

              <div className='menu-icon' onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </div>
              
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                  <Link 
                    to='home-container' 
                    className='nav-links' 
                    onClick={closeMobileMenu}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={800}
                    activeClass="active"
                    >
                    خانه
                  </Link>
                </li>
                <li className='nav-item'>                
                  <Link
                    to='services-container'
                    className='nav-links'
                    onClick={closeMobileMenu}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={800}
                    activeClass="active"
                  >
                    سرویس ها
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='products-container'
                    className='nav-links'
                    onClick={closeMobileMenu}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={800}
                    activeClass="active"
                  >
                    محصولات
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='team-container'
                    className='nav-links'
                    onClick={closeMobileMenu}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={800}
                    activeClass="active"
                  >
                    تیم ما
                  </Link>
                </li>
                {/* <li className='nav-btn'>
                  {button ? (
                    <Link 
                      to='signup' 
                      className='btn-link'
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={800}
                      activeClass="activ"
                      >
                      <Button buttonStyle='btn--outline-reverse'>ورود</Button>
                    </Link>
                  ) : (
                    <Link 
                      to='signup' 
                      className='btn-link'
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={800}
                      activeClass="activ"
                      >
                      <Button
                        buttonStyle='btn--outline-reverse'
                        buttonSize='btn--mobile-reverse'
                        onClick={closeMobileMenu}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        activeClass="active"
                      >
                        ورود
                      </Button>
                    </Link>
                  )}
                </li> */}
              </ul>
            </div>
          </nav>
        </IconContext.Provider>
      </>
    );
  }
  
  export default Navbar;