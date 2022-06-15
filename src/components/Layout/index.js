import React from 'react'
import PropTypes from 'prop-types'
import Header from './components/Header';
import Footer from './components/Footer';
import classNames from 'classnames/bind';
import styles from './Layout.module.scss';
import 'boxicons';

const cx = classNames.bind(styles);
const Layout = ({children}) => {
  return (
    <div className={cx('wrapper')}>
      <Header/>
      <div className={cx('content')}>
        {children}
      </div>
      <Footer/>
    </div>
  )
}

Layout.propTypes = {}

export default Layout
