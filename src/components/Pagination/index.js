import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Pagination.module.scss'

const cx = classNames.bind(styles)
const Pagination = props => {
  return (
    <div className={cx('pagination')}>
      <span className={cx('pagination__item')}>
        <i className='bx bx-chevron-left' ></i>
      </span>
      <span className={`${cx('pagination__item')} ${cx('active')}`}>
        1
      </span>
      <span className={cx('pagination__item')}>
        <i className='bx bx-chevron-right' ></i>
      </span>
    </div>
  )
}

Pagination.propTypes = {}

export default Pagination