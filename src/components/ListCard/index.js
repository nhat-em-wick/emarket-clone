import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ListCard.module.scss';
import classNames from 'classnames/bind';
import CardCategory from '~/components/CardCategory';
import CardProduct from '~/components/CardProduct';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';

const cx = classNames.bind(styles);

export const ListCardGrid = ({ type, lists }) => {
  return (
    <div className={cx('list-card-grid')}>
      <div className="row">
        {type === 'category' ? (
          <>
            {lists.map((item, index) => (
              <div key={index} className={`${cx('list-card-grid__item')} col lg-2 md-3 sm-3 xs-6`}>
                <CardCategory item={item} />
              </div>
            ))}
          </>
        ) : (
          <>
            {lists.map((item, index) => (
              <div ey={index} className={`${cx('list-card-grid__item')} col lg-2 md-3 sm-3 xs-6`}>
                <CardProduct item={item} />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

ListCardGrid.propTypes = {
  type: PropTypes.string.isRequired,
  list: PropTypes.array,
};

export const ListCardSlider = ({ type, lists, slidesPerView }) => {
  const nextSlideRef = useRef(null);
  const prevSlideRef = useRef(null);

  return (
    <div className={cx('list-card-slider')}>
      <div className={cx('list-card-slider__control')}>
        <button ref={prevSlideRef} className={cx('list-card-slider__control--prev')}>
          <i className="bx bx-chevron-left"></i>
        </button>
        <button ref={nextSlideRef} className={cx('list-card-slider__control--next')}>
          <i className="bx bx-chevron-right"></i>
        </button>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={slidesPerView}
        loop={true}
        navigation={{
          prevEl: prevSlideRef.current,
          nextEl: nextSlideRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevSlideRef.current;
          swiper.params.navigation.nextEl = nextSlideRef.current;
        }}
        className="card-slider__container"
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {type === 'category' ? (
          <>
            {lists.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={`${cx('list-card-slider__item')}`}>
                  <CardCategory item={item} />
                </div>
              </SwiperSlide>
            ))}
          </>
        ) : (
          <>
            {lists.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={`${cx('list-card-slider__item')}`}>
                  <CardProduct item={item} />
                </div>
              </SwiperSlide>
            ))}
          </>
        )}
      </Swiper>
      
    </div>
  );
};

ListCardSlider.defaultProps = {
  slidesPerView: 6
}

ListCardSlider.propTypes = {
  type: PropTypes.string.isRequired,
  list: PropTypes.array,
  slidesPerView: PropTypes.number,
}
