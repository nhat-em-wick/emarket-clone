import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ProductImages.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/thumbs';
import { Navigation, Thumbs } from 'swiper';

import './custom-swiper.scss';

const cx = classNames.bind(styles);

const ProductImages = ({ images }) => {
  const [activeThumb, setActiveThumb] = useState(0);
  const prevSlideRef = useRef(null);
  const nextSlideRef = useRef(null);

  return (
    <>
      <div className={cx('image-large')}>
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          modules={[Thumbs]}
          grabCursor={true}
          thumbs={{ swiper: activeThumb }}
          className="product-images-slider"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={cx('images-slider')}>
        <button ref={prevSlideRef} className={`${cx('slider__control')} ${cx('slider__control--prev')}`}>
          <i className="bx bx-chevron-left"></i>
        </button>
        <button ref={nextSlideRef} className={`${cx('slider__control')} ${cx('slider__control--next')}`}>
          <i className="bx bx-chevron-right"></i>
        </button>

        <Swiper
          onSwiper={setActiveThumb}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          navigation={{
            prevEl: prevSlideRef.current,
            nextEl: nextSlideRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevSlideRef.current;
            swiper.params.navigation.nextEl = nextSlideRef.current;
          }}
          modules={[Navigation]}
          className="product-images-slider-thumbs"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='product-images-slider-thumbs-wrapper'>
                <img src={image} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

ProductImages.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ProductImages;
