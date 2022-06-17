import React, { useRef, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './ListCard.module.scss';
import classNames from 'classnames/bind';
import CardCategory from '~/components/CardCategory';
import CardProduct from '~/components/CardProduct';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';

const cx = classNames.bind(styles);

export const ListCardGrid = ({ type, lists, grid }) => {
  const classGrid = useMemo(() => {
    let className;
    if (grid === 3) {
      className = 'col lg-4 md-3 sm-4 xs-6';
    } else if (grid === 4) {
      className = 'col lg-3 md-3 sm-4 xs-6';
    } else if (grid === 5) {
      className = 'col lg-2-4 md-3 sm-4 xs-6';
    } else if(grid === 2) {
      className = 'col lg-6 md-6 sm-6 xs-12';
    }
     else {
      className = 'col lg-2 md-3 sm-4 xs-6';
    }
    return className;
  }, [grid]);

  return (
    <div className={cx('list-card-grid')}>
      <div className="row">
        {type === 'category' ? (
          <>
            {lists.map((item, index) => (
              <div key={index} className={`${cx('list-card-grid__item')} ${classGrid}`}>
                <CardCategory item={item} />
              </div>
            ))}
          </>
        ) : (
          <>
            {lists.map((item, index) => (
              <div ey={index} className={`${cx('list-card-grid__item')} ${classGrid}`}>
                <CardProduct item={item} />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

ListCardGrid.defaultProps = {
  grid: 6
}

ListCardGrid.propTypes = {
  type: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  grid: PropTypes.number
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
  slidesPerView: 6,
};

ListCardSlider.propTypes = {
  type: PropTypes.string.isRequired,
  list: PropTypes.array,
  slidesPerView: PropTypes.number,
};
