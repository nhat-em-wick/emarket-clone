import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DetailCategory.module.scss';
import ModTitle from '~/components/ModTitle';
import { ListCardGrid } from '~/components/ListCard';
import SelectDropdown from '~/components/SelectDropdown';
import Pagination from '~/components/Pagination';
import { optionsSidebar, optionsSort } from './const';
import products from '~/assets/data/products';
const cx = classNames.bind(styles);
const Category = (props) => {
  const [numberGrid, setNumberGrid] = useState(4);

  const handleShowGrid = (number) => {
    setNumberGrid(number);
  };

  return (
    <div className={cx('wrapper')}>
      <div className="container">
        <div className="row">
          <div className="col lg-3 md-0 sm-0 xs-0">
            <SidebarPC />
          </div>
          <div className="col lg-9 md-12 sm-12 xs-12">
            <div className={cx('content')}>
              <section>
                <ModTitle title="ACCESSORIES" />
                <div className={cx('filter-top-panel')}>
                  <div className={cx('filter-top-panel__left')}>
                    <div className={cx('filter-top-panel__btn-show-sidebar')}>
                      <i className="bx bx-menu"></i>
                      Sidebar
                    </div>
                    <div className={cx('filter-top-panel__grid')}>
                      <span className={cx('filter-top-panel__grid-text')}>Grid View:</span>
                      <div className={cx('filter-top-panel__grid-list')}>
                        {[2, 3, 4, 5].map((item, index) => (
                          <div
                            key={index}
                            onClick={() => handleShowGrid(item)}
                            className={`${cx('filter-top-panel__grid-item')} ${
                              numberGrid === item ? cx('active') : ''
                            }`}
                          >
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={cx('filter-top-panel__right')}>
                    <div className={cx('filter-top-panel__sort')}>
                      <span className={cx('filter-top-panel__sort-text')}>Sort By:</span>
                      <div className={cx('filter-top-panel__dropdown')}>
                        <SelectDropdown defaultValue="default" options={optionsSort} />
                      </div>
                    </div>
                    <div className={cx('filter-top-panel__show-item')}>
                      <span className={cx('filter-top-panel__show-item-text')}>show:</span>
                      <div className={cx('filter-top-panel__dropdown')}>
                        <SelectDropdown defaultValue="default" options={optionsSort} />
                      </div>
                    </div>
                  </div>
                </div>
                <ListCardGrid type="product" lists={products} grid={numberGrid} />
              </section>
                <div className={cx('pagination-wrapper')}>
                  <Pagination />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Category.propTypes = {};

const SidebarPC = () => {
  const [priceFilter, setPriceFilter] = useState({
    min: 1000,
    max: 7500,
  });

  const minRangeRef = useRef(null);
  const maxRangeRef = useRef(null);
  const progressRef = useRef(null);

  const handleTypingFilterPrice = (e) => {
    if (e.target.className === 'input-price-min') {
      setPriceFilter({
        ...priceFilter,
        min: e.target.value.trim(),
      });
    } else {
      setPriceFilter({
        ...priceFilter,
        max: e.target.value.trim(),
      });
    }
  };

  const handleRangeInput = (e) => {
    const priceGap = 1000;
    let minValue = +minRangeRef.current.value;
    let maxValue = +maxRangeRef.current.value;

    if (maxValue - minValue < priceGap) {
      if (e.target.className === 'range-min') {
        setPriceFilter({
          ...priceFilter,
          min: maxValue - priceGap,
        });
      } else {
        setPriceFilter({
          ...priceFilter,
          max: minValue + priceGap,
        });
      }
    } else {
      setPriceFilter({
        min: minValue,
        max: maxValue,
      });
    }
  };
  useEffect(() => {
    progressRef.current.style.left = (priceFilter.min / maxRangeRef.current.max) * 100 + '%';
    progressRef.current.style.right = 100 - (priceFilter.max / minRangeRef.current.max) * 100 + '%';
  }, [priceFilter]);

  return (
    <div className={cx('filter-wrapper')}>
      <h3 className={cx('filter__heading')}>Shop by</h3>
      <div className={cx('filter__list')}>
        <SidebarItem option={'search'}>
          <div className={cx('filter__item-opt')}>
            <div className={cx('filter__item-opt__search')}>
              <input type={'text'} placeholder="search" />
              <button className={cx('search-btn')}>
                <i className="bx bx-search"></i>
              </button>
            </div>
          </div>
        </SidebarItem>
        {optionsSidebar.map((item, index) => (
          <SidebarItem option={item.name} key={index}>
            {item.opts.map((opt, index) => (
              <div key={index} className={cx('filter__item-opt')}>
                <div className={cx('filter__item-opt__checkbox')}>
                  <input type="checkbox" />
                  <span className={cx('checkmark')}>
                    <i className="bx bx-check"></i>
                  </span>
                  <label>{opt}</label>
                </div>
              </div>
            ))}
          </SidebarItem>
        ))}
        <SidebarItem option={'price'}>
          <div className={cx('filter__item-opt')}>
            <div className={cx('filter__item-opt__price')}>
              <div className={cx('filter__item-opt__price-input')}>
                <div className={cx('filter__item-opt__price-field')}>
                  <input
                    onChange={handleTypingFilterPrice}
                    type={'number'}
                    className="input-price-min"
                    value={priceFilter.min}
                  />
                  <span>$</span>
                </div>
                <div className={cx('filter__item-opt__price-field')}>
                  <input
                    onChange={handleTypingFilterPrice}
                    type={'number'}
                    className="input-price-max"
                    value={priceFilter.max}
                  />
                  <span>$</span>
                </div>
              </div>
              <div className={cx('filter__item-opt__price-slider')}>
                <div ref={progressRef} className={cx('filter__item-opt__price-progress')}></div>
              </div>
              <div className={cx('filter__item-opt__price-range')}>
                <input
                  ref={minRangeRef}
                  onChange={handleRangeInput}
                  type={'range'}
                  className={cx('range-min')}
                  min="0"
                  max="10000"
                  value={priceFilter.min || 0}
                  step="500"
                />
                <input
                  ref={maxRangeRef}
                  onChange={handleRangeInput}
                  type={'range'}
                  className={cx('range-max')}
                  min="0"
                  max="10000"
                  value={priceFilter.max}
                  step="500"
                />
              </div>
            </div>
          </div>
        </SidebarItem>
      </div>
      <div className={cx('clear-filter')}>
        <button className={cx('clear-filter__btn')}>reset all</button>
      </div>
    </div>
  );
};

const SidebarItem = (props) => {
  const [active, setActive] = useState(true);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <div className={`${cx('filter__item')} ${active ? cx('active') : ''}`}>
      <div className={cx('filter__item-heading')} onClick={handleActive}>
        <span className={cx('filter__item-text')}>{props.option}</span>
        <span className={`${cx('filter__item-icon')} ${active ? cx('active') : ''}`}>
          <i className="bx bx-chevron-right"></i>
        </span>
      </div>
      <div className={cx('filter__item-list-opt')}>{props.children}</div>
    </div>
  );
};

export default Category;
