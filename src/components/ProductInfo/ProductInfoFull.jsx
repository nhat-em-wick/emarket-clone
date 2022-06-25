import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ProductInfo.module.scss';
import SelectDropdown from '../SelectDropdown';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '~/redux/CartSlice';

const cx = classNames.bind(styles);

const ProductInfoFull = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(undefined);
  const [size, setSize] = useState(undefined);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleQuantityChange = (type) => {
    if (type === 'plus') {
      setQuantity(+quantity + 1);
    } else {
      setQuantity(+quantity - 1 === 0 ? 1 : +quantity - 1);
    }
  };
  const checkOptions = () => {
    if (color === undefined) {
      alert('Please select color');
      return false;
    }
    if (size === undefined) {
      alert('Please select size');
      return false;
    }
    return true;
  };
  const handleSelected = (type, value) => {
    if (type === 'color') {
      setColor(value);
    }
    if (type === 'size') {
      setSize(value);
    }
  };

  const handleAddToCart = () => {
    if (checkOptions()) {
      dispatch(
        addItem({
          slug: product.slug,
          color: color,
          size: size,
          quantity: quantity,
          price: product.price_new,
          thumbnail: product.image_thumb,
          name: product.name
        }),
      );
    }
  };

  const handleByNow = () => {
    navigate('/cart');
  };

  return (
    <div className={cx('product-info')}>
      <h1 className={cx('product-name')}>{product?.name}</h1>
      <span className={cx('product-stars')}>
        <span className={cx('product-stars__inner')} style={{ width: `${(product?.rating * 100) / 5}%` }}></span>
      </span>
      <div className={cx('product-price')}>
        <span className={cx('price--new')}>${product?.price_new}</span>
        {product?.price_old && <span className={cx('price--old')}>${product?.price_old}</span>}
      </div>
      <div className={cx('product-box-desc')}>
        <div className={cx('code')}>Product code: {product?.product_code}</div>
        <div className={cx('availability')}>
          Availability:
          {product?.availability ? (
            <span className={cx('availability--available')}>
              {' '}
              <i className="bx bx-check-circle"></i>In stock
            </span>
          ) : (
            <span className={cx('availability--not-available')}>Not available</span>
          )}
        </div>
      </div>

      <h3 className={cx('product-desc-label')}>AVAILABLE OPTIONS</h3>

      <div className={cx('product-box-select')}>
        <span className={cx('product-box-select__text')}>color:</span>
        <div className={cx('product-box-select__dropdown')}>
          <SelectDropdown
            defaultValue="- Please Select -"
            options={product?.colors}
            onChange={(type, value) => handleSelected(type, value)}
            type={'color'}
          />
        </div>
      </div>
      <div className={cx('product-box-select')}>
        <span className={cx('product-box-select__text')}>size:</span>
        <div className={cx('product-box-select__dropdown')}>
          <SelectDropdown
            defaultValue="- Please Select -"
            options={product?.sizes}
            onChange={(type, value) => handleSelected(type, value)}
            type={'size'}
          />
        </div>
      </div>

      <div className={cx('product-box-qty')}>
        <span className={cx('product-box-qty__text')}>Quantity:</span>
        <div className={cx('product-box-qty__input-group')}>
          <span onClick={() => handleQuantityChange('minus')} className={cx('decrease')}>
            <i className="bx bx-minus"></i>
          </span>
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value.trim())} />
          <span onClick={() => handleQuantityChange('plus')} className={cx('increase')}>
            <i className="bx bx-plus"></i>
          </span>
        </div>
      </div>
      <div className={cx('product-box-action')}>
        <div className={cx('product-box-action__top')}>
          <div onClick={handleAddToCart} className={`${cx('product-box-action__btn')} ${cx('btn-add-cart')}`}>
            Add to Cart
          </div>
          <div onClick={handleByNow} className={`${cx('product-box-action__btn')} ${cx('btn-buy-now')}`}>
            By Now
          </div>
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
      <div className={cx('product-box-share')}>
        <div className={`${cx('product-box-share__item')} ${cx('facebook')}`}>
          <span className={cx('product-box-share__icon')}>
            <i className="bx bxl-facebook"></i>
          </span>
        </div>
        <div className={`${cx('product-box-share__item')} ${cx('instagram')}`}>
          <span className={cx('product-box-share__icon')}>
            <i className="bx bxl-instagram"></i>
          </span>
        </div>
        <div className={`${cx('product-box-share__item')} ${cx('twitter')}`}>
          <span className={cx('product-box-share__icon')}>
            <i className="bx bxl-twitter"></i>
          </span>
        </div>
      </div>
      <div className={cx('product-categories')}>
        <div className={cx('product-categories__text')}>Categories: </div>
        <div className={cx('product-categories__list')}>
          {product?.categories?.map((item, index) => (
            <React.Fragment key={index}>
              <Link to={`/category/${item.slug}`} className={cx('product-categories__link')}>
                {item.name}
              </Link>
              {index >= 0 && index !== product?.categories?.length - 1 && ', '}

              {console.log(product?.categories?.length)}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

ProductInfoFull.propTypes = {};

export default ProductInfoFull;
