import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade } from 'swiper';
import banner from '../../assets/images/tienlen.jpg'
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";
import styles from './HeroSlider.module.scss';
import './customSwiper.scss'
const cx = classNames.bind(styles);

const index = () => {
  const pagination = {
    clickable: true,
  };
  return (
    <div className={cx('hero-slider')}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        effect={"fade"}
        pagination={pagination}
        modules={[Pagination, EffectFade]}
        className='swiper-container'
      >
        <SwiperSlide>
          <div
            className={cx('hero-slider__item')}
            style={{
              background:
                `url(${banner}) top center / cover no-repeat`,
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={cx('hero-slider__item')}
            style={{
              background:
                'url(https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/slideshow/home2/slide-2-1920x620.webp) top center / cover no-repeat',
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={cx('hero-slider__item')}
            style={{
              background:
                'url(https://opencart.opencartworks.com/themes/so_emarket/layout4/image/cache/catalog/slideshow/home4/slide3-1680x500.webp) top center / cover no-repeat',
            }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default index;
