import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

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
  
  
    return (
      <>
        <IconContext.Provider value={{ color: '#1c2237' }}>
          <nav className='navbar'>
            <div className='navbar-container container'>
              <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                {/* <img className="navbar-icon" src={logo} alt=s"dezigno logo"></img> */}
                <b>DEZIGNO</b>
              </Link>

              <div className='menu-icon' onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </div>
              
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    خانه
                  </Link>
                </li>
                <li className='nav-item'>                
                  <Link
                    to='/services'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    سرویس ها
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/products'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    محصولات
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/team'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    تیم ما
                  </Link>
                </li>
                <li className='nav-btn'>
                  {button ? (
                    <Link to='/sign-up' className='btn-link'>
                      <Button buttonStyle='btn--outline-reverse'>ورود</Button>
                    </Link>
                  ) : (
                    <Link to='/sign-up' className='btn-link'>
                      <Button
                        buttonStyle='btn--outline-reverse'
                        buttonSize='btn--mobile-reverse'
                        onClick={closeMobileMenu}
                      >
                        ورود
                      </Button>
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </nav>
        </IconContext.Provider>
      </>
    );
  }
  
  export default Navbar;