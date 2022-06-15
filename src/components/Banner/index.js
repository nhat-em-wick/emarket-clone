import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Banner.module.scss'

const cx = classNames.bind(styles)

const Banner = props => {
  return (
    <div className={cx('banner')}>
      <Link to={props.link} className={cx('banner__link')}>
          <img src={props.image} alt='' />
      </Link>
    </div>
  )
}

Banner.defaultProps = {
  link: '/'
}

Banner.propTypes = {
  link: PropTypes.string,
  image: PropTypes.string
}

export default Banner