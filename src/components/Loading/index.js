import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Loading.module.scss'

const cx = classNames.bind(styles)

const Loading = ({loading}) => {
  return (
    <div className={`${cx('wrapper')} ${ loading ? cx('active') : ''}`}>
      <div className={cx('loading')}>
        <div style={{"--value": "1"}} className={cx('loading__item')}></div>
        <div style={{"--value": "2"}} className={cx('loading__item')}></div>
        <div style={{"--value": "3"}} className={cx('loading__item')}></div>
        <div style={{"--value": "4"}} className={cx('loading__item')}></div>
        <div style={{"--value": "5"}} className={cx('loading__item')}></div>
        <div style={{"--value": "6"}} className={cx('loading__item')}></div>
        <div style={{"--value": "7"}} className={cx('loading__item')}></div>
        <div style={{"--value": "8"}} className={cx('loading__item')}></div>
        <div style={{"--value": "9"}} className={cx('loading__item')}></div>
        <div style={{"--value": "10"}} className={cx('loading__item')}></div>
        <div style={{"--value": "11"}} className={cx('loading__item')}></div>
        <div style={{"--value": "12"}} className={cx('loading__item')}></div>
      </div>
    </div>
  )
}

Loading.propTypes = {}

export default Loading