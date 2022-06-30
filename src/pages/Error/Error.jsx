import React from 'react'
import classNames from 'classnames/bind'
import styles from './Error.module.scss'
import { Link } from 'react-router-dom'
const cx = classNames.bind(styles)
const Error = props => {
  return (
    <div className={cx('wrapper')} >
      <div className={cx('content')} >
        <h1 className={cx('heading')}>404</h1>
        <p>The page you requested cannot be found!</p>
        <Link to='/' className={cx('btn-error')}>go to home</Link>
      </div>
    </div>
  )
}

export default Error