import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './CardProduct.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const CardProduct = (props) => {
  const product = props.item;

  const percentRating = useMemo(() => {
    const percent = (product.rating * 100) / 5;
    return percent;
  }, []);

  return (
    <div className={cx('card-product')}>
      {product.price_old && <span className={cx('card-product__label-sale')}>
        {Math.round(
          ((product.price_new - product.price_old) / product.price_old) *
            100
        )}
        %
      </span>}
      <Link to={`/product/${product.slug}`} className={cx('card-product__img')}>
        <img src={product.image_thumb} alt={product.name} />
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
          <span className={cx('card-product__price-new')}>${product.price_new}</span>
          {product.price_old && <span className={cx('card-product__price-old')}>${product.price_old}</span>}
        </div>
      </div>
      <div className={cx('card-product__action')}>
        <button className={cx('card-product__action-btn')}>
          <i className="bx bxs-cart-add bx-tada"></i>
          <span>Add to cart</span>
        </button>
        <button className={cx('card-product__action-btn')}>
          <i className="bx bxs-heart"></i>
          <span>Add to wishlist</span>
        </button>
        <button className={cx('card-product__action-btn')}>
          <i className="bx bxs-show"></i>
          <span>Quick view</span>
        </button>
      </div>
    </div>
  );
};

CardProduct.propTypes = {};

export default CardProduct;
