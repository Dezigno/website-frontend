import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaTelegramPlane,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { AiFillPhone } from 'react-icons/ai'
import { MdFingerprint } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our exclusive membership to receive the latest news and trends
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section> */}

      <section className="footer-contactus">
        <p className="footer-contactus-heading">
          برای کسب اطلاعات بیشتر ویا برفراری ارتباط با پشتیبانان ما می‌توانید به صفحه های مجازی دزیگنو مراجعه کنید و یا با راه های ارتباطی زیر تماس حاصل فرمایید.
        </p>
        <br></br>
        <div className="footer-contactus-number-icon">
          <AiFillPhone /> 
          <b className="footer-contactus-number-">
          +98 910 0428 509 
          </b>
        </div>
      </section>

      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <MdFingerprint className='navbar-icon' />
              <b>DEZIGNO</b> 
            </Link>
          </div>
          <small className='website-rights'>تمامی حقوق مادی و معنوی متعلق به دزیگنو می‌باشد</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='https://t.me/dezigno_ir'
              target='_blank'
              aria-label='Telegram'
            >
              <FaTelegramPlane />
            </Link>
            <Link
              className='social-icon-link'
              to='https://www.instagram.com/dezigno_ir/'
              target='_blank'
              replace="true"
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to='https://twitter.com/dezigno_ir'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='https://www.linkedin.com/company/dezigno-ir/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;