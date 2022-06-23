import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Skeleton.module.scss'

const cx = classNames.bind(styles)

const Skeleton = ({style}) => {
  return (
    <div className={cx('skeleton')} style={style}></div>
  )
}

Skeleton.propTypes = {}

export default Skeleton