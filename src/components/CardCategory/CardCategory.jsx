import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './CardCategory.module.scss';
import Skeleton from '../Skeleton';

const cx = classNames.bind(styles);

const CardCategory = (props) => {
  const category = props.item;
  return (
    <Link to={`/category/${category?.slug}`} className={cx('card-category')}>
      <div className={cx('card-category__img')}>
        <img src={category?.thumbnail} alt={category?.name} />
      </div>
      <div className={cx('card-category__content')}>
        <h3 className={cx('card-category__name')}>{category?.name}</h3>
      </div>
    </Link>
  );
};

const Loading = () => (
  <div className={cx('card-category')}>
    <Skeleton style={{'position': 'relative', 'top': '0', 'left': '0', 'paddingTop': '100%'}} />
    <div className={cx('card-category__content')}>
      <h3 className={cx('card-category__name')}>
        <Skeleton style={{'height': '2rem'}} />
      </h3>
    </div>
  </div>
);

CardCategory.Loading = Loading

CardCategory.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CardCategory;
