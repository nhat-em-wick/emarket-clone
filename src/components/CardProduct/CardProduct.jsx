import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './CardProduct.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { set, remove } from '~/redux/ModalProductSlice';
import { useDispatch } from 'react-redux';
import Skeleton from '../Skeleton';

const cx = classNames.bind(styles);
const CardProduct = (props) => {
  const product = props.item;
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const percentRating = (product.rating * 100) / 5;

  return (
    <div className={cx('card-product')}>
      {product.price > product.discountedPrice && (
        <span className={cx('card-product__label-sale')}>
          {Math.round(((product.discountedPrice - product.price) / product.price) * 100)}%
        </span>
      )}
      <Link to={`/product/${product.slug}`} className={cx('card-product__img')}>
        <img src={product.thumbnail} alt={product.name} />
      </Link>
      <div className={cx('card-product__content')}>
        <h3 className={cx('card-product__name')}>
          <Link to={`/product/${product.slug}`} className={cx('card-product__name-link')}>
            {product.name}
          </Link>
        </h3>
        <span className={cx('card-product__stars')}>
          <span className={cx('card-product__stars-inner')} style={{ width: `${percentRating}%` }}></span>
        </span>
        <div className={cx('card-product__price')}>
          <span className={cx('card-product__price-new')}>${product.discountedPrice}</span>
          {product.price > product.discountedPrice && <span className={cx('card-product__price-old')}>${product.price}</span>}
        </div>
      </div>
      <div className={cx('card-product__action')}>
        <button onClick={() => navigate(`/product/${product.slug}`) } className={cx('card-product__action-btn')}>
          <i className="bx bxs-cart-add bx-tada"></i>
          <span>Add to cart</span>
        </button>
        <button className={cx('card-product__action-btn')}>
          <i className="bx bxs-heart"></i>
          <span>Add to wishlist</span>
        </button>
        <button onClick={() => dispatch(set(product.slug))} className={cx('card-product__action-btn')}>
          <i className="bx bxs-show"></i>
          <span>Quick view</span>
        </button>
      </div>
    </div>
  );
};

CardProduct.propTypes = {
  item: PropTypes.object,
};

const Loading = () => (
  <div className={cx('card-product')}>
    <div className={cx('card-product__img')}>
      <Skeleton style={{'position': 'relative', 'top': '0', 'left': '0', 'paddingTop': '100%'}} />
    </div>
    <div className={cx('card-product__content')}>
      <h3 className={cx('card-product__name')}>
        <Skeleton style={{'height': '2rem'}} />
      </h3>
      <span className={cx('card-product__stars')}>
        <Skeleton />
      </span>
      <div className={cx('card-product__price')}>
        <span className={cx('card-product__price-new')}><Skeleton /></span>
        <span className={cx('card-product__price-old')}> <Skeleton /></span>
      </div>
    </div>
  </div>
);

CardProduct.Loading = Loading

export default CardProduct;
