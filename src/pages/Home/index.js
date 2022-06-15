import React from 'react'
import purify from "dompurify";
import HeroSlider from '~/components/HeroSlider'
import { ListCardGrid, ListCardSlider } from '~/components/ListCard';
import ModTitle from '~/components/ModTitle'
import classNames from 'classnames/bind';
import styles from './Home.module.scss'
import { policy } from './const';
import categories from '~/assets/data/categories';
import products from '~/assets/data/products';

const cx = classNames.bind(styles)

const index = () => {
  return (
    <div>
      <HeroSlider />
      <section className={cx('policy')}>
        <div className='container'>
          <div className={cx('policy__content')}>
            {
              policy.map((item, index) => (
                <div className={cx('policy__item')} key={index}>
                  <div className={cx('policy__item-icon')} dangerouslySetInnerHTML={{__html: purify.sanitize(item.icon)}}>
                  </div>
                  <div className={cx('policy__item-text')}>
                    <h3 className={cx('policy__item-title')}>{item.title}</h3>
                    <span className={cx('policy__item-desc')}>{item.desc}</span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <section className={cx('best-seller')}>
        <div className='container'>
          <ModTitle title='categories' />
          <ListCardGrid type='category' lists={categories} />
        </div>
      </section>
      <section className={cx('new')}>
        <div className='container'>
          <ModTitle title='new' />
          <ListCardSlider type='category' lists={categories} />
        </div>
      </section>
      <section className={cx('product')}>
        <div className='container'>
          <ModTitle title='product' />
          <ListCardGrid type='product' lists={products} />
        </div>
      </section>
    </div>
  )
}

export default index