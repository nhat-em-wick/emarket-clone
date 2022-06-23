import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import logoFooter from '~/assets/images/logo-footer2.png';
import payment from '~/assets/images/payment.png';
import { contactInfo } from './const';

const cx = classNames.bind(styles);

const Footer = (props) => {
  
  return (
    <footer className={`${cx('wrapper')}`}>
      <section className={cx('banner')}>
        <div className="container">
          <div className={cx('banner__content')}>
            <Link to="/" className={cx('banner__logo')}>
              <img src={logoFooter} alt="" />
            </Link>
            <div className={cx('banner__menu')}>
              <Link to="/" className={cx('banner__menu-link')}>
                Home
              </Link>
              <Link to="/" className={cx('banner__menu-link')}>
                About
              </Link>
              <Link to="/" className={cx('banner__menu-link')}>
                FAQs
              </Link>
            </div>
            <div className={cx('banner__social')}>
              <Link to="/" className={cx('banner__social-link')}>
                <i className='bx bxl-facebook'></i>
              </Link>
              <Link to="/" className={cx('banner__social-link')}>
                <i className='bx bxl-twitter' ></i>
              </Link>
              <Link to="/" className={cx('banner__social-link')}>
                <i class='bx bxl-github'></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className={cx('middle')}>
        <div className="container">
          <div className={cx('middle__content')}>
            <div className={cx('middle__box')}>
              <h3 className={cx('middle__box-title')}>
                {contactInfo.name}
              </h3>
              <div className={cx('middle__box-list')}>
                {
                  contactInfo.list.map((item, index) => (
                    <div className={cx('middle__box-item')} key={index}>
                      <span className={cx('middle__box-icon')}>
                        <i className={item.icon}></i>
                      </span>
                      <span className={cx('middle__box-text')}>
                        {item.display}
                      </span>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className={cx('middle__box')}>
              <h3 className={cx('middle__box-title')}>
                {contactInfo.name}
              </h3>
              <div className={cx('middle__box-list')}>
                {
                  contactInfo.list.map((item, index) => (
                    <div className={cx('middle__box-item')} key={index}>
                      <span className={cx('middle__box-icon')}>
                        <i className={item.icon}></i>
                      </span>
                      <span className={cx('middle__box-text')}>
                        {item.display}
                      </span>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className={cx('middle__box')}>
              <h3 className={cx('middle__box-title')}>
                {contactInfo.name}
              </h3>
              <div className={cx('middle__box-list')}>
                {
                  contactInfo.list.map((item, index) => (
                    <div className={cx('middle__box-item')} key={index}>
                      <span className={cx('middle__box-icon')}>
                        <i className={item.icon}></i>
                      </span>
                      <span className={cx('middle__box-text')}>
                        {item.display}
                      </span>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cx('newsletter')}>
        <div className="container">
          <div className={cx('newsletter__content')}>
            <div className={cx('newsletter__block-title')}>
              <span className={cx('newsletter__icon')}>
                <i className='bx bxl-telegram'></i>
              </span>
              <div className={cx('newsletter__text')}>
                <h3 className={cx('newsletter__title')}>Signup For Newsletter</h3>
                <p className={cx('newsletter__desc')}>We’ll never share your email address with a third-party.</p>
              </div>
            </div>
            <div className={cx('newsletter__form')}>
              <div className={cx('newsletter__input')}>
                <input type="text" placeholder="Enter your email" />
              </div>
              <button className={cx('newsletter__button')}>Subcribe</button>
            </div>
          </div>
        </div>
      </section>
      <section className={cx('bottom')}>
        <div className='container'>
          <div className={cx('bottom__content')}>
            <div className={cx('bottom__copyright')}>
              eMarket © 2022 Demo Store. All Rights Reserved.
            </div>
            <div className={cx('bottom__payment')}>
              <img src={payment} alt="" />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
