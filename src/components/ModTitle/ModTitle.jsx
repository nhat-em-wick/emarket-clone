import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind';
import styles from './ModTitle.module.scss'

const cx = classNames.bind(styles)

const index = props => {
  return (
    <>
      <h3 className={cx('mod-title')}>
        <span>
          {props.title}
        </span>
      </h3>
    </>
  )
}

index.propTypes = {}

export default index