import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';
import Footer from './components/Footer';
import classNames from 'classnames/bind';
import styles from './Layout.module.scss';
import 'boxicons/css/boxicons.min.css';
import { useLocation, Link, Outlet } from 'react-router-dom';
import ModalProduct from '../ModalProduct';
import Overlay from '../Overlay';
import logo from '~/assets/images/logo.png';
import categoriesApi from '~/fake-api/categories-api';
import { useCallback, useRef } from 'react';
import { useClickOutside } from '~/custom-hook';
const cx = classNames.bind(styles);
const pages = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/contact', name: 'Contact' },
  { path: '/blog', name: 'Blog' },
];

const Layout = ({ children }) => {
  const location = useLocation();
  const [activeSidebar, setActiveSidebar] = useState(false);
  const sidebarRef = useRef();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleActiveSidebar = useCallback(() => {
    setActiveSidebar((prev) => !prev);
  }, []);

  useClickOutside(sidebarRef, () => setActiveSidebar(false));

  return (
    <>
      <div className={`${cx('wrapper')} ${activeSidebar ? cx('shrink') : ''}`}>
        <Header onSideBar={handleActiveSidebar} />
        <div className={cx('content')}>
          <Outlet />
        </div>
        <Footer />
        <ModalProduct />
      </div>
      <Overlay active={activeSidebar} />
      <div ref={sidebarRef} className={`${cx('sidebar')} ${activeSidebar ? cx('active') : ''}`}>
        <Sidebar />
      </div>
    </>
  );
};

const Sidebar = () => {
  return (
    <div className={cx('sidebar__content')}>
      <div className={cx('sidebar__logo')}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className={cx('sidebar__search')}>
        <input type="text" placeholder="Search" />
        <button className={cx('sidebar__search-btn')}>
          <i className="bx bx-search"></i>
        </button>
      </div>
      <ul className="sidebar__list">
        {pages.map((item, index) => (
          <li key={index} className={cx('sidebar__item')}>
            <Link to={item.path} className={cx('sidebar__link')}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Layout.propTypes = {};

export default Layout;
