import React from 'react'
import purify from "dompurify";
import HeroSlider from '~/components/HeroSlider'
import { ListCardGrid, ListCardSlider } from '~/components/ListCard';
import ModTitle from '~/components/ModTitle'
import Banner from '~/components/Banner'
import classNames from 'classnames/bind';
import styles from './Home.module.scss'
import { policy } from './const';
import categories from '~/assets/data/categories';
import products from '~/assets/data/products';
import banner1 from '~/assets/images/banner1.jpg'
import banner2 from '~/assets/images/banner2.jpg'

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
      <section className={cx('categories')}>
        <div className='container'>
          <ModTitle title='shop by categories' />
          <ListCardSlider type='category' lists={categories} slidesPerView={6} />
        </div>
      </section>

      <section className={cx('banner')}>
        <div className='container'>
          <Banner image={banner1} />
        </div>
      </section>
      
      <section className={cx('best-seller')}>
        <div className='container'>
          <ModTitle title='best seller' />
          <ListCardGrid type='product' lists={products} />
        </div>
      </section>

      <section className={cx('banner')}>
        <div className='container'>
          <Banner image={banner2} link={'/abc'}/>
        </div>
      </section>

      <section className={cx('trending')}>
        <div className='container'>
          <ModTitle title='trending items' />
          <ListCardSlider type='product' lists={products} slidesPerView={6} />
        </div>
      </section>
      
    </div>
  )
}

export default index