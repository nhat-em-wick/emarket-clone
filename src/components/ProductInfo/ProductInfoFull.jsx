import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ProductInfo.module.scss';
import SelectDropdown from '../SelectDropdown';

const cx = classNames.bind(styles);

const ProductInfoFull = ({ product }) => {

  const percentRating = useMemo(() => {
    const percent = (product.rating * 100) / 5;
    return percent;
  }, []);

  return (
    <div className={cx('product-info')}>
      <h1 className={cx('product-name')}>{product.name}</h1>
      <span className={cx('product-stars')} >
        <span className={cx('product-stars__inner')} style={{ width: `${percentRating}%` }}></span>
      </span>
      <div className={cx("product-price")}>
        <span className={cx('price--new')}>{product.new_price}</span>
        {
          product?.old_price && <span className={cx('price--old')}>{product.old_price}</span>
        }
      </div>
      <div className={cx('product-box-desc')}>
        <div className={cx("code")}>Product code: {product.product_code}</div>
        <div className={cx("availability")}>
          Availability:
          {
            product.availability ? <span className={cx('availability--available')}> <i className='bx bx-check-circle'></i>In stock</span> : <span className={cx('availability--not-available')}>Not available</span>
          }
        </div>
      </div>  
      <h3 className={cx('product-desc-label')}>AVAILABLE OPTIONS</h3>
      <div className={cx('product-box-select')}>
        <span className={cx('product-box-select__text')}>Select:</span>
        <div className={cx('product-box-select__dropdown')}>
          <SelectDropdown defaultValue='- Please Select -' options={[1,2,3]} />
        </div>
      </div>
      <div className={cx('product-box-qty')}>
        <span className={cx('product-box-qty__text')}>Quantity:</span>
        <div className={cx('product-box-qty__input-group')}>
          <span className={cx('decrease')}><i className='bx bx-minus'></i></span>
          <input type="number"  />
          <span className={cx('increase')}><i className='bx bx-plus' ></i></span>
        </div>
      </div>
      <div className={cx('product-box-action')}>
        <div className={cx('product-box-action__top')}>
          <div className={`${cx('product-box-action__btn')} ${cx('btn-add-cart')}`}>Add to Cart</div>
          <div className={`${cx('product-box-action__btn')} ${cx('btn-buy-now')}`}>By Now</div>
        </div>
        <div className={cx('product-box-action__bottom')}>
          <div className={cx('wishlist')}>
            <span className={cx('wishlist__icon')}>
              <i className="bx bxs-heart"></i>
            </span>
            <span className={cx('wishlist__text')}>Add to Wishlist</span>
          </div>
        </div>
      </div>
      <h3 className={cx('product-desc-label')}>Share This</h3>
      <div className={cx("product-box-share")}>
        <div className={`${cx('product-box-share__item')} ${cx('facebook')}`}>
          <span className={cx('product-box-share__icon')}>
            <i className='bx bxl-facebook'></i>
          </span>
        </div>
        <div className={`${cx('product-box-share__item')} ${cx('instagram')}`}>
          <span className={cx('product-box-share__icon')}>
            <i className='bx bxl-instagram' ></i>
          </span>
        </div>
        <div className={`${cx('product-box-share__item')} ${cx('twitter')}`}>
          <span className={cx('product-box-share__icon')}>
            <i className='bx bxl-twitter'></i>
          </span>
        </div>
      </div>
    </div>
  );
};

ProductInfoFull.propTypes = {};

export default ProductInfoFull;
