import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import Header from './components/Header';
import Footer from './components/Footer';
import classNames from 'classnames/bind';
import styles from './Layout.module.scss';
import 'boxicons/css/boxicons.min.css';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);
const Layout = ({children}) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])

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
