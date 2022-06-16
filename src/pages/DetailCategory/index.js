import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DetailCategory.module.scss';
import ModTitle from '~/components/ModTitle'
import { ListCardGrid } from '~/components/ListCard';

import products from '~/assets/data/products';
const cx = classNames.bind(styles);
const index = (props) => {
  return (
    <div className={cx('category')}>
      <div className="container">
        <div className="row">
          <div className="col lg-2 md-0 sm-0 xs-0">
            <div className={cx('category__sidebar')}>

            </div>
          </div>
          <div className="col lg-10 md-12 sm-12 xs-12">
            <div className={cx('category__content')}>
              <section>
                <ModTitle title='ACCESSORIES'/>
                <ListCardGrid type='product' lists={products} slidesPerView={4}/>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

index.propTypes = {};

export default index;
