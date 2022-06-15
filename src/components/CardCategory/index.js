import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './CardCategory.module.scss'

const cx = classNames.bind(styles)

const index = props => {
  const category = props.item
  return (
    <Link to='/' className={cx('card-category')}>
        <div className={cx('card-category__img')}>
          <img src={category.image} alt={category.name} />
        </div>
      <div className={cx('card-category__content')}>
        <h3 className={cx('card-category__name')}>
          {category.name}
        </h3>
      </div>
    </Link>
  )
}

index.propTypes = {}

export default index