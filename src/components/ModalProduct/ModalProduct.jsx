import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalProduct.module.scss';
import classNames from 'classnames/bind';
import Overlay from '../Overlay/Overlay';
import { useDispatch, useSelector } from 'react-redux';
import { useLayoutEffect, useState, useRef } from 'react';
import ProductImages from '../ProductImages/ProductImages';
import { ProductInfoFull } from '../ProductInfo';
import Loading from '../Loading/Loading';
import productsApi from '~/fake-api/products-api';
import {set, remove} from '~/redux/ModalProductSlice'

import { useClickOutside } from '~/custom-hook';

const cx = classNames.bind(styles);

const ModalProduct = () => {
  const productSlug = useSelector((state) => state.modalProductStore.product);
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState();
  const contentModalRef = useRef(null)
  const loadingTimer = useRef(null);

  useLayoutEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const resProduct = await productsApi.getProductBySlug(productSlug);
      setProduct(resProduct);
      loadingTimer.current = setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    if(productSlug) {
      fetchProduct();
    }
    return () => clearTimeout(loadingTimer.current);
  }, [productSlug]);

  useClickOutside(contentModalRef, () => dispatch(remove()))

  return (
    <div className={`${cx('wrapper')} ${productSlug !== null ? cx('active') : ''}`}>
      <div className="container">
        <div ref={contentModalRef} className={cx('content')}>
          <div className={cx("content__inner")}>
            {loading ? (
              <Loading loading={loading} />
            ) : (
              <>
              <span onClick={() => dispatch(remove())} className={cx('close')}>
                <i className="bx bx-x"></i>
              </span>
              <div className="row">
                <div className="col lg-6">
                  <ProductImages images={product?.gallery} />
                </div>
                <div className="col lg-6">
                  <ProductInfoFull product={product} />
                </div>
              </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ModalProduct.propTypes = {};

export default ModalProduct;
