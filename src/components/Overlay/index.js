import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Overlay.module.scss'

const cx = classNames.bind(styles)
const Overlay = ({active}) => {
  return (
    <div className={`${cx("overlay")} ${active ? cx('active') : ''}`}>

    </div>
  )
}

Overlay.propTypes = {}

export default Overlay