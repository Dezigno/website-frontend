import React from 'react';
import './Footer.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";

import {
  FaTelegramPlane,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'
import { MdFingerprint } from 'react-icons/md';
import axios from 'axios'

function Footer() {
  const installClicked = () => {
    axios.get("http://127.0.0.1:8000/admin/")
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className='footer-container'>
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          برای کسب اطلاعات بیشتر می‌توانید در خبرنامه ما مشترک بشوید
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='ایمیل'
            />
            <Button buttonStyle='btn--outline'>اشتراک</Button>
          </form>
        </div>
      </section> */}

      <section className="footer-contactus">
        <p className="footer-contactus-heading">
          برای کسب اطلاعات بیشتر ویا برفراری ارتباط با پشتیبانان ما می‌توانید به صفحه های مجازی دزیگنو مراجعه کنید و یا با راه های ارتباطی زیر تماس حاصل فرمایید.
        </p>
        <br></br>
        <div className="footer-contactus-number-email">
          <span className="footer-contactus-number-container">
            <AiFillPhone /> 
            <b className="footer-contactus-number-">
            +98 910 0428 509 
            </b>
          </span>
          <span className="footer-contactus-email-container">
            <AiOutlineMail /> 
            <b className="footer-contactus-number-">
            info@dezigno.ir 
            </b>
          </span>
        </div>
      </section>

      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <LinkScroll to='/' className='social-logo' onClick={scrollToTop}>
              <b>DEZIGNO</b> 
            </LinkScroll>
          </div>
          <small className='website-rights'>تمامی حقوق مادی و معنوی متعلق به شرکت توسعه محصول نگار شرق‌ (با مسئولیت محدود) - فروشگاه آنلاین دزیگنو - می‌باشد</small>
          <div className='social-icons'>
            <a
              className='social-icon-link'
              href='https://t.me/dezigno_ir'
              target='_blank'
              aria-label='Telegram'
              rel="noreferrer"
            >
              <FaTelegramPlane />
            </a>
            <a
              onClick={installClicked}
              className='social-icon-link'
              href='https://www.instagram.com/dezigno_ir/'
              target='_blank'
              replace="true"
              aria-label='Instagram'
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              className='social-icon-link'
              href='https://twitter.com/dezigno_ir'
              target='_blank'
              aria-label='Twitter'
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              className='social-icon-link'
              href='https://www.linkedin.com/company/dezigno-ir/'
              target='_blank'
              aria-label='LinkedIn'
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;