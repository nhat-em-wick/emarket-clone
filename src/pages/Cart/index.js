import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { Link } from 'react-router-dom';
import cartEmpty from '~/assets/images/cart-empty.png';
import Loading from '~/components/Loading';
import { useState } from 'react';

const cx = classNames.bind(styles);

const Cart = (props) => {

  const [loading, setLoading] = useState(false);
  

  return (
    <div className={cx('wrapper')}>
      <Loading loading={loading} />
      <div className="container">
        <h1 onClick={() => setLoading(true)} className={cx("heading")}>Shopping Cart</h1>
        <div className={cx('empty')}>
          <div className={cx('empty__img')}>
            <img src={cartEmpty} alt="cart empty" />
          </div>
          <div className={cx('empty__text')}>
            <p>Your cart is empty</p>
          </div>
          <Link to='/' className={cx('empty__link')}>
            Continue Shopping
          </Link>
        </div>
        <div className="row">
          <div className="col lg-9 md-12 sm-12 xs-12">
            <div className={cx('table-cart-item')}>
              <table>
                <thead>
                  <tr>
                    <th>product</th>
                    <th>unit price</th>
                    <th>
                      <div>quantity</div>
                    </th>
                    <th>
                      <div>total</div>
                    </th>
                    <th>
                      <div>remove</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <CartItem />
                  <CartItem />
                  <CartItem />
                </tbody>
              </table>
            </div>
          </div>
          <div className="col lg-3 sm-o-6 md-o-8 md-4 sm-6 xs-12">
            <div className={cx('summary')}>
              <h2 className={cx('summary__heading')}>Summary</h2>
              <div className={cx('summary__item')}>
                <div className={cx('summary__item-title')}>Sub-total</div>
                <div className={cx('summary__item-value')}>$0.00</div>
              </div>
              <div className={cx('summary__item')}>
                <div className={cx('summary__item-title')}>Total</div>
                <div className={`${cx('summary__item-value')} ${cx('value-total')}`}>$0.00</div>
              </div>
            </div>
            <Link to="#" className={cx('button-link')}>
              checkout
            </Link>
            <Link to="#" className={cx('button-link')}>
              continue shopping
            </Link>
          </div>
        </div> 
      </div>
    </div>
  );
};

Cart.propTypes = {};

const CartItem = (props) => {
  return (
    <tr>
      <td>
        <div className={cx('product__images')}>
          <div className={cx('product__image')}>
            <img
              src="https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/17-270x270.webp"
              alt="product"
            />
          </div>
          <div className={cx('product__content')}>
            <Link to="#" className={cx('product__name')}>
              ahskahs ahgisd jfsdf mhavsjd ftfasd ghfgacsd ahskahs ahgisd jfsdf mhavsjd ftfasd ghfgacsd
            </Link>
            <div className={cx('product__opts')}>
              <div className={cx('product__opt')}>
                <span className={cx('product__opt-name')}>Color:</span>
                <span className={cx('product__opt-value')}>Black</span>
              </div>
              <div className={cx('product__opt')}>
                <span className={cx('product__opt-name')}>Color:</span>
                <span className={cx('product__opt-value')}>Black</span>
              </div>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className={cx('product__price')}>
          <span className={cx('product__price-new')}>$100.00</span>
          <del className={cx('product__price-old')}>$100.00</del>
        </div>
      </td>
      <td>
        <div className={cx('product__quantity')}>
          <button className={`${cx('product__quantity-button')} ${cx('button--decrease')}`}>
            <i className="bx bx-minus"></i>
          </button>
          <input type="number" className={cx('product__quantity-input')} />
          <button className={`${cx('product__quantity-button')} ${cx('button--increase')}`}>
            <i className="bx bx-plus"></i>
          </button>
        </div>
      </td>
      <td>
        <span className={cx('product__total')}>$60</span>
      </td>
      <td>
        <span className={cx('product__remove')}>
          <i className="bx bx-trash"></i>
        </span>
      </td>
    </tr>
  );
};

export default Cart;
