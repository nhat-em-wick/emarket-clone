import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logo from '~/assets/images/logo.png';
import { pages, categories } from './const';
const cx = classNames.bind(styles);

const Header = (props) => {
  return (
    <header>
      <div className={cx('header-mobile')}>
        <div className="container">
          <div className={cx('header-mobile__content')}>
            <span className={cx('header-mobile__icon')}>
              <i className="bx bx-menu-alt-left"></i>
            </span>
            <Link to="/" className={cx('header-mobile__logo')}>
              <img src={logo} alt="" />
            </Link>
            <span className={cx('header-mobile__icon')}>
              <i className="bx bxs-cart"></i>
            </span>
            <div className={cx('header-mobile__search')}>
              <input type="text" placeholder="Search" />
              <button className={cx('header-mobile__search-button')}>
                <i className="bx bx-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('header-desktop')}>
        <div className="container">
          <div className={cx('header-desktop__top')}>
            <Link to="/" className={cx('header-desktop__logo')}>
              <img src={logo} alt="" />
            </Link>
            <div className={cx('header-desktop__search')}>
              <input type="text" placeholder="Search" />
              <button className={cx('header-desktop__search-button')}>
                <i className="bx bx-search"></i>
              </button>
            </div>
            <div className={cx('header-desktop__cart')}>
              <span className={cx('header-desktop__cart-icon')}>
                <i className="bx bxs-shopping-bag"></i>
                <span className={cx('header-desktop__cart-badge')}>0</span>
              </span>
              <span className={cx('header-desktop__cart-text')}>my cart</span>
              <span className={cx('header-desktop__cart-price')}>- $0.00</span>
            </div>
          </div>
          <div className={cx('header-desktop__bottom')}>
            <div className={cx('header-desktop__categories')}>
              <span className={cx('header-desktop__categories-icon')}>
                <i className="bx bx-menu"></i>
              </span>
              <h3 className={cx('header-desktop__categories-title')}>All Categories</h3>
              <span className={cx('header-desktop__categories-icon')}>
                <i class="bx bx-chevron-down"></i>
              </span>
              <MegaMenu categories={categories} />
            </div>
            <div className={cx('header-desktop__pages')}>
              {pages.map((item, index) => (
                <Link to={item.path} className={cx('header-desktop__page')} key={index}>
                  {item.name}
                </Link>
              ))}
            </div>
            <div className={cx('header-desktop__auth')}>
              <i className="bx bxs-lock-alt"></i>
              <Link to="/login" className={cx('header-desktop__auth-link')}>
                Login
              </Link>
              <span> or </span>
              <Link to="/register" className={cx('header-desktop__auth-link')}>
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const MegaMenu = (props) => {
  const categories = props.categories
  return (
    <>
      <ul className={cx('mega-menu')}>
        {categories.map((category, index) => (
          <li className={cx('mega-menu__item')} key={index}>
            <span className={cx('mega-menu__icon')}>
              <i className={category.icon}></i>
            </span>
            <Link to={category.path} className={cx('mega-menu__link')}>
              {category.name}
            </Link>
            {category?.subCategories?.length > 0 && (
              <>
                <span className={`${cx('mega-menu__icon')} ${cx('icon--sub')}`}>
                  <i className="bx bx-chevron-right"></i>
                </span>
                <SubCategory categories={category?.subCategories} />
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

const SubCategory = (props) => {
  const categories = props.categories
  return (
    <ul className={cx('mega-menu__sub')}>
      {categories?.map((category, index) => (
        <li className={cx('mega-menu__sub-item')} key={index}>
          <Link to={category.path} className={cx('mega-menu__sub-link')}>
            {category.name}
          </Link>
         
          {category?.subCategories?.length > 0 && (
            <>
              <span className={cx('mega-menu__sub-icon--sub')}>
                <i className="bx bx-chevron-right"></i>
              </span>
              <SubCategory categories={category.subCategories} />
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Header;
