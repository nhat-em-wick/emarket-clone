import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { Link } from 'react-router-dom';
import cartEmpty from '~/assets/images/cart-empty.png';
import Loading from '~/components/Loading';
import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useDebounce } from '~/custom-hook';
import Dialog from '~/components/Dialog';
import { updateItem, updateCart, removeItem } from '~/redux/CartSlice';
import { setDialog } from '~/redux/DialogSlice';
import productsApi from '~/fake-api/products-api';

const cx = classNames.bind(styles);

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cartStore.cart);
  const [loadingPage, setLoadingPage] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch()
  const loadingPageTimer = useRef(null);

  useEffect(() => {
    setLoadingPage(true);
    const slugItems = cartItems.map(item => item.slug)
    const fetchCartItems = async () => {
      const res = await productsApi.findItemsCart(slugItems);
      const results = cartItems.filter(item => {
        return res.products.find(product => product.slug === item.slug)
      })
      
      dispatch(updateCart(results));
      loadingPageTimer.current = setTimeout(() => {
        setLoadingPage(false);
      }, 1000);
    };
    fetchCartItems();
    return () => clearTimeout(loadingPageTimer.current);
  }, []);

  useEffect(() => {
    setTotalPrice(cartItems.reduce((total, item) => total + Number(item.quantity) * Number(item.price), 0));
  }, [cartItems]);

  return (
    <div className={cx('wrapper')}>
      {loadingPage ? (
        <Loading loading={loadingPage} />
      ) : (
        <>
        <div className="container">
          <h1 className={cx('heading')}>Shopping Cart</h1>
          {cartItems.length <= 0 ? (
            <div className={cx('empty')}>
              <div className={cx('empty__img')}>
                <img src={cartEmpty} alt="cart empty" />
              </div>
              <div className={cx('empty__text')}>
                <p>Your cart is empty</p>
              </div>
              <Link to="/" className={cx('empty__link')}>
                Continue Shopping
              </Link>
            </div>
          ) : (
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
                      {cartItems.map((item, index) => (
                        <CartItem key={index} product={item} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col lg-3 sm-o-6 md-o-8 md-4 sm-6 xs-12">
                <div className={cx('summary')}>
                  <h2 className={cx('summary__heading')}>Summary</h2>
                  <div className={cx('summary__item')}>
                    <div className={cx('summary__item-title')}>Sub-total</div>
                    <div className={cx('summary__item-value')}>${totalPrice}</div>
                  </div>
                  <div className={cx('summary__item')}>
                    <div className={cx('summary__item-title')}>Total</div>
                    <div className={`${cx('summary__item-value')} ${cx('value-total')}`}>${totalPrice}</div>
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
          )}
        </div>
        </>
      )}
    </div>
  );
};

Cart.propTypes = {};

const CartItem = ({ product }) => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    setQuantity(product.quantity)
  }, [product])

  const handleQuantity = (opt) => {
    if(opt === '+') {
      dispatch(updateItem({...product, quantity: quantity + 1}))
    }
    if(opt === '-') {
      dispatch(updateItem({...product, quantity: quantity - 1 <= 1 ? 1 : quantity - 1}))
    }
  }

  const handleRemove = () => {
    // dispatch(removeItem(product))
    dispatch(setDialog({
      title: 'delete product',
      content: 'confirm',
      textConfirm: 'confirm',
      textCancel: 'cancel'
    }))
  }

  return (
    <tr>
      <td>
        <div className={cx('product__images')}>
          <div className={cx('product__image')}>
            <img src={product.thumbnail} alt="product" />
          </div>
          <div className={cx('product__content')}>
            <Link to={`/product/${product.slug}`} className={cx('product__name')}>
              {product.name}
            </Link>
            <div className={cx('product__opts')}>
              <div className={cx('product__opt')}>
                <span className={cx('product__opt-name')}>Color: </span>
                <span className={cx('product__opt-value')}>{product.color}</span>
              </div>
              <div className={cx('product__opt')}>
                <span className={cx('product__opt-name')}>Size: </span>
                <span className={cx('product__opt-value')}>{product.size}</span>
              </div>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className={cx('product__price')}>
          <span className={cx('product__price-new')}>${product.price}</span>
        </div>
      </td>
      <td>
        <div className={cx('product__quantity')}>
          <button onClick={() => handleQuantity('-')} className={`${cx('product__quantity-button')} ${cx('button--decrease')}`}>
            <i className="bx bx-minus"></i>
          </button>
          <input value={quantity} type="number" className={cx('product__quantity-input')} />
          <button onClick={() => handleQuantity('+')} className={`${cx('product__quantity-button')} ${cx('button--increase')}`}>
            <i className="bx bx-plus"></i>
          </button>
        </div>
      </td>
      <td>
        <span className={cx('product__total')}>${product.quantity * product.price}</span>
      </td>
      <td>
        <span onClick={handleRemove} className={cx('product__remove')}>
          <i className="bx bx-trash"></i>
        </span>
      </td>
    </tr>
  );
};

export default Cart;
