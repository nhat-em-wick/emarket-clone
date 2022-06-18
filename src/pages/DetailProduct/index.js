import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './DetailProduct.module.scss'
import ProductImages from '~/components/ProductImages'
import { ProductInfoFull } from '~/components/ProductInfo'
import { images } from './const'

const cx = classNames.bind(styles)
const DetailProduct = props => {

  const product = {
    name : 'Ullamco Occaeca',
    new_price: '$99.00',
    product_code: 'P-01',
    availability: true,
    rating: 4.5,
    colors: ["white", "red", "blue"],
  }
  

  return (
    <div className={cx('wrapper')}>
      <div className='container'>
        <div className='row'>
          <div className='col col lg-3 md-0 sm-0 xs-0'>
            <div className={cx('sidebar')}>
        sidebar
      </div>
          </div>
          <div className='col lg-9 md-12 sm-12 xs-12'>
            <div className={cx('content')}>
              <div className={cx('content__header')}>
                <div className='row'>
                  <div className='col lg-6 md-12 sm-12 xs-12'>
                    <ProductImages images={images} />
                  </div>
                  <div className='col lg-6 md-12 sm-12 xs-12'>
                    <ProductInfoFull product={product} />
                  </div>
                </div>
              </div>
              <div className={cx('content__body')}>

              </div>

            </div>
          </div>
        </div>
      </div>
      

    </div>
  )
}

DetailProduct.propTypes = {}

export default DetailProduct